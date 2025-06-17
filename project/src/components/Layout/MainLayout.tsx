import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopNavigation from './TopNavigation';
import { Menu } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Close sidebar when route changes (mobile only)
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile sidebar toggle */}
      <button
        className="fixed z-50 top-4 left-4 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-md lg:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle sidebar"
      >
        <Menu size={24} className="text-gray-700 dark:text-gray-300" />
      </button>

      {/* Sidebar - hidden on mobile, shown with toggle */}
      <div className="lg:w-2/5 xl:w-1/3 2xl:w-1/4">
        <AnimatePresence>
          {(isSidebarOpen || window.innerWidth >= 1024) && (
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`fixed inset-0 z-40 lg:relative lg:inset-auto
                ${isSidebarOpen ? 'block' : 'hidden lg:block'}`}
            >
              <Sidebar onClose={() => setIsSidebarOpen(false)} />
              
              {/* Overlay for mobile */}
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
                onClick={() => setIsSidebarOpen(false)}
                aria-hidden="true"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main content */}
      <div className="flex-1 lg:ml-2/5 xl:ml-1/3 2xl:ml-1/4 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 py-8">
          <TopNavigation />
          
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            {children}
          </motion.main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;