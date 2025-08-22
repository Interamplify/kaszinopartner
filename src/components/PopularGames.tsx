const topGames = [
  {
    name: "Sweet Bonanza",
    provider: "Pragmatic Play",
    description: "A modern klasszikus. Ebben a játékban nincsenek nyerővonalak, a \"Pay Anywhere\" mechanika révén bárhol fizet.",
    features: ["Pay Anywhere mechanika", "Tumble funkció", "Óriási szorzók", "Magas volatilitás"],
    type: "Nyerőgép"
  },
  {
    name: "Book of Ra",
    provider: "Novomatic/Greentube", 
    description: "Az igazi klasszikus, az egyiptomi témájú nyerőgépek alfája. A bónusz kör során egy szimbólum bővülővé válik.",
    features: ["Bővülő szimbólumok", "Ingyenes pörgetések", "Egyiptomi téma", "Klasszikus játékmenet"],
    type: "Nyerőgép"
  },
  {
    name: "Gates of Olympus",
    provider: "Pragmatic Play",
    description: "Zeusz birodalmában járunk, ahol a szorzók csak úgy potyognak az égből. Hasonló mechanika a Sweet Bonanzához.",
    features: ["Zeusz szorzói", "Pay Anywhere", "Tumble mechanika", "500x-os szorzók"],
    type: "Nyerőgép"
  }
];

const liveGames = [
  {
    name: "Élő Blackjack",
    description: "A cél 21-hez a legközelebb kerülni. Az alapstratégiai táblázat használatával a ház előnye akár 0,5% alá is csökkenthető!",
    advantage: "0.5% ház előny"
  },
  {
    name: "Élő Rulett",
    description: "Mindig az európai (egy nullás) változatot válaszd az amerikai (dupla nullás) helyett!",
    advantage: "2.7% ház előny"
  },
  {
    name: "Game Show-k",
    description: "Az Evolution Gaming forradalmasította a piacot olyan játékokkal, mint a Crazy Time vagy a Monopoly Live.",
    advantage: "TV show élmény"
  }
];

export default function PopularGames() {
  return (
    <section className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-12">
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            A Legnépszerűbb Játékok
          </h2>
          <p className="text-lg text-gray-600">
            A több ezer játék között könnyű elveszni. Bemutatjuk a magyar játékosok legnagyobb kedvenceit.
          </p>
        </div>

        {/* Top Slot Games */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Top 3 Nyerőgép, Amit Mindenkinek Ki Kell Próbálnia
          </h3>
          
          <div className="grid gap-6">
            {topGames.map((game, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">{game.name}</h4>
                      <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {game.provider}
                      </span>
                    </div>
                    <p className="text-base text-gray-600 mb-4">
                      {game.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {game.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Casino */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Élő Kaszinó Élmény: Valódi Osztókkal
          </h3>
          <p className="text-base text-gray-600 mb-6">
            Szeretnéd a valódi kaszinók hangulatát otthonod kényelméből? Az élő osztós játékok ezt teszik lehetővé.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {liveGames.map((game, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">{game.name}</h4>
                <p className="text-sm text-gray-600 mb-4">
                  {game.description}
                </p>
                <div className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                  {game.advantage}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pro Tips */}
        <div className="bg-gray-900 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Profi Tippek: Hogyan Növeld Nyerési Esélyeidet?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-orange-300">Nyerőgépek</h4>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>• Ismerd meg az RTP-t és a volatilitást</li>
                <li>• Válassz a játékstílusodnak megfelelő gépet</li>
                <li>• Kezeld a bankrollod felelősségteljesen</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-orange-300">Blackjack</h4>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>• Tanuld meg az alapstratégiát</li>
                <li>• Ne köss biztosítást</li>
                <li>• Ne hozz érzelmi döntéseket</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-orange-300">Rulett</h4>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>• Válaszd az európai változatot</li>
                <li>• Koncentrálj a külső tétekre</li>
                <li>• Ne dőlj be a &quot;biztos&quot; rendszereknek</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}