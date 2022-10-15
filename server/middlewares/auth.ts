import { Request, Response, NextFunction } from 'express';

require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyAccessToken = (req: Request, res: Response, next: NextFunction) => {
  // we need to fix the UserDataType to less data we need in the token
    interface UserDataType {
        id:number,
        name:string,
        email:string,
        phone:number,
        location:string,
        img:string,
        description:string,
        password:string,
        license_number:number,
        status:string,
        owner_name:string,
        owner_img:string,
        owner_id:number
    }

    const { token } = req.cookies;
    if (!token) throw new Error('Unauthorized');

    try {
      jwt.verify(token, process.env.SECRET_KEY, (err: Error, decoded: UserDataType) => {
        if (err) {
          throw new Error('Unauthorized');
        } else {
          req.user = decoded;
          next();
        }
      });
    } catch (err) {
      res.status(401);
      throw new Error('Unauthorized');
    }
};

export default verifyAccessToken;
