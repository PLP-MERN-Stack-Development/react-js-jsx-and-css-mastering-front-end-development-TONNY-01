import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start space-x-6">
            <Link to="/" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
              Home
            </Link>
            <Link to="/about" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
              About
            </Link>
            <Link to="/privacy" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
              Terms
            </Link>
          </div>
          <div className="mt-8 md:mt-0 text-center md:text-right">
            <p className="text-base text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} PLP Task Manager. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Built with React, Tailwind CSS, and ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
