const Evento = require('../models/Evento');



const getEvents = async (req, res) => {

}


const createEvent = async (req, res) => {

    const { title, notes, start, end } = req.body;

    const evento = new Evento({title, notes, start, end, user: req.uid});


    try {
        
        const eventoGuardado = await evento.save();

        res.status(201).json({
            evento: eventoGuardado
        });


    } catch (error) {
        res.status(500).json({
            message: 'Hable con el administrador'
        })
    }

}

const updateEvent = async (req, res) => {

}

const deleteEvent = async (req, res) => {

}


module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}

