import { useState } from "react";
import { Mail, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@illu.hu?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Név: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
  };

  return (
    <section id="kapcsolat" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-teal font-body text-sm tracking-[0.2em] uppercase mb-2">
            Kapcsolat
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">
            Vegye fel velünk a kapcsolatot
          </h2>
          <p className="text-muted-foreground font-body mt-3 text-sm">
            Kérjük írja meg röviden igényét és felvesszük önnel a kapcsolatot
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Név"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-surface border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-surface border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              placeholder="Tárgy"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-surface border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Üzenet"
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-surface border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="gradient-teal text-primary-foreground font-body font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Send size={16} />
              Üzenet elküldése
            </button>
          </form>

          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 gradient-teal rounded-lg flex items-center justify-center shrink-0">
                <Mail size={20} className="text-primary-foreground" />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">Email</p>
                <a href="mailto:info@illu.hu" className="font-body font-medium text-foreground hover:text-primary transition-colors">
                  info@illu.hu
                </a>
              </div>
            </div>
            <div className="bg-surface rounded-xl p-6 border border-border">
              <p className="font-body text-sm text-foreground font-medium">
                Együtt megoldást találunk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
