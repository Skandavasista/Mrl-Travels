import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Packages from "./pages/Packages.jsx";
import PackageDetail from "./pages/PackageDetail.jsx";
import Fleet from "./pages/Fleet.jsx";
import VehicleDetail from "./pages/VehicleDetail.jsx";
import EmployeeTransport from "./pages/EmployeeTransport.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <div className="font-body">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:slug" element={<PackageDetail />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/fleet/:slug" element={<VehicleDetail />} />
        <Route path="/employee-transport" element={<EmployeeTransport />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
