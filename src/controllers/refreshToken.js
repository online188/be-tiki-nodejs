import db from '../models/index.js';
import jwt from 'jsonwebtoken';

export const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.session.refreshToken;
        if (!refreshToken) return res.sendStatus(401);
        const user = await db.User.findAll({
            where: {
                refresh_token: refreshToken,
            },
        });
        // console.log(user);
        // console.log(123);
        if (!user[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) return res.sendStatus(403);
            const id = user[0].id;
            const username = user[0].username;
            const email = user[0].email;
            const accessToken = jwt.sign({ id, username, email }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '1d',
            });
            console.log('accessToken: ', accessToken);
            res.json({ accessToken });
        });
    } catch (error) {
        console.log(error);
    }
};
