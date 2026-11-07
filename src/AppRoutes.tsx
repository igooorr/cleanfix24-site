import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import HomeCare from "./pages/HomeCare";
import AreaPage from "./pages/AreaPage";
import NotFound from "./pages/NotFound";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/services/:slug" element={<ServiceDetail />} />
    <Route path="/home-care" element={<HomeCare />} />
    <Route path="/areas/:slug" element={<AreaPage />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
