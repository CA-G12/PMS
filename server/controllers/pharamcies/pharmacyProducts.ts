import { NextFunction, Request, Response } from 'express';
import getAllProductsQuery from '../../queries/pharamcies';

const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    pharmacyName,
    medicineName,
    page = 1,
    limit = 3,
    pharmacyId,
  } = req.query;
  try {
    const productsResult = await getAllProductsQuery(
      pharmacyName as string,
      medicineName as string,
      page as number,
      limit as number,
      pharmacyId as string
    );
    res.json(productsResult);
  } catch (err) {
    console.log('err: ', err);
  }
};

export default getAllProducts;
