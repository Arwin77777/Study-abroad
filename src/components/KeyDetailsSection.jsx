import StarIcon from '@mui/icons-material/Star';
import WorkIcon from '@mui/icons-material/Work';
import PublicIcon from '@mui/icons-material/Public';
import ComputerIcon from '@mui/icons-material/Computer';

const details = [
  {
    icon: <StarIcon className="text-primary w-10 h-10" />, title: 'Student Satisfaction', value: 'Rate of 83.6%'
  },
  {
    icon: <WorkIcon className="text-primary w-10 h-10" />, title: 'Graduate Employability', value: 'Rate of 87.3%'
  },
  {
    icon: <PublicIcon className="text-primary w-10 h-10" />, title: 'Ranking', value: 'Ranked 2nd'
  },
  {
    icon: <ComputerIcon className="text-primary w-10 h-10" />, title: 'Teaching Quality', value: 'Ranked 2nd'
  },
];

const KeyDetailsSection = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {details.map((d, i) => (
      <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border hover:shadow-lg transition">
        <div className="mb-3">{d.icon}</div>
        <div className="font-bold text-lg mb-1">{d.title}</div>
        <div className="text-gray-600">{d.value}</div>
      </div>
    ))}
  </div>
);

export default KeyDetailsSection; 