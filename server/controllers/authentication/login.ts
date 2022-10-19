/* eslint-disable camelcase */
import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { loginQuery, adminLoginQuery } from '../../queries';
import { CustomError } from '../../utils';
import loginSchema from '../../validation';

const key = process.env.SECRET_KEY || '';

const login = async (req : Request, res : Response, next : NextFunction) => {
  try {
    const { email, loginPassword } = req.body;
    const { error } = await loginSchema.validateAsync(req.body);
    if (error) {
      throw new CustomError(401, error.details[0].message);
    }

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

      const token = jwt.sign({
        id,
        role: 'admin',
        image,
      }, key);
      return res.cookie('token', token, { httpOnly: true }).json({ msg: 'successful' });
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

    const token = jwt.sign({
      id,
      role: 'pharmacy',
      owner_img,
    }, key);
    return res.cookie('token', token, { httpOnly: true }).json({ msg: 'successful' });
  } catch (err : any) {
    return next(err);
  }
};

export default login;
