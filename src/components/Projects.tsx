import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';
import GridBackground from './ui/GridBackground';

const projects = [
  {
    title: 'Project Alpha',
    description: 'A revolutionary web application built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/iib3xu/project-alpha',
    demo: 'https://project-alpha.com'
  },
  {
    title: 'Beta Platform',
    description: 'AI-powered analytics dashboard for business intelligence',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'TensorFlow', 'React'],
    github: 'https://github.com/iib3xu/beta-platform',
    demo: 'https://beta-platform.com'
  },
  {
    title: 'Gamma App',
    description: 'Mobile-first social networking application',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    tags: ['React Native', 'Firebase', 'Redux'],
    github: 'https://github.com/iib3xu/gamma-app',
    demo: 'https://gamma-app.com'
  }
];

const Projects = () => {
  return (
    <Section id="projects" title="Featured Projects" className="relative overflow-hidden">
      <GridBackground />
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="transform hover:scale-105 transition-transform duration-300 backdrop-blur-sm bg-gray-900/50"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6 relative z-20">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;