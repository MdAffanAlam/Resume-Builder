const User = require("../db/model");

const registerUser = (req, res) => {
    User.create(req.body)
        .then(() => {
            res.send("success");
        })
        .catch((err) => {
            if (err.name === "ValidationError") {
                const errors = Object.values(err.errors).map((error) => error.message);
                return res.status(400).json({ errors });
            } else if (err.code === 11000) {
                return res.status(400).json({ errors: ["Email already exists"] });
            } else {
                res.status(500).send(`Error in creation: ${err.message}`);
            }
        });
};

module.exports = registerUser;
