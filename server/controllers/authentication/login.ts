/* eslint-disable camelcase */
import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { loginQuery, adminLoginQuery } from '../../queries';
import { CustomError } from '../../utils';
import loginSchema from '../../validation';

const key = process.env.SECRET_KEY || '';

const login = async (req : Request, res : Response, next : NextFunction) => {
  const { email, loginPassword } = req.body;
  const { error } = loginSchema.validate(req.body);
  if (error) {
    throw new CustomError(401, error.details[0].message);
  } else {
    try {
      const data = await adminLoginQuery(email);
      if (data.length !== 0) {
        const {
          password,
          id,
          image,
        } = data[0];
        const compare = bcrypt.compareSync(loginPassword, password);
        if (compare) {
          const token = jwt.sign({
            id,
            role: 'admin',
            image,
          }, key);
          res.cookie('token', token, { httpOnly: true }).json({ message: 'successful' });
        } else {
          throw new CustomError(400, 'invalid email or password');
        }
      } else {
        const loginData = await loginQuery(email);
        if (loginData.length === 0) throw new CustomError(400, 'invalid email or password');
        else {
          const {
            password,
            id,
            owner_img,
          } = loginData[0];
          const compare = bcrypt.compareSync(loginPassword, password);
          if (compare) {
            const token = jwt.sign({
              id,
              role: 'pharmacy',
              owner_img,
            }, key);
            res.cookie('token', token, { httpOnly: true }).json({ message: 'successful' });
          } else {
            throw new CustomError(400, 'invalid email or password');
          }
        }
      }
    } catch (err : any) {
      next(err);
    }
  }
};

export default login;
