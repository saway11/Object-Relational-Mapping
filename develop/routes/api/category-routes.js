const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// get all categories
router.get('/', async (req, res) => {

  try {

    const categories = await Category.findAll({ include: Product });
    res.json(categories);

  } catch (err) {

    res.status(500).json(err);
  }
});

// get one category by id
router.get('/:id', async (req, res) => {

  try {
    const category = await category.findByPk(res.params.id, { include: Product });
    if (!category) {
      res.status(404).json({ message: 'No category found with that id' });
      return;
    }
    res.json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post('/', async (req, res) => {

  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }

  
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;