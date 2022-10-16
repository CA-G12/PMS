import { Pharmacy, Admin } from '../../models';

const findPharmacy = async (licenceNumber:number) => Pharmacy.findOne({
  where: {
    license_number: licenceNumber,
  },
});

const findPharmacyEmail = async (email:string) => Pharmacy.findOne({
  where: {
    email,
  },
});

const findAdminEmail = async (email:string) => Admin.findOne({
  where: {
    email,
  },
});
const signup = async (data:Object, hashed:string) => Pharmacy.create({
  ...data,
  password: hashed,
});

export {
  findPharmacy, findPharmacyEmail, findAdminEmail, signup,
};
