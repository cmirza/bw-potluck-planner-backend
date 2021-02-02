const jwt = require('jsonwebtoken');


function restricted() {
    return async (req, res, next) => {
        
        try {
            const token = req.headers.token

            if(!token) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            jwt.verify(token, 'secret', (error, decoded) => {
                if (error) {
                    return res.status(401).json({ message: 'Invalid credentials' });
                }
                next();
            })
        } catch (error) {
            next(error);
        }
    }
}

module.exports = restricted;