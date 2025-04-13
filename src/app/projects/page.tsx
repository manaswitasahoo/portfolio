"use client";

import { MainLayout } from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { cn } from '@/lib/utils';

import { 
  SiSupabase,SiGooglegemini,SiReact, SiNextdotjs, SiPython, 
  SiTailwindcss, SiTypescript,
  SiOpenai, SiFastapi, SiMongodb,
  SiPrisma, SiNodedotjs,
  SiHtml5, SiCss3,
  SiJavascript, SiTensorflow,
  SiPytorch, SiScikitlearn,
  SiHuggingface, SiKeras,
  SiGooglecolab, SiAnthropic,SiGooglechrome
} from 'react-icons/si';

// Update the techIcons mapping
const techIcons: { [key: string]: JSX.Element } = {
  'React': <SiReact className="text-gray-400 w-4 h-4" />,
  'Next.js': <SiNextdotjs className="text-gray-400 w-4 h-4" />,
  'NextJS': <SiNextdotjs className="text-gray-400 w-4 h-4" />,
  'Python': <SiPython className="text-gray-400 w-4 h-4" />,
  'Tailwind': <SiTailwindcss className="text-gray-400 w-4 h-4" />,
  'TypeScript': <SiTypescript className="text-gray-400 w-4 h-4" />,
  'OpenAI': <SiOpenai className="text-gray-400 w-4 h-4" />,
  'FastAPI': <SiFastapi className="text-gray-400 w-4 h-4" />,
  'MongoDB': <SiMongodb className="text-gray-400 w-4 h-4" />,
  'Prisma': <SiPrisma className="text-gray-400 w-4 h-4" />,
  'Node.js': <SiNodedotjs className="text-gray-400 w-4 h-4" />,
  // Adding HTML, CSS, JavaScript icons
  'HTML': <SiHtml5 className="text-gray-400 w-4 h-4" />,
  'CSS': <SiCss3 className="text-gray-400 w-4 h-4" />,
  'JavaScript': <SiJavascript className="text-gray-400 w-4 h-4" />,
  // Adding AI/ML related icons
  'TensorFlow': <SiTensorflow className="text-gray-400 w-4 h-4" />,
  'PyTorch': <SiPytorch className="text-gray-400 w-4 h-4" />,
  'scikit-learn': <SiScikitlearn className="text-gray-400 w-4 h-4" />,
  'Hugging Face': <SiHuggingface className="text-gray-400 w-4 h-4" />,
  'Keras': <SiKeras className="text-gray-400 w-4 h-4" />,
  'Google Colab': <SiGooglecolab className="text-gray-400 w-4 h-4" />,
  'Supabase': <SiSupabase className="text-gray-400 w-4 h-4" />,
  'Gemini': <SiGooglegemini className="text-gray-400 w-4 h-4" />,
  'Claude 3.5': <SiAnthropic className="text-gray-400 w-4 h-4" />,
  'Chrome Extension': <SiGooglechrome className="text-gray-400 w-4 h-4" />,
};

// Update ProjectProps type
type ProjectProps = {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  status: 'WIP' | 'Completed' | 'Abandoned';  // Add this line
};

// Update projects array with status
const projects: ProjectProps[] = [
  {
    title: "Portfolio",
    description: "Netflix inspired portfolio to showcase myself and my work. The site you're currently on!",
    technologies: ["NextJS", "Tailwind","Claude 3.5","Trae AI"],
    imageUrl: "apoorv_logo3_cropped.png",
    githubUrl: "https://github.com/apo1397/portfolio",
    status: 'Completed'
  },
  {
    title: "Link2Reel",
    description: "AI-powered tool that transforms any public URL into engaging TikTok-style reels by extracting USPs and generating scripts automatically.",
    technologies: ["Python", "Void(Open Source Cursor)", "Gemini", "React","Supabase"],
    imageUrl: "/images/link2reel.svg",
    githubUrl: "https://github.com/apo1397/link2reel",
    featured: true,
    status: 'WIP'
  },
  
  {
    title: "Policy Insights",
    description: "Chrome Extension that detects policy pages and provides insights for ethical decision-making.",
    technologies: ["Chrome Extension","Python", "Void(Open Source Cursor)", "Gemini","Supabase"],
    imageUrl: "/images/policy_insights.png",
    githubUrl: "https://github.com/apo1397/policy-checker",
    featured: false,
    status: 'WIP'
  },
  {
    title: "Linktree for Sauci",
    description: "A Linktree style landing page for my cloud kitchen - Sauci. Allowed users to order as well share feedback and connect with the brand.",
    technologies: ["Cursor","HTML", "CSS", "JavaScript"],
    imageUrl: "/images/sauci_header.png",
    githubUrl: "https://github.com/apo1397/sauci",
    status: 'Completed'
  },
  {
    title: "What2Make",
    description: "A collaborative meal planning app that helps roommates decide what to cook. Simplifies the daily decision-making process for lunch and dinner.",
    technologies: ["Cursor","React", "Python", "MongoDB", "Tailwind"],
    imageUrl: "/images/w2m_notblurred.svg",
    githubUrl: "https://github.com/apo1397/what2make",
    status: 'Abandoned'
  }
];

export default function ProjectsPage() {
  return (
    <MainLayout>
      <div className="projects-container pt-24 px-4 md:px-8 pb-16">
      <motion.h1 
            className="text-6xl font-bold mb-12 text-red-600"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
          Projects
          </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A showcase of my work spanning from enterprise applications to personal projects.
        </motion.p>

        {/* Featured Project (if any) */}
        {projects.find(p => p.featured) && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Featured Project</h2>
            {projects
              .filter(project => project.featured)
              .map((project, index) => (
                <motion.div
                  key={`featured-${index}`}
                  className="featured-project bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(229,9,20,0.5)] transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="md:flex">
                    <div className="md:w-3/5 relative h-64 md:h-[400px] flex items-center justify-center bg-zinc-800 overflow-hidden">
                      {/* Blurred background */}
                      <div className="absolute inset-0 z-0">
                        <Image
                          src={project.imageUrl}
                          alt=""
                          fill
                          className="object-cover blur-md scale-110 opacity-50"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      {/* Main image */}
                      <div className="relative z-10 w-full h-full">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          className="object-contain p-4"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                      </div>
                    </div>

                    <div className="p-6 md:w-2/5">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <span className={cn(
                          "text-xs px-2 py-1 rounded-full font-medium",
                          project.status === 'WIP' && "bg-yellow-500/20 text-yellow-300",
                          project.status === 'Completed' && "bg-green-500/20 text-green-300",
                          project.status === 'Abandoned' && "bg-red-500/20 text-red-300"
                        )}>
                          {project.status}
                        </span>
                      </div>
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
                className="project-card bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(229,9,20,0.5)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              >
                <div className="relative h-48 flex items-center justify-center bg-zinc-800 overflow-hidden">
                  {/* Blurred background */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={project.imageUrl}
                      alt={`${project.title} background`}
                      fill
                      className="object-cover blur-md scale-110 opacity-50"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  {/* Main image */}
                  <div className="relative z-10 w-full h-full">
                    <Image
                      src={project.imageUrl}
                      alt={`${project.title} - Project Screenshot`}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      {...(index === 0 ? { priority: true } : { loading: 'lazy' })}
                    />
                  </div>
                </div>
                
                <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
    <h3 className="text-xl font-bold">{project.title}</h3>
    <span className={cn(
      "text-xs px-2 py-0.5 rounded-full font-medium",
      project.status === 'WIP' && "bg-yellow-500/20 text-yellow-300",
      project.status === 'Completed' && "bg-green-500/20 text-green-300",
      project.status === 'Abandoned' && "bg-red-500/20 text-red-300"
    )}>
      {project.status}
    </span>
  </div>
                  <p className="text-gray-300 text-sm mb-4 h-24 overflow-y-auto">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-zinc-800 text-xs px-2 py-1 rounded-full text-gray-300 flex items-center gap-1"
                      >
                        {techIcons[tech] || null}
                        {tech}
                      </span>
                    ))}
                    {/* {project.technologies.length > 3 && (
                      <span className="bg-zinc-800 text-xs px-2 py-1 rounded-full text-gray-300">
                        +{project.technologies.length - 3}
                      </span>
                    )} */}
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