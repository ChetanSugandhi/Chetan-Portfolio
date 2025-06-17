import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/UI/SectionHeading';
import ProjectCard from '../components/UI/ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  // Extract unique tags from all projects
  const allTags = ['All', ...new Set(projects.flatMap(project => project.tags))];
  
  const [selectedTag, setSelectedTag] = useState('All');
  
  // Filter projects based on selected tag
  const filteredProjects = selectedTag === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedTag));

  return (
    <div>
      <SectionHeading 
        title="My Projects"
        subtitle="A showcase of my work and experience"
      />

      {/* Filter tags */}
      <div className="mb-8 overflow-x-auto pb-2">
        <div className="flex space-x-2">
          {allTags.slice(0, 10).map((tag) => (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                ${selectedTag === tag 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400">
            No projects found with the selected filter.
          </p>
          <button
            className="mt-4 text-primary-600 dark:text-primary-400 font-medium"
            onClick={() => setSelectedTag('All')}
          >
            Clear filter
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;