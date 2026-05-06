import { Shield, Clock, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="rolunk" className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-teal font-body text-sm tracking-[0.2em] uppercase mb-2">
            Rólunk
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">
            Az Illu Kft története
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-14">
          <p className="text-muted-foreground font-body leading-relaxed mb-4 text-sm">
            Cégünk 2020-ban alakult azzal a céllal, hogy magas színvonalon szolgálja ki a folyamatosan növekvő iparági elvárásokat. 
            Működésünk során hamar világossá vált számunkra, hogy az IT terület kulcsszerepet tölt be a modern iparágak hatékony együttműködésében, 
            és egyre meghatározóbbá válik a minőségi szolgáltatásnyújtásban. 
            Erre a felismerésre alapozva a felsővezetés stratégiai döntést hozott: belső erőforrásaink átszervezésével, valamint több évtizedes szakmai tapasztalattal 
            rendelkező szakembereink és megbízható partnereink tudására építve az IT szektor felé nyitottunk. 
            Ennek eredményeként ma már olyan innovatív és megbízható informatikai megoldásokat kínálunk, amelyek megfelelnek a korszerű üzleti és technológiai követelményeknek.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed text-sm">
            Jelenleg 3 fő területen nyújtunk szolgáltatásokat meglevő és új Ügyfeleink részére: 
            adatmentés, IT infrastruktúra és tanácsadás.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Megbízhatóság",
              text: "Közel 20 éves tapasztalattal rendelkező szakemberek biztosítják a szolgáltatások magas színvonalát.",
            },
            {
              icon: Clock,
              title: "Gyors reakció",
              text: "Nem várt esemény esetén időben és hatékonyan reagálva akár milliókban mérhető károktól óvhatjuk meg vállalkozását.",
            },
            {
              icon: Users,
              title: "Hatékonyság",
              text: "\"If you define the problem correctly, you almost have the solution\" - SJ",
            },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-14 h-14 gradient-teal rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground font-body text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
