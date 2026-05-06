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
      {/* Sötét overlay a nav zónában (felső ~96px) — logo láthatóságához */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-32">
        <p className="text-white/60 font-body text-sm tracking-[0.25em] uppercase mb-4">
          Solutions for IT
        </p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white mb-4">
          Megoldások az IT számos területén
        </h1>
        <p className="text-white/80 text-lg md:text-xl font-body font-light mb-10">
          Együtt megoldást találunk
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#szolgaltatasok"
            className="gradient-teal text-white font-body font-medium px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Szolgáltatások
          </a>
          <a
            href="#kapcsolat"
            className="border border-white/30 text-white font-body font-medium px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
          >
            Kapcsolat
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
