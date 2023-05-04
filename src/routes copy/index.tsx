import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnnouncerCard from '../components/AnnouncerCard';
import Footer from '../components/Footer';

const RoutesMain = () => (
  <Router>
    <Routes>
      <Route path="/teste" element={<h1>teste</h1>}/>
    </Routes>
  </Router>
);

export default RoutesMain;
