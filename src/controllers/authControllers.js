// const User = require('../models/userModel');
// const bcrypt = require('bcryptjs');
// const signup = async (req, res) => {
//     // const user = req.body;
//     // console.log(user);
//     console.log(req.body);
//     const { userName, email, password } = req.body;
//     const hash = bcrypt.hashSync(password, 10);
//     const newUser = new User({ userName, email, password: hash });
//     await newUser.save();
//     res.status(201).json("user create successfully")
// }
// module.exports = signup;

const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const signup = async (req, res) => {
    try {
        const { userName, email, password } = req.body;

        // Check if the email already exists in the database
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists. Please use a different email.' });
        }

        // Hash the password before saving the user
        const hash = bcrypt.hashSync(password, 10);

        // Create a new user with the hashed password
        const newUser = new User({ userName, email, password: hash });
        
        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        // Handle any error that might occur during user creation
        console.error(error);
        res.status(500).json({ error: 'Error creating user' });
    }
};

module.exports = signup;
