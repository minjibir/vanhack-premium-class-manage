const express = require('express');
const Attendance = require('../models/index').Attendance;
const validate = require('../validators/attendance.validator');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const attendances = await Attendance.findAll();

    res
      .status(200)
      .json(attendances);
  } catch (err) {
    res
      .status(500)
      .json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const attendance = await Attendance.findOne({ where: { id: id } });

    if (attendance) {
      res
        .status(200)
        .json(attendance);
    } else {
      res
        .status(404)
        .json({ error: 'Attendance with that ID does not exists.' });
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
    const attendance = await Attendance.create(value);

    res
      .status(201)
      .json(attendance);
  } catch (err) {
    res
      .status(400)
      .json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const attendance = await Attendance.findOne({ where: { id: id } });

    if (attendance) {
      await attendance.destroy();

      res
        .status(200)
        .json({ message: 'Attendance successfully deleted.' })
    } else {
      res
        .status(404)
        .json({ error: 'Attendance with this ID does not exists.' });
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
    const attendance = await Attendance.findOne({ where: { id: id } });

    if (!attendance) {
      return res
        .status(404)
        .json({ error: 'Attendance with the specified ID does not exists.' });
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
