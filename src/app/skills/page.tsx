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
  // Data Analytics
  { name: "Metabase", proficiency: 95, category: "Data Analytics", url: "https://metabase.com/" },
  { name: "Mixpanel", proficiency: 95, category: "Data Analytics", url: "https://mixpanel.com/" },
  { name: "Google Analytics", proficiency: 70, category: "Data Analytics", url: "https://analytics.google.com/" },

  // AI / LLM
  { name: "Cursor (AI Code Editor)", proficiency: 80, category: "AI / LLM", url: "https://cursor.so/" },
  { name: "Trae (AI Code Editor)" , proficiency: 90, category: "AI / LLM", url: "https://www.trae.ai/" },
  { name: "Void (Open Source AI Code Editor)", proficiency: 85, category: "AI / LLM", url: "https://github.com/voideditor/void" },
  { name: "Qwen-7B", proficiency: 100, category: "AI / LLM", url: "https://github.com/QwenLM/Qwen-7B" },
  { name: "Kimi", proficiency: 100, category: "AI / LLM", url: "https://kimi.ai/" },
  { name: "Uncensored Falcon 7B", proficiency: 75, category: "AI / LLM", url: "https://huggingface.co/uncensored-falcon-7b" },
  { name: "Stanford STORM", proficiency: 60, category: "AI / LLM", url: "https://storm.genie.stanford.edu/" },
  { name: "DeepSeek", proficiency: 80, category: "AI / LLM", url: "https://chat.deepseek.com/" },
  { name: "Google BERT", proficiency: 70, category: "AI / LLM", url: "https://research.google/pubs/bert-pre-training-of-deep-bidirectional-transformers-for-language-understanding/" },


  // Product Management
  { name: "Jira", proficiency: 85, category: "Product Management", url: "https://www.atlassian.com/software/jira" },
  { name: "Notion", proficiency: 90, category: "Product Management", url: "https://www.notion.so/" },
  { name: "Figma", proficiency: 60, category: "Product Management", url: "https://www.figma.com/" },
  { name: "Balsamiq", proficiency: 40, category: "Product Management", url: "https://balsamiq.com/" },
  { name: "Semrush", proficiency: 40, category: "Product Management", url: "https://www.semrush.com/" },
  { name: "Google Search Console", proficiency: 50, category: "Product Management", url: "https://search.google.com/search-console" },
  { name: "Mailchimp", proficiency: 60, category: "Product Management", url: "https://mailchimp.com/" },
  { name: "6Sense", proficiency: 45, category: "Product Management", url: "https://www.6sense.com/" },
  { name: "HubSpot", proficiency: 75, category: "Product Management", url: "https://www.hubspot.com/" },

  // Databases
  { name: "MongoDB", proficiency: 85, category: "Database", url: "https://www.mongodb.com/" },
  { name: "PostgreSQL", proficiency: 70, category: "Database", url: "https://www.postgresql.org/" },
  { name: "MySQL", proficiency: 85, category: "Database", url: "https://www.mysql.com/" },
  { name: "ElasticSearch", proficiency: 75, category: "Database", url: "https://www.elastic.co/" },
  { name: "Redis", proficiency: 75, category: "Database", url: "https://redis.io/" },


  // Backend
  { name: "Java", proficiency: 75, category: "Backend", url: "https://www.java.com/" },
  { name: "Python (Flask)", proficiency: 75, category: "Backend", url: "https://flask.palletsprojects.com/" },
  { name: "GoLang", proficiency: 60, category: "Backend", url: "https://go.dev/" },

  //Frontend
  { name: "React", proficiency: 40, category: "Frontend", url: "https://reactjs.org/" },
  { name: "JavaScript", proficiency: 40, category: "Frontend", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "HTML/CSS", proficiency: 40, category: "Frontend", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "TypeScript", proficiency: 45, category: "Frontend", url: "https://www.typescriptlang.org/" },


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
          With over 5 years of experience in full-stack development, I've honed a diverse set of skills
          in various technologies, frameworks, and tools. Below is a snapshot of my technical proficiencies.
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