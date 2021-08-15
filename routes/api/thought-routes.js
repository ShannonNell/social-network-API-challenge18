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

// GET, DELETE, UPDATE thought by id /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

// set up POST at /api/thoughts/:userId
router
    .route('/:userId')
    .post(addThought);

// Add reaction to thought, DELETE, GET, UPDATE thought by id at /api/thoughts/:userId/:thoughtId
router
    .route('/:userId/:thoughtId/reaction')
    .put(addReaction);

// DELETE reply /api/thoughts/:thoughtId/:reactionId
router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;