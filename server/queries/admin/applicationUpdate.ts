import { Pharmacy } from '../../models/index';

const applicationStatus = (pharmacyId: number, status: 'Opened' | 'Rejected') =>
  Pharmacy.update(
    { status },
    {
      where: {
        id: pharmacyId,
      },
    }
  );

export default applicationStatus;
