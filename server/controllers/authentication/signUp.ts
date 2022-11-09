import { Request, Response, NextFunction } from 'express';
import { hash } from 'bcryptjs';
import {
  findPharmacy,
  findPharmacyEmail,
  findAdminEmail,
  signup,
} from '../../queries/authentication';
import { signupSchema } from '../../validation';
import { generateToken, CustomError } from '../../utils';

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await signupSchema(req.body);

    const licenseExisted = await findPharmacy(req.body.license_number);
    if (licenseExisted) {
      throw new CustomError(400, 'Try again, This Pharmacy is already Signed');
    }

    const adminExisted = await findAdminEmail(req.body.email);
    if (adminExisted) {
      throw new CustomError(
        400,
        'Try again, You can not sign up with this email'
      );
    }

    const emailExisted = await findPharmacyEmail(req.body.email);
    if (emailExisted) {
      throw new CustomError(400, 'Try again, This email is already existed');
    }

    const hashed = await hash(req.body.password, 10);
    const pharmacyData = await signup(req.body, hashed);

    const token = await generateToken({
      id: pharmacyData.id,
      role: 'pharmacy',
      owner_img: pharmacyData.owner_img,
      status: 'Pending',
    });

    return res.status(201).cookie('token', token).json({
      data: pharmacyData,
      role: 'pharmacy',
      msg: 'Success',
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(new CustomError(400, 'Something went wrong, sign up again'));
    }
    return next(err);
  }
};

export default signUp;
