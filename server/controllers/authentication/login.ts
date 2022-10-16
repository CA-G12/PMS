// eslint-disable-next-line import/no-import-module-exports
import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line import/no-import-module-exports
import loginQuery from '../../queries';
// eslint-disable-next-line import/no-import-module-exports
import loginSchema from '../../validation';

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

require('dotenv').config();

// type dataType = {
//     id:Number,
//     password:String,
//     name: String,
//     img: String,
// }

const login = async (req : Request, res : Response, next : NextFunction) => {
  const { email, loginPassword } = req.body;
  const { error } = loginSchema.validate(req.body);

  if (error) {
    res.status(401).send({ message: error.details[0].message, state: 'fail' });
  } else {
    try {
      const data = await loginQuery(email);
      //   const logIn = (data : userData) => {
      if (data.rows.length === 0) throw new Error('invalid email or password');
      else {
        const {
          password,
          id,
          name,
          img,
        } = data.rows[0];

        bcrypt.compare(loginPassword, password, (err : Error, result : {} | false | null | '') => {
          if (err) next(err);
          if (!result) res.json({ message: 'invalid email or password', state: 'fail' });
          else {
            const token = jwt.sign({
              id,
              name,
              email,
              img,
            }, process.env.SECRET);
            res.cookie('token', token, { httpOnly: true }).json({ message: 'successful' });
          }
        });
      }
    //   };
    //   logIn(userData.rows);
    } catch (err : any) {
      res.json({ message: `${err}`, state: 'fail' });
    }
  }
};

module.exports = { login };
