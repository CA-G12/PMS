import { Pharmacy } from '../../models/index';

const { status } :any = async (pharmacyId:number) => Pharmacy.findAll({
  where: {
    id: pharmacyId,
  },
});

const pharmacyStatus = async (pharmacyId:number) => Pharmacy.update({ status: status === 'Opened' ? 'Closed' : 'Opened' }, {
  where: {
    id: pharmacyId,
  },
});

export default pharmacyStatus;
