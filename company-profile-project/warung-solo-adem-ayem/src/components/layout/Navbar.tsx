import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/teams", label: "Teams" },
    { to: "/blog", label: "Blog" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/"); 
  };

  return (
    <header className="bg-forest sticky top-0 z-50 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">

        <NavLink to="/" className="flex items-center gap-2">
          <img
            src="/logo-ademayem.png"
            alt="Logo Warung Solo Adem Ayem"
            className="h-10 w-10 object-contain rounded-4xl"
            onError={(e) => {

              e.currentTarget.style.display = "none";
            }}
          />
          <span className="text-cream font-bold text-lg">Adem Ayem</span>
        </NavLink>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}

                className={({ isActive }) =>
                  `font-medium transition-colors ${
                    isActive ? "text-cream border-b-2 border-sage" : "text-cream/70 hover:text-cream"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          {user ? (

            <div className="flex items-center gap-4">
              <NavLink to="/create-blog" className="text-cream/80 hover:text-cream text-sm font-medium">
                Tulis Blog
              </NavLink>
              <span className="text-cream/60 text-sm">Hai, {user.name}</span>
              <button
                onClick={handleLogout}
                className="bg-sage text-forest px-4 py-2 rounded-full text-sm font-semibold hover:bg-cream transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="bg-sage text-forest px-4 py-2 rounded-full text-sm font-semibold hover:bg-cream transition-colors"
            >
              Login
            </NavLink>
          )}
        </div>


        <button
          className="md:hidden text-cream text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Buka menu navigasi"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-forest border-t border-cream/10 px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setIsOpen(false)} 
                  className="block text-cream/80 hover:text-cream py-1"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              {user ? (
                <>
                  <NavLink to="/create-blog" onClick={() => setIsOpen(false)} className="block text-cream/80 py-1">
                    Tulis Blog
                  </NavLink>
                  <button onClick={handleLogout} className="text-cream/80 py-1">
                    Logout ({user.name})
                  </button>
                </>
              ) : (
                <NavLink to="/login" onClick={() => setIsOpen(false)} className="block text-cream/80 py-1">
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;