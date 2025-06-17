import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/UI/SectionHeading';
import { Download, Award, BookOpen, Briefcase } from 'lucide-react';
import Button from '../components/UI/Button';

const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <SectionHeading
        title="About Me"
        subtitle="My journey, experience, and passion"
      />

      {/* Bio section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="rounded-lg overflow-hidden shadow-soft">
              <img
                src="images/Photo.png"
                alt="Profile"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Hi, I'm Chetan Sugandhi</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              I'm currently in my pre-final year pursuing a Bachelor's degree in Computer Science and Engineering at AITR, Indore. I'm a curious and passionate developer who enjoys solving complex problems and creating impactful solutions.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              I’m a DSA enthusiast and love diving deep into algorithms and data structures. My tech stack includes the MERN stack, JDBC, SQL, and Java Swing. I'm constantly exploring new technologies and pushing my boundaries to build better, smarter applications.
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Apart from coding, I enjoy reading, staying updated with tech trends, and collaborating on projects that make a real difference. I strive to deliver clean, efficient, and scalable software.
            </p>
            <Button
              variant="primary"
              icon={<Download size={18} />}
            >
              Download Resume
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Work Experience */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold mb-6 flex items-center">
          <Briefcase size={24} className="mr-2 text-primary-500" />
          Work Experience
        </h3>

        <div className="space-y-8">
          {/* Experience 1 */}
          <div className="card p-6">
            <div className="flex flex-wrap justify-between mb-2">
              <h4 className="text-xl font-bold">Java Full Stack Intern</h4>
              <span className="text-primary-600 dark:text-primary-400 font-medium">April 2025 – June 2025</span>
            </div>
            <h5 className="text-lg text-gray-600 dark:text-gray-400 mb-4">ZIDIO Development</h5>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Worked on building a Job and Internship platform using Java Full Stack technologies.</li>
              <li>Developed separate dashboards for Students, Recruiters, and Admins with secure access and responsive UI.</li>
              <li>Collaborated with the team to deliver a scalable and maintainable backend architecture.</li>
              <li>Integrated front-end components with backend RESTful services for a seamless experience.</li>
            </ul>
          </div>

          {/* Experience 2 */}
          <div className="card p-6">
            <div className="flex flex-wrap justify-between mb-2">
              <h4 className="text-xl font-bold">Technical Team Member</h4>
              <span className="text-primary-600 dark:text-primary-400 font-medium">Oct 2023 – Sep 2024</span>
            </div>
            <h5 className="text-lg text-gray-600 dark:text-gray-400 mb-4">Spectra AITR</h5>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Developed  backend and frontend modules for event management system using full stack technologies.</li>
              <li>Implemented event registration features, internal communication tools, and database management.</li>
              <li>Collaborated with cross-functional teams to ensure smooth technical execution of national-level technical events.</li>
              <li>Provide support and troubleshooting for event websites and software tools used by organizers and participants.</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Education section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold mb-8 flex items-center text-secondary-600 dark:text-secondary-400">
          <BookOpen size={28} className="mr-3 text-secondary-500" />
          Education
        </h3>

        <div className="space-y-8">
          {[
            {
              degree: "Bachelor of Technology in Computer Science",
              year: "2022 – Present",
              institute: "Acropolis Institute of Technology and Research, Indore",
            },
            {
              degree: "Higher Secondary School (12th)",
              year: "2021 – 2022",
              institute: "Maheshwari Public School, Indore",
              score: "91%",
            },
            {
              degree: "Secondary School (10th)",
              year: "2019 – 2020",
              institute: "Maheshwari Public School, Indore",
              score: "92%",
            }
          ].map(({ degree, year, institute, score }) => (
            <div
              key={degree}
              className="card p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-wrap justify-between items-center mb-3">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{degree}</h4>
                <span className="text-secondary-600 dark:text-secondary-400 font-medium">{year}</span>
              </div>
              <h5 className="text-lg text-gray-700 dark:text-gray-300">
                {institute}
                {score && <span className="font-semibold text-primary-500 ml-2">— {score}</span>}
              </h5>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Certifications section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold mb-8 flex items-center text-accent-600 dark:text-accent-400">
          <Award size={28} className="mr-3" />
          Certifications
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'AWS Cloud Foundations',
              issuer: 'Amazon Web Services',
              badge: 'AWS',
              date: '2024-03-15',
              image: 'https://gadget.co.za/wp-content/uploads/2020/12/aws-logo-scaled.jpg',
              link: 'https://drive.google.com/file/d/1FCF4dVevNMQrAqrzXS7oBf06hStjJ9Su/view?usp=sharing'
            },
            {
              title: 'Google Solution Challenge 2025',
              issuer: 'Google for Developers',
              badge: 'Google Solution Badge',
              date: '2024-03-15',
              image: 'https://gdsc-university-of-seoul.github.io/assets/images/post-mobile-gsc2022-ar/thumbnail.png',
              link: 'https://drive.google.com/file/d/14kT6RTUGb72hBofUzSVml9uuK9v3z-3A/view?usp=sharing'
            },
            {
              title: 'NPTEL - Data Structures and Algorithms using Java (DSA)',
              score: '71%',
              date: '2024-11-24',
              image: 'https://mite.ac.in/wp-content/uploads/2020/01/nptel-mite.jpg',
              link: 'https://drive.google.com/file/d/16jT3-DIEKRKlLGFHbTr5AUYSnHVYgAfZ/view?usp=sharing'
            },
            {
              title: 'NPTEL - DataBase Management System (DBMS)',
              score: '69%',
              date: '2024-10-01',
              image: 'https://mite.ac.in/wp-content/uploads/2020/01/nptel-mite.jpg',
              link: 'https://drive.google.com/file/d/1blLWmIT_5zOT-y0jkPsqDrfbGXbUyrlZ/view?usp=sharing'
            },
            {
              title: 'NPTEL - Programming in Java',
              score: '70%',
              date: '2024-05-15',
              image: 'https://mite.ac.in/wp-content/uploads/2020/01/nptel-mite.jpg',
              link: 'https://drive.google.com/file/d/12U1QisIupuUQgacQ46hRK6yzBrPrEt8P/view?usp=sharing'
            },
            {
              title: 'NPTEL - Computer Network and Internet Protocol (CN)',
              score: '54%',
              date: '2025-05-16',
              image: 'https://mite.ac.in/wp-content/uploads/2020/01/nptel-mite.jpg',
              link: 'https://drive.google.com/file/d/1RfiXJcRcTX6ShnFDD0Zi3vuWDlnVo83G/view?usp=sharing'
            },
            // Add other certificates similarly
          ].map((cert, idx) => {
            const formattedDate = cert.date
              ? new Date(cert.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })
              : null;

            return (
              <div
                key={idx}
                className="card p-6 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Image and Link */}
                {cert.image && cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 w-4/5 h-24 mx-auto overflow-hidden rounded-md shadow-md hover:scale-105 transition-transform duration-200"
                  >
                    <img
                      src={cert.image}
                      alt={`${cert.title} logo`}
                      className="w-full h-full object-contain"
                    />
                  </a>

                )}

                <div className="mb-4">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    {cert.title}
                  </h4>
                  {cert.issuer && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {cert.issuer}
                    </p>
                  )}
                  {formattedDate && (
                    <time
                      dateTime={cert.date}
                      className="block text-xs text-gray-500 dark:text-gray-500 mt-1"
                    >
                      Completed: {formattedDate}
                    </time>
                  )}
                </div>

                <div className="flex flex-wrap gap-3 items-center mt-auto">
                  {cert.score && (
                    <span className="inline-flex items-center text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-400 px-3 py-1 rounded-full shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Score: {cert.score}
                    </span>
                  )}

                  {cert.badge && (
                    <span className="inline-flex items-center text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-400 px-3 py-1 rounded-full shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 2a10 10 0 00-7.07 17.07A10 10 0 1019.07 5.07 9.97 9.97 0 0012 2z" />
                      </svg>
                      {cert.badge}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>


    </div>
  );
};

export default About;
