import { motion } from "framer-motion";

const skills = [
  { label: "Grafika", value: 82 },
  { label: "Kódolás", value: 90 },
  { label: "SEO", value: 79 },
];

const AboutSection = () => {
  return (
    <section id="rolunk" className="py-24 px-6 bg-surface-elevated">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">
            Rólunk
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Korszerű <span className="gradient-gold-text">weblapok</span>
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-8">
            Válasszon modern, korszerű weblapot, ami a mai trendeknek a legmegfelelőbb. 
            Egy weblap a vállalkozásod arca vagy tükre. Ne hagyja, hogy a hanyagság 
            tükröződjön weblapjáról!
          </p>
          <div className="flex items-center gap-4">
            <span className="text-6xl font-heading font-bold gradient-gold-text">4+</span>
            <span className="text-muted-foreground font-body text-sm leading-tight">
              ÉV<br />programozási<br />tapasztalat
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {skills.map((skill, i) => (
            <div key={skill.label}>
              <div className="flex justify-between mb-2">
                <span className="font-body text-sm">{skill.label}</span>
                <span className="font-body text-sm text-primary">{skill.value}%</span>
              </div>
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className="h-full gradient-gold rounded-full"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
