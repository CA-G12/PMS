/* eslint-disable camelcase */
import { Request, Response, NextFunction } from 'express';
import { compare } from 'bcryptjs';
import { loginSchema } from '../../validation';
import { loginQuery, adminLoginQuery } from '../../queries';
import { generateToken, CustomError } from '../../utils';

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password: loginPassword } = req.body;

    await loginSchema(email, loginPassword);

    const data = await adminLoginQuery(email);
    const admin = data[0];

    if (admin) {
      const { password, id, image } = admin;

      const passwordCompare = await compare(loginPassword, password);
      if (!passwordCompare)
        throw new CustomError(400, 'Wrong Password, Try again');

      const token = await generateToken({ id, role: 'admin', image });
      return res
        .cookie('token', token, { httpOnly: true })
        .json({ data: { id, image }, role: 'admin', msg: 'Success' });
    }

    const loginData = await loginQuery(email);
    if (loginData.length === 0)
      throw new CustomError(400, 'Invalid email or password, Try again');

    const { password, id, owner_img , status} = loginData[0];
    const passwordCompare = await compare(loginPassword, password);
    if (!passwordCompare)
      throw new CustomError(400, 'Wrong Password, Try again');

    const token = await generateToken({ id, role: 'pharmacy', owner_img, status });
    return res
      .cookie('token', token, { httpOnly: true })
      .json({ data: { id, owner_img, status }, role: 'pharmacy', msg: 'successful' });
  } catch (err) {
    if (err.name === 'ValidationError') {
      next(new CustomError(400, 'Something went wrong, Try again'));
    }
    next(err);
  }
};

export default login;
