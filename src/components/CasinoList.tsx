'use client';
import { useState } from 'react';

const casinos = [
  {
    rank: 1,
    name: "Boabet",
    rating: 9.4,
    license: "MGA",
    bonus: "100% akár 40.000 Ft + 60 IP",
    wagering: "30x B",
    wageringType: "excellent",
    games: "5000+",
    payout: "24-48h",
    minDeposit: "4000 Ft",
    features: ["MGA licenc", "24-48h kifizetés", "5000+ játék", "30x megforgatás"],
    providers: "NetEnt, Pragmatic Play, Play'n GO",
    featured: true
  },
  {
    rank: 2,
    name: "Quickwin",
    rating: 9.3,
    license: "Curacao",
    bonus: "100% akár 150.000 Ft + 200 IP",
    wagering: "35x D+B",
    wageringType: "good",
    games: "9500+",
    payout: "1-3 nap",
    minDeposit: "5000 Ft",
    features: ["9500+ játék", "15% cashback", "Autós téma", "Kriptovaluták"],
    providers: "NetEnt, Evolution, Pragmatic Play",
    featured: false,
  },
  {
    rank: 3,
    name: "Sportaza",
    rating: 9.2,
    license: "Curacao",
    bonus: "100% akár 150.000 Ft + 200 IP",
    wagering: "35x D+B",
    wageringType: "good",
    games: "5000+",
    payout: "1-3 nap",
    minDeposit: "5000 Ft",
    features: ["5000+ játék", "15% cashback", "Sport téma", "HUF számla"],
    providers: "NetEnt, Evolution, Pragmatic Play",
    featured: false,
  },
  {
    rank: 4,
    name: "20bet",
    rating: 9.1,
    license: "Curacao",
    bonus: "100% akár 40.000 Ft + 120 IP",
    wagering: "40x B",
    wageringType: "average",
    games: "10000+",
    payout: "12-24h",
    minDeposit: "3500 Ft",
    features: ["10000+ játék", "Mobil app", "VIP program", "Gyors kifizetés"],
    providers: "NetEnt, Pragmatic Play, Playtech",
    featured: false,
  },
  {
    rank: 5,
    name: "22bet",
    rating: 8.8,
    license: "Curacao",
    bonus: "100% akár 100.000 Ft",
    wagering: "50x B",
    wageringType: "poor",
    games: "3000+",
    payout: "<24h",
    minDeposit: "400 Ft",
    features: ["Alacsony min. befizetés", "VIP program", "Kriptovaluták", "Gyors kifizetés"],
    providers: "NetEnt, Microgaming, Pragmatic Play",
    featured: false,
  },
  {
    rank: 6,
    name: "Powbet",
    rating: 9.2,
    license: "Curacao",
    bonus: "100% akár 150.000 Ft + 200 IP",
    wagering: "35x D+B",
    wageringType: "good",
    games: "3000+",
    payout: "0-48h",
    minDeposit: "5000 Ft",
    features: ["15% cashback", "VIP program", "Kriptovaluták", "Élő kaszinó"],
    providers: "NetEnt, Evolution, Pragmatic Play",
    featured: false,
  },
  {
    rank: 7,
    name: "Librabet",
    rating: 9.0,
    license: "Curacao",
    bonus: "100% akár 150.000 Ft + 200 IP",
    wagering: "35x D+B",
    wageringType: "good",
    games: "9000+",
    payout: "1-3 nap",
    minDeposit: "3000 Ft",
    features: ["9000+ játék", "15% cashback", "Könyv téma", "Magyar support"],
    providers: "NetEnt, Play'n GO, Pragmatic Play",
    featured: false,
  },
  {
    rank: 8,
    name: "Wazamba",
    rating: 9.1,
    license: "Curacao",
    bonus: "100% akár 150.000 Ft + 200 IP",
    wagering: "35x D+B",
    wageringType: "good",
    games: "4000+",
    payout: "1-3 nap",
    minDeposit: "5000 Ft",
    features: ["4000+ játék", "Exkluzív játékok", "Afrikai téma", "Élő kaszinó"],
    providers: "NetEnt, Pragmatic Play, Evolution",
    featured: false,
  },
  {
    rank: 9,
    name: "Nomini",
    rating: 9.2,
    license: "Curacao",
    bonus: "100% akár 150.000 Ft + 200 IP",
    wagering: "35x D+B",
    wageringType: "good",
    games: "5000+",
    payout: "<24h",
    minDeposit: "3000 Ft",
    features: ["5000+ játék", "15% cashback", "Anime téma", "Gyors kifizetés"],
    providers: "Pragmatic Play, Spinomenal, Evolution",
    featured: false,
  },
  {
    rank: 10,
    name: "Bankonbet",
    rating: 9.0,
    license: "Curacao",
    bonus: "100% akár 150.000 Ft + 200 IP",
    wagering: "35x D+B",
    wageringType: "good",
    games: "2000+",
    payout: "1-3 nap",
    minDeposit: "6000 Ft",
    features: ["Bank téma", "15% cashback", "VIP program", "Élő support"],
    providers: "Pragmatic Play, Quickspin, Yggdrasil",
    featured: false,
  }
];

function getWageringBadge(type: string) {
  switch (type) {
    case 'excellent':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'good':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'average':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'poor':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
}

function getLicenseBadge(license: string) {
  if (license === 'MGA') {
    return 'bg-gray-900 text-white';
  }
  return 'bg-gray-600 text-white';
}

export default function CasinoList() {
  const [expandedCasinos, setExpandedCasinos] = useState<number[]>([1]); // Boabet (rank 1) abierto por defecto

  const toggleExpanded = (rank: number) => {
    setExpandedCasinos(prev => 
      prev.includes(rank) 
        ? prev.filter(r => r !== rank)
        : [...prev, rank]
    );
  };

  return (
    <section id="ranking" className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-12">
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Top 10 online kaszinó rangsor
          </h2>
          <p className="text-gray-600">
            Részletes értékelésünk alapján összeállított rangsor. Minden kaszinó 15+ kritérium szerint tesztelve.
          </p>
        </div>

        <div className="space-y-4">
          {casinos.map((casino) => {
            const isExpanded = expandedCasinos.includes(casino.rank);
            
            return (
              <div
                key={casino.rank}
                className={`bg-white border rounded-lg hover:shadow-md transition-all duration-200 ${
                  casino.featured 
                    ? 'border-orange-300 bg-gradient-to-r from-orange-50 via-white to-white' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="p-4 md:p-6">
                  {/* Mobile Layout */}
                  <div className="block md:hidden">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div
                            className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs z-10 ${
                              casino.featured ? 'bg-orange-500' : 'bg-gray-900'
                            }`}
                          >
                            {casino.rank}
                          </div>
                          <div className="w-16 h-12 bg-gray-50 border-2 border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                            <span className="text-xs font-bold text-gray-800 text-center px-1">
                              {casino.name}
                            </span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{casino.name}</h3>
                          <div className="flex items-center space-x-2">
                            <div className="flex text-orange-400 text-sm">★★★★★</div>
                            <span className="font-bold text-gray-900">{casino.rating}/10</span>
                            <div className={`text-xs font-medium px-2 py-1 rounded ${getLicenseBadge(casino.license)}`}>
                              {casino.license}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 mb-4">
                      <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors cursor-pointer">
                        Játék most
                      </button>
                      <button 
                        onClick={() => toggleExpanded(casino.rank)}
                        className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 hover:border-gray-400 font-semibold py-2 px-4 rounded-lg text-sm transition-colors flex items-center cursor-pointer"
                      >
                        Részletek
                        <svg 
                          className={`w-3 h-3 ml-1 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
                      <div>
                        <span className="font-medium">Játékok:</span> {casino.games}
                      </div>
                      <div>
                        <span className="font-medium">Kifizetés:</span> {casino.payout}
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:grid md:grid-cols-12 gap-4 items-center">
                    
                    {/* Logo Area - Col 1-2 */}
                    <div className="col-span-2 flex items-center justify-center">
                      <div className="relative">
                        <div
                          className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 ${
                            casino.featured ? 'bg-orange-500' : 'bg-gray-900'
                          }`}
                        >
                          {casino.rank}
                        </div>
                        <div className="w-24 h-16 bg-gray-50 border-2 border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                          <span className="text-sm font-bold text-gray-800 text-center leading-tight px-2">
                            {casino.name}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Header Info - Col 3-7 */}
                    <div className="col-span-5">
                      <div className="flex items-center space-x-4 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{casino.name}</h3>
                        <div className={`text-sm font-medium px-3 py-1 rounded ${getLicenseBadge(casino.license)}`}>
                          {casino.license}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex text-orange-400 text-lg">★★★★★</div>
                        <span className="font-bold text-gray-900 text-xl">{casino.rating}/10</span>
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <span className="font-medium">Játékok:</span>
                          <span>{casino.games}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <span className="font-medium">Kifizetés:</span>
                          <span>{casino.payout}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Buttons - Col 8-12 */}
                    <div className="col-span-5 flex justify-end space-x-3">
                      <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg text-base transition-colors shadow-sm cursor-pointer">
                        Játék most
                      </button>
                      <button 
                        onClick={() => toggleExpanded(casino.rank)}
                        className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 hover:border-gray-400 font-semibold py-3 px-6 rounded-lg text-base transition-colors flex items-center cursor-pointer"
                      >
                        Több részlet
                        <svg 
                          className={`w-4 h-4 ml-2 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Expandable Details Section */}
                  {isExpanded && (
                    <div className="mt-6 grid md:grid-cols-3 gap-6 bg-gray-50 rounded-lg p-4 animate-in slide-in-from-top duration-200">
                      
                      {/* Bonus Section */}
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                          <h4 className="font-bold text-gray-900 text-lg">Bónusz</h4>
                        </div>
                        <div className="text-lg font-bold text-gray-900 mb-2">{casino.bonus}</div>
                        <div className="flex items-center space-x-2">
                          <span className={`text-xs font-semibold px-3 py-2 rounded-full border ${getWageringBadge(casino.wageringType)}`}>
                            {casino.wagering}
                          </span>
                          <span className="text-sm text-gray-500">megforgatás</span>
                        </div>
                      </div>
                      
                      {/* Stats Section */}
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <h4 className="font-bold text-gray-900 text-lg">Adatok</h4>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Min. befizetés:</span>
                            <span className="font-medium text-gray-900">{casino.minDeposit}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Szolgáltatók:</span>
                            <span className="font-medium text-gray-900">{casino.providers.split(', ').length}+</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Features Section */}
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <h4 className="font-bold text-gray-900 text-lg">Előnyök</h4>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {casino.features.slice(0, 3).map((feature, index) => (
                            <span
                              key={index}
                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Minden kaszinó alaposan tesztelve • 15+ értékelési kritérium • Frissítve: 2025
          </p>
        </div>
        
      </div>
    </section>
  );
}