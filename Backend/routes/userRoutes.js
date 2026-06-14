const express = require("express");

const router = express.Router();

const User = require("../models/User");

router.post("/", async (req, res) => {

    try {

        const { username, email, password } = req.body;

        const user = await User.create({
            username,
            email,
            password
        });

        res.status(201).json(user);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({
            email,
            password
        });

        if (!user) {

            return res.status(401).json({
                message: "Invalid credentials"
            });

        }

        res.json({
            message: "Login successful",
            user
        });

    } catch (error) {
    console.error("USER CREATE ERROR:", error);

    res.status(500).json({
        message: error.message
    });
}

}); 

router.get("/", async (req, res) => {

    try {

        const users = await User.find();

        res.json(users);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;