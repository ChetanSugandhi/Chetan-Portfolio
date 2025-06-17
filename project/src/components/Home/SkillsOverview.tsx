import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../UI/SectionHeading';
import SkillIcon from '../UI/SkillIcon';
import { skills } from '../../data/skills';

const SkillsOverview: React.FC = () => {
  // Group skills by category
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');

  // Only show a limited number of skills on the home page
  const limitSkills = (skillArray: typeof skills, limit: number) => {
    return skillArray.slice(0, limit);
  };

  return (
    <section className="py-16">
      <SectionHeading 
        title="Skills & Expertise"
        subtitle="Technologies I work with"
      />

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-primary-600 dark:text-primary-400">
            Frontend Development
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {limitSkills(frontendSkills, 6).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <SkillIcon 
                  name={skill.name} 
                  icon={skill.icon} 
                  category={skill.category} 
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-secondary-600 dark:text-secondary-400">
            Backend Development
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {limitSkills(backendSkills, 6).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <SkillIcon 
                  name={skill.name} 
                  icon={skill.icon} 
                  category={skill.category} 
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-accent-600 dark:text-accent-400">
            Tools & Platforms
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {limitSkills(toolsSkills, 6).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <SkillIcon 
                  name={skill.name} 
                  icon={skill.icon} 
                  category={skill.category} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsOverview;