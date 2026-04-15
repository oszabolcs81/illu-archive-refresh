import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="fooldal" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Szerveterem"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-steel/80 via-steel/60 to-steel/90" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-32">
        <p className="text-primary-foreground/60 font-body text-sm tracking-[0.25em] uppercase mb-4">
          Solutions for IT
        </p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-4">
          Megoldások az IT számos területén
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl font-body font-light mb-3 italic">
          "Backup & Restore any data anywhere"
        </p>
        <p className="text-primary-foreground/60 font-body text-sm mb-10">
          Együtt megoldást találunk
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#szolgaltatasok"
            className="gradient-teal text-primary-foreground font-body font-medium px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Szolgáltatások
          </a>
          <a
            href="#kapcsolat"
            className="border border-primary-foreground/30 text-primary-foreground font-body font-medium px-8 py-3.5 rounded-lg hover:bg-primary-foreground/10 transition-colors"
          >
            Kapcsolat
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
