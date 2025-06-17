import React from 'react';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`mb-10 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block relative">
        {title}
        <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-primary-500"></span>
      </h2>
      
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-3">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;