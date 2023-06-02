import { Routes, Route } from "react-router-dom";
import NotPage from "../pages/NotPage/NotPage";
import HomePage from "../pages/Home/Home";
import LoginPage from "../pages/Login/Login";
import AboutUsPage from "../pages/AboutUs/AboutUsPage";
import Category from "../pages/Category/Category";

const AppRoute = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/about" element={<AboutUsPage />} />
    <Route path="*" element={<NotPage />} />
    <Route path="/:category" element={<Category />} />
  </Routes>
);

export default AppRoute;