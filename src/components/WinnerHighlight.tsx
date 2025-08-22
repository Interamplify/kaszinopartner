export default function WinnerHighlight() {
  return (
    <section className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-12">
        
        {/* Winner Section */}
        <div className="bg-white border border-orange-200 rounded-lg overflow-hidden shadow-sm">
          {/* Winner Badge */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 rounded-full w-6 h-6 flex items-center justify-center mr-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className="text-white font-semibold text-sm uppercase tracking-wide">
                  Legjobb választás 2025
                </span>
              </div>
              <div className="text-white text-sm font-medium">
                #1 Helyezett
              </div>
            </div>
          </div>
          
          {/* Winner Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              
              {/* Casino Info */}
              <div className="md:col-span-2">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Boabet</h2>
                    <div className="flex items-center mb-2">
                      <div className="flex text-orange-400 text-sm mr-2">★★★★★</div>
                      <span className="text-xl font-semibold text-gray-900">9.4/10</span>
                    </div>
                    <div className="inline-block bg-navy-900 text-white text-xs font-medium px-2 py-1 rounded">
                      MGA Licenc (Málta)
                    </div>
                  </div>
                </div>
                
                {/* Key Features */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-base text-gray-600">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    24-48h kifizetés
                  </div>
                  <div className="flex items-center text-base text-gray-600">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    5000+ játék
                  </div>
                  <div className="flex items-center text-base text-gray-600">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    30x megforgatás
                  </div>
                  <div className="flex items-center text-base text-gray-600">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    Magyar támogatás
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed">
                  A Boabet egyértelműen kiemelkedik a mezőnyből. Az MGA licenc garantálja a fair játékot és biztonságot, 
                  míg a kiváló megforgatási feltételek és gyors kifizetések teszik vonzóvá a magyar játékosok számára.
                </p>
              </div>
              
              {/* Bonus & CTA */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900 mb-1">
                    100% bónusz
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    40.000 Ft-ig
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    + 60 ingyen pörgetés
                  </div>
                  
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-md text-lg transition-colors duration-200">
                    Játék most
                  </button>
                  
                  <div className="text-xs text-gray-500 mt-2">
                    18+ • Felelős játék
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        
        {/* Quick Summary */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Alapos vizsgálatunk után egyértelmű győztest hirdethetünk. Az alábbiakban bemutatjuk 
            a teljes top 10 listát részletes összehasonlítással és értékelésekkel.
          </p>
        </div>
        
      </div>
    </section>
  )
}