const User = require("../db/model");

const loginUser = (req, res) => {
    const { email, password } = req.body;

    // Find the user by name
    User.findOne({ email })
        .then((user) => {
            if (!user) {
                return res.status(404).json("User not found");
            }
            if(user.password===password){
                res.send(`success`)
            }
            else{
                res.status(404).json("Incorrect Password")
            }
           
        })
        .catch((err) => {
            res.status(500).send(`Error during login: ${err.message}`);
        });
};

module.exports = loginUser;