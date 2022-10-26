import { NextFunction, Request, Response } from 'express';
import addSalesHistory from '../../queries/pharamcies';
import IdValidator from '../../validation/IdValidator';

const addSales = async (req: Request, res: Response, next: NextFunction) => {
  const { pharmacyId } = req.params;
  const { productId, quantity } = req.body;
  try {
    await IdValidator(+pharmacyId, +quantity, +pharmacyId);
    const sales = await addSalesHistory(+productId, +quantity, +pharmacyId);
    res.status(201).json({
      data: sales,
      msg: 'Sales are added successfully',
    });
  } catch (err) {
    next(err);
  }
};

export default addSales;
