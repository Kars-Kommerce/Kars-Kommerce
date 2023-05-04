import { Route, Routes } from "react-router-dom";
import AnnouncerProfile from "../pages/AnnouncerProfile";
import Home from "../pages/Home";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
// import { Example } from "../components/test";
import Product from "../pages/Product";
import SendEmailResetPasswordForm from "../components/ResetPasswordEmailForm";
import ResetPasswordForm from "../components/ResetPasswordForm";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<AnnouncerProfile />} />
    <Route path="/login" element={<LoginForm />} />
    <Route path="/password-reset" element={<SendEmailResetPasswordForm />} />
    <Route path="/send-password" element={<ResetPasswordForm />} />
    <Route path="/register" element={<RegisterForm />} />
    <Route path="/ads/:id" element={<Product />} />
    <Route path="/user/:id" element={<AnnouncerProfile />} />
  </Routes>
);

export default RoutesMain;
