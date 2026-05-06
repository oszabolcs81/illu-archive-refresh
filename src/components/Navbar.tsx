import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Főoldal", href: "#fooldal" },
  { label: "Szolgáltatások", href: "#szolgaltatasok" },
  { label: "Rólunk", href: "#rolunk" },
  { label: "Kapcsolat", href: "#kapcsolat" },
];

const IlluLogo = ({ onHero }: { onHero: boolean }) => (
  <svg
    width="122"
    height="36"
    viewBox="0 0 122 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="ILLU logo"
    role="img"
    style={onHero ? { filter: "drop-shadow(0 1px 6px rgba(0,0,0,0.7))" } : undefined}
  >
    {/* Terminal prompt > */}
    <polyline
      points="4,10 13,18 4,26"
      stroke="hsl(195,55%,58%)"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Cursor underscore */}
    <line
      x1="17"
      y1="26"
      x2="26"
      y2="26"
      stroke="hsl(195,55%,58%)"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* ILLU wordmark — mindig fehér hero fölött, egyebként currentColor */}
    <text
      x="33"
      y="24"
      fontFamily="'DM Sans', 'Inter', sans-serif"
      fontSize="17"
      fontWeight="600"
      letterSpacing="0.13em"
      fill={onHero ? "#ffffff" : "currentColor"}
    >
      ILLU
    </text>
    {/* Akcentpont */}
    <circle cx="116" cy="24" r="2.2" fill="hsl(195,55%,58%)" />
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

  const onHero = !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface shadow-md backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#fooldal" className="flex items-center">
          <IlluLogo onHero={onHero} />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-body font-medium tracking-wide transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-white drop-shadow-md"
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
            scrolled ? "text-foreground" : "text-white"
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
