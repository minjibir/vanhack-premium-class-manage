const express = require('express');
const PremiumClass = require('../models/index').PremiumClass;
const validate = require('../validators/premium-class.validator');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const classes = await PremiumClass.findAll();

    res
      .status(200)
      .json(classes);
  } catch (err) {
    res
      .status(500)
      .json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const premiumClass = await PremiumClass.findOne({ where: { id: id } });

    if (premiumClass) {
      res
        .status(200)
        .json(premiumClass);
    } else {
      res
        .status(404)
        .json({ error: 'Class with that ID does not exists.' });
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

  if (error) {
    return res
      .status(400)
      .json({ error: error.message });
  }

  try {
    const premiumClass = await PremiumClass.create(value);

    res
      .status(201)
      .json(premiumClass);
  } catch (err) {
    res
      .status(400)
      .json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const premiumClass = await PremiumClass.findOne({ where: { id: id } });

    if (premiumClass) {
      await premiumClass.destroy();

      res
        .status(200)
        .json({ message: 'Class successfully deleted.' })
    } else {
      res
        .status(404)
        .json({ error: 'Class with this ID does not exists.' });
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
    const premiumClass = await PremiumClass.findOne({ where: { id: id } });

    if (!premiumClass) {
      return res
        .status(404)
        .json({ error: 'Class with the specified ID does not exists.' });
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
