import { Pharmacy } from '../../models';

const findPharmacy = async (licenceNumber:number) => Pharmacy.findOne({
  where: {
    license_number: licenceNumber,
  },
});

const findEmail = async (email:string) => Pharmacy.findOne({
  where: {
    email,
  },
});
const signup = async (data:Object, hashed:string) => Pharmacy.create({
  ...data,
  password: hashed,
});

export { findPharmacy, findEmail, signup };
