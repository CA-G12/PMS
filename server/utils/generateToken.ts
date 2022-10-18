import { sign } from 'jsonwebtoken';
import { payloadType } from '../middlewares/interfaces';

const key = process.env.SECRET_KEY || '';

const generateToken = (payload:payloadType) => new Promise((resolve, reject) => {
  sign(payload, key, (err, token) => {
    if (err) {
      reject(err);
    } else {
      resolve(token);
    }
  });
});

export default generateToken;
