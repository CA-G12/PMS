import React from 'react';
import ApplicationCard from './components/admin/ApplicationCard';

const card = {
  ownerName: 'ahmed',
  ownerId: 1116,
  licenseNumber: 123456,
  pharmacyName: 'ahmed pharmacy',
};

const App: React.FC = () => (
  <div className="App">
    <ApplicationCard card={card} />
  </div>
);

export default App;
