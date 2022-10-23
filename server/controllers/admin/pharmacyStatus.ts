import { NextFunction, Request, Response } from 'express';
import { pharmacyStatus } from '../../queries';
import { CustomError } from '../../utils';
import pharmacyStatusval from '../../validation/pharmasyStatus';

const updatePharmacyStatusId = async (req:Request, res:Response, next:NextFunction) => {
  const { pharmacyId } = req.params;
  const { status } = req.body;
  try {
    await pharmacyStatusval.validateAsync({ pharmacyId, status });
    await pharmacyStatus(+pharmacyId, status);
    res.json({ msg: 'Updated Successfully' });
  } catch (err : any) {
    next(err);
  }
};
export default updatePharmacyStatusId;
