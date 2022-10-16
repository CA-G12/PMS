import { Response, Request, NextFunction } from 'express';
// import verifyToken from '../utils'
interface req extends Request {
    user: Object | unknown
}
const pharmacyAuth = async (request: req, res: Response, next: NextFunction) => {
  const token:string = request.cookies;

  if (!token) {
    throw new Error('You are not authorized');
  }

  try {
    // const user = await verifyToken(token);
    // if user
    // req.user=user;
    next();
  } catch (err) {
    next(new Error('Something wrong happened'));
  }
};

export default pharmacyAuth;
