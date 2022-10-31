import { NextFunction, Response } from 'express';
import addSalesHistory from '../../queries/pharamcies';
import IdValidator from '../../validation/IdValidator';

const addSales = async (req: any, res: Response, next: NextFunction) => {
  const { id } = req.user;
  const { productId, quantity } = req.body;
  try {
    await IdValidator(+id, +quantity, +productId);
    const sales = await addSalesHistory(+productId, +quantity, +id);
    res.status(201).json({
      data: sales,
      msg: 'Sales are added successfully',
    });
  } catch (err) {
    next(err);
  }
};

export default addSales;
