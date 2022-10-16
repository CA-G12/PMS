import { sign } from 'jsonwebtoken';

require('env2')('.env');

type payloadType = {
    owner_id: number,
    role:string,
}

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
