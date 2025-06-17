import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/UI/SectionHeading';
import ProjectCard from '../components/UI/ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const allTags = ['All', ...new Set(projects.flatMap(project => project.tags))];
  const [selectedTag, setSelectedTag] = useState('All');

  const filteredProjects =
    selectedTag === 'All'
      ? projects
      : projects.filter(project => project.tags.includes(selectedTag));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
    >
      <SectionHeading
        title="My Projects"
        subtitle="A showcase of things I've built with passion, from full-stack apps to creative frontends."
      />

      {/* Filter tags */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-3">
          {allTags.map(tag => (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-shadow
                ${
                  selectedTag === tag
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {tag}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
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
          className="text-center py-16 px-4"
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
    </motion.div>
  );
};

export default Projects;
