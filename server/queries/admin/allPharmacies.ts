import { Pharmacy } from '../../models';

const getAllPharmaciesGeneral = async (status: any, page: any) =>{
  if(status){
    return Pharmacy.findAndCountAll({
      where: {
        status: status,
      },
      offset: ((page*3)-3),
      limit: 3,
    })
  } else {
      return  Pharmacy.findAndCountAll({
      offset: ((page*3)-3),
      limit: 1,
    })
  }

}
export default getAllPharmaciesGeneral;
