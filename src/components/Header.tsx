import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Services",
    path: "/services",
    dropdown: [
      { name: "Airport Transfers", path: "/services/airport-transfers" },
      { name: "Group Transfers", path: "/services/group-transfers" },
      { name: "Baby Seat Taxi", path: "/services/baby-seat-taxi" },
      { name: "Corporate Transfers", path: "/services/corporate-transfers" },
      { name: "Wedding Transfers", path: "/services/wedding-transfers" },
      { name: "Cruise Transfers", path: "/services/cruise-transfers" },
      { name: "Wheelchair Taxi", path: "/services/wheelchair-taxi" },
    ],
  },
  { name: "Tours", path: "/tours" },
  { name: "Fleet", path: "/fleet" },
  { name: "Areas", path: "/areas" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setServiceOpen(false);
    setMobileMenuOpen(false);
    setMobileServiceOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="container mx-auto px-4">

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:flex items-center justify-between h-[100px]">
          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Easy Maxi Cabs"
              className="h-[90px] w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-4 relative">
            {/* MENU */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="px-8 py-4 rounded-full border-2 border-black
              font-heading font-medium uppercase tracking-wide text-[20px]
              flex items-center gap-2"
            >
              MENU
              <ChevronDown
                className={`w-6 h-6 transition ${menuOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* DROPDOWN */}
            {menuOpen && (
              <div className="absolute top-full right-0 mt-3 w-[340px] bg-white rounded-xl shadow-2xl border p-4 z-50">
                {navLinks.map((link) =>
                  !link.dropdown ? (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="block px-3 py-2 text-[18px]
                      font-heading font-medium uppercase tracking-wide
                      hover:bg-yellow-200 rounded-md"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <div key={link.name}>
                      <button
                        onClick={() => setServiceOpen(!serviceOpen)}
                        className="w-full flex justify-between items-center px-3 py-2 text-[18px]
                        font-heading font-medium uppercase tracking-wide
                        hover:bg-yellow-200 rounded-md"
                      >
                        {link.name}
                        <ChevronRight
                          className={`w-5 h-5 transition ${serviceOpen ? "rotate-90" : ""}`}
                        />
                      </button>

                      {serviceOpen && (
                        <div className="pl-4 pt-1 flex flex-col gap-1">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="px-3 py-2 text-[17px]
                              font-heading font-medium uppercase tracking-wide
                              text-black/80 hover:text-black"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            )}

            {/* CALL */}
            <a href="tel:+61390754956">
              <button
                className="px-8 py-4 rounded-full bg-yellow-300 hover:bg-yellow-400
                text-black font-heading font-medium uppercase tracking-wide text-[20px]
                flex items-center gap-2"
              >
                <Phone className="w-6 h-6" />
                CALL
              </button>
            </a>

            {/* QUOTE */}
            <Link to="/book">
              <button
                className="px-8 py-4 rounded-full bg-sky-300 hover:bg-sky-400
                text-black font-heading font-medium uppercase tracking-wide text-[20px]"
              >
                QUOTE
              </button>
            </Link>
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden flex flex-col items-center py-2">
          {/* LOGO */}
          <Link to="/">
            <img
              src={logo}
              alt="Easy Maxi Cabs"
              className="h-[80px] w-auto object-contain"
            />
          </Link>

          {/* BUTTON ROW */}
          <div className="flex gap-2 mt-2">
            <a href="tel:+61390754956">
              <button
                className="bg-yellow-300 px-4 py-2 rounded-full
                font-heading font-medium uppercase tracking-wide text-[14px]"
              >
                CALL NOW
              </button>
            </a>

            <Link to="/book">
              <button
                className="bg-sky-300 px-4 py-2 rounded-full
                font-heading font-medium uppercase tracking-wide text-[14px]"
              >
                FAST QUOTE
              </button>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="border border-black px-4 py-2 rounded-full
              font-heading font-medium uppercase tracking-wide text-[14px]
              flex items-center gap-1"
            >
              MENU
              <ChevronDown
                className={`w-4 h-4 transition ${mobileMenuOpen ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {/* MOBILE DROPDOWN */}
          {mobileMenuOpen && (
            <div className="w-full bg-white mt-2 border-t border-black/10 text-[15px]">
              {navLinks.map((link) =>
                !link.dropdown ? (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block px-4 py-3 border-b border-black/10
                    font-heading font-medium uppercase tracking-wide"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <div key={link.name}>
                    <button
                      onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                      className="w-full flex justify-between px-4 py-3 border-b border-black/10
                      font-heading font-medium uppercase tracking-wide"
                    >
                      {link.name}
                      <ChevronRight
                        className={`transition ${mobileServiceOpen ? "rotate-90" : ""}`}
                      />
                    </button>

                    {mobileServiceOpen && (
                      <div className="pl-6 pb-2 flex flex-col gap-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="font-heading font-medium uppercase tracking-wide text-black/70"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
