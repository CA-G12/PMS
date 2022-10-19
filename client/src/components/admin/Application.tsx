import ApplicationCard from './ApplicationCard';

const card = {
  ownerName: 'ahmed',
  ownerId: 1116,
  licenseNumber: '123456',
  pharmacyName: 'ahmed pharmacy',
};
const Application = () => <ApplicationCard card={card} />;

export default Application;
