const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');


const routes = express.Router();

// GET , POST, PUT , DELETE
// routes.get('/', (req, res) => {
//   // return res.send(`Hello ${req.query.name}`);
//   return res.json({message: `Hello ${req.query.name}`});
// });

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);


module.exports = routes;