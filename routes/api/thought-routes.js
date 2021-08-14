const router = require('express').Router();
const { 
    addThought, 
    getAllThoughts,
    getThoughtById,
    updateThought,
    removeThought,
    addReaction,
    removeReaction 
} = require('../../controllers/thought-controller');

// GET all /api/thoughts/
router
    .route('/')
    .get(getAllThoughts);

// set up POST at /api/thoughts/:userId
router 
    .route('/:userId')
    .post(addThought);

// Add reaction to thought, DELETE, GET, UPDATE thought by id at /api/thoughts/:userId/:thoughtId
router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThought);
  
// GET, DELETE, UPDATE thought by id /api/thoughts/:id
router 
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought);

// DELETE reply /api/thoughts/userId/thoughtId/replyId
router
    .route('/:userId/:thoughtId/:replyId')
    .delete(removeReaction);

module.exports = router;