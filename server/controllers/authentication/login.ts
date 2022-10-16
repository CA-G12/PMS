// eslint-disable-next-line import/no-import-module-exports
import { Request, Response, NextFunction } from 'express';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { signInQuery } = require('../../queries');
const { signInSchema } = require('../../validation');

require('dotenv').config();

const signIn = (req : Request, res : Response, next : NextFunction) => {
  const { email, password } = req.body;
  const { error, value } = signInSchema.validate(req.body);

  if (error) {
    res.status(401).send({ message: error.details[0].message, state: 'fail' });
  } else {
    signInQuery(email)
      .then((data : {rows:{id:Number, hashedpassword: String, name: String, img: String}[]}) => {
        if (data.rows.length === 0) throw new Error('invalid email or password');
        else {
          const {
            hashedpassword,
            id,
            name,
            img,
          } = data.rows[0];

          bcrypt.compare(password, hashedpassword, (err : Error, result : {} | false | null | '') => {
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
      })
      .catch((err : Error) => res.json({ message: `${err}`, state: 'fail' }));
  }
};

module.exports = { signIn };
