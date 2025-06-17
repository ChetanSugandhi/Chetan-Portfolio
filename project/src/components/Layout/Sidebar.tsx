import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, X } from 'lucide-react';
import { socials } from '../../data/social';
import ThemeToggle from '../UI/ThemeToggle';

interface SidebarProps {
  onClose: () => void;
}

const logoSources: Record<string, string> = {
  github: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  linkedin: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
  twitter: 'https://cdn-icons-png.flaticon.com/512/733/733579.png',
  instagram: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
  leetcode: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
};

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const renderSocialIcon = (iconName: string) => {
    if (logoSources[iconName]) {
      return (
        <img
          src={logoSources[iconName]}
          alt={iconName}
          className="w-[22px] h-[22px] object-contain"
        />
      );
    }
    if (iconName === 'mail') {
      return <Mail size={22} />;
    }
    return null;
  };

  return (
    <aside className="fixed top-0 left-0 h-[90vh] sm:h-full w-full sm:max-w-sm md:max-w-md lg:max-w-[450px] bg-white dark:bg-gray-900 shadow-xl p-6 sm:p-8 flex flex-col z-40 overflow-y-auto">
      {/* Close Button for Mobile */}
      <button
        className="absolute top-5 right-5 p-2 sm:hidden rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        onClick={onClose}
        aria-label="Close sidebar"
      >
        <X size={28} className="text-gray-600 dark:text-gray-300" />
      </button>

      {/* Profile */}
      <div className="flex flex-col items-center mb-10 mt-8 sm:mt-4">
        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-800 shadow-md mb-3">
          <img
            src="images/Photo.png"
            alt="Profile"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <h1 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-gray-900 dark:text-white mb-1">
          Chetan Sugandhi
        </h1>
        <p className="text-sm sm:text-base text-primary-700 dark:text-primary-400 font-semibold tracking-wide">
          Full Stack Developer
        </p>
        <hr className="w-3/4 border-primary-300 dark:border-primary-700 mt-3" />
      </div>

      {/* Mobile Navigation Links (only visible on small screens) */}
      <nav className="block sm:hidden mb-8 px-2">
        <ul className="flex flex-col gap-3 text-base text-gray-800 dark:text-gray-200 font-semibold">
          {[
            { label: 'Home', href: '/home' },
            { label: 'About', href: '/about' },
            { label: 'Projects', href: '/projects' },
            { label: 'Contact', href: '/contact' },
          ].map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>



      {/* Personal Info */}
      <div className="mb-6 text-gray-700 dark:text-gray-300 space-y-6 px-1 sm:px-3 text-sm sm:text-base">
        {[
          {
            icon: <Mail size={20} />,
            label: 'Email',
            value: (
              <a
                href="mailto:chetansugandhi50@gmail.com"
                className="hover:underline text-primary-500 dark:text-primary-400 ml-10 sm:ml-12 break-words"
              >
                chetansugandhi50@gmail.com
              </a>
            ),
          },
          {
            icon: <Phone size={20} />,
            label: 'Phone',
            value: (
              <a
                href="tel:+916268869707"
                className="hover:underline text-primary-500 dark:text-primary-400 ml-10 sm:ml-12"
              >
                +91 62688 69707
              </a>
            ),
          },
          {
            icon: <MapPin size={20} />,
            label: 'Location',
            value: <span className="ml-10 sm:ml-12">Indore, Madhya Pradesh, India</span>,
          },
        ].map(({ icon, label, value }) => (
          <div key={label}>
            <h4 className="flex items-center space-x-2 font-semibold text-gray-800 dark:text-gray-200 mb-1 ml-4 sm:ml-6">
              {icon}
              <span>{label}:</span>
            </h4>
            <div>{value}</div>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div className="mb-10 px-2 sm:px-4">
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
          Connect
        </h3>
        <div className="flex flex-wrap gap-4">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full flex items-center justify-center shadow-sm hover:scale-105 transition-transform duration-200"
              style={{ width: 44, height: 44 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.name}
            >
              {renderSocialIcon(social.icon)}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Theme Toggle */}
      <div className="flex justify-between items-center px-2 sm:px-4">
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium select-none">
          Switch Theme
        </p>
        <ThemeToggle />
      </div>
    </aside>
  );
};

export default Sidebar;
