import { Request, Response } from 'express';
import { pharmacyStatus } from '../../queries';
import { CustomError } from '../../utils';

const getPharmacyStatusId = async (req:Request, res:Response) => {
  const { pharmacyId } = req.params;
  try {
    await pharmacyStatus((+pharmacyId));
    res.json({ msg: 'Updated Successfully' });
  } catch { throw new CustomError(400, 'Rejected'); }
};
export default getPharmacyStatusId;
