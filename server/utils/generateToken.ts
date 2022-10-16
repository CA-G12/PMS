import { sign } from 'jsonwebtoken';

require('env2')('.env');

type payloadType = {
    fullName:string,
    ownerID: number,
    ownerImg:string
    pharmacyName:string,
}

const generateToken = (payload:payloadType) => new Promise((resolve, reject) => {
  sign(payload, process.env.SECRET_KEY, (err, token) => {
    if (err) {
      reject(err);
    } else {
      resolve(token);
    }
  });
});

export default generateToken;
