import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnnouncerProfile from '../pages/AnnouncerProfile';
import ModalCreateAd from '../components/Modal/CreateAd/ModalCreateAd';

const RoutesMain = () => (
  <Router>
    <Routes>
      <Route path="/profile" element={<AnnouncerProfile></AnnouncerProfile>} />
      <Route path="/teste" element={<ModalCreateAd></ModalCreateAd>} />
    </Routes>
  </Router>
);

export default RoutesMain;
