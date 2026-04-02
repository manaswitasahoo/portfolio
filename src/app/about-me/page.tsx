"use client";
import { motion } from 'framer-motion';
import { MainLayout } from '@/components/layout/MainLayout';
import { FaChartLine, FaGraduationCap, FaHandshake, FaPaintBrush, FaPencilAlt, FaUsers } from 'react-icons/fa';
import { useState } from 'react';
import SEO from '@/components/SEO';
import Image from 'next/image';

const facts = [
  {
    icon: <FaGraduationCap className="text-3xl text-red-500" />,
    title: "MBA & Campus Life",
    text: "As Content Head of the marketing club, I managed Instagram, organized a marketing conclave, and mentored juniors. I also served as Joint Secretary at Rotaract, leading offline community events."
  },
  {
    icon: <FaPaintBrush className="text-3xl text-red-500" />,
    title: "Outside Work",
    text: "I spend my free time doing power yoga and meditation. I also enjoy reading, writing my thoughts, and painting once in a while."
  },
  {
    icon: <FaPencilAlt className="text-3xl text-red-500" />,
    title: "Published Writer",
    text: "One of my articles was published in an anthology in 2020—a small but meaningful milestone for me."
  },
  {
    icon: <FaChartLine className="text-3xl text-red-500" />,
    title: "How I Work",
    text: "I believe in showing results through clear reports and simple graphs because numbers make things clearer."
  },
  {
    icon: <FaUsers className="text-3xl text-red-500" />,
    title: "People Person",
    text: "I genuinely enjoy interacting with people and learning new things from them."
  }
];

export default function AboutMe() {
  const [selectedFact, setSelectedFact] = useState(null);
  const [isInstaExpanded, setIsInstaExpanded] = useState(false);

  return (
    <>
      <SEO
        title="About - Manaswita Sahoo"
        description="Learn about Manaswita Sahoo's growth marketing expertise. Growth driver at Kapiva, MBA in Marketing, and partnership builder scaling innovative companies."
        pagePath="/about-me"
      />
      <MainLayout>
        <motion.div 
          className="max-w-7xl mx-auto px-4 py-12 pt-24" // Added pt-24 for navbar spacing
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl font-bold mb-12 text-red-600"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            About Me
          </motion.h1>

          {/* Hero Section with Photo */}
          <section className="mb-16 flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="w-full md:w-1/2 relative h-[500px] rounded-lg overflow-hidden border-4 border-zinc-800 shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/manaswita_about.jpg"
                alt="Manaswita Sahoo"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4 italic">"Good marketing feels like intuition. Great marketing is backed by data."</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                I work in digital marketing, building and scaling brands through a mix of performance, creativity, and constant experimentation. From MBA classrooms to hands-on campaign execution, my journey has been about understanding what actually drives results and not just what looks good on paper.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                My core work revolves around performance marketing, media planning, optimizing campaigns based on competitor bid analysis, improving Google search visibility, and using AI to make market research faster and sharper. I enjoy tracking what is trending in performance marketing and figuring out how to turn those trends into real business impact.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed italic border-l-4 border-red-600 pl-4 bg-zinc-900/50 py-2">
                I care a lot about proof. I don’t just run campaigns and move on. I track them, break them down, and present clear graphs and reports that show what worked and what did not.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Outside of work, I like keeping things balanced. I work out regularly, push myself with fitness challenges, read both fiction and nonfiction, and write poetry and stories inspired by real-life moments.
              </p>
            </motion.div>
          </section>

          {/* Fun Facts Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white">Fun Facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {facts.map((fact, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-900 p-6 rounded-lg cursor-pointer hover:bg-zinc-800 transition-all"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedFact(index as unknown as null)}
                >
                  <div className="text-3xl text-red-600 mb-4">{fact.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{fact.title}</h3>
                  <p className="text-gray-400">{fact.text}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Coding Stats */}
          {/* <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white">Coding Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {codingStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-900 p-6 rounded-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: index * 0.2 }}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl text-red-600 mr-3">{stat.icon}</span>
                    <h3 className="text-xl font-semibold">{stat.platform}</h3>
                  </div>
                  <div className="space-y-2 text-gray-400">
                    {Object.entries(stat).map(([key, value]) => (
                      key !== 'icon' && key !== 'platform' && (
                        <p key={key} className="capitalize">
                          {key}: {value}
                        </p>
                      )
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section> */}

          {/* Instagram Feed Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white">Instagram</h2>
            <motion.div
              className="bg-zinc-900 p-6 rounded-lg overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">Connect on Instagram</h3>
              <motion.div
                animate={{ height: isInstaExpanded ? '600px' : '300px' }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
                style={{ position: 'relative' }}
              >
                <iframe
                  src="https://embedsocial.com/api/pro_hashtag/0a44997a7a34e59968acb5e8655e7f0ff024b2e6"
                  width="100%"
                  height="100%"
                  className="rounded-lg"
                />
              </motion.div>
              <div
                className="flex items-center justify-center cursor-pointer mt-4 text-gray-400 hover:text-white transition-colors"
                onClick={() => setIsInstaExpanded(!isInstaExpanded)}
              >
                <span className="mr-2">{isInstaExpanded ? 'Show Less' : 'Show More'}</span>
                <span className={`transition-transform ${isInstaExpanded ? 'rotate-180' : ''}`}>▼</span>
              </div>
            </motion.div>
          </section>
        </motion.div>
      </MainLayout>
    </>
  );
}