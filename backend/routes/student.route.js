const express = require('express');
const Student = require('../models/index').Student;
const validate = require('../validators/student.validator');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const students = await Student.findAll();

    res
      .status(200)
      .json(students);
  } catch (err) {
    res
      .status(500)
      .json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const student = await Student.findOne({ where: { id: id } });

    if (student) {
      res
        .status(200)
        .json(student);
    } else {
      res
        .status(404)
        .json({ error: 'Student with that ID does not exists.' });
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
    const student = await Student.create(value);

    res
      .status(201)
      .json(student);
  } catch (err) {
    res
      .status(400)
      .json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const student = await Student.findOne({ where: { id: id } });

    if (student) {
      await student.destroy();

      res
        .status(200)
        .json({ message: 'Student successfully deleted.' })
    } else {
      res
        .status(404)
        .json({ error: 'Student with this ID does not exists.' });
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
    const student = await Student.findOne({ where: { id: id } });

    if (!student) {
      return res
        .status(404)
        .json({ error: 'Student with the specified ID does not exists.' });
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
