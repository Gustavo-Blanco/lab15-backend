const User = require('../models/user');

const controller = () => {}

controller.index = (req,res) => {
    return res.json('SE PUDO HACE GET');
}

controller.registerOrLogin = async (req,res) => {
    const {name,email, technical} = req.body;
    const user = await User.findOne({name: name,email: email}).exec();
    if (user == null) {
        const newUser = {
            name,
            email,
            technical
        }
        const createdUser = await User.create(newUser);
        return res.json({status: 200, user: createdUser});
    }
    return res.json({status:200,user});
}

module.exports = controller;