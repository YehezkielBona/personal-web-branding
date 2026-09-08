import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skill" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, SetIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    SetIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-offwhite/95 backdrop-blur border-b border-ink/10 z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-beetween">
        <a href="#hero" className="font-serif text-xl text-ink">
          Yehezkiel Bona Purba
        </a>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-ink/70 hover:text-gold">
              {link.label}
            </a>
          ))}
        </div>

        <button onClick={toggleMenu} className="md:hidden text-ink" aria-label="Buka Menu">
          {isMenuOpen ? "Tutup" : "Menu"}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col bg-offwhite border-t border-ink/10">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => SetIsMenuOpen(false)} className="px-6 py-3 text-ink/80 border-b border-ink/5">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
