const express = require('express');
const Teacher = require('../models/index').Teacher;
const validate = require('../validators/teacher.validator');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const teachers = await Teacher.findAll();

    res
      .status(200)
      .json(teachers);
  } catch (err) {
    res
      .status(500)
      .json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const teacher = await Teacher.findOne({ where: { id: id } });

    if (teacher) {
      res
        .status(200)
        .json(teacher);
    } else {
      res
        .status(404)
        .json({ error: 'Teacher with that ID does not exists.' });
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
    const teacher = await Teacher.create(value);

    res
      .status(201)
      .json(teacher);
  } catch (err) {
    res
      .status(400)
      .json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const teacher = await Teacher.findOne({ where: { id: id } });

    if (teacher) {
      await teacher.destroy();

      res
        .status(200)
        .json({ message: 'Teacher successfully deleted.' })
    } else {
      res
        .status(404)
        .json({ error: 'Teacher with this ID does not exists.' });
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
    const teacher = await Teacher.findOne({ where: { id: id } });

    if (!teacher) {
      return res
        .status(404)
        .json({ error: 'Teacher with the specified ID does not exists.' });
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
