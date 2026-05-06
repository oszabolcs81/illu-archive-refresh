import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Főoldal", href: "#fooldal" },
  { label: "Szolgáltatások", href: "#szolgaltatasok" },
  { label: "Rólunk", href: "#rolunk" },
  { label: "Kapcsolat", href: "#kapcsolat" },
];

// Inline SVG logo — IT/tech stilus
// Concept: ">//" prompt szimbolum + ILLU wordmark, slim monoline
const IlluLogo = () => (
  <svg
    width="120"
    height="36"
    viewBox="0 0 120 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="ILLU logo"
    role="img"
  >
    {/* Prompt szimbolum: > */}
    <polyline
      points="4,10 13,18 4,26"
      stroke="hsl(195,55%,52%)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Underscore/cursor blink jel */}
    <line
      x1="17"
      y1="26"
      x2="25"
      y2="26"
      stroke="hsl(195,55%,52%)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* ILLU wordmark */}
    <text
      x="32"
      y="24"
      fontFamily="'DM Sans', 'Inter', sans-serif"
      fontSize="17"
      fontWeight="600"
      letterSpacing="0.12em"
      fill="currentColor"
    >
      ILLU
    </text>
    {/* Slim dot accent */}
    <circle cx="114" cy="24" r="2.2" fill="hsl(195,55%,52%)" />
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface shadow-md backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#fooldal" className="flex items-center gap-1 group">
          <span className={`transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}>
            <IlluLogo />
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-body font-medium tracking-wide transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü megnyitása"
          className={`md:hidden ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-surface border-b border-border shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-body"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
