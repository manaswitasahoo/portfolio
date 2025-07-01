"use client";

import { MainLayout } from '@/components/layout/MainLayout';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { BlogPost } from '@/components/blog/BlogCard';

// Sample blog posts data (in a real app, this would come from a CMS or API)
const blogPosts: Record<string, {
  title: string;
  subheading: string;
  thumbnail: string;
  publishDate: string;
  toc: Array<{ title: string; id: string }>;
  content: string;
}> = {
  "model-context-protocol": {
    title: "Unlocking Seamless AI Integration: A Deep Dive into the Model Context Protocol (MCP)",
    subheading: "Discover how the Model Context Protocol is revolutionizing the way we build and interact with AI models, making them more accessible and powerful than ever before.",
    thumbnail: "/images/mcp_logo.jpg",
    publishDate: "July 26, 2024",
    toc: [
      { title: "What is the Model Context Protocol?", id: "what-is-mcp" },
      { title: "The Problem with Current AI Integration", id: "problem" },
      { title: "How MCP Provides a Solution", id: "solution" },
      { title: "Getting Started with MCP", id: "getting-started" },
      { title: "The Future of AI is Interoperable", id: "future" },
    ],
    content: `
      <p>The world of Artificial Intelligence is expanding at an unprecedented rate. Yet, for all the advancements in model capabilities, a significant hurdle remains: the complexity of integration. Developers often face a steep learning curve and a fragmented ecosystem when trying to incorporate different AI models into their applications. This is where the <strong>Model Context Protocol (MCP)</strong> comes in.</p>
      <h3 id="what-is-mcp">What is the Model Context Protocol?</h3>
      <p>MCP is an open-source specification that standardizes the communication between AI models and applications. Think of it as a universal translator for AI. It defines a common language and structure for passing context, capabilities, and requests, abstracting away the unique APIs and data formats of individual models.</p>
      <p>You can explore the concept further at the <a href="https://www.modelcontext.org/" target="_blank" rel="noopener noreferrer" class="text-red-500 hover:underline">official MCP website</a>.</p>
      <h3 id="problem">The Problem with Current AI Integration</h3>
      <p>Currently, integrating an AI model from providers like OpenAI, Anthropic, or Google requires bespoke code for each. This leads to vendor lock-in, increased development time, and difficulty in switching or combining models to leverage their unique strengths.</p>
      <h3 id="solution">How MCP Provides a Solution</h3>
      <p>MCP introduces a standardized 'context window' that applications can interact with. This allows developers to:
        <ul>
          <li><strong>Switch Models Seamlessly:</strong> Swap out one model for another with minimal code changes.</li>
          <li><strong>Orchestrate Multiple Models:</strong> Combine the strengths of different models for more complex tasks.</li>
          <li><strong>Future-Proof Applications:</strong> Easily adopt new models as they become available without a complete rewrite.</li>
        </ul>
      </p>
      <h3 id="getting-started">Getting Started with MCP</h3>
      <p>Several open-source projects are already implementing MCP. A great example is the <a href="https://github.com/apo1397/mcp-server-influencer-search" target="_blank" rel="noopener noreferrer" class="text-red-500 hover:underline">MCP Server for Influencer Discovery</a>, which demonstrates how to build a practical application using the protocol.</p>
      <h3 id="future">The Future of AI is Interoperable</h3>
      <p>The Model Context Protocol represents a paradigm shift towards a more open and interoperable AI ecosystem. By simplifying integration, it empowers developers to focus on creating innovative applications, rather than wrestling with APIs. As more tools and models adopt MCP, we can expect a surge in creative and powerful AI-driven solutions.</p>
    `
  },
  "ondc-hype-or-not": {
    title: "ONDC: The Hype or Not?",
    subheading: "Discover the latest buzz in the world of AI, and whether it's worth your time to learn about the ONDC protocol.",
    thumbnail: "/images/mcp_logo.jpg",
    publishDate: "July 26, 2024",
    toc: [
        { title: "What is the Model Context Protocol?", id: "what-is-mcp" },
    ],
    content: `
      <p>The Open Network for Digital Commerce (ONDC) has been making waves in the e-commerce industry, promising to revolutionize how digital commerce operates in India. But is it living up to the hype? Let's dive deep into what ONDC really means for businesses and consumers.</p>
      <h3 id="what-is-ondc">What is ONDC?</h3>
      <p>ONDC is an ambitious initiative by the Government of India to create an open digital commerce ecosystem. Think of it as UPI for e-commerce - a protocol that enables any buyer to connect with any seller through any compatible application or platform.</p>
    `
  }
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const blogPost = blogPosts[slug as string];
  
  if (!blogPost) {
    return (
      <MainLayout>
        <div className="pt-24 p-8 min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blogs" className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
            Back to Blogs
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <>
      <SEO 
        title={`${blogPost.title} - Apoorv Abhishek`}
        description={blogPost.subheading}
        pagePath={`/blogs/${slug}`}
        keywords="Model Context Protocol, AI integration, AI models, open-source AI, Apoorv Abhishek blog"
        imageUrl={blogPost.thumbnail}
      />
      <MainLayout>
        <div className="pt-24 px-4 md:px-8 pb-16 min-h-screen max-w-7xl mx-auto">
          <Link 
            href="/blogs" 
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blogs
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Blog Post Content */}
            <motion.div 
              className="md:col-span-8 lg:col-span-9 bg-zinc-900 p-6 md:p-8 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative w-full h-48 sm:h-64 md:h-96 mb-6 md:mb-8 rounded-lg overflow-hidden">
                <Image 
                  src={blogPost.thumbnail}
                  alt={blogPost.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{blogPost.title}</h2>
              <p className="text-gray-400 mb-4 text-sm">{blogPost.publishDate}</p>
              <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 italic">{blogPost.subheading}</p>
              
              <div 
                className="prose prose-invert prose-sm md:prose-base lg:prose-lg max-w-none prose-a:text-red-500 hover:prose-a:text-red-400 prose-strong:text-white prose-h3:text-red-600 prose-h3:text-xl prose-h3:font-bold prose-li:marker:text-red-600 prose-p:text-gray-300 prose-p:leading-relaxed prose-headings:mt-8 prose-headings:mb-4"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </motion.div>

            {/* Table of Contents */}
            <motion.div 
              className="md:col-span-4 lg:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="sticky top-28 bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Table of Contents</h3>
                <ul className="space-y-3">
                  {blogPost.toc.map((item) => (
                    <li key={item.id}>
                      <Link href={`#${item.id}`}>
                        <span className="text-gray-300 hover:text-white hover:underline transition-colors cursor-pointer">{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}