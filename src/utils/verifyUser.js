const jwt = require("jsonwebtoken");
const errorHandler = require("./error");

const verifyUser = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log(token);
    console.log(process.env.JWT_SECRET);

    if (!token) return next(errorHandler(401, 'Unauthorized'));

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return next(errorHandler(403, 'Forbidden'));
        req.user = user;
        next();
    });
};
module.exports = verifyUser;