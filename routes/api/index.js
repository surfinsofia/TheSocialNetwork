
//require express for router
const router = require('express').Router();

//require userRoutes file
const userRoutes = require('./userRoutes');

//require thoughtRoutes file
const thoughtRoutes = require('./thoughtRoutes');

//Intruct router to use these routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

//export connection from this file
module.exports = router;