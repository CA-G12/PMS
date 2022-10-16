import { Request, Response } from 'express';
import { hash } from 'bcryptjs';
import Pharmacy from '../../models/pharmacy';
import signupSchema from '../../validation/signupSchema';
import generateToken from '../../utils/generateToken';

const signUp = async (req: Request, res: Response) => {
  try {
    await signupSchema(req.body);

    const licenseExisted = await Pharmacy.findOne({
      where: {
        license_number: req.body.licenseNumber,
      },
    });

    if (licenseExisted) {
      return res.status(400).json('Try again, This Pharmacy is already Signed');
    }

    const emailExisted = await Pharmacy.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (emailExisted) {
      return res.status(400).json('Try again, This email is already existed');
    }

    const hashed = await hash(req.body.password, 10);
    const pharamcyData = await Pharmacy.create({
      ...req.body,
      password: hashed,
    });

    const token = await generateToken({
      ownerID: pharamcyData.owner_id,
      fullName: pharamcyData.owner_name,
      ownerImg: pharamcyData.owner_img,
      pharmacyName: pharamcyData.name,
    });

    return res.cookie('token', token).json(pharamcyData);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default signUp;
