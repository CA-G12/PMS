import { NextFunction, Response } from 'express';
import { addSalesHistory } from '../../queries/pharamcies';
import { IdValidator } from '../../validation';

const addSales = async (req: any, res: Response, next: NextFunction) => {
  const { id } = req.user;
  const { productId, quantity } = req.body;

  try {
    await IdValidator(+id, +quantity, +productId);
    const sales = await addSalesHistory(+productId, +quantity, +id);
    res.status(201).json({
      data: sales,
      msg: 'Success',
    });
  } catch (err) {
    next(err);
  }
};

export default addSales;
