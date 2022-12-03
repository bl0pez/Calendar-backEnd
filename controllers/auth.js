const createUser = (req, res) => {

    const { name, email, password } = req.body;

    res.json({
        message: 'createUser',
        name,
        email,
        password
    })

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