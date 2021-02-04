const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        res.status(401).json('Token required')
    } else { 
        jwt.verify(token, 'secret', (err, decoded) => {
            if (err) {
                res.status(401).json('Invalid token');
            } else {
                req.decodedJwt = decoded;
                next();
            }
        })
    }
}