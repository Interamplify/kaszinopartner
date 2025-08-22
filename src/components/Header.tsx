'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <header className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white shadow-2xl sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Compact Logo - Left */}
          <Link href="/" className="flex items-center group hover:scale-105 transition-all duration-300">
            <div className="relative mr-2">
              {/* Compact Two Dice Logo */}
              <div className="flex items-center -space-x-0.5">
                {/* First Die - Orange */}
                <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded shadow-lg flex items-center justify-center transform rotate-12">
                  <div className="grid grid-cols-2 gap-0.5">
                    <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                    <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                    <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                    <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                  </div>
                </div>
                {/* Second Die - Red */}
                <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded shadow-lg flex items-center justify-center transform -rotate-12">
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
            <span className="text-base font-black tracking-wider bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent uppercase">
              KASZINOPARTNER
            </span>
          </Link>
          
          {/* Compact Navigation - Right */}
          <nav className="hidden lg:flex items-center space-x-1">
            <div className="relative group">
              <Link 
                href="/legjobb-online-kaszinok/" 
                className="px-4 py-2 text-sm font-bold text-white hover:bg-white/10 rounded transition-all duration-200 flex items-center uppercase tracking-wide cursor-pointer"
              >
                Kaszinók
                <svg className="w-3 h-3 ml-1.5 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-1 w-64 bg-white/95 backdrop-blur-md border border-gray-100 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                <div className="py-2">
                  <Link href="/uj-kaszino/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Új kaszinók
                  </Link>
                  <Link href="/elo-kaszino/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Élő kaszinók
                  </Link>
                  <Link href="/mobil-kaszino/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Mobil kaszinók
                  </Link>
                  <Link href="/kripto-kaszino/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Kripto kaszinók
                  </Link>
                  <Link href="/gyors-kifizetes/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Gyors kifizetés
                  </Link>
                  <Link href="/minimum-befizetes/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Min. befizetés
                  </Link>
                  <Link href="/legjobb-ertek/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Legjobb érték
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <Link 
                href="/kaszino-bonuszok/" 
                className="px-4 py-2 text-sm font-bold text-white hover:bg-white/10 rounded transition-all duration-200 flex items-center uppercase tracking-wide cursor-pointer"
              >
                Bónuszok
                <svg className="w-3 h-3 ml-1.5 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-1 w-64 bg-white/95 backdrop-blur-md border border-gray-100 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                <div className="py-2">
                  <Link href="/befizetes-nelkuli/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    No Deposit
                  </Link>
                  <Link href="/ingyen-porgetesek/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Ingyen pörgetések
                  </Link>
                  <Link href="/cashback/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Cashback
                  </Link>
                  <Link href="/high-roller/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    High Roller
                  </Link>
                  <Link href="/kodok/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Kódok
                  </Link>
                  <Link href="/udvozlo/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Üdvözlő
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <Link 
                href="/kaszino-jatekok/" 
                className="px-4 py-2 text-sm font-bold text-white hover:bg-white/10 rounded transition-all duration-200 flex items-center uppercase tracking-wide cursor-pointer"
              >
                Játékok
                <svg className="w-3 h-3 ml-1.5 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-1 w-64 bg-white/95 backdrop-blur-md border border-gray-100 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                <div className="py-2">
                  <Link href="/nyerogepek/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Nyerőgépek
                  </Link>
                  <Link href="/rulett/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Rulett
                  </Link>
                  <Link href="/blackjack/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Blackjack
                  </Link>
                  <Link href="/poker/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Póker
                  </Link>
                  <Link href="/baccarat/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Baccarat
                  </Link>
                  <Link href="/crash/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Crash játékok
                  </Link>
                  <Link href="/kaparos-sorsjegy/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Kaparós sorsjegy
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <Link 
                href="/fizetesi-modok/" 
                className="px-4 py-2 text-sm font-bold text-white hover:bg-white/10 rounded transition-all duration-200 flex items-center uppercase tracking-wide cursor-pointer"
              >
                Fizetés
                <svg className="w-3 h-3 ml-1.5 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-1 w-64 bg-white/95 backdrop-blur-md border border-gray-100 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                <div className="py-2">
                  <Link href="/visa/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Visa
                  </Link>
                  <Link href="/mastercard/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Mastercard
                  </Link>
                  <Link href="/neteller/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Neteller
                  </Link>
                  <Link href="/skrill/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Skrill
                  </Link>
                  <Link href="/paysafecard/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Paysafecard
                  </Link>
                  <Link href="/bitcoin/" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-gray-900 transition-all duration-200 group">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Bitcoin
                  </Link>
                </div>
              </div>
            </div>
            
            <Link 
              href="/hasznos-tippek/" 
              className="px-4 py-2 text-sm font-bold text-white hover:bg-white/10 rounded transition-all duration-200 uppercase tracking-wide cursor-pointer"
            >
              Útmutatók
            </Link>
            
            <Link 
              href="/blog/" 
              className="px-4 py-2 text-sm font-bold text-white hover:bg-white/10 rounded transition-all duration-200 uppercase tracking-wide cursor-pointer"
            >
              Blog
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 text-white hover:bg-white/10 rounded transition-all duration-200 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-800 border-t border-gray-700 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 py-2">
              
              {/* Kaszinók */}
              <div className="py-1">
                <div className="text-sm font-bold text-white uppercase tracking-wide mb-1">Kaszinók</div>
                <div className="pl-3">
                  <a href="/legjobb-online-kaszinok/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Legjobb kaszinók</a>
                  <a href="/uj-kaszino/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Új kaszinók</a>
                  <a href="/elo-kaszino/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Élő kaszinók</a>
                  <a href="/mobil-kaszino/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Mobil kaszinók</a>
                  <a href="/kripto-kaszino/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Kripto kaszinók</a>
                  <a href="/gyors-kifizetes/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Gyors kifizetés</a>
                  <a href="/minimum-befizetes/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Min. befizetés</a>
                  <a href="/legjobb-ertek/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Legjobb érték</a>
                </div>
              </div>

              {/* Bónuszok */}
              <div className="py-1 border-t border-gray-700 mt-2 pt-2">
                <div className="text-sm font-bold text-white uppercase tracking-wide mb-1">Bónuszok</div>
                <div className="pl-3">
                  <a href="/kaszino-bonuszok/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Minden bónusz</a>
                  <a href="/befizetes-nelkuli/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">No Deposit</a>
                  <a href="/ingyen-porgetesek/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Ingyen pörgetések</a>
                  <a href="/cashback/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Cashback</a>
                  <a href="/high-roller/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">High Roller</a>
                  <a href="/kodok/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Kódok</a>
                  <a href="/udvozlo/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Üdvözlő</a>
                </div>
              </div>

              {/* Játékok */}
              <div className="py-1 border-t border-gray-700 mt-2 pt-2">
                <div className="text-sm font-bold text-white uppercase tracking-wide mb-1">Játékok</div>
                <div className="pl-3">
                  <a href="/kaszino-jatekok/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Minden játék</a>
                  <a href="/nyerogepek/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Nyerőgépek</a>
                  <a href="/rulett/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Rulett</a>
                  <a href="/blackjack/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Blackjack</a>
                  <a href="/poker/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Póker</a>
                  <a href="/baccarat/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Baccarat</a>
                  <a href="/crash/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Crash játékok</a>
                  <a href="/kaparos-sorsjegy/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Kaparós sorsjegy</a>
                </div>
              </div>

              {/* Fizetés */}
              <div className="py-1 border-t border-gray-700 mt-2 pt-2">
                <div className="text-sm font-bold text-white uppercase tracking-wide mb-1">Fizetés</div>
                <div className="pl-3">
                  <a href="/fizetesi-modok/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Minden módszer</a>
                  <a href="/visa/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Visa</a>
                  <a href="/mastercard/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Mastercard</a>
                  <a href="/neteller/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Neteller</a>
                  <a href="/skrill/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Skrill</a>
                  <a href="/paysafecard/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Paysafecard</a>
                  <a href="/bitcoin/" className="block py-1 text-sm text-gray-300 hover:text-orange-400 cursor-pointer">Bitcoin</a>
                </div>
              </div>

              {/* Enlaces directos */}
              <div className="py-1 border-t border-gray-700 mt-2 pt-2 pb-3">
                <a href="/hasznos-tippek/" className="block py-1 text-sm font-bold text-white hover:text-orange-400 cursor-pointer uppercase tracking-wide">Útmutatók</a>
                <a href="/blog/" className="block py-1 text-sm font-bold text-white hover:text-orange-400 cursor-pointer uppercase tracking-wide">Blog</a>
              </div>

            </div>
          </div>
        )}
      </div>
    </header>
  )
}