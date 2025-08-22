'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "Biztonságos megadni a személyes adataimat egy MGA/Curacao licenccel rendelkező kaszinónak?",
    answer: "Igen. A licencelt kaszinók kötelesek modern titkosítási technológiákkal védeni az adataidat. A KYC (Know Your Customer) eljárás, vagyis a személyazonosságod igazolása (pl. személyi igazolvány másolatával) egy kötelező lépés a pénzmosás és a csalások megelőzésére. Ez a te biztonságodat is szolgálja, és elengedhetetlen a nyeremények kifizetéséhez."
  },
  {
    question: "Mennyi idő alatt kapom meg a pénzem?",
    answer: "Ez a választott módszertől függ. Egy kifizetési kérelem jóváhagyása után (ami 24-48 óra is lehet) az e-pénztárcákra (Skrill, Neteller) és a kriptotárcákba általában 24 órán belül megérkezik az összeg. A bankkártyás és banki átutalásos kifizetés 2-5 munkanapot is igénybe vehet."
  },
  {
    question: "Játszhatok mobiltelefonról is?",
    answer: "Igen, napjainkban szinte minden online kaszinó tökéletesen optimalizált mobilra. A legtöbb esetben nincs is szükség külön alkalmazás letöltésére, egyszerűen a telefonod böngészőjéből érheted el az oldalt és az összes funkciót. A mi listánkon szereplő összes kaszinó kiváló mobil élményt nyújt."
  },
  {
    question: "Mi a teendő, ha elfelejtem a jelszavamat?",
    answer: "Nincs ok a pánikra. Minden kaszinó bejelentkezési oldalán találsz egy \"Elfelejtett jelszó?\" vagy hasonló linket. Kattints rá, add meg a regisztrációkor használt e-mail címedet, és a rendszer küldeni fog egy linket, amellyel új jelszót állíthatsz be. A folyamat mindössze pár percet vesz igénybe."
  },
  {
    question: "Adózni kell a nyereményeim után?",
    answer: "Az EGT-n kívüli (pl. Curacao) licenccel rendelkező kaszinókban szerzett nyeremény után a játékosnak kell adóznia. A nyeremény (a tét levonása után) \"egyéb jövedelemnek\" minősül, ami után 15% SZJA-t kell fizetni. Az MGA (máltai) licenccel rendelkező oldalak nyereményei az EU-n belülről származnak, ami kedvezőbb adózási helyzetet teremthet, de az adóbevallás itt is a játékos felelőssége."
  },
  {
    question: "Hogyan ismerem fel a megbízható kaszinót?",
    answer: "Egy megbízható online kaszinó mindig rendelkezik érvényes szerencsejáték-licenccel (MGA, Curacao, stb.), SSL titkosítással védi az adatokat, több fizetési módot kínál, gyors és hatékony ügyfélszolgálatot működtet, és átlátható feltételeket szabhat a bónuszokra. Ellenőrizd az értékeléseket és a játékosok visszajelzéseit is."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-12">
        
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Gyakran Ismételt Kérdések
          </h2>
          <p className="text-lg text-gray-600">
            Összegyűjtöttük a leggyakoribb kérdéseket, hogy mindenre választ kapj.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-6 h-6 text-orange-500 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Responsible Gaming Notice */}
        <div className="mt-12 bg-gray-900 text-white rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4 text-orange-300">
            Felelős Játék: Eszközök és Tippek
          </h3>
          <p className="text-base text-gray-200 mb-6">
            A szerencsejáték szórakozás, nem pénzkereseti lehetőség. A megbízható kaszinók számos eszközt kínálnak a kontroll megőrzésére:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold mb-3 text-orange-300">Önkontroll eszközök:</h4>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>• Befizetési limit</li>
                <li>• Veszteségi limit</li>
                <li>• Önkizárás lehetősége</li>
                <li>• Játékidő-figyelmeztetés</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-orange-300">Segítség kérése:</h4>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>• Magyar Ökumenikus Segélyszervezet</li>
                <li>• ELTE Szerencsejátékos Segélytelefon</li>
                <li>• Ingyenes és anonim támogatás</li>
                <li>• Online tanácsadás</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center text-sm text-gray-300">
            Ha úgy érzed, problémád van a szerencsejátékkal, kérj segítséget!
          </div>
        </div>

      </div>
    </section>
  );
}