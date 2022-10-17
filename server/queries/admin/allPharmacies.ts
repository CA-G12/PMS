import { Pharmacy } from '../../models';

const getAllPharmaciesGeneral = async (status:string, pageNum:number) => Pharmacy.findAndCountAll({
  where: {
    status: status?status:'Opened',
  },
  offset: pageNum,
  limit: 2,
});

export default getAllPharmaciesGeneral;
