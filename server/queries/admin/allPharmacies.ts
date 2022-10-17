import { Pharmacy } from '../../models';

const getAllPharmaciesGeneral = async (status: any, page: any) =>{
  console.log('status: ', status);
  console.log('page: ', page);
  if(status && page){
    return Pharmacy.findAndCountAll({
      where: {
        status: status,
      },
      offset: page,
      limit: 1,
    })
  } else {
      return  Pharmacy.findAndCountAll({
      offset: page,
      limit: 1,
    })
  }

}
export default getAllPharmaciesGeneral;
