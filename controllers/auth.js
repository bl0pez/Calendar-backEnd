const User = require('../models/User');
const bcryptjs = require('bcryptjs');


const createUser = async (req, res) => {

    const { name, email, password } = req.body;
    
    try {

        let user = await User.findOne({ email });

        if(user) {
            return res.status(400).json({
                msg: 'El usuario ya existe con ese email'
            });
        }

        user = new User({ name, email, password });

        // Encriptar contraseña
        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync(password, salt);

        await user.save();

        res.json({
            uid: user._id,
            name: user.name
        });
    } catch (error) {
        res.status(500).json({
            message: 'Hable con el administrador'
        });
    }

}

const loginUsuario = async(req, res) => {

    const { email, password } = req.body;

    try {
        
        let user = await User.findOne({ email });

        if(!user) {
            return res.status(400).json({
                msg: 'El usuario no existe con ese email'
            });
        }

    } catch (error) {
        res.status(500).json({
            message: 'Hable con el administrador'
        })
    }


}

const revalidarToken = (req, res) => {

    const { _token } = req.body;

}





module.exports = {
    createUser,
    loginUsuario,
    revalidarToken,
}