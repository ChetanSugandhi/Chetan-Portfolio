import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail } from 'lucide-react';

const TopNavigation: React.FC = () => {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-soft p-2 hidden md:block">
      <nav>
        <ul className="flex items-center justify-center space-x-1">
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `nav-link flex items-center space-x-2 ${isActive ? 'active' : ''}`
              }
              end
            >
              <Home size={18} />
              <span>Home</span>
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `nav-link flex items-center space-x-2 ${isActive ? 'active' : ''}`
              }
            >
              <User size={18} />
              <span>About Me</span>
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `nav-link flex items-center space-x-2 ${isActive ? 'active' : ''}`
              }
            >
              <Briefcase size={18} />
              <span>Projects</span>
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `nav-link flex items-center space-x-2 ${isActive ? 'active' : ''}`
              }
            >
              <Mail size={18} />
              <span>Contact</span>
            </NavLink>
          </motion.li>
        </ul>
      </nav>
    </div>
  );
};

export default TopNavigation;