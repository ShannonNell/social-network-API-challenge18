const router = require('express').Router();
const { 
    addThought, 
    removeThought 
} = require('../../controllers/thought-controller');

// set up POST at /api/thoughts/:userId
router 
    .route('/:userId')
    .post(addThought);

// Set up DELETE at /api/thoughts/userId/:thoughtId
router
    .route('/:userId/:thoughtId')
    .delete(removeThought);

module.exports = router;