import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';

import { loginQuery, adminLoginQuery } from '../../queries';
import { generateToken, CustomError } from '../../utils';
import loginSchema from '../../validation';

const login = async (req : Request, res : Response, next : NextFunction) => {
  try {
    const { email, loginPassword } = req.body;
    await loginSchema.validateAsync(req.body);

    const data = await adminLoginQuery(email);
    const admin = data[0];

    if (admin) {
      const {
        password,
        id,
        image,
      } = admin;

      const compare = await bcrypt.compare(loginPassword, password);
      if (!compare) throw new CustomError(400, 'invalid email or password');

      const token = await generateToken({ id, role: 'admin', image });
      return res.cookie('token', token, { httpOnly: true }).json({ data: { id, image }, msg: 'successful' });
    }
    const loginData = await loginQuery(email);
    if (loginData.length === 0) throw new CustomError(400, 'invalid email or password');

    const {
      password,
      id,
      owner_img,
    } = loginData[0];
    const compare = await bcrypt.compare(loginPassword, password);
    if (!compare) throw new CustomError(400, 'invalid email or password');

    const token = await generateToken({ id, role: 'pharmacy', owner_img });
    return res.cookie('token', token, { httpOnly: true }).json({ data: { id, owner_img }, msg: 'successful' });
  } catch (err : any) {
    return next(err);
  }
};

export default login;
