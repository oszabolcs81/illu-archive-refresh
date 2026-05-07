const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const footerNavItems = [
  { label: "Főoldal",        id: "fooldal" },
  { label: "Szolgáltatások", id: "szolgaltatasok" },
  { label: "Rólunk",         id: "rolunk" },
  { label: "Kapcsolat",      id: "kapcsolat" },
];

const Footer = () => {
  return (
    <footer className="bg-steel text-primary-foreground py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 gradient-teal rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-heading text-sm">I</span>
              </div>
              <span className="font-heading text-lg text-primary-foreground">ILLU KFT</span>
            </div>
            <p className="text-primary-foreground/60 font-body text-xs">
              Solutions for IT
            </p>
          </div>

          <div>
            <h4 className="font-body font-semibold text-sm mb-3 text-primary-foreground/80">Navigáció</h4>
            <div className="space-y-2">
              {footerNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-primary-foreground/60 hover:text-primary-foreground transition-colors font-body text-sm cursor-pointer text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body font-semibold text-sm mb-3 text-primary-foreground/80">Elérhetőség</h4>
            <a
              href="mailto:info@illu.hu"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors font-body text-sm"
            >
              info@illu.hu
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-primary-foreground/40 font-body text-xs">
            © 2020 Illu Kft. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
