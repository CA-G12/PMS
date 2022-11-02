import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../../utils';
import { eidtRequestsQueryQuantity, checkStatusRequest } from '../../queries';

const editRequests = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, product_id: productId, quantity } = req.body;
    const checkStatus = await checkStatusRequest(+id);

    if (checkStatus?.status !== 'Pending') {
      throw new CustomError(404, 'Can not edit this request');
    }

    await eidtRequestsQueryQuantity(+id, +productId, +quantity);
    res.json({ msg: 'Success' });
  } catch (err: any) {
    next(err);
  }
};

export default editRequests;
