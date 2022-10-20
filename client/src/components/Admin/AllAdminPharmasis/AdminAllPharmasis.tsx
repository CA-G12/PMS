import './style.css';
import CustomizedInputBase from './Extra/Search';
import BasicSelect from './Extra/Select';

const AdminPharmasis = () => (
  <div className="contaner">
    <h2 className="headerText">All Pharmacies</h2>
    <hr />
    <div className="headerTable">
      <CustomizedInputBase />
      <div className="colums">
        <div className="columName">
          <p>Pharmacy Owner </p>
        </div>
        <div className="columName">
          <p>Pharmacy Location </p>
        </div>
        <div className="columName">
          <p>Pharmacy Status </p>
        </div>
        <div className="columSelect">
          <BasicSelect />
        </div>
      </div>
    </div>
  </div>
);

export default AdminPharmasis;
