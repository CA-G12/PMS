import { Request, Response } from 'express';
import { getProductsAdmin, getProductsAdminQuantity } from '../../queries';
import { CustomError } from '../../utils';

const getAllProductsAdmin = async (req:Request, res:Response) => {
  try {
    const result = await getProductsAdmin();
    const Quantity = await getProductsAdminQuantity();
    res.json({
      result,
      Quantity,
    });
    // res.json(Quantity);
  } catch { throw new CustomError(400, 'No Products'); }
};
export default getAllProductsAdmin;
