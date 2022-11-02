import { NextFunction, Request, Response } from 'express';
import { getAllProductsQuery } from '../../queries/pharamcies';
import { nameNumberValidator } from '../../validation';

const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    pharmacyName,
    medicineName,
    page = 1,
    limit = 9,
    id = -1,
  } = req.query;
  try {
    await nameNumberValidator(
      pharmacyName as string,
      medicineName as string,
      page as number,
      limit as number
    );
    const productsResult = await getAllProductsQuery(
      pharmacyName as string,
      medicineName as string,
      page as number,
      limit as number,
      id as number
    );
    res.json({ data: productsResult, msg: 'Success' });
  } catch (err) {
    next(err);
  }
};

export default getAllProducts;
