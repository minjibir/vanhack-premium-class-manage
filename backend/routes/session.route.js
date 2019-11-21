const express = require('express');
const Session = require('../models/index').Session;
const validate = require('../validators/session.validator');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const sessions = await Session.findAll();

    res
      .status(200)
      .json(sessions);
  } catch (err) {
    res
      .status(500)
      .json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const session = await Session.findOne({ where: { id: id } });

    if (session) {
      res
        .status(200)
        .json(session);
    } else {
      res
        .status(404)
        .json({ error: 'Session with that ID does not exists.' });
    }
  } catch (err) {
    res
      .status(404)
      .json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  const reqBody = req.body;
  const { error, value } = validate(reqBody);
  console.log('\n\n', reqBody, '\n\n')
  if (error) {
    return res
      .status(400)
      .json({ error: error.message });
  }

  try {
    const session = await Session.create(value);

    res
      .status(201)
      .json(session);
  } catch (err) {
    res
      .status(400)
      .json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const session = await Session.findOne({ where: { id: id } });

    if (session) {
      await session.destroy();

      res
        .status(200)
        .json({ message: 'Session successfully deleted.' })
    } else {
      res
        .status(404)
        .json({ error: 'Session with this ID does not exists.' });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: err.message });
  }
});

router.put('/', async (req, res) => {
  const body = req.body;
  const { error, value } = validate(body);

  if (error)
    return res
      .status(400)
      .json({ error: error.message });

  try {
    const session = await Session.findOne({ where: { id: id } });

    if (!session) {
      return res
        .status(404)
        .json({ error: 'Session with the specified ID does not exists.' });
    } else {
      const updated = await value.save();

      res
        .status(200)
        .json(updated);
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: err.message });
  }
});

module.exports = router;
