import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import illuLogo from "@/assets/illu-logo.png";

const navItems = [
  { label: "Főoldal", href: "#fooldal" },
  { label: "Szolgáltatások", href: "#szolgaltatasok" },
  { label: "Rólunk", href: "#rolunk" },
  { label: "Kapcsolat", href: "#kapcsolat" },
];

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
        <a href="#fooldal" className="flex items-center gap-2">
          <img src={illuLogo} alt="Illu Kft logo" className="h-10 w-auto object-contain" />
          <div className="leading-tight">
            <span className={`font-heading text-xl ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
              ILLU KFT
            </span>
            <span className={`block text-[10px] tracking-[0.15em] uppercase ${scrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`}>
              Solutions for IT
            </span>
          </div>
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
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
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
