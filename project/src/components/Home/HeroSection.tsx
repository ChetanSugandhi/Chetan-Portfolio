import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUp, ArrowDown } from 'lucide-react';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';

const skillLevelPercent = {
  Beginner: 25,
  Novice: 40,
  Intermediate: 60,
  Proficient: 75,
  Advanced: 85,
  Expert: 95,
};

const skills = {
  frontend: [
    { name: 'React', icon: '⚛️', level: 'Advanced', levelPercent: skillLevelPercent['Advanced'] },
    { name: 'Tailwind CSS', icon: '💨', level: 'Proficient', levelPercent: skillLevelPercent['Proficient'] },
    { name: 'BootStrap', icon: '📘', level: 'Proficient', levelPercent: skillLevelPercent['Proficient'] },
    { name: 'HTML5', icon: '📄', level: 'Expert', levelPercent: skillLevelPercent['Expert'] },
    { name: 'CSS3', icon: '🎨', level: 'Expert', levelPercent: skillLevelPercent['Expert'] },
    { name: 'Swing', icon: '🪑', level: 'Intermediate', levelPercent: skillLevelPercent['Intermediate'] },
  ],
  backend: [
    { name: 'Node.js', icon: '🌿', level: 'Advanced', levelPercent: skillLevelPercent['Advanced'] },
    { name: 'Express.js', icon: '🚂', level: 'Advanced', levelPercent: skillLevelPercent['Advanced'] },
    { name: 'MongoDB', icon: '🍃', level: 'Advanced', levelPercent: skillLevelPercent['Advanced'] },
    { name: 'SQL', icon: '🗃️', level: 'Proficient', levelPercent: skillLevelPercent['Proficient'] },
    { name: 'JDBC', icon: '🔌', level: 'Intermediate', levelPercent: skillLevelPercent['Intermediate'] },
    { name: 'REST APIs', icon: '🔗', level: 'Advanced', levelPercent: skillLevelPercent['Advanced'] },
  ],
  programming: [
    { name: 'Java', icon: '☕', level: 'Expert', levelPercent: skillLevelPercent['Expert'] },
    { name: 'JavaScript', icon: '📜', level: 'Advanced', levelPercent: skillLevelPercent['Advanced'] },
    { name: 'C', icon: '📘', level: 'Advanced', levelPercent: skillLevelPercent['Advanced'] },
    { name: 'C++', icon: '➕', level: 'Intermediate', levelPercent: skillLevelPercent['Intermediate'] },
    { name: 'Python', icon: '🐍', level: 'Intermediate', levelPercent: skillLevelPercent['Intermediate'] },
  ],
  WebSocket: [
    { name: 'Socket.io', icon: '🧵', level: 'Proficient', levelPercent: skillLevelPercent['Proficient'] },
  ],
  devops: [
    { name: 'Docker', icon: '🐳', level: 'Novice', levelPercent: skillLevelPercent['Novice'] },
  ],
  other: [
    { name: 'Git', icon: '🔧', level: 'Advanced', levelPercent: skillLevelPercent['Advanced'] },
    { name: 'GitHub', icon: '🐱', level: 'Advanced', levelPercent: skillLevelPercent['Advanced'] },
    { name: 'Postman', icon: '📮', level: 'Advanced', levelPercent: skillLevelPercent['Advanced'] },
    { name: 'Apache IDE', icon: '🌐', level: 'Intermediate', levelPercent: skillLevelPercent['Intermediate'] },
  ],
};

const HeroSection: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen px-6 md:px-12 py-12">
      {/* Name */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wide text-primary-700 dark:text-primary-300 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        CHETAN SUGANDHI
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 text-left max-w-4xl mx-auto mb-10 leading-loose font-light font-Lato"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I develop efficient and scalable Full-Stack Applications using modern Web Technologies. With strong expertise in Data Structures and Algorithms (DSA). “Driven to transform ideas into seamless and meaningful solutions.”
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Link to="/about">
          <Button variant="primary" size="lg" icon={<ArrowRight size={20} />}>
            About Me
          </Button>
        </Link>
        <Link to="/contact">
          <Button variant="outline" size="lg">
            Contact Me
          </Button>
        </Link>
      </motion.div>

      {/* Scroll to Skills Arrow */}
      <motion.div
        className="flex justify-center mb-12"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <button
          onClick={() => skillRef.current?.scrollIntoView({ behavior: 'smooth' })}
          className="animate-bounce text-primary-600 dark:text-primary-400"
          aria-label="Scroll to skills section"
        >
          <ArrowDown size={32} />
        </button>
      </motion.div>

      {/* Skills */}
      <motion.div
        ref={skillRef}
        className="mb-20 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary-700 dark:text-primary-300 underline-offset-8 decoration-4 decoration-primary-500 tracking-wide">
          My Skill Arsenal
        </h2>

        {Object.entries(skills).map(([category, skillArray]) => (
          <div key={category} className="mb-10">
            <h3 className="text-xl font-semibold mb-4 capitalize text-gray-800 dark:text-gray-300">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skillArray.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow hover:scale-105 transition-transform"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <div className="text-3xl mb-2 text-center">{skill.icon}</div>
                  <p className="text-center text-sm font-semibold text-gray-700 dark:text-gray-200">
                    {skill.name}
                  </p>
                  <h2 className="text-center text-xs text-gray-500 mt-1 mb-2">{skill.level}</h2>
                  <div
                    className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full"
                    style={{ width: `${skill.levelPercent}%` }}
                    role="progressbar"
                    aria-valuenow={skill.levelPercent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${skill.name} skill proficiency`}
                  ></div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 rounded-full bg-primary-600 text-white dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-500 shadow-lg transition-all z-50"
          aria-label="Back to top"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </section>
  );
};

export default HeroSection;
