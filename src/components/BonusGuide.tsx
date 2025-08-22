export default function BonusGuide() {
  return (
    <section id="guide" className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-12">
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Bónuszok Világa: Melyik Ajánlat Éri Meg Igazán?
          </h2>
          <p className="text-lg text-gray-600">
            A kaszinó bónusz egy nagyszerű eszköz, hogy növeld a játékra szánt tőkéd, de tele van buktatókkal. 
            Segítünk eligazodni az ajánlatok tengerében.
          </p>
        </div>

        {/* Bonus Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Üdvözlő Bónuszok</h3>
            <p className="text-base text-gray-600 mb-4">
              Az üdvözlő bónusz általában két részből áll: egy befizetési bónuszból és ingyenes pörgetésekből.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span><strong>Befizetési bónusz:</strong> Általában 100%, ami azt jelenti, hogy a kaszinó megduplázza az első befizetésed</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span><strong>Ingyen pörgetés:</strong> Ezeket általában egy vagy több kijelölt nyerőgépen használhatod fel</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Megforgatási Követelmény</h3>
            <p className="text-base text-gray-600 mb-4">
              Ez a bónuszok legfontosabb, de leginkább félreértett része. Nézzük meg egy egyszerű példán keresztül!
            </p>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-sm space-y-2">
                <div><strong>Befizetés:</strong> 10.000 Ft</div>
                <div><strong>Bónusz:</strong> 100% (+10.000 Ft)</div>
                <div><strong>Követelmény:</strong> 35x bónusz</div>
                <div className="border-t pt-2 font-medium text-orange-600">
                  Megforgatandó: 10.000 × 35 = 350.000 Ft
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison: Cashback vs VIP */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Cashback vs. VIP Programok</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-orange-300">Cashback</h4>
              <p className="text-gray-200 mb-4">
                A kaszinó a nettó veszteségeid egy bizonyos százalékát (általában 5-15%) hetente vagy havonta visszaadja.
              </p>
              <div className="text-sm text-gray-300">
                <strong>Ideális:</strong> Alkalmi játékosoknak
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-orange-300">VIP Program</h4>
              <p className="text-gray-200 mb-4">
                A hűséges, sokat játszó játékosokat jutalmazza szintekkel és exkluzív előnyökkel.
              </p>
              <div className="text-sm text-gray-300">
                <strong>Ideális:</strong> Rendszeres, nagy tétes játékosoknak
              </div>
            </div>
          </div>
        </div>

        {/* Warning Box */}
        <div className="mt-8 bg-orange-50 border border-orange-200 rounded-lg p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                !
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold text-orange-800 mb-2">Fontos Figyelmeztetés</h4>
              <p className="text-base text-orange-700">
                Sok kaszinó kizárja a Skrill és Neteller befizetéseket az üdvözlő bónuszokból. 
                Mindig olvasd el a feltételeket, mielőtt befizetsz!
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}