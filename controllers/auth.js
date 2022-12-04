const User = require('../models/User');


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

        await user.save();

        res.json({
            message: 'createUser',
            user
        });
    } catch (error) {
        res.status(500).json({
            message: 'Hable con el administrador'
        });
    }

}

const loginUsuario = (req, res) => {

    const { email, password } = req.body;


}

const revalidarToken = (req, res) => {

    const { _token } = req.body;

}





module.exports = {
    createUser,
    loginUsuario,
    revalidarToken,
}