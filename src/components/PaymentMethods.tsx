const paymentMethods = [
  {
    name: "Bankkártya (Visa/MC)",
    depositTime: "Azonnali",
    withdrawTime: "1-5 munkanap",
    pros: ["Széleskörűen elfogadott", "Egyszerű használat"],
    cons: ["Lassú kifizetés", "Banki adatok megadása szükséges"],
    icon: "💳"
  },
  {
    name: "Skrill / Neteller",
    depositTime: "Azonnali", 
    withdrawTime: "0-48 óra",
    pros: ["Gyors kifizetés", "Biztonságos", "Diszkrét"],
    cons: ["Bónuszokból gyakran kizárják"],
    icon: "💰"
  },
  {
    name: "Paysafecard",
    depositTime: "Azonnali",
    withdrawTime: "Kifizetésre nem alkalmas",
    pros: ["Teljesen anonim", "Kontrollált költés"],
    cons: ["Csak befizetésre alkalmas"],
    icon: "🎫"
  },
  {
    name: "Kriptovaluták",
    depositTime: "Percek",
    withdrawTime: "Percek - 1 óra", 
    pros: ["Leggyorsabb", "Anonim", "Alacsony díjak"],
    cons: ["Volatilitás", "Technikai tudás szükséges"],
    icon: "₿"
  }
];

export default function PaymentMethods() {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-12">
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Befizetések és Kifizetések
          </h2>
          <p className="text-lg text-gray-600">
            A zökkenőmentes pénzügyi tranzakciók alapvetőek. Lássuk a magyar játékosok számára legfontosabb lehetőségeket.
          </p>
        </div>

        {/* HUF Notice */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-orange-800 mb-2">
            Magyar Forint (HUF) Számlavezetés
          </h3>
          <p className="text-base text-orange-700">
            Mindig olyan kaszinót válassz, ahol van magyar forint kaszinó számlavezetés, 
            így elkerülheted a költséges pénzváltást és az árfolyamkockázatot.
          </p>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden space-y-4 mb-8">
          {paymentMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-gray-900 text-white px-4 py-3">
                <div className="flex items-center">
                  <span className="text-xl mr-3">{method.icon}</span>
                  <h3 className="font-semibold text-base">{method.name}</h3>
                </div>
              </div>
              <div className="p-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-1">Befizetési Idő</div>
                    <div className="text-sm text-gray-700">{method.depositTime}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-1">Kifizetési Idő</div>
                    <div className="text-sm text-gray-700">{method.withdrawTime}</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900 mb-2">Előnyök</div>
                  <ul className="space-y-1">
                    {method.pros.map((pro, proIndex) => (
                      <li key={proIndex} className="flex items-center text-sm text-green-700">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900 mb-2">Hátrányok</div>
                  <ul className="space-y-1">
                    {method.cons.map((con, conIndex) => (
                      <li key={conIndex} className="flex items-center text-sm text-red-700">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-2 flex-shrink-0"></div>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-4 text-left text-base font-semibold">Fizetési Mód</th>
                  <th className="px-4 py-4 text-left text-base font-semibold">Befizetési Idő</th>
                  <th className="px-4 py-4 text-left text-base font-semibold">Kifizetési Idő</th>
                  <th className="px-4 py-4 text-left text-base font-semibold">Előnyök</th>
                  <th className="px-4 py-4 text-left text-base font-semibold">Hátrányok</th>
                </tr>
              </thead>
              <tbody>
                {paymentMethods.map((method, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-4 text-base font-medium text-gray-900">
                      <div className="flex items-center">
                        <span className="text-xl mr-3">{method.icon}</span>
                        {method.name}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-base text-gray-700">
                      {method.depositTime}
                    </td>
                    <td className="px-4 py-4 text-base text-gray-700">
                      {method.withdrawTime}
                    </td>
                    <td className="px-4 py-4 text-sm">
                      <ul className="space-y-1">
                        {method.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="flex items-center text-green-700">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-4 py-4 text-sm">
                      <ul className="space-y-1">
                        {method.cons.map((con, conIndex) => (
                          <li key={conIndex} className="flex items-center text-red-700">
                            <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Crypto Guide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Bitcoin Befizetés Lépésről Lépésre</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <span className="bg-white bg-opacity-20 rounded-full w-6 h-6 flex items-center justify-center mr-3 text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                <span><strong>Szerezz egy kriptotárcát:</strong> Hozz létre egy tárcát egy megbízható szolgáltatónál (pl. Exodus, Trust Wallet)</span>
              </div>
              <div className="flex items-start">
                <span className="bg-white bg-opacity-20 rounded-full w-6 h-6 flex items-center justify-center mr-3 text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                <span><strong>Vásárolj Bitcoint:</strong> Egy tőzsdén (pl. Binance, Coinbase) vegyél Bitcoint bankkártyával</span>
              </div>
              <div className="flex items-start">
                <span className="bg-white bg-opacity-20 rounded-full w-6 h-6 flex items-center justify-center mr-3 text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                <span><strong>Fizess be a kaszinóba:</strong> Válaszd a Bitcoint, másold ki a címet és utald át. Percek alatt megérkezik!</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Kifizetési Idők Rangsora</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white rounded border">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🥇</span>
                  <span className="text-base font-medium">Kriptovaluták</span>
                </div>
                <span className="text-sm text-green-600 font-medium">Percek</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded border">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🥈</span>
                  <span className="text-base font-medium">E-pénztárcák</span>
                </div>
                <span className="text-sm text-blue-600 font-medium">24 óra</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded border">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🥉</span>
                  <span className="text-base font-medium">Bankkártya</span>
                </div>
                <span className="text-sm text-orange-600 font-medium">1-5 nap</span>
              </div>
            </div>
          </div>
        </div>

        {/* Important Warning */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                !
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold text-red-800 mb-2">Fontos Figyelmeztetés</h4>
              <p className="text-base text-red-700">
                Sok kaszinó kizárja a <strong>Skrill</strong> és <strong>Neteller</strong> befizetéseket az üdvözlő bónuszokból. 
                Mindig olvasd el a feltételeket, mielőtt befizetsz!
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}