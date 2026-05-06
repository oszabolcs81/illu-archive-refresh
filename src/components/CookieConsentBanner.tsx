import { useState, useEffect } from "react";

const CONSENT_KEY = "illu_cookie_consent";

type ConsentState = "accepted" | "declined" | null;

/**
 * GDPR-compliant cookie consent banner.
 * - Uses localStorage to persist the decision (1 year).
 * - Does NOT load GA4 / Maps scripts until the user explicitly accepts.
 * - Fires a custom DOM event "cookieConsentAccepted" so GA4 init
 *   can be wired separately if needed.
 */
const CookieConsentBanner = () => {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [showDetails, setShowDetails] = useState(false);

  // Read stored decision on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY) as ConsentState | null;
      if (stored === "accepted" || stored === "declined") {
        setConsent(stored);
      }
    } catch {
      // Private browsing / storage blocked – show banner
    }
  }, []);

  const persist = (value: "accepted" | "declined") => {
    try {
      // Store with 1-year expiry approximation (localStorage has no TTL;
      // for production, add a timestamped wrapper or use a cookie directly)
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // Silently ignore storage errors
    }
  };

  const handleAccept = () => {
    persist("accepted");
    setConsent("accepted");
    // Signal to the rest of the app that analytics may start
    window.dispatchEvent(new CustomEvent("cookieConsentAccepted"));
  };

  const handleDecline = () => {
    persist("declined");
    setConsent("declined");
  };

  // Banner is already answered
  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie hozzájárulás"
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6"
    >
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Main bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5">
          <div className="flex-1">
            <p className="text-sm text-gray-800 font-medium mb-0.5">
              🍪 Ez az oldal sütiket használ
            </p>
            <p className="text-xs text-gray-500">
              Analitikai sütik (Google Analytics 4) és funkcionális sütik (Google Maps) csak az Ön
              hozzájárulásával kerülnek beállításra – GDPR 7. cikk alapján.{" "}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-blue-600 underline text-xs"
              >
                {showDetails ? "Kevesebb info" : "Részletek"}
              </button>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-xs font-medium rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Elutasítás
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-xs font-medium rounded-lg bg-gray-900 text-white hover:bg-gray-700 transition-colors"
            >
              Elfogadás
            </button>
          </div>
        </div>

        {/* Expanded details */}
        {showDetails && (
          <div className="border-t border-gray-100 px-5 pb-5 pt-4 text-xs text-gray-600 space-y-3">
            <div>
              <p className="font-semibold text-gray-800 mb-1">Szükséges sütik (mindig aktív)</p>
              <p>
                <code className="bg-gray-100 px-1 rounded">illu_cookie_consent</code> – tárolja a
                cookie-döntését (1 év).
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">Analitikai sütik (hozzájárulás szükséges)</p>
              <p>
                <code className="bg-gray-100 px-1 rounded">_ga</code>,{" "}
                <code className="bg-gray-100 px-1 rounded">_ga_*</code> – Google Analytics 4;
                névtelen látogatói statisztika. Az adatokat a Google LLC kezeli az USA-ban, Standard
                Szerződéses Kikötések (SCC) alapján.{" "}
                <a
                  href="https://business.safety.google/adsprocessorterms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  GA4 adatkezelési megállapodás
                </a>
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">Funkcionális sütik (hozzájárulás szükséges)</p>
              <p>
                Google Maps beépülő – az USA-ba kerülnek továbbításra SCC alapján (Meta / Google
                Schrems II megfelelőség).
              </p>
            </div>
            <p>
              Döntését bármikor megváltoztathatja az{" "}
              <a href="#jogi" className="text-blue-600 underline">
                Adatvédelmi tájékoztatóban
              </a>{" "}
              leírtak szerint.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsentBanner;
