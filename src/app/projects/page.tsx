"use client";

import { MainLayout } from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { 
  SiReact, SiNextdotjs, SiPython, 
  SiTailwindcss, SiTypescript,
  SiOpenai, SiFastapi, SiMongodb,
  SiPrisma, SiNodedotjs
} from 'react-icons/si';

// Technology icons mapping
const techIcons: { [key: string]: JSX.Element } = {
  'React': <SiReact className="text-gray-400 w-4 h-4" />,
  'Next.js': <SiNextdotjs className="text-gray-400 w-4 h-4" />,
  'Python': <SiPython className="text-gray-400 w-4 h-4" />,
  'Tailwind': <SiTailwindcss className="text-gray-400 w-4 h-4" />,
  'TypeScript': <SiTypescript className="text-gray-400 w-4 h-4" />,
  'OpenAI': <SiOpenai className="text-gray-400 w-4 h-4" />,
  'FastAPI': <SiFastapi className="text-gray-400 w-4 h-4" />,
  'MongoDB': <SiMongodb className="text-gray-400 w-4 h-4" />,
  'Prisma': <SiPrisma className="text-gray-400 w-4 h-4" />,
  'Node.js': <SiNodedotjs className="text-gray-400 w-4 h-4" />,
};

type ProjectProps = {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

const projects: ProjectProps[] = [
  {
    title: "What2Make",
    description: "A collaborative meal planning app that helps roommates decide what to cook. Simplifies the daily decision-making process for lunch and dinner.",
    technologies: ["React", "Node.js", "MongoDB", "TypeScript"],
    imageUrl: "/what2make-preview.jpg",
    githubUrl: "https://github.com/apo1397/what2make",
    featured: true
  },
  {
    title: "Link2Reel",
    description: "AI-powered tool that transforms any public URL into engaging TikTok-style reels by extracting USPs and generating scripts automatically.",
    technologies: ["Python", "OpenAI", "FastAPI", "React"],
    imageUrl: "/link2reel-preview.jpg",
    githubUrl: "https://github.com/apo1397/link2reel"
  }
];

export default function ProjectsPage() {
  return (
    <MainLayout>
      <div className="projects-container pt-24 px-4 md:px-8 pb-16">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-8 text-white text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A showcase of my work spanning from enterprise applications to personal projects.
        </motion.p>

        {/* Featured Project (if any) */}
        {projects.find(p => p.featured) && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-red-600">Featured Project</h2>
            {projects
              .filter(project => project.featured)
              .map((project, index) => (
                <motion.div
                  key={`featured-${index}`}
                  className="featured-project bg-zinc-900 rounded-lg overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="md:flex">
                    <div className="md:w-3/5 relative h-64 md:h-auto">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    // In the featured project section, remove the duplicate technology div and keep only one:
                    <div className="p-6 md:w-2/5">
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-zinc-800 text-xs px-3 py-1 rounded-full text-gray-300 flex items-center gap-2"
                          >
                            {techIcons[tech] || null}
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white hover:text-red-500 transition-colors"
                          >
                            <FaGithub /> Code
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white hover:text-red-500 transition-colors"
                          >
                            <FaExternalLinkAlt /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        )}

        {/* All Projects Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-red-600">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={`project-${index}`}
                className="project-card bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              >
                <div className="relative h-48">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 h-24 overflow-y-auto">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-zinc-800 text-xs px-2 py-1 rounded-full text-gray-300 flex items-center gap-1"
                      >
                        {techIcons[tech] || null}
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-zinc-800 text-xs px-2 py-1 rounded-full text-gray-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-white hover:text-red-500 transition-colors"
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-white hover:text-red-500 transition-colors"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
