import { NextFunction, Request, Response } from 'express';
import addSalesHistory from '../../queries/pharamcies';
import IdValidator from '../../validation/IdValidator';

const addSales = async (req: Request, res: Response, next: NextFunction) => {
  const { pharmacyId } = req.params;
  const { productName, quantity } = req.body;
  try {
    await IdValidator(+pharmacyId);
    const sales = await addSalesHistory(productName, +quantity, +pharmacyId)
    res.json({
        data: sales,
        msg:"Sales are added successfully"
    })
  } catch (err) {
    next(err);
  }
};

export default addSales;
