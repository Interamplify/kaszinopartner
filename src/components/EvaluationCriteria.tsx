const evaluationCriteria = [
  {
    title: "Licenc és Biztonság",
    weight: "25%",
    description: "MGA (arany standard) vs Curacao licenc, SSL titkosítás, játékosvédelem",
    details: [
      "MGA: Rendkívül szigorú szabályozás, erős játékosvédelem",
      "Curacao: Rugalmasabb, de lazább szabályozás", 
      "SSL titkosítás és adatvédelem szintje",
      "KYC eljárások és pénzmosás elleni védelem"
    ]
  },
  {
    title: "Bónuszok Átláthatósága",
    weight: "20%", 
    description: "Megforgatási követelmények, feltételek tisztasága, valós érték",
    details: [
      "30x B (kiváló) vs 50x+ (gyenge) megforgatási arány",
      "D+B vs csak B alapú számítás",
      "Játék-kizárások és hozzájárulási arányok",
      "Időkorlátok és max. tét szabályok"
    ]
  },
  {
    title: "Játékkínálat és Minőség", 
    weight: "15%",
    description: "Játékok száma, top szolgáltatók, élő kaszinó, exkluzív címek",
    details: [
      "5000+ játék (kiváló), 1000- (gyenge)",
      "Top szolgáltatók: NetEnt, Pragmatic Play, Evolution",
      "Élő kaszinó minősége és választéka",
      "Exkluzív játékok és first-to-market címek"
    ]
  },
  {
    title: "Kifizetési Sebesség",
    weight: "15%",
    description: "Feldolgozási idők, fizetési módok, magyar forint támogatás",
    details: [
      "E-pénztárca: 24h (kiváló) vs 3+ nap (gyenge)",
      "Magyar forint (HUF) számlavezetés",
      "Kriptovaluta támogatás és feldolgozás",
      "Bankkártyás kifizetések sebessége"
    ]
  },
  {
    title: "Ügyfélszolgálat",
    weight: "10%", 
    description: "Magyar nyelvű support, elérhetőség, válaszidő",
    details: [
      "24/7 élő chat magyar nyelven",
      "E-mail support válaszideje (<12h)",
      "Telefonos elérhetőség",
      "Problémamegoldás hatékonysága"
    ]
  },
  {
    title: "Mobil Élmény",
    weight: "8%",
    description: "Reszponzív design, alkalmazás, funkcionalitás",
    details: [
      "Natív mobilalkalmazás (iOS/Android)",
      "Reszponzív webes felület",
      "Teljes funkcionalitás mobilon",
      "Játékok optimalizáltsága"
    ]
  },
  {
    title: "VIP Program",
    weight: "7%",
    description: "Szintek, jutalmak, cashback, exkluzív ajánlatok",
    details: [
      "Többszintű VIP rendszer",
      "Cashback százalék (15% kiváló)",
      "Személyes menedzser",
      "Exkluzív események és bónuszok"
    ]
  }
];

export default function EvaluationCriteria() {
  return (
    <section id="reviews" className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-12">
        
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Hogyan Értékeljük a Kaszinókat?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            A 15 pontos, kíméletlen kritériumrendszerünk - Nem csak a bónuszok csillogó számait nézzük, 
            hanem a mélyére ásunk a feltételeknek.
          </p>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <p className="text-lg text-orange-800">
              <strong>Átláthatóság a cél:</strong> Pontosan lásd, mi alapján állítjuk fel a rangsorunkat. 
              Minden kritérium súlyozott értékelésen alapul.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {evaluationCriteria.map((criteria, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {criteria.title}
                    </h3>
                    <p className="text-base text-gray-600">
                      {criteria.description}
                    </p>
                  </div>
                </div>
                <div className="bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                  {criteria.weight}
                </div>
              </div>
              
              <div className="ml-16">
                <h4 className="font-semibold text-gray-900 mb-3">Főbb értékelési szempontok:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {criteria.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* License Comparison */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
              <span className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                MGA
              </span>
              Malta Gaming Authority
            </h3>
            <ul className="space-y-2 text-sm text-green-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Arany standard - legszigorúbb szabályozás
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Erős játékosvédelem és panaszkezelés
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Garantáltan fair játékmenet
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                EU-n belüli szabályozás
              </li>
            </ul>
            <div className="mt-4 text-center">
              <span className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold">
                Csak Boabet ⭐
              </span>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                CUR
              </span>
              Curacao eGaming
            </h3>
            <ul className="space-y-2 text-sm text-blue-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Rugalmas szabályozás
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Kriptovaluta támogatás
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">⚠</span>
                Lazább játékosvédelem
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">⚠</span>
                Vitás esetek nehezebb rendezése
              </li>
            </ul>
            <div className="mt-4 text-center">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                Többi 9 kaszinó
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}