import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, PenTool as Tool, Sparkles } from 'lucide-react';

interface SkillIconProps {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

const SkillIcon: React.FC<SkillIconProps> = ({ name, category }) => {
  const getCategoryIcon = () => {
    switch (category) {
      case 'frontend':
        return <Code size={24} className="text-primary-500" />;
      case 'backend':
        return <Database size={24} className="text-secondary-500" />;
      case 'tools':
        return <Tool size={24} className="text-accent-500" />;
      case 'other':
        return <Sparkles size={24} className="text-yellow-500" />;
      default:
        return <Code size={24} />;
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-soft"
    >
      <div className="mb-2">
        {getCategoryIcon()}
      </div>
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  );
};

export default SkillIcon;