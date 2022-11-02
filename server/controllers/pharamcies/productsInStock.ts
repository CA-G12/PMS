import { Request, Response, NextFunction } from 'express';

import { productsInStockQuery } from '../../queries';

const productsInStock = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allProductsInStock = await productsInStockQuery();
    res.json({ data: allProductsInStock, msg: 'Data fetched successfully' });
  } catch (err: any) {
    next(err);
  }
};

export default productsInStock;
