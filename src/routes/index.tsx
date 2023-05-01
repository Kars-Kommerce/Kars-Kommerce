import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnnouncerProfile from '../pages/AnnouncerProfile';
import ModalCreateAd from '../components/Modal/CreateAd/ModalCreateAd';
import ModalEditProfile from '../components/Modal/EditProfile/ModalEditProfile';
import ModalEditAdress from '../components/Modal/EditAddress/ModalEditAdress';

const RoutesMain = () => (
  <Router>
    <Routes>
      <Route path="/profile" element={<AnnouncerProfile></AnnouncerProfile>} />
      <Route path="/teste" element={<ModalEditAdress></ModalEditAdress>} />
    </Routes>
  </Router>
);

export default RoutesMain;
