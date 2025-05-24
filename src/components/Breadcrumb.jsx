import HomeIcon from '@mui/icons-material/Home';

const Breadcrumb = () => (
  <nav className="bg-white py-4 px-4 md:px-8 flex items-center text-gray-700 text-lg font-medium shadow-sm">
    <HomeIcon className="text-primary mr-2" />
    <span className="mr-2">Home</span>
    <span className="mx-2">/</span>
    <span className="text-black font-bold">United Kingdom</span>
  </nav>
);

export default Breadcrumb; 