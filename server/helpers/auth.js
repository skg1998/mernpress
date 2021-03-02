const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

const requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    userProperty: "auth"
});

const hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
    if (!authorized) {
        return res.status("403").json({
            error: "User is not authorized"
        });
    }
    next();
};

const verifyToken = (req, res, next) => {
    const token = req.header('auth-header');
    if (!token) return res.status(401).send('Access Denied');
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid token');
    }
}

module.exports = { requireSignin, hasAuthorization, verifyToken };
