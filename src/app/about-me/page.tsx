"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { MainLayout } from '@/components/layout/MainLayout';
import GithubCalendarComponent from '@/components/GithubCalendarComponent';
import { FaHandsHelping, FaBrain,FaProductHunt, FaGlobe, FaFlag, FaCamera } from 'react-icons/fa';
import { SiLeetcode, SiCodechef } from 'react-icons/si';
import { useState } from 'react';
import SEO from '@/components/SEO';
// Remove FlappyDragon import

const facts = [
  {
    icon: <FaProductHunt />,
    title: "Product Journey",
    text: "Switched to Product Management from Engineering, without an MBA"
  },
  {
    icon: <FaGlobe />,
    title: "Truly Desi",
    text: "Studied at 9 schools before college"
  },
  {
    icon: <FaHandsHelping />,
    title: "NGO",
    text: "Part of Anokha; an NGO in Vellore specializing in education of children-in-need."
  },
  {
    icon: <FaFlag/>,
    title: "French",
    text: "Runner up in the National French Spelling Bee."
  },
  {
    icon: <FaBrain />,
    title: "Quiz",
    text: "Avid Quizzer. Runner up in the Hindu Quiz."
  },
  {
    icon: <FaCamera />,
    title: "Tennis",
    text: "District level Tennis player, favouring clay courts but a die hard fan of Federer."
  }
];

const codingStats = [
  {
    platform: "LeetCode",
    icon: <SiLeetcode />,
    problems: 300,
    ranking: "Top 5%"
  },
  {
    platform: "CodeChef",
    icon: <SiCodechef />,
    rating: 1800,
    contests: 45
  }
];

export default function AboutMe() {
  const [selectedFact, setSelectedFact] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <SEO 
        title="About Apoorv Abhishek - Background & Expertise"
        description="Learn about Apoorv Abhishek's journey as a Developer, Product Manager and Co Founder of Sauci; including his experience in AI/ML, data analytics, and full-stack development."
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
          {/* Social & Location Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white">Social & Location</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Google Maps Column */}
              <motion.div 
                className="bg-zinc-900 p-6 rounded-lg overflow-hidden relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">Location History</h3>
                <motion.div
                  animate={{ height: isExpanded ? '600px' : '300px' }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <iframe 
                    src="https://www.google.com/maps/d/u/0/embed?mid=14TxVcRYWQJPRomUMZJQMKlw1ai4R2nrv&ehbc=2E312F" 
                    width="100%" 
                    height="100%"
                    className="rounded-lg"
                    style={{ border: 0 }}
                  />
                </motion.div>
                <div 
                  className="flex items-center justify-center cursor-pointer mt-4 text-gray-400 hover:text-white transition-colors"
                  onClick={toggleExpand}
                >
                  <span className="mr-2">{isExpanded ? 'Show Less' : 'Show More'}</span>
                  <span className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}>▼</span>
                </div>
              </motion.div>

              {/* Instagram Column */}
              <motion.div 
                className="bg-zinc-900 p-6 rounded-lg overflow-hidden relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">Instagram Feed</h3>
                <motion.div
                  animate={{ height: isExpanded ? '600px' : '300px' }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                  style={{ position: 'relative' }}
                >
                  <div 
                    className="elfsight-app-90c0f33d-2357-415f-88f2-b9c53882d3be" 
                    data-elfsight-app-lazy
                    style={{ height: '100%' }}
                  />
                </motion.div>
                <div 
                  className="flex items-center justify-center cursor-pointer mt-4 text-gray-400 hover:text-white transition-colors"
                  onClick={toggleExpand}
                >
                  <span className="mr-2">{isExpanded ? 'Show Less' : 'Show More'}</span>
                  <span className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}>▼</span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* GitHub Activity */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-white">GitHub Activity</h2>
            <motion.div 
              className="bg-zinc-900 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <GithubCalendarComponent username="apo1397" />
            </motion.div>
          </section>

          {/* Flappy Dragon Game source url : https://github.com/iarunava/flappydragon */}
          {/* <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white">Play Flappy Dragon</h2>
            <motion.div 
              className="bg-zinc-900 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <FlappyDragon />
            </motion.div>
          </section> */}
        </motion.div>
      </MainLayout>
    </>
  );
}