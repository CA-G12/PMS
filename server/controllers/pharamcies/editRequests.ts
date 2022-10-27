import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../../utils';
import {
  eidtRequestsQueryName,
  eidtRequestsQueryQuantity,
} from '../../queries';

const editRequests = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, product_id: productId, quantity, name, status } = req.body;

    if (status !== 'Pending') throw new CustomError(404, 'Can not Update');

    await eidtRequestsQueryQuantity(id, productId, quantity);
    await eidtRequestsQueryName(productId, name);

    res.status(200).json({ msg: 'Edit Requests done' });
  } catch (err: any) {
    next(err);
  }
};

export default editRequests;
