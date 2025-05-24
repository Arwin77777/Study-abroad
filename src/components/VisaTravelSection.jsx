const steps = [
  'Receive university offer',
  'Prepare documents',
  'Apply for student visa',
  'Attend visa interview',
  'Book travel & accommodation',
  'Arrive in the UK',
];

const tips = [
  'Check passport validity',
  'Arrange health insurance',
  'Familiarize with UK transport',
];

const VisaTravelSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <div className="font-bold text-lg mb-4">Visa Process</div>
      <ol className="relative border-l-2 border-primary pl-6">
        {steps.map((step, i) => (
          <li key={i} className="mb-8 last:mb-0">
            <div className="absolute -left-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold">{i+1}</div>
            <div className="ml-4 text-gray-700">{step}</div>
          </li>
        ))}
      </ol>
    </div>
    <div>
      <div className="font-bold text-lg mb-4">Travel Tips</div>
      <ul className="space-y-4">
        {tips.map((tip, i) => (
          <li key={i} className="bg-white rounded-xl shadow p-4 border hover:shadow-lg transition">{tip}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default VisaTravelSection; 