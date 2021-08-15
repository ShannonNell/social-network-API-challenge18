const router = require('express').Router();

// Importing functions from thought controller
const { 
    getAllThoughts, 
    getThoughtById, 
    addThought, 
    updateThought,
    addReaction,
    removeThought,
    removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/')
      .get(getAllThoughts);

// /api/thoughts/:id
router.route('/:id')
      .get(getThoughtById)
      .put(updateThought)
      .delete(removeThought); 

// /api/thoughts/:userId
router.route('/:userId')    
      .post(addThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
      .post(addReaction);

// /api/thoughts/:thoughtId/reactionId
router.route('/:thoughtId/reactions/:reactionId')
      .delete(removeReaction);

module.exports = router;