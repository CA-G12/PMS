import { Request, Response, NextFunction } from 'express';
import { pharmaciesQuery } from '../../queries';

const pharmacies = async (req: Request, res: Response, next: NextFunction) => {
  const { page = 1, location = '', name = '' } = req.query;
  try {
    const allPharmacies = await pharmaciesQuery(
      Number(page as string),
      location as string,
      name as string
    );
    res.json({ data: allPharmacies, msg: 'Success' });
  } catch (err: any) {
    next(err);
  }
};

export default pharmacies;
