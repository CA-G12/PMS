import { sign } from 'jsonwebtoken';
import { payloadType, adminType } from '../middlewares/interfaces';

const key = process.env.SECRET_KEY || '';

const generateToken = (payload:payloadType|adminType) => new Promise((resolve, reject) => {
  sign(payload, key, (err, token) => {
    if (err) {
      reject(err);
    } else {
      resolve(token);
    }
  });
});

export default generateToken;
