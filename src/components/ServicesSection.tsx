import { Database, Server, MessageSquare } from "lucide-react";
import backupImg from "@/assets/backup.jpg";
import infraImg from "@/assets/infrastructure.jpg";
import consultingImg from "@/assets/consulting.jpg";

const services = [
  {
    icon: Database,
    title: "Mentés",
    subtitle: "Backup & Restore",
    image: backupImg,
    description:
      "A file-ok és adatok megfelelő szintű védelmének két peremfeltétele azok biztonságos mentése, illetve, hogy abból a mentésből vissza is tudjunk állni. Olyan megoldást kínálunk, mely gyakorlatilag bármilyen adatforrást képes átlátható és megbízható módon menteni.",
  },
  {
    icon: Server,
    title: "IT infrastruktúra",
    subtitle: "Tervezés & Üzemeltetés",
    image: infraImg,
    description:
      "Egy IT kiszolgáló környezet manapság a lelke mindennek, így annak rendszeres karbantartása és felügyelete elengedhetetlen. Tervezéstől a kivitelezésen át a teljes körű support tevékenységekben is számíthat ránk.",
  },
  {
    icon: MessageSquare,
    title: "Tanácsadás",
    subtitle: "Konzultáció & Támogatás",
    image: consultingImg,
    description:
      '"Minden egy beszélgetéssel kezdődött..." Cégünk elhivatott és nyitottan áll az IT területén belül Ügyfeleink irányába, hogy meghallgassa és felfedje a valós igényeket és problémákat.',
  },
];

const ServicesSection = () => {
  return (
    <section id="szolgaltatasok" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-teal font-body text-sm tracking-[0.2em] uppercase mb-2">
            Szolgáltatások
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">
            Szolgáltatási területek
          </h2>
          <p className="text-muted-foreground font-body mt-3 max-w-2xl mx-auto text-sm">
            Az IT területén elsősorban a lent felsorolt szolgáltatásokat nyújtja cégünk, természetesen igény szerint egyéb területeken is szívesen állunk rendelkezésére.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-surface rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 gradient-teal rounded-lg flex items-center justify-center shrink-0">
                    <service.icon size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground font-body text-xs">{service.subtitle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
