import { Request, Response } from 'express';
import { getProductsAdmin } from '../../queries';
import { CustomError } from '../../utils';

const getAllProductsAdmin = async (req:Request, res:Response) => {
  try {
    const result = await getProductsAdmin();
    res.json(result);
  } catch { throw new CustomError(400, 'No Products'); }
};
export default getAllProductsAdmin;
