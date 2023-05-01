import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnnouncerProfile from '../pages/AnnouncerProfile';
import ModalCreateAd from '../components/Modal/CreateAd/ModalCreateAd';
import ModalEditProfile from '../components/Modal/EditProfile/ModalEditProfile';

const RoutesMain = () => (
  <Router>
    <Routes>
      <Route path="/profile" element={<AnnouncerProfile></AnnouncerProfile>} />
      <Route path="/teste" element={<ModalEditProfile></ModalEditProfile>} />
    </Routes>
  </Router>
);

export default RoutesMain;
