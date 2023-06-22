const router = require('express').Router();
const Item = require('../models/item.model');

// Get all items
router.route('/items').get(async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(400).json('Error: ' + error);
  }
});

// Get a single item
router.route('/items/:id').get(async (req, res) => {
    try {
      const item = await Item.findById(req.params.id);
      if (!item) {
        return res.status(404).json('Item not found');
      }
      res.json(item);
    } catch (error) {
      res.status(400).json('Error: ' + error);
    }
  });
  


// Add a new item
router.route('/items').post(async (req, res) => {
  try {
    const { name, description } = req.body;
    const newItem = new Item({ name, description });
    await newItem.save();
    res.json('Item added!');
  } catch (error) {
    res.status(400).json('Error: ' + error);
  }
});

// Update an item
router.route('/items/:id').put(async (req, res) => {
  try {
    const { name, description } = req.body;
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json('Item not found');
    }
    item.name = name;
    item.description = description;
    await item.save();
    res.json('Item updated!');
  } catch (error) {
    res.status(400).json('Error: ' + error);
  }
});

// Delete an item
router.route('/items/:id').delete(async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json('Item not found');
    }
    res.json('Item deleted.');
  } catch (error) {
    res.status(400).json('Error: ' + error);
  }
});

module.exports = router;




