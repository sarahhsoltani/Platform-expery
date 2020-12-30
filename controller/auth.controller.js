const User = require('../model/user');
const config = require("../config/auth")

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


exports.signup = (req, res) => {

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        field: req.body.field,
        phoneNumber: req.body.phoneNumber,
        location: req.body.location,
        password: bcrypt.hashSync(req.body.password, 10),
        role: req.body.role,
        image: req.body.role === "expert" ? "/uploads" + req.file.filename : null
    });
    user.save((err) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send({ message: "User was registered successfully!" });
    });



}




exports.signin = (req, res) => {
    User.findOne({
        email: req.body.email
    })
        .then((user, err) => {
            if (err) {
                return res.status(500).send({ message: err });
            }

            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password, user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }

            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // 24 hours
            });

            res.status(200).send({
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                field: user.field,
                phoneNumber: user.phoneNumber,
                location: user.location,
                image: user.image,
                accessToken: token
            });
        });
};
