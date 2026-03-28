"use client";
import { motion } from 'framer-motion';
import { MainLayout } from '@/components/layout/MainLayout';
import { FaChartLine, FaMapMarkerAlt, FaGraduationCap, FaRobot, FaHandshake, FaDatabase } from 'react-icons/fa';
import { useState } from 'react';
import SEO from '@/components/SEO';

const facts = [
  {
    icon: <FaChartLine className="text-3xl text-red-500" />,
    title: "Growth Driver",
    text: "Scaled ad spend from ₹2Cr to ₹8.4Cr/month at Kapiva — 320% growth while maintaining cost efficiency."
  },
  {
    icon: <FaMapMarkerAlt className="text-3xl text-red-500" />,
    title: "Bengaluru Based",
    text: "Living and working in India's startup capital, building growth engines for innovative companies."
  },
  {
    icon: <FaGraduationCap className="text-3xl text-red-500" />,
    title: "MBA in Marketing",
    text: "KIIT School of Management — specialized in marketing strategy, consumer behavior, and brand management."
  },
  {
    icon: <FaRobot className="text-3xl text-red-500" />,
    title: "AI-Powered Marketer",
    text: "Leveraging ChatGPT, Perplexity, DALL-E and Stanford STORM to supercharge marketing workflows."
  },
  {
    icon: <FaHandshake className="text-3xl text-red-500" />,
    title: "Partnership Builder",
    text: "Built partnerships with Swiggy, Netmeds, PhonePe, GPay, Flipkart, Delhi Metro and many more."
  },
  {
    icon: <FaDatabase className="text-3xl text-red-500" />,
    title: "Data-Driven Decisions",
    text: "Proficient in SQL, Python, GA4, Metabase, and Trackier for analytics-informed marketing."
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