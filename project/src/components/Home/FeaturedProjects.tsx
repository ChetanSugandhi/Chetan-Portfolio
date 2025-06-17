import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../UI/Button';
import ProjectCard from '../UI/ProjectCard';
import SectionHeading from '../UI/SectionHeading';
import { projects } from '../../data/projects';

const FeaturedProjects: React.FC = () => {
  // Filter only featured projects
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section className="py-16">
      <SectionHeading 
        title="Featured Projects"
        subtitle="A selection of my recent work"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link to="/projects">
          <Button 
            variant="secondary" 
            icon={<ArrowRight size={18} />}
          >
            View All Projects
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;