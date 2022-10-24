import { Pharmacy } from '../../models/index';

const pharmacyStatus = (pharmacyId:number, status : 'close'| 'open'|'rejected') => Pharmacy.update({ status }, {
  where: {
    id: pharmacyId,
  },
});

export default pharmacyStatus;
