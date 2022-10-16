import { verify } from 'jsonwebtoken';

const verifyToken = (token:string) => new Promise((resolve, reject) => {
  const key = process.env.SECRET_KEY || '';
  verify(token, key, (err, decoded) => {
    if (err) {
      reject(err);
    } else {
      resolve(decoded);
    }
  });
});

export default verifyToken;
