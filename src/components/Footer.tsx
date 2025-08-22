export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div>
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="relative mr-2">
                  <div className="flex items-center -space-x-0.5">
                    <div className="w-5 h-5 bg-gradient-to-br from-orange-500 to-orange-600 rounded shadow-md flex items-center justify-center transform rotate-12">
                      <div className="grid grid-cols-2 gap-0.5">
                        <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                        <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                        <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                        <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="w-5 h-5 bg-gradient-to-br from-red-500 to-red-600 rounded shadow-md flex items-center justify-center transform -rotate-12">
                      <div className="grid grid-cols-3 gap-0.5">
                        <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                        <div></div>
                        <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                        <div></div>
                        <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                        <div></div>
                        <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                        <div></div>
                        <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-lg font-bold tracking-wide bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent uppercase">
                  KASZINOPARTNER
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              A legmegbízhatóbb forrás az online kaszinók világában. 
              Szakmai elemzések, részletes értékelések, független rangsorok.
            </p>
          </div>

          {/* Kaszinók */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wide">Kaszinók</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/legjobb-online-kaszinok/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline cursor-pointer">Legjobb kaszinók</a></li>
              <li><a href="/uj-kaszino/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline cursor-pointer">Új kaszinók</a></li>
              <li><a href="/elo-kaszino/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline cursor-pointer">Élő kaszinók</a></li>
              <li><a href="/mobil-kaszino/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline cursor-pointer">Mobil kaszinók</a></li>
              <li><a href="/kripto-kaszino/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline cursor-pointer">Kripto kaszinók</a></li>
              <li><a href="/gyors-kifizetes/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline cursor-pointer">Gyors kifizetés</a></li>
            </ul>
          </div>

          {/* Bónuszok & Játékok */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wide">Bónuszok & Játékok</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/kaszino-bonuszok/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline cursor-pointer">Minden bónusz</a></li>
              <li><a href="/befizetes-nelkuli/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline cursor-pointer">No deposit</a></li>
              <li><a href="/ingyen-porgetesek/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline cursor-pointer">Ingyen pörgetések</a></li>
              <li><a href="/kaszino-jatekok/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline cursor-pointer">Minden játék</a></li>
              <li><a href="/nyerogepek/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline cursor-pointer">Nyerőgépek</a></li>
              <li><a href="/rulett/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline cursor-pointer">Rulett</a></li>
            </ul>
          </div>

          {/* Fizetés & Útmutatók */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wide">Fizetés & Info</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/fizetesi-modok/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline cursor-pointer">Fizetési módok</a></li>
              <li><a href="/hasznos-tippek/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline cursor-pointer">Útmutatók</a></li>
              <li><a href="/felelos-jatek/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline cursor-pointer">Felelős játék</a></li>
              <li><a href="/online-szabalyzas/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline cursor-pointer">Szabályozás</a></li>
              <li><a href="/blog/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline cursor-pointer">Blog & Hírek</a></li>
              <li><a href="/rolunk/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline cursor-pointer">Rólunk</a></li>
            </ul>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-700 pt-10 mb-10">
          <div className="bg-gradient-to-r from-gray-800/50 to-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
            <h4 className="text-xl font-bold mb-4 text-white uppercase tracking-wide">Fontos Jognyilatkozat</h4>
            <div className="text-sm text-gray-300 space-y-2 leading-relaxed">
              <p>
                Ez az oldal kizárólag tájékoztató jellegű. A szerencsejáték függőséget okozhat. 
                Csak felnőttek (18+) számára. Játssz felelősségteljesen!
              </p>
              <p>
                Az itt található információk a publikálás időpontjában aktuálisak voltak. 
                A kaszinók feltételei változhatnak, mindig ellenőrizd az aktuális szabályokat.
              </p>
              <p>
                <strong>Adózás:</strong> Az EU-n kívüli licenccel rendelkező kaszinók nyereményei 
                adókötelesek Magyarországon. Konzultálj adószakértővel!
              </p>
            </div>
          </div>
        </div>

        {/* Responsible Gaming */}
        <div className="border-t border-gray-700 pt-10 mb-10">
          <div className="text-center">
            <h4 className="text-xl font-bold mb-6 text-white uppercase tracking-wide">Felelős Játék Partnerek</h4>
            <div className="flex justify-center items-center flex-wrap gap-4 text-sm">
              <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 rounded-lg text-orange-200 font-medium">18+ Csak Felnőtteknek</span>
              <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 rounded-lg text-orange-200 font-medium">BeGambleAware</span>
              <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 rounded-lg text-orange-200 font-medium">GamCare</span>
              <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 rounded-lg text-orange-200 font-medium">Játssz Tudatosan</span>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-700 pt-8 pb-8">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <a href="/adatvedelmi-tajekoztato/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline cursor-pointer">Adatvédelem</a>
            <span className="text-gray-600">•</span>
            <a href="/felhasznalasi-feltetelek/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline cursor-pointer">Felhasználási feltételek</a>
            <span className="text-gray-600">•</span>
            <a href="/cookies/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline cursor-pointer">Cookie szabályzat</a>
            <span className="text-gray-600">•</span>
            <a href="/affiliate-disclaimer/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline cursor-pointer">Affiliate nyilatkozat</a>
            <span className="text-gray-600">•</span>
            <a href="/hogyan-ertekelunk/" className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline cursor-pointer">Értékelési módszer</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="font-medium">
              © 2025 KaszinoPartner.com. Minden jog fenntartva.
            </div>
            <div className="mt-4 md:mt-0 font-medium">
              Utolsó frissítés: 2025. január
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}