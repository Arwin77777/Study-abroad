const fields = [
  { field: 'Linguistics and Languages', fee: '£24,070 - £24,430' },
  { field: 'Biology', fee: '£22,900 - £28,500' },
  { field: 'Computer Sciences', fee: '£22,500 - £25,000' },
  { field: 'Law', fee: '£21,500' },
  { field: 'Business', fee: '£20,250' },
  { field: 'Mechanical Engineering', fee: '£15,826' },
];

const costs = [
  { label: 'Food', value: '£60 (Restaurant), £80 (Grocery)', icon: '🍽️' },
  { label: 'Transportation', value: '£67 (Bus)', icon: '🚌' },
  { label: 'Entertainment', value: '£62 (Cinema & Fitness)', icon: '🎮' },
];

const FeesSection = () => (
  <div>
    <div className="overflow-x-auto mb-8">
      <table className="min-w-full bg-white rounded-xl shadow border">
        <thead>
          <tr>
            <th className="py-3 px-4 text-left font-bold text-gray-700">Field</th>
            <th className="py-3 px-4 text-left font-bold text-gray-700">Fees/year</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((f, i) => (
            <tr key={i} className="border-t">
              <td className="py-2 px-4">{f.field}</td>
              <td className="py-2 px-4">{f.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {costs.map((c, i) => (
        <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border hover:shadow-lg transition">
          <div className="text-4xl mb-2">{c.icon}</div>
          <div className="font-bold text-lg mb-1">{c.label}</div>
          <div className="text-gray-600">{c.value}</div>
        </div>
      ))}
    </div>
  </div>
);

export default FeesSection; 