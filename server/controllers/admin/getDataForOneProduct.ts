import { Request, Response } from 'express';
import { getOneProduct } from '../../queries';
import { CustomError } from '../../utils';

const getOneProductForId = async (req:Request, res:Response) => {
  const { productId } = req.params;
  try {
    const result = await getOneProduct(+(productId));
    // console.log(result.map((e:any) => e.dataValues));
    res.json(result);
  } catch {
    throw new CustomError(400, 'No Products');
  }
};
export default getOneProductForId;
