import { NextFunction, Request, Response } from 'express';
import { getProductId } from '../../queries';
import { CustomError } from '../../utils';

const oneProductId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { productId } = req.params;
  try {
    const result = await getProductId(+productId);
    res.json(result);
  } catch (err: any) {
    if (err) next(new CustomError(400, 'no Products'));
    next(err);
  }
};
export default oneProductId;
