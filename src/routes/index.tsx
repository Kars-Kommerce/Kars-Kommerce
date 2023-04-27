import { Route, Routes } from "react-router-dom";
import AnnouncerProfile from "../pages/AnnouncerProfile";
import Home from "../pages/Home";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { Example } from "../components/test";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<AnnouncerProfile />} />
    <Route path="/login" element={<LoginForm />} />
    <Route path="/register" element={<RegisterForm />} />
  </Routes>
);

export default RoutesMain;
