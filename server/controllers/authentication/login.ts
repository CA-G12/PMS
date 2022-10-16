import { Request, Response, NextFunction } from 'express';

import { loginQuery, adminLoginQuery } from '../../queries';

import loginSchema from '../../validation';

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

require('dotenv').config();

const login = async (req : Request, res : Response, next : NextFunction) => {
  const { email, loginPassword } = req.body;
  const { error } = loginSchema.validate(req.body);

  if (error) {
    res.status(401).send({ message: error.details[0].message, state: 'fail' });
  } else {
    try {
      let data = await adminLoginQuery(email);
      if (data.length !== 0) {
        const {
          password,
          id,
        } = data[0];
        bcrypt.compare(loginPassword, password, (err : Error, result : {} | false | null | '') => {
          if (err) next(err);
          if (!result) res.json({ message: 'invalid email or password', state: 'fail' });
          else {
            const token = jwt.sign({
              id,
              role: 'admin',
            }, process.env.SECRET);
            res.cookie('token', token, { httpOnly: true }).json({ message: 'successful' });
          }
        });
      } else {
        data = await loginQuery(email);
        if (data.length === 0) throw new Error('invalid email or password');
        else {
          const {
            password,
            id,
          } = data[0];
          bcrypt.compare(loginPassword, password, (err : Error, result : {} | false | null | '') => {
            if (err) next(err);
            if (!result) res.json({ message: 'invalid email or password', state: 'fail' });
            else {
              const token = jwt.sign({
                id,
                role: 'pharmacy',
              }, process.env.SECRET);
              res.cookie('token', token, { httpOnly: true }).json({ message: 'successful' });
            }
          });
        }
      }
    } catch (err : any) {
      res.json({ message: `${err}`, state: 'fail' });
    }
  }
};

export default login;
