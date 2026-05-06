import { useState } from "react";

type Tab = "impresszum" | "adatvedelem";

const LegalSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>("impresszum");

  return (
    <section id="jogi" className="bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-2">Jogi információk</h2>
        <p className="text-muted-foreground mb-8 text-sm">
          Kérjük, olvassa el az alábbi tájékoztatókat.
        </p>

        {/* Tab navigáció */}
        <div className="flex gap-2 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab("impresszum")}
            className={`px-5 py-2.5 text-sm font-medium rounded-t-md transition-colors ${
              activeTab === "impresszum"
                ? "bg-card border border-b-card border-border text-foreground -mb-px"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Impresszum
          </button>
          <button
            onClick={() => setActiveTab("adatvedelem")}
            className={`px-5 py-2.5 text-sm font-medium rounded-t-md transition-colors ${
              activeTab === "adatvedelem"
                ? "bg-card border border-b-card border-border text-foreground -mb-px"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Adatvédelmi tájékoztató
          </button>
        </div>

        {/* Impresszum */}
        {activeTab === "impresszum" && (
          <div className="bg-card rounded-xl shadow-sm border border-border p-8 space-y-6 text-sm text-card-foreground leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">1. A szolgáltató adatai</h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-border">
                  {[
                    ["Teljes cégnév", "ILLU Építőipari és Ingatlanforgalmazó Korlátolt Felelősségű Társaság"],
                    ["Rövidített név", "ILLU Kft."],
                    ["Székhely", "2144 Kerepes, Bodza utca 20."],
                    ["Cégjegyzékszám", "13-09-209218"],
                    ["Adószám", "28950303-2-13"],
                    ["Képviselő", "Oravecz Szabolcs"],
                    ["Elérhetőség", "info@illu.hu"],
                    ["Weboldal", "https://illu.hu"],
                  ].map(([k, v]) => (
                    <tr key={k}>
                      <td className="py-2 pr-4 font-medium text-muted-foreground w-48">{k}</td>
                      <td className="py-2 text-foreground">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">2. Tárhelyszolgáltató</h3>
              <p className="text-card-foreground">
                Az oldal tárhely-szolgáltatását a <strong>GitHub, Inc.</strong> (88 Colin P Kelly Jr St,
                San Francisco, CA 94107, USA) biztosítja a GitHub Pages szolgáltatáson keresztül.
                A GitHub a saját adatkezelési szabályzata alapján kezeli a szerver/ log naplókat;
                erre az ILLU Kft. ráhatással nem bír.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">3. Szerzői jogi nyilatkozat</h3>
              <p>
                Az illu.hu weboldalon megjelenő valamennyi tartalom – ideértve, de nem kizárólagosan a
                szövegeket, képeket, grafikákat, logókat és design elemeket – az ILLU Kft. kizárólagos
                szellemi tulajdonát képezi, vagy azok felhasználásához az ILLU Kft. jogszerű
                engedéllyel rendelkezik.
              </p>
              <p className="mt-2">
                A tartalmak előzetes írásbeli engedély nélkül nem másolhatók, nem terjeszthetők, és
                kereskedelmi célra nem használhatók fel. A jogosulatlan felhasználás a szerzői jogról
                szóló 1999. évi LXXVI. törvény alapján polgári és büntetőjogi következményekkel járhat.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">4. Felelősségkizárás</h3>
              <p>
                Az ILLU Kft. mindent megtesz annak érdekében, hogy a weboldalon szereplő információk
                pontosak és naprakészek legyenek, azonban a tartalmak helyességéért, teljességéért
                vagy időszerűségéért felelősséget nem vállal. A weboldalon elhelyezett külső hivatkozások
                tartalmáért az ILLU Kft. nem felel.
              </p>
            </div>
          </div>
        )}

        {/* Adatvédelmi tájékoztató */}
        {activeTab === "adatvedelem" && (
          <div className="bg-card rounded-xl shadow-sm border border-border p-8 space-y-8 text-sm text-card-foreground leading-relaxed">

            <p className="text-muted-foreground text-xs">
              Hatályos: 2026. május 6. | Jogalap:{" "}
              <a
                href="https://eur-lex.europa.eu/eli/reg/2016/679/oj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal underline"
              >
                EU 2016/679 rendelet (GDPR)
              </a>
            </p>

            {/* 1. Adatkezelő */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">1. Az adatkezelő adatai</h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-border">
                  {[
                    ["Név", "ILLU Építőipari és Ingatlanforgalmazó Kft."],
                    ["Székhely", "2144 Kerepes, Bodza utca 20."],
                    ["Cégjegyzékszám", "13-09-209218"],
                    ["Adószám", "28950303-2-13"],
                    ["E-mail", "info@illu.hu"],
                  ].map(([k, v]) => (
                    <tr key={k}>
                      <td className="py-2 pr-4 font-medium text-muted-foreground w-48">{k}</td>
                      <td className="py-2">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 2. Adatkezelés tárgya */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">2. Kezelt adatok és az adatkezelés célja</h3>
              <p className="mb-3">
                Az illu.hu weboldal nem működtet regisztrációs, űrlap- vagy hozzászólás funkciót.
                Személyes adat kizárólag akkor kerül az ILLU Kft. tudomására, ha az érintett
                önkentesen, e-mailben keresi fel a társaságot az alábbi címen:
                {" "}<a href="mailto:info@illu.hu" className="text-teal underline">info@illu.hu</a>.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="text-left px-3 py-2 font-medium text-muted-foreground">Adatok köre</th>
                      <th className="text-left px-3 py-2 font-medium text-muted-foreground">Cél</th>
                      <th className="text-left px-3 py-2 font-medium text-muted-foreground">Jogalap (GDPR)</th>
                      <th className="text-left px-3 py-2 font-medium text-muted-foreground">Megőrzési idő</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-3 py-2">Név, e-mail cím, az e-mail tartalma</td>
                      <td className="px-3 py-2">Kapcsolatfelvételi megkeresés megválaszolása</td>
                      <td className="px-3 py-2">6. cikk (1) b) – szerződés előkészítése / f) – jogos érdek</td>
                      <td className="px-3 py-2">5 év</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            

            {/* 3. Érintetti jogok */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">3. Az érintett jogai</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Hozzáférés joga</strong> (GDPR 15. cikk): tájékoztatás kérhető a kezelt adatokról</li>
                <li><strong>Helyesbítés joga</strong> (16. cikk): pontatlan adatok javítása</li>
                <li><strong>Törlés joga</strong> (17. cikk – „elfeledtetéshez való jog")</li>
                <li><strong>Korlátozás joga</strong> (18. cikk)</li>
                <li><strong>Tiltakozás joga</strong> (21. cikk): jogos érdeken alapuló kezelésnél</li>
              </ul>
              <p className="mt-3">
                Az érintett jogait az <a href="mailto:info@illu.hu" className="text-teal underline">info@illu.hu</a> címen
                gyakorolhatja. Az ILLU Kft. a GDPR 12. cikk (3) bekezdése alapján <strong>1 hónapon</strong> belül válaszol
                (szükség esetén további 2 hónappal meghosszabbítható).
              </p>
            </div>

            {/* 4. Panasz */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">4. Panasz benyújtása</h3>
              <p>
                Az érintett panaszt nyújthat be a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH):
              </p>
              <address className="not-italic mt-2 bg-secondary rounded-lg p-4 text-sm">
                <strong>NAIH</strong><br />
                Székhely: <strong>1055 Budapest, Alkotmány u. 3.</strong><br />
                Postacím: 1363 Budapest, Pf.: 9.<br />
                Tel.: +36 (1) 391-1400<br />
                E-mail:{" "}
                <a href="mailto:ugyfelszolgalat@naih.hu" className="text-teal underline">
                  ugyfelszolgalat@naih.hu
                </a><br />
                Web:{" "}
                <a href="https://www.naih.hu" target="_blank" rel="noopener noreferrer" className="text-teal underline">
                  www.naih.hu
                </a>
              </address>
            </div>

          </div>
        )}
      </div>
    </section>
  );
};

export default LegalSection;
