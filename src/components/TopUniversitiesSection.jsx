const universities = [
  {
    name: 'Durham University',
    location: 'Durham, England',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Lancaster University',
    location: 'Lancaster, England',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Southampton University',
    location: 'Southampton, England',
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
  },
];

const TopUniversitiesSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {universities.map((u, i) => (
      <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg border overflow-hidden transition">
        <img src={u.image} alt={u.name} className="w-full h-40 object-cover" />
        <div className="p-5">
          <div className="font-bold text-xl mb-1">{u.name}</div>
          <div className="text-gray-600">{u.location}</div>
        </div>
      </div>
    ))}
  </div>
);

export default TopUniversitiesSection; 