import { Pharmacy } from '../../models/index';

const pharmacyStatus = (pharmacyId:number, status : 'Approved'| 'Pending' | 'Rejected') => Pharmacy.update({ status }, {
  where: {
    id: pharmacyId,
  },
});

export default pharmacyStatus;
