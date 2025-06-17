import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md group hover:shadow-2xl transform transition-transform hover:-translate-y-1 duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden flex justify-center items-center">
        <img
          src={project.image}
          alt={project.title}
          className="w-[95%] h-[90%] object-cover object-center rounded-xl group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {project.featured && (
          <div className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded shadow">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg md:text-xl font-semibold mb-1 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 flex-1 line-clamp-3">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200 text-xs font-medium px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              <ExternalLink size={16} className="mr-1" />
              Live Demo
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:underline"
            >
              <Github size={16} className="mr-1" />
              View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
