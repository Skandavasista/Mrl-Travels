import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import logo from "../assets/MRLTravelsLogo.jpg";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Packages", to: "/packages" },
  { label: "Fleet", to: "/fleet" },
  { label: "Employee Transport", to: "/employee-transport" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="MRL Travels" className="h-20 w-[150px] object-contain" />
        </Link>

        <nav className="hidden md:flex gap-8 text-sm text-paper">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `hover:opacity-70 transition-opacity ${isActive ? "text-amber" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:flex items-center gap-2 px-5 py-2 text-sm font-medium bg-laterite text-paper rounded-sm"
        >
          <Phone size={15} /> Enquire Now
        </Link>

        <button className="md:hidden text-paper" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm text-paper">
          {NAV.map((item) => (
            <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}