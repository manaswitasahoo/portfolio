"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export interface BlogPost {
  id: string;
  title: string;
  subheading: string;
  thumbnail: string;
  publishDate: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard: FC<BlogCardProps> = ({ post, index }) => {
  return (
    <motion.div
      className="bg-zinc-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-red-600/10 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blogs/${post.slug}`} className="block">
        <div className="relative w-full h-48 md:h-56">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="text-gray-400 text-sm mb-2">{post.publishDate}</p>
          <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-red-500 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-300 line-clamp-3 text-sm md:text-base">
            {post.subheading}
          </p>
          <div className="mt-4 text-red-500 text-sm font-medium flex items-center">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;