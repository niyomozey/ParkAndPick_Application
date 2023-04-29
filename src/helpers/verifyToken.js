import jwt from 'jsonwebtoken';
import env from 'dotenv';

env.config();

function verifyToken(token) {
    try {
        const decode = jwt.verify(token, 'parkandpick');
        return decode;
    } catch (error) {
        return error.message;
    }
}

export { verifyToken as default };