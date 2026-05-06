import { useState } from "react";

type Tab = "impresszum" | "adatvedelem";

const LegalSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>("impresszum");

  return (
    <section id="jogi" className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Jogi információk</h2>
        <p className="text-gray-500 mb-8 text-sm">
          Kérjük, olvassa el az alábbi tájékoztatókat az illu.hu használata előtt.
        </p>

        {/* Tab navigáció */}
        <div className="flex gap-2 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("impresszum")}
            className={`px-5 py-2.5 text-sm font-medium rounded-t-md transition-colors ${
              activeTab === "impresszum"
                ? "bg-white border border-b-white border-gray-200 text-gray-900 -mb-px"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Impresszum
          </button>
          <button
            onClick={() => setActiveTab("adatvedelem")}
            className={`px-5 py-2.5 text-sm font-medium rounded-t-md transition-colors ${
              activeTab === "adatvedelem"
                ? "bg-white border border-b-white border-gray-200 text-gray-900 -mb-px"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Adatvédelmi tájékoztató
          </button>
        </div>

        {/* Impresszum */}
        {activeTab === "impresszum" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-6 text-sm text-gray-700 leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">1. A szolgáltató adatai</h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Cégnév", "Illu Kft."],
                    ["Székhely", "1143 Budapest, Semsey Andor utca 22. fszt. 4."],
                    ["Cégjegyzékszám", "01-09-376097"],
                    ["Adószám", "29012685-2-42"],
                    ["Képviselő", "Oláh Szabolcs"],
                    ["Elérhetőség", "info@illu.hu"],
                    ["Weboldal", "https://illu.hu"],
                  ].map(([k, v]) => (
                    <tr key={k}>
                      <td className="py-2 pr-4 font-medium text-gray-600 w-40">{k}</td>
                      <td className="py-2 text-gray-800">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Tárhelyszolgáltató</h3>
              <p>
                Az oldal tárhely-szolgáltatását a <strong>GitHub, Inc.</strong> (88 Colin P Kelly Jr St,
                San Francisco, CA 94107, USA) biztosítja a GitHub Pages szolgáltatáson keresztül.
                Az adatfeldolgozás jogalapja az EUMSZ 46. cikke szerinti Standard Szerződéses Kikötések (SCC).
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Szerzői jogi nyilatkozat</h3>
              <p>
                Az illu.hu weboldalon megjelenő valamennyi tartalom – ideértve, de nem kizárólagosan a
                szövegeket, képeket, grafikákat, logókat és design elemeket – az Illu Kft. kizárólagos
                szellemi tulajdonát képezi, vagy azok felhasználásához az Illu Kft. jogszerű
                engedéllyel rendelkezik.
              </p>
              <p className="mt-2">
                A tartalmak előzetes írásbeli engedély nélkül nem másolhatók, nem terjeszthetők, és
                kereskedelmi célra nem használhatók fel. A jogosulatlan felhasználás a szerzői jogról
                szóló 1999. évi LXXVI. törvény alapján polgári és büntetőjogi következményekkel járhat.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Felelősségkizárás</h3>
              <p>
                Az Illu Kft. mindent megtesz annak érdekében, hogy a weboldalon szereplő információk
                pontosak és naprakészek legyenek, azonban a tartalmak helyességéért, teljességéért
                vagy időszerűségéért felelősséget nem vállal. A weboldalon elhelyezett külső hivatkozások
                tartalmáért az Illu Kft. nem felel.
              </p>
            </div>
          </div>
        )}

        {/* Adatvédelmi tájékoztató */}
        {activeTab === "adatvedelem" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-8 text-sm text-gray-700 leading-relaxed">

            <p className="text-gray-500 text-xs">
              Hatályos: 2024. január 1. | Jogalap:{" "}
              <a
                href="https://eur-lex.europa.eu/eli/reg/2016/679/oj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                EU 2016/679 rendelet (GDPR)
              </a>
            </p>

            {/* 1. Adatkezelő */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Az adatkezelő adatai</h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Név", "Illu Kft."],
                    ["Székhely", "1143 Budapest, Semsey Andor utca 22. fszt. 4."],
                    ["Adószám", "29012685-2-42"],
                    ["E-mail", "info@illu.hu"],
                  ].map(([k, v]) => (
                    <tr key={k}>
                      <td className="py-2 pr-4 font-medium text-gray-600 w-40">{k}</td>
                      <td className="py-2">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 2. Adatfeldolgozók */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Adatfeldolgozók</h3>
              <p className="mb-3">
                Az Illu Kft. az alábbi harmadik fél adatfeldolgozókat veszi igénybe:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-100 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-3 py-2 font-medium text-gray-600">Adatfeldolgozó</th>
                      <th className="text-left px-3 py-2 font-medium text-gray-600">Tevékenység</th>
                      <th className="text-left px-3 py-2 font-medium text-gray-600">Székhely / Adattovábbítás</th>
                      <th className="text-left px-3 py-2 font-medium text-gray-600">Jogalap</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-3 py-2">GitHub, Inc.</td>
                      <td className="px-3 py-2">Tárhelyszolgáltatás (GitHub Pages)</td>
                      <td className="px-3 py-2">USA – adattovábbítás SCC alapján</td>
                      <td className="px-3 py-2">GDPR 28. cikk, SCC</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">Google LLC</td>
                      <td className="px-3 py-2">Analitika (Google Analytics 4), térképszolgáltatás (Google Maps)</td>
                      <td className="px-3 py-2">USA – adattovábbítás SCC alapján</td>
                      <td className="px-3 py-2">
                        GDPR 28. cikk, SCC;{" "}
                        <a
                          href="https://business.safety.google/adsprocessorterms/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          GA4 DPA
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">Meta Platforms, Inc.</td>
                      <td className="px-3 py-2">Facebook közösségi beépülők (Social Plug-in)</td>
                      <td className="px-3 py-2">USA – adattovábbítás SCC alapján (Schrems II utáni megfelelőség)</td>
                      <td className="px-3 py-2">GDPR 28. cikk, SCC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Az USA-ba irányuló adattovábbítás jogalapja minden esetben az Európai Bizottság által
                jóváhagyott Standard Szerződéses Kikötések (Standard Contractual Clauses – SCC,
                2021/914/EU határozat). A Schrems II ítélet (C-311/18) alapján az Illu Kft. esetileg
                értékeli az adattovábbítás kockázatait.
              </p>
            </div>

            {/* 3. Kezelt adatok */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Kezelt személyes adatok köre</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Kapcsolatfelvételi adatok: név, e-mail cím, telefonszám (önkéntes megadás alapján)</li>
                <li>Technikai adatok: IP-cím, böngészőtípus, meglátogatott oldalak (Google Analytics 4 által gyűjtve, hozzájárulás esetén)</li>
                <li>Cookie-k: analitikai és funkcionális sütik (részletesen ld. Cookie tájékoztató)</li>
              </ul>
            </div>

            {/* 4. Adatkezelés célja */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Az adatkezelés célja és jogalapja</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-100 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-3 py-2 font-medium text-gray-600">Cél</th>
                      <th className="text-left px-3 py-2 font-medium text-gray-600">Jogalap (GDPR)</th>
                      <th className="text-left px-3 py-2 font-medium text-gray-600">Megőrzési idő</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-3 py-2">Kapcsolatfelvételi üzenetek kezelése</td>
                      <td className="px-3 py-2">6. cikk (1) b) – szerződés teljesítése / f) – jogos érdek</td>
                      <td className="px-3 py-2">5 év</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">Weboldal-analitika (GA4)</td>
                      <td className="px-3 py-2">6. cikk (1) a) – hozzájárulás</td>
                      <td className="px-3 py-2">26 hónap (GA4 alapértelmezett)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">Google Maps megjelenítése</td>
                      <td className="px-3 py-2">6. cikk (1) a) – hozzájárulás</td>
                      <td className="px-3 py-2">Cookie lejártáig</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">Facebook Social Plug-in</td>
                      <td className="px-3 py-2">6. cikk (1) a) – hozzájárulás</td>
                      <td className="px-3 py-2">Cookie lejártáig</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5. Érintetti jogok */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Az érintett jogai</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Hozzáférés joga</strong> (GDPR 15. cikk): tájékoztatás kérhető a kezelt adatokról</li>
                <li><strong>Helyesbítés joga</strong> (16. cikk): pontatlan adatok javítása</li>
                <li><strong>Törlés joga</strong> (17. cikk – „elfeledtetéshez való jog")</li>
                <li><strong>Korlátozás joga</strong> (18. cikk)</li>
                <li><strong>Adathordozhatóság joga</strong> (20. cikk)</li>
                <li><strong>Tiltakozás joga</strong> (21. cikk): jogos érdeken alapuló kezelésnél</li>
                <li><strong>Hozzájárulás visszavonása</strong> (7. cikk (3)): bármikor, a visszavonás nem érinti a korábbi kezelés jogszerűségét</li>
              </ul>
            </div>

            {/* 6. Panasz */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">6. Panasz benyújtása</h3>
              <p>
                Az érintett panaszt nyújthat be a Nemzeti Adatvédelmi és Információszabadság Hatósághoz
                (NAIH):
              </p>
              <address className="not-italic mt-2 bg-gray-50 rounded-lg p-4 text-sm">
                <strong>NAIH</strong><br />
                Székhely: <strong>1055 Budapest, Alkotmány u. 3.</strong><br />
                Postacím: 1363 Budapest, Pf.: 9.<br />
                Tel.: +36 (1) 391-1400<br />
                E-mail:{" "}
                <a href="mailto:ugyfelszolgalat@naih.hu" className="text-blue-600 underline">
                  ugyfelszolgalat@naih.hu
                </a><br />
                Web:{" "}
                <a
                  href="https://www.naih.hu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  www.naih.hu
                </a>
              </address>
            </div>

            {/* 7. Megkeresés, válaszidő */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">7. Kapcsolat és válaszidő</h3>
              <p>
                Adatvédelmi megkeresések esetén az Illu Kft. a GDPR 12. cikk (3) bekezdése alapján{" "}
                <strong>1 hónapon</strong> belül válaszol (szükség esetén további 2 hónappal
                meghosszabbítható; meghosszabbításról az érintettet értesítjük). Megkeresés:
                info@illu.hu
              </p>
            </div>

            {/* 8. Cookie tájékoztató */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">8. Cookie (süti) tájékoztató</h3>
              <p className="mb-3">
                Az oldal az alábbi sütiket alkalmazza. Az analitikai és funkcionális sütik csak
                az Ön kifejezett hozzájárulása esetén kerülnek beállításra (GDPR 7. cikk, ePrivacy irányelv).
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-100 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-3 py-2 font-medium text-gray-600">Süti neve</th>
                      <th className="text-left px-3 py-2 font-medium text-gray-600">Típus</th>
                      <th className="text-left px-3 py-2 font-medium text-gray-600">Cél</th>
                      <th className="text-left px-3 py-2 font-medium text-gray-600">Lejárat</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-3 py-2">illu_cookie_consent</td>
                      <td className="px-3 py-2">Szükséges</td>
                      <td className="px-3 py-2">Cookie-hozzájárulás tárolása</td>
                      <td className="px-3 py-2">1 év</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">_ga, _ga_*</td>
                      <td className="px-3 py-2">Analitikai</td>
                      <td className="px-3 py-2">Google Analytics 4 – látogatói statisztika</td>
                      <td className="px-3 py-2">2 év</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">Google Maps sütik</td>
                      <td className="px-3 py-2">Funkcionális</td>
                      <td className="px-3 py-2">Térkép megjelenítése, pozíció</td>
                      <td className="px-3 py-2">6 hónap</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Hozzájárulását bármikor visszavonhatja a böngésző beállításaiban vagy a lábléc
                „Cookie beállítások" gombjára kattintva.
              </p>
            </div>

          </div>
        )}
      </div>
    </section>
  );
};

export default LegalSection;
