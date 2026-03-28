"use client";
import { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';

type Skill = {
  name: string;
  proficiency: number;
  category: string;
  url: string; // Add the URL field
};

const skills: Skill[] = [
  // Advertising & Performance Marketing
  { name: "Meta Ads Manager", proficiency: 90, category: "Advertising & Performance Marketing", url: "https://www.facebook.com/business/tools/ads-manager" },
  { name: "Google Ads Manager", proficiency: 85, category: "Advertising & Performance Marketing", url: "https://ads.google.com" },
  { name: "Google Analytics 4", proficiency: 85, category: "Advertising & Performance Marketing", url: "https://analytics.google.com" },
  { name: "Trackier", proficiency: 80, category: "Advertising & Performance Marketing", url: "https://trackier.com" },
  { name: "AppsFlyer", proficiency: 75, category: "Advertising & Performance Marketing", url: "https://www.appsflyer.com" },

  // Analytics & Data
  { name: "Metabase", proficiency: 85, category: "Analytics & Data", url: "https://www.metabase.com" },
  { name: "SQL", proficiency: 70, category: "Analytics & Data", url: "https://en.wikipedia.org/wiki/SQL" },
  { name: "Python", proficiency: 60, category: "Analytics & Data", url: "https://www.python.org" },
  { name: "R", proficiency: 50, category: "Analytics & Data", url: "https://www.r-project.org" },
  { name: "Semrush", proficiency: 70, category: "Analytics & Data", url: "https://www.semrush.com" },
  { name: "Google Search Console", proficiency: 70, category: "Analytics & Data", url: "https://search.google.com/search-console" },

  // CRM & Marketing Tools
  { name: "Zoho CRM", proficiency: 80, category: "CRM & Marketing Tools", url: "https://www.zoho.com/crm/" },
  { name: "Google Pay Console", proficiency: 75, category: "CRM & Marketing Tools", url: "https://pay.google.com" },
  { name: "Modash.io", proficiency: 75, category: "CRM & Marketing Tools", url: "https://www.modash.io" },
  { name: "Qoruz", proficiency: 70, category: "CRM & Marketing Tools", url: "https://www.qoruz.com" },

  // AI / LLM Tools
  { name: "ChatGPT", proficiency: 85, category: "AI / LLM Tools", url: "https://chat.openai.com" },
  { name: "Perplexity", proficiency: 80, category: "AI / LLM Tools", url: "https://www.perplexity.ai" },
  { name: "DALL-E", proficiency: 70, category: "AI / LLM Tools", url: "https://openai.com/dall-e" },
  { name: "Playground.com", proficiency: 65, category: "AI / LLM Tools", url: "https://playground.com" },
  { name: "Stanford STORM", proficiency: 60, category: "AI / LLM Tools", url: "https://storm.genie.stanford.edu" },

  // Strategy & Management
  { name: "Campaign Planning", proficiency: 90, category: "Strategy & Management", url: "#" },
  { name: "Digital Marketing", proficiency: 90, category: "Strategy & Management", url: "#" },
  { name: "Market Research", proficiency: 85, category: "Strategy & Management", url: "#" },
  { name: "Revenue Generation", proficiency: 85, category: "Strategy & Management", url: "#" },
  { name: "Client Relationship Management", proficiency: 85, category: "Strategy & Management", url: "#" },
  { name: "P&L Analysis", proficiency: 80, category: "Strategy & Management", url: "#" },
  { name: "Project Management", proficiency: 80, category: "Strategy & Management", url: "#" },
];

const categories = [...new Set(skills.map(skill => skill.category))];

export default function SkillsPage() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <MainLayout>
      <div className="pt-24 p-8 min-h-screen">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 text-red-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h1>

        <motion.p
          className="text-lg mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          With a diverse skill set spanning performance marketing, analytics, CRM, and AI tools,
          here is a snapshot of my marketing toolkit and proficiencies.
        </motion.p>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            const isExpanded = expandedCategories.includes(category);
            const displaySkills = isExpanded ? categorySkills : categorySkills.slice(0, 3);
            const hasMore = categorySkills.length > 3;

            return (
              <div key={category} className="mb-8">
                <motion.h2
                  className="text-2xl font-bold mb-4 underline decoration-gray-500"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (categoryIndex * 0.1) }}
                >
                  {category}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {displaySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="bg-zinc-900 p-5 rounded-lg cursor-pointer"
                      onClick={() => window.open(skill.url, '_blank')}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + (categoryIndex * 0.1) + (skillIndex * 0.05)
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-medium underline decoration-dashed decoration-red-100">{skill.name}</h3>
                        <span className="text-gray-400">{skill.proficiency}%</span>
                      </div>

                      <div className="w-full bg-zinc-700 rounded-full h-1">
                        <div
                          className="bg-red-600 h-1 rounded-full"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {hasMore && (
                  <motion.button
                    className="md:hidden mt-4 text-red-600 hover:text-red-500 font-medium flex items-center gap-2"
                    onClick={() => toggleCategory(category)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {isExpanded ? (
                      <>View Less <span className="text-xl ">↑</span></>
                    ) : (
                      <>View More <span className="text-xl">↓</span></>
                    )}
                  </motion.button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}