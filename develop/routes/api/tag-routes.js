const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
   try {
    const tags = await Tag.findAll({ include: Product });
    res.json(tags);
   } catch (error) {
    res.status(500).json(error);
   }
});

// route to get one tag by id
router.get('/:id', async (req, res) => {

  try {

    const tags = await Tag.findByPk(re.params.id, { inlcude: Product });
    if (!tag) {
      res.status(404).json({ message: 'No tag found with that id!'});
      return;
    }
    res.json(tag);

  } catch (error) {

  }
});

// create a new tag
router.post('/', async (req, res) => {
  try {

    const newTag = await Tag.create(req.body);

  }
  catch (error) {

    res.status(500).json(err);
  }
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {

  try {
    const newTah =await Tag.create(req.body);
    res.status(201).json(newTag);

  }
  catch (error) {

    res.status(500).json(err);
  }
  
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;