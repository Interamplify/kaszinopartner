const comparisonData = [
  {
    criterion: "Üdvözlő bónusz",
    boabet: "100% - 40.000 Ft + 60 IP",
    quickwin: "100% - 150.000 Ft + 200 IP", 
    sportaza: "100% - 150.000 Ft + 200 IP",
    bet20: "100% - 40.000 Ft + 120 IP",
    bet22: "100% - 100.000 Ft",
    powbet: "100% - 150.000 Ft + 200 IP"
  },
  {
    criterion: "Megforgatás",
    boabet: { value: "30x B", type: "excellent" },
    quickwin: { value: "35x D+B", type: "good" },
    sportaza: { value: "35x D+B", type: "good" },
    bet20: { value: "40x B", type: "average" },
    bet22: { value: "50x B", type: "poor" },
    powbet: { value: "35x D+B", type: "good" }
  },
  {
    criterion: "Játékok száma",
    boabet: "5.000+",
    quickwin: "9.500+",
    sportaza: "5.000+", 
    bet20: "10.000+",
    bet22: "3.000+",
    powbet: "3.000+"
  },
  {
    criterion: "Kifizetési idő",
    boabet: "24-48h",
    quickwin: "1-3 nap",
    sportaza: "1-3 nap",
    bet20: "12-24h", 
    bet22: "<24h",
    powbet: "0-48h"
  },
  {
    criterion: "Min. befizetés",
    boabet: "4.000 Ft",
    quickwin: "5.000 Ft",
    sportaza: "5.000 Ft",
    bet20: "3.500 Ft",
    bet22: "400 Ft",
    powbet: "5.000 Ft"
  },
  {
    criterion: "Licenc",
    boabet: { value: "MGA", type: "premium" },
    quickwin: { value: "Curacao", type: "standard" },
    sportaza: { value: "Curacao", type: "standard" },
    bet20: { value: "Curacao", type: "standard" },
    bet22: { value: "Curacao", type: "standard" },
    powbet: { value: "Curacao", type: "standard" }
  },
  {
    criterion: "Magyar support",
    boabet: "Korlátozott",
    quickwin: "24/7",
    sportaza: "24/7",
    bet20: "24/7",
    bet22: "Nem",
    powbet: "24/7"
  },
  {
    criterion: "Értékelés",
    boabet: { value: "9.4/10", type: "winner" },
    quickwin: "9.3/10",
    sportaza: "9.2/10",
    bet20: "9.1/10",
    bet22: "8.8/10",
    powbet: "9.2/10"
  }
];

function renderCell(data: any, isBoabet = false) {
  if (typeof data === 'string') {
    return (
      <span className={isBoabet ? 'font-semibold text-gray-900' : 'text-gray-700'}>
        {data}
      </span>
    );
  }
  
  if (data && typeof data === 'object' && data.value) {
    let badgeClass = '';
    switch (data.type) {
      case 'excellent':
        badgeClass = 'bg-green-100 text-green-800 border border-green-200';
        break;
      case 'good':
        badgeClass = 'bg-blue-100 text-blue-800 border border-blue-200';
        break;
      case 'average':
        badgeClass = 'bg-yellow-100 text-yellow-800 border border-yellow-200';
        break;
      case 'poor':
        badgeClass = 'bg-red-100 text-red-800 border border-red-200';
        break;
      case 'premium':
        badgeClass = 'bg-gray-900 text-white';
        break;
      case 'standard':
        badgeClass = 'bg-gray-600 text-white';
        break;
      case 'winner':
        badgeClass = 'bg-orange-100 text-orange-800 font-semibold border border-orange-200';
        break;
      default:
        badgeClass = 'bg-gray-100 text-gray-800';
    }
    
    return (
      <span className={`text-xs px-2 py-1 rounded ${badgeClass}`}>
        {data.value}
      </span>
    );
  }
  
  return data;
}

export default function ComparisonTable() {
  return (
    <section id="comparison" className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Részletes összehasonlítás
          </h2>
          <p className="text-gray-600">
            A legfontosabb kritériumok összehasonlítása a top 6 kaszinó között.
          </p>
        </div>
        
        {/* Mobile View */}
        <div className="block md:hidden space-y-4">
          {comparisonData.map((row, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-gray-900 text-white px-4 py-3">
                <h3 className="font-semibold text-sm">{row.criterion}</h3>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-center bg-orange-50 p-3 rounded">
                  <span className="font-medium text-sm text-gray-900">Boabet</span>
                  <div className="text-right">
                    {renderCell(row.boabet, true)}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600">Quickwin</span>
                    <div>{renderCell(row.quickwin)}</div>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600">Sportaza</span>
                    <div>{renderCell(row.sportaza)}</div>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600">20Bet</span>
                    <div>{renderCell(row.bet20)}</div>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600">22Bet</span>
                    <div>{renderCell(row.bet22)}</div>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600">Powbet</span>
                    <div>{renderCell(row.powbet)}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-4 text-left text-base font-semibold">Kritérium</th>
                  <th className="px-4 py-4 text-left text-base font-semibold">Boabet</th>
                  <th className="px-4 py-4 text-left text-base font-semibold">Quickwin</th>
                  <th className="px-4 py-4 text-left text-base font-semibold">Sportaza</th>
                  <th className="px-4 py-4 text-left text-base font-semibold">20Bet</th>
                  <th className="px-4 py-4 text-left text-base font-semibold">22Bet</th>
                  <th className="px-4 py-4 text-left text-base font-semibold">Powbet</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-200 hover:bg-gray-50 ${
                      index === 0 || index === comparisonData.length - 1 
                        ? 'bg-orange-50' 
                        : ''
                    }`}
                  >
                    <td className="px-4 py-4 text-base font-medium text-gray-900">
                      {row.criterion}
                    </td>
                    <td className="px-4 py-4 text-base bg-orange-50 font-medium">
                      {renderCell(row.boabet, true)}
                    </td>
                    <td className="px-4 py-4 text-base">
                      {renderCell(row.quickwin)}
                    </td>
                    <td className="px-4 py-4 text-base">
                      {renderCell(row.sportaza)}
                    </td>
                    <td className="px-4 py-4 text-base">
                      {renderCell(row.bet20)}
                    </td>
                    <td className="px-4 py-4 text-base">
                      {renderCell(row.bet22)}
                    </td>
                    <td className="px-4 py-4 text-base">
                      {renderCell(row.powbet)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-100 rounded-lg p-4">
          <div className="text-xs text-gray-600">
            <p className="mb-2"><strong>Rövidítések:</strong></p>
            <div className="grid md:grid-cols-2 gap-2">
              <div>• <strong>B</strong> = Bónusz összeg</div>
              <div>• <strong>D+B</strong> = Befizetés + Bónusz</div>
              <div>• <strong>IP</strong> = Ingyen pörgetés</div>
              <div>• <strong>MGA</strong> = Malta Gaming Authority</div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}