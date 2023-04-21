import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (authHeader === 'Bearer null') return res.sendStatus(401);
    // console.log('verifyToken:', token);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403);
        // console.log(decoded);
        req.id = decoded.id;
        next();
    });
};
