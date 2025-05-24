const courses = [
  { name: 'Business Administration', desc: 'Learn management, finance, and entrepreneurship.' },
  { name: 'Computer Science', desc: 'Study programming, AI, and software engineering.' },
  { name: 'Mechanical Engineering', desc: 'Explore design, manufacturing, and robotics.' },
  { name: 'Psychology', desc: 'Understand human behavior and mental processes.' },
];

const CoursesSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {courses.map((c, i) => (
      <div key={i} className="bg-white rounded-xl shadow p-6 border hover:shadow-lg transition">
        <div className="font-bold text-lg mb-2">{c.name}</div>
        <div className="text-gray-600">{c.desc}</div>
      </div>
    ))}
  </div>
);

export default CoursesSection; 