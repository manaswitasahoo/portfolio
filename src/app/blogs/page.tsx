"use client";

import { MainLayout } from '@/components/layout/MainLayout';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import BlogCard, { BlogPost } from '@/components/blog/BlogCard';

// Sample blog posts data (in a real app, this would come from a CMS or API)
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "Unlocking Seamless AI Integration: A Deep Dive into the Model Context Protocol (MCP)",
    subheading: "Discover how the Model Context Protocol is revolutionizing the way we build and interact with AI models, making them more accessible and powerful than ever before.",
    thumbnail: "/images/mcp_logo.jpg",
    publishDate: "July 1, 2024",
    slug: "model-context-protocol"
  }
  // {
  //   id: '2',
  //   title: "What's up with ONDC?",
  //   subheading: "Has Open Network for Digital Commerce (ONDC) lived up to its hype?",
  //   thumbnail: "/images/link2reel.svg",
  //   publishDate: "July 15, 2024",
  //   slug: "ondc-hype-or-not"
  // }
];

export default function BlogsPage() {
  return (
    <>
      <SEO 
        title="Blog - Apoorv Abhishek"
        description="Exploring ideas in technology, product management, and AI."
        pagePath="/blogs"
      />
      <MainLayout>
        <div className="pt-24 px-4 md:px-8 pb-16 min-h-screen max-w-7xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-red-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Blogs
          </motion.h1>
          <motion.p 
            className="text-lg mb-12 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            Thoughts on technology, product, and the spaces in between.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
}