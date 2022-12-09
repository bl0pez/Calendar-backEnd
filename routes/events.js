/*
    Crear eventos de calendario
    host + /api/events/
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { getEvents, createEvent, updateEvent, deleteEvent } = require("../controllers/events");
const { isDate } = require('../helpers/isDate');

const router = Router();

router.get('/', getEvents);


router.post('/', [
    check('title', 'El título es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom( isDate ),
    check('end', 'Fecha de finalización es obligatoria').custom( isDate ),
],createEvent);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);


module.exports = router;