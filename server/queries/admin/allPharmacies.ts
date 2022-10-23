import { Pharmacy } from '../../models';

const getAllPharmaciesGeneral = async (status: string, page: number) =>{
  let limit =3 ;
  if(status){
    return Pharmacy.findAndCountAll({
      where: {
        status: status,
      },
      offset: ((page-1)*limit),
      limit: limit,
    })
  } else {
      return  Pharmacy.findAndCountAll({
      offset: ((page-1)*limit),
      limit: limit,
    })
  }

}
export default getAllPharmaciesGeneral;
