import { verify, VerifyErrors } from 'jsonwebtoken';

interface UserDataType {
    id:number,
    status:string
}

const verifyToken = (token:string) => new Promise((resolve, reject) => {
  const key = process.env.SECRET_KEY || '';
  verify(token, key, (err: any, decoded: unknown) => {
    const error = err as VerifyErrors;
    const decodedJWT = decoded as UserDataType;

    if (error) {
      reject(error);
    } else {
      resolve(decodedJWT);
    }
  });
});

export default verifyToken;
