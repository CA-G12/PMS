import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../../utils';
import {
  eidtRequestsQueryName,
  eidtRequestsQueryQuantity,
  checkStatusRequest,
} from '../../queries';

const editRequests = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, product_id: productId, quantity, name } = req.body;
    const checkStatus = await checkStatusRequest(id);
    if (checkStatus?.status !== 'Pending') {
      return res.send({ msg: 'Can not edit this request' });
    }
    await eidtRequestsQueryQuantity(id, productId, quantity);
    await eidtRequestsQueryName(productId, name);
    res.status(200).json({ msg: 'Edit Requests done' });
  } catch (err: any) {
    next(err);
  }
};

export default editRequests;
