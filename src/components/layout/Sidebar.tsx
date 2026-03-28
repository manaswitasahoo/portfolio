"use client";

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  FaHome,
  FaBriefcase,
  FaTools,
  FaProjectDiagram,
  FaEnvelope
} from 'react-icons/fa';

type SidebarProps = {
  className?: string;
};

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("sidebar fixed top-0 left-0 h-full w-64 bg-black/95 text-white transform -translate-x-full transition-transform duration-300 ease-in-out z-40 pt-20", className)}>
      <div className="sidebar-logo px-4 mb-6">
        <Image
          src="/manaswita_logo.svg"
          alt="Manaswita Sahoo Logo"
          width={100}
          height={30}
          className="mx-auto"
        />
      </div>
      <ul className="px-4 space-y-4">
        <li>
          <Link href="/browse" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-800">
            <FaHome />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/work-experience" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-800">
            <FaBriefcase />
            <span>Professional</span>
          </Link>
        </li>
        <li>
          <Link href="/skills" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-800">
            <FaTools />
            <span>Skills</span>
          </Link>
        </li>
        <li>
          <Link href="/projects" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-800">
            <FaProjectDiagram />
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link href="/contact-me" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-800">
            <FaEnvelope />
            <span>Hire Me</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
