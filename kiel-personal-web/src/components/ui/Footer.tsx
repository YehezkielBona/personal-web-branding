const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest text-offwhite">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between gap-4">
        <p className="text-sm text-offwhite/70">© {year} Yehezkiel Bona P Made by React & TailwindCSS v4.3</p>
        <div className="flex gap-6 text-sm">
          <a href="https://github.com/YehezkielBona" className="hover: text-gold">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/yehezkiel-bona-purba/" className="hover: text-gold">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
