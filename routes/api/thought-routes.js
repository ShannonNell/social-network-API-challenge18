const router = require('express').Router();
const { 
    addThought, 
    removeThought,
    addReaction,
    removeReaction 
} = require('../../controllers/thought-controller');

// set up POST at /api/thoughts/:userId
router 
    .route('/:userId')
    .post(addThought);

// Set up Add reaction, DELETE thought at /api/thoughts/userId/:thoughtId
router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThought);

router
    .route('/:userId/:thoughtId/:replyId')
    .delete(removeReaction);

module.exports = router;