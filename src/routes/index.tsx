import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnnouncerProfile from '../pages/AnnouncerProfile';

const RoutesMain = () => (
  <Router>
    <Routes>
      <Route path="/profile" element={<AnnouncerProfile></AnnouncerProfile>} />
    </Routes>
  </Router>
);

export default RoutesMain;
