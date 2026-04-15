import { motion } from "framer-motion";
import { Globe, Smartphone, Palette } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Design",
    description:
      "Az ügyfeleink igényeinek megfelelően modern, letisztult weblapok készítése. Blog, bemutató honlap, webshop vagy online oktatási platform.",
  },
  {
    icon: Smartphone,
    title: "Alkalmazás fejlesztés",
    description:
      "Android-ra, iOS-re vagy cross platform-ra tervezett alkalmazások megtervezése, rajzolása és kódolása.",
  },
  {
    icon: Palette,
    title: "Grafika",
    description:
      "Logó, névjegykártya, szórólap, plakát tervezés. Komplett arculat megtervezése. Videó felvétel, vágás és szerkesztés.",
  },
];

const ServicesSection = () => {
  return (
    <section id="szolgaltatasok" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">
            Szolgáltatások
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            <span className="gradient-gold-text">Cégünk</span> szakosodásai
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-md gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
