import { Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer = ({ darkMode }: FooterProps) => {
  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-950' : 'bg-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <span className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              suprth05
            </span>
          </div>

          <p className={`text-sm flex items-center space-x-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>by suprth05</span>
          </p>

          <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
