const { Shema, model } = require('mongoose');

const EventoSchema = Shema({
    title: {
        type: String,
        required: true,
        message: 'El título es obligatorio'
    },
    notes: {
        type: String,
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    user: {
        type: Shema.Types.ObjectId,
        ref: 'Usuario'
    }
});

module.exports = model('Evento', EventoSchema);