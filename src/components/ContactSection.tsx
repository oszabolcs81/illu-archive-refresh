import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kapcsolat" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-teal font-body text-sm tracking-[0.2em] uppercase mb-2">
          Kapcsolat
        </p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
          Vegye fel velünk a kapcsolatot
        </h2>
        <p className="text-muted-foreground font-body text-sm mb-10">
          Írja meg pontos igényét – rövid időn belül visszajelzünk.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="mailto:info@illu.hu"
            className="flex items-center gap-4 bg-surface border border-border rounded-xl px-6 py-5 hover:border-primary transition-colors group"
          >
            <div className="w-12 h-12 gradient-teal rounded-lg flex items-center justify-center shrink-0">
              <Mail size={20} className="text-primary-foreground" />
            </div>
            <div className="text-left">
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</p>
              <p className="font-body font-medium text-foreground group-hover:text-primary transition-colors">
                info@illu.hu
              </p>
            </div>
          </a>
        </div>

        <div className="mt-10 bg-surface rounded-xl p-6 border border-border max-w-md mx-auto">
          <p className="font-body text-sm text-foreground font-medium">
            Együtt megoldást találunk.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
