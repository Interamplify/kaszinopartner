export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50/30 border-b border-gray-200 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_50%)]"></div>
      
      <div className="max-w-5xl mx-auto px-4 py-10 relative">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <span>Főoldal</span>
          <span className="mx-2">•</span>
          <span className="text-gray-900 font-medium">Online Kaszinók</span>
        </nav>
        
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Side - Title and Description */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
                A 10 legjobb online kaszinó Magyarországon
              </h1>
              <p className="text-lg text-orange-600 font-semibold mb-6">
                Részletes összehasonlítás és értékelés • 2025
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Szakmai elemzésünk alapján összeállított rangsor a legjobb magyar játékosokat kiszolgáló online kaszinókról. 
                Minden platform alaposan tesztelve, átlátható kritériumok szerint értékelve.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">60+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Tesztelt</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Kritérium</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">2025</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Frissítve</div>
              </div>
            </div>
          </div>

          {/* Right Side - Boabet Featured Card */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-orange-50 via-white to-orange-50 border-2 border-orange-300 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                  Legjobb választás 2025
                </span>
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center font-black text-sm shadow-md">
                  #1
                </div>
              </div>
              
              <div className="mb-6 text-center">
                <div className="w-24 h-16 bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-300 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-md">
                  <span className="text-lg font-black text-gray-800">Boabet</span>
                </div>
                <div className="flex items-center justify-center mb-2">
                  <div className="flex text-orange-400 mr-3 text-xl">★★★★★</div>
                  <span className="font-black text-xl text-gray-900">9.4/10</span>
                </div>
                <p className="text-sm text-gray-600 font-medium">MGA Licenc • Gyors kifizetés</p>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-red-100 border border-orange-300 rounded-xl p-4 mb-4">
                <div className="text-center mb-2">
                  <div className="text-lg font-bold text-gray-900">100% bónusz</div>
                  <div className="text-2xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">40.000 Ft-ig</div>
                  <div className="text-sm text-gray-700">+ 60 ingyen pörgetés</div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-3 px-6 rounded-lg hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl transition-all duration-200 text-base cursor-pointer">
                Játék most
              </button>
              
              <div className="text-center mt-3 text-xs text-gray-500">
                18+ • Felelős játék
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}