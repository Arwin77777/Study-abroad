const requirements = [
  {
    title: 'Academic Requirements',
    desc: 'Most universities require a high school diploma or equivalent, and strong academic performance in relevant subjects.'
  },
  {
    title: 'Language Requirements',
    desc: 'Proof of English proficiency (IELTS, TOEFL, or equivalent) is required for most programs.'
  },
  {
    title: 'Other Documents',
    desc: 'Personal statement, reference letters, and a valid passport are commonly required.'
  },
];

const RequirementsSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {requirements.map((r, i) => (
      <div key={i} className="bg-white rounded-xl shadow p-6 border hover:shadow-lg transition">
        <div className="font-bold text-lg mb-2">{r.title}</div>
        <div className="text-gray-600">{r.desc}</div>
      </div>
    ))}
  </div>
);

export default RequirementsSection; 