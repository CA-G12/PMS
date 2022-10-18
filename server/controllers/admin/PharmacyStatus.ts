import { Request, Response } from 'express';
import { pharmacyStatus } from '../../queries';
import { CustomError } from '../../utils';

const getPharmacyStatusId = async (req:Request, res:Response) => {
  const { pharmacyId } = req.params;
  try {
    const result = await pharmacyStatus((+pharmacyId));
    res.json({ data: result, msg: 'Updated Successfully' });
  } catch { throw new CustomError(400, 'Rejected'); }
};
export default getPharmacyStatusId;
