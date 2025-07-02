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
    publishDate: "July 2, 2024",
    toc: [
      { title: "What is the Model Context Protocol?", id: "what-is-mcp" },
      { title: "The Problem with Current AI Integration", id: "problem" },
      { title: "MCP Servers aren’t complicated", id: "easy" },
      { title: "Getting Started with MCP", id: "getting-started" }
    ],
    content: `
      <p>If you’re anything like me, you’re always on the lookout for the next big thing in AI and automation. Recently, I stumbled upon <strong>MCP Servers</strong>, a trend that’s buzzing in the developer community. Naturally, I wanted to see if I could weave it into my own product, especially since I’d already built a feature that converts user requirements into smart filter combinations for influencer discovery.<br> My thought? Why not migrate this logic to an MCP Server and let it return influencers directly from our massive database, using nearly 40 different filters!</p>
      <p>Here's a quick demo video of the MCP Server I created : <br> </p>
      <div className="relative max-w-4xl mx-auto aspect-video mb-6">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/AKgwcr18AGQ"
          title="MCP Server Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      <h3 id="what-is-mcp">What is the Model Context Protocol?</h3>
      <p>MCP is an open-source specification created by <a href="https://www.anthropic.com/ target="_blank" rel="noopener noreferrer">Anthropic</a> that standardizes the communication between AI models and applications. Think of it as a universal translator for AI (the term “USB-C port” for AI applications has also been used). This means you can build AI agents and workflows that tap into different databases, APIs, or even your own files, all through a consistent, secure protocol</p>
      <p>Their <a href="https://www.modelcontext.org/" target="_blank" rel="noopener noreferrer" class="text-red-500 hover:underline">official MCP website</a> is a great place to start, if you already have a technical backgound. Otherwise, I've mentioned some videos below.</p>
      <h3 id="problem">The Problem with Current AI Integration</h3>
      <p>Before MCP, if you wanted your AI to fetch data or perform actions, you had to custom-integrate every tool or API—think of it as building a new adapter for every device you want to connect. With MCP, you get a <strong>plug-and-play</strong> system: agents can discover, access, and use new capabilities on the fly, making them far more flexible and powerful</p>
      <p>For example, in my product, I can expose our influencer search endpoint as an <a href= "https://modelcontextprotocol.io/docs/concepts/tools"target="_blank" rel="noopener noreferrer" class="text-red-500 hover:underline">MCP Tool</a> in my MCP Server. Now, instead of manually coding all the logic for filtering influencers, my AI agent can just “ask” the MCP Server. I've added the prompt to convert the requirements to a payload that our existing API can use and added the necessary security measures.</p>
      <h3 id="easy">Why MCP Servers Aren’t as Complicated as They Sound</h3>
      <p>At first glance, “MCP Server” might sound intimidating. But under the hood, it’s just a wrapper around existing APIs and data sources. If you’ve ever built an API or connected to one, you’re already halfway there! MCP simply adds a layer of standardization, making it easier for AI agents to find and use your APIs without custom code each time.</p>
      <p>This concept might sound familiar, cuz it is! <a href= "https://www.dailydoseofds.com/p/function-calling-mcp-for-llms/" target="_blank" rel="noopener noreferrer" class="text-red-500 hover:underline">Function calling</a> lets an LLM decide which tool or API to use based on the user’s request. It’s like telling your AI, “Here’s a toolbox—pick the right tool for the job.” The catch? Every tool needs its own custom integration, and there’s no universal standard</p>
      <h3 id="getting-started">Getting Started with MCP</h3>
      <p>There are tons of blogs, videos and posts about MCP Servers, but to try them out, you first need an MCP Client which can connect to the server.</p>
      <p>Since Anthropic started this protocol, one of the most popular MCP Clients is <a href="https://claude.ai/" target="_blank" rel="noopener noreferrer">Claude Desktop.</a> My go-to is my personal favourite AI Code Editor, <a href="https://www.trae.ai/" target="_blank" rel="noopener noreferrer">Trae</a> followed by <a href="https://www.cursor.com/" target="_blank" rel="noopener noreferrer">Cursor</a> but here's a list of some more MCP Clients shared on <a href="https://github.com/punkpeye/awesome-mcp-clients/" target="_blank" rel="noopener noreferrer">GitHub</a> </p>
      <p>Once you've setup your client, then look at any of these videos or pages to understand more about MCP Servers and how to start with your own.</p>
      <ul className="list-disc list-inside">
        <li className="-mt-1">This <a href="https://www.youtube.com/watch?v=7j1t3UZA1TY" target="_blank" rel="noopener noreferrer" class="text-red-500 hover:underline">video</a> by IBM gives a very simple explanation of MCP and compares it to APIs in general.</li>
        <li className="-mt-1"><a href="https://www.youtube.com/watch?v=-8k9lGpGQ6g" target="_blank" rel="noopener noreferrer" class="text-red-500 hover:underline">Tech With Tim</a>'s tutorial really helped me get started.</li>
        <li className="-mt-1">This list of <a href="https://github.com/punkpeye/awesome-mcp-servers">Awesome MCP Servers</a> will definitely have an interesting MCP server for you to try out.</li>
      </ul>
      <p>So go ahead, try something out and <a href="https://apo1397.in/contact-me">let me know</a> how it goes!</p>
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