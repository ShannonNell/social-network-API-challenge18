const router = require('express').Router();

// Import all API routes 
const apiRoutes = require('./api');

// add prefix of '/api' to all api routes imported from api directory
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1> 404 Error!</h1>');
});

module.exports = router;