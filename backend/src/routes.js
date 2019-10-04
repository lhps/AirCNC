const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

// importando as controllers
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');



const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

//Rotas do spots
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

//Rota do dashboard web
routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store)

module.exports = routes;