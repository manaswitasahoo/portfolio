"use client";

import { MainLayout } from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaStar } from 'react-icons/fa';
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { Briefcase } from 'lucide-react';
import { BsBuilding } from 'react-icons/bs';
import { cn } from '@/lib/utils';
import { Favicon } from '@/components/ui/Favicon';

// Custom hook for intersection observer
const useIntersectionObserver = ({ threshold = 0, rootMargin = '0px' }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isIntersecting };
};

// Types for the experience items
type AllowedColor = 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'pink' | 'indigo' | 'gray';

type ExperienceItemProps = {
  position: string;
  company: string;
  period: string;
  technologies: string;
  achievements: string[];
  isLeft: boolean;
  color: AllowedColor;
  index?: number;
  url?: string;
  isEducation?: boolean;
};

function ExperienceItem({ position, company, period, technologies, achievements, isLeft, color, index, url, isEducation }: ExperienceItemProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 })
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [showToggle, setShowToggle] = useState(false)

  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.scrollHeight;
      setShowToggle(height > 300); // Show toggle if content height > 300px
    }
  }, [achievements]);

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isIntersecting, hasAnimated])

  const handleCompanyClick = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  const getColorClass = (color: AllowedColor) => {
    const colorMap = {
      red: 'bg-red-500',
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      yellow: 'bg-yellow-500',
      purple: 'bg-purple-500',
      pink: 'bg-pink-500',
      indigo: 'bg-indigo-500',
      gray: 'bg-gray-100 text-black',
    };
    return colorMap[color];
  };

  // Update the cardContent section in ExperienceItem
  const cardContent = (
      <div ref={contentRef}>
        <h3 className="text-lg md:text-xl font-bold mb-1">{position} 🚀</h3>
        <h4 className={cn("text-base md:text-lg mb-3 underline-dashed cursor-pointer flex items-center gap-2", 
          hasAnimated && "animate-fade-in")} onClick={handleCompanyClick}>
          {url && url !== '#' && <Favicon url={url} />}
          {company}
        </h4>
        <p className="text-sm md:text-base mb-3">{technologies}</p>
        <div className={cn(
          "transition-all duration-300",
          !isExpanded && "max-h-[200px] overflow-hidden"
        )}>
          <ul className="space-y-1 text-xs md:text-sm">
            {achievements.map((achievement, i) => (
              <li key={i} className={!isExpanded ? "line-clamp-2" : ""}>- {achievement}</li>
            ))}
          </ul>
        </div>
        {showToggle && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mt-3 py-2 text-sm bg-black/20 hover:bg-black/40 rounded-md transition-colors flex items-center justify-center gap-2 text-white/90 font-medium"
          >
            {isExpanded ? 'Show Less' : 'Show More'} 
            <span className="text-xs">{isExpanded ? '▲' : '▼'}</span>
          </button>
        )}
      </div>
  );

  return (
    <div ref={ref} className="relative flex flex-col md:flex-row items-center justify-center py-4 md:py-0">
      {isLeft ? (
        <>
          <div className={cn("w-full md:w-6/12 px-4 md:pr-8 order-2 md:order-1", 
            hasAnimated && "animate-card-appear-left")}>
            <div className={`${getColorClass(color)} rounded-lg p-4 shadow-lg`}>
              {cardContent}
            </div>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center my-2 md:my-0">
            <div className={cn(
              "rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center z-10",
              color === "gray" ? "bg-gray-500" : `bg-${color}-500`,
              hasAnimated && "animate-icon-pop"
            )}>
              {isEducation ? (
                <BsBuilding className="w-4 h-4 md:w-6 md:h-6 text-white" />
              ) : (
                <Briefcase className="w-4 h-4 md:w-6 md:h-6 text-white" />
              )}
            </div>
          </div>

          <div className={cn(
            "w-full md:w-6/12 px-4 md:pl-8 order-1 md:order-2 text-center md:text-left mb-2 md:mb-0",
            hasAnimated && "animate-fade-in"
          )}>
            <div className="text-white font-medium text-sm md:text-base">{period}</div>
          </div>
        </>
      ) : (
        <>
          <div className={cn(
            "w-full md:w-6/12 px-4 md:pr-8 order-1 md:order-1 text-center md:text-right mb-2 md:mb-0",
            hasAnimated && "animate-fade-in"
          )}>
            <div className="text-white font-medium text-sm md:text-base">{period}</div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center my-2 md:my-0">
            <div className={cn(
              "rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center z-10",
              color === "gray" ? "bg-gray-500" : `bg-${color}-500`,
              hasAnimated && "animate-icon-pop"
            )}>
              {isEducation ? (
                <BsBuilding className="w-4 h-4 md:w-6 md:h-6 text-white" />
              ) : (
                <Briefcase className="w-4 h-4 md:w-6 md:h-6 text-white" />
              )}
            </div>
          </div>

          <div className={cn(
            "w-full md:w-6/12 px-4 md:pl-8 order-2 md:order-2",
            hasAnimated && "animate-card-appear-right"
          )}>
            <div className={color === "gray" ? "bg-gray-100 text-black rounded-lg p-4 shadow-lg" : `${getColorClass(color)} rounded-lg p-4 shadow-lg`}>
              {cardContent}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function WorkExperiencePage() {
  const experiences = [
    {
      position: "Founder, Director",
      company: "Sauci",
      period: "Nov 2024 - Current",
      technologies: "Marketing, Hiring, Growth, P&L, Design",
      achievements: [
        "Launched Sauci, a Cloud Kitchen specialising in Pastas & Sauces, in Nov 2024.",
        "Handled everything from recipe curation, design, packaging, marketing, hiring (multiple times), vendor selection all while being frugal with budget.",
        "Operates only from 7pm - 1130pm.",
        "4.5 Stars & 4.2 Stars on Swiggy & Zomato respectively.",
      ],
      isLeft: false,
      color: "yellow" as AllowedColor,
      url: "https://links.sauci.in",
      isEducation: false,
    },
    {
      position: "Product Manager",
      company: "Hypothesis by Only Much Louder (OML)",
      period: "Mar 2023 - Current",
      technologies: "React, Context API, Twilio, Razorpay, AWS",
      achievements: [
        "Scaled product from $0 to $160K ARR since GA/GTM in Q4FY24, managing sprints, budgets, and cross-functional teams.",
        "Negotiated 25% reduction in operational expenses through vendor contract optimization.",
        "Secured additional funding by presenting strategic initiatives to the OML board.",
        "Led GDPR & ISO compliance across OML, ensuring EU market access.",
        "Conducted product demos via online sessions and offline expos, generating 40+ qualified leads.",
        "Enabled seamless client onboarding with training and WhatsApp support.",
        "Designed (using Figma), developed (GoLang backend using ChatGPT) & launched authenticated creator metrics in just 2 days.",
        "Built in-house transformer (using Falcon 7B model run using OLlama to generate NSFW training data) for creator Brand Safety.",
        "Created actionable Mixpanel/Metabase dashboards for data-driven decision-making.",
        "Established creator outreach program (hired 3 executives) for clients like Flipkart & Meesho."
      ],
      isLeft: true,
      color: "blue" as AllowedColor,
      url: "https://hyp.io",
      isEducation: false,
    },
    {
      position: "Associate Product Manager - SuperStore",
      company: "Meesho",
      period: "Aug 2022 - Feb 2023",
      technologies: "Ruby on Rails, React, Node.js, AWS, PostgreSQL",
      achievements: [
        "Owned Product Quality in Retention & Discovery charter. Drove significant impact on key metrics, nearly doubling M1 Retention and increasing Add To Cart / DAU by 12-15% overall",
        "Boosted Add To Cart/DAU ratio by 16% through category-specific Ratings & Reviews and 15% via a 'Basket Initiator' widget for highly discounted products, driving strategic user engagement and conversion.",
        "Launched Product Variant Discovery to improve the conversion of products with variants by almost 13%.",
        "Conducted Ground Visits to Nagpur for problem discovery, in-person Usability Testing & competitive benchmarking."
      ],
      isLeft: false,
      color: "gray" as AllowedColor,
      url: "https://www.meesho.io/blog/origin-story-meesho-superstore-grocery-business-farmiso-mandi-e-commerce",
      isEducation: false,
    },
    {
      position: "Associate Product Manager - Returns",
      company: "Meesho",
      period: "Oct 2021 - Aug 2021",
      technologies: "Vue.js, Vuex, Tailwind CSS, Firebase",
      achievements: [
        "Owned supplier side of Returns & Product Quality Dashboard for suppliers. ",
        "Led cross-functional projects to tackle cross-subsidization, cutting seller return penalties by Rs 10-39 and driving a 0.59% platform-wide price reduction.",
        "Improved Return Panel accuracy with 3rd Party Logistic partners, reducing perceived high returns from 7% to 0.5%(from their actual return rate) and boosting Seller Return NPS by ~11 points.",
        "Reduced supplier tickets by 36% for the top return dispute by optimizing 3PL systems and collaborating with support agents and suppliers, hence improving CSAT.",
        "Improved the Product Quality Dashboard giving access to quality-related insights & trends leading to a reduction in returns by 0.2% and improving Customer NPS by ~5 pts.",
        "Managed & mentored 2 Product Analysts who quickly rose the ranks in the Analytics team."
      ],
      isLeft: true,
      color: "red" as AllowedColor,
      url: "https://www.meesho.com/",
      isEducation: false,
    },
    {
      position: "Associate Product Manager | Product Analyst",
      company: "Cognizer AI",
      period: "Jan 2021 - Sep 2021",
      technologies: "Vue.js, Vuex, Tailwind CSS, Firebase",
      achievements: [
        ""
      ],
      isLeft: false,
      color: "indigo" as AllowedColor,
      url: "https://www.cognizer.ai/",
      isEducation: false,
    },
    {
      position: "Software Engineer | Associate Software Engineer",
      company: "Cognizer AI",
      period: "Jan 2019 - Jan 2021",
      technologies: "Vue.js, Vuex, Tailwind CSS, Firebase",
      achievements: [
       
      ],
      isLeft: true,
      color: "green" as AllowedColor,
      url: "https://www.meesho.com/",
      isEducation: false,
    },
    {
      position: "Vellore Institute of Technology",
      company: "VIT Vellore",
      period: "May 2015 - May 2019",
      technologies: "👀Computer Science Education",
      achievements: ["CGPA 8.50"],
      isLeft: false,
      color: "gray" as AllowedColor,
      url: "https://vit.ac.in/",
      isEducation: true,
    }
  ];

  const timelineRef = useIntersectionObserver({
    threshold: 0,
    rootMargin: "-100px 0px",
  });

  const timelineItemsContainerRef = useRef<HTMLDivElement>(null);
  const birthInfoRef = useRef<HTMLDivElement>(null);
  const [timelineHeight, setTimelineHeight] = useState(0);

  useLayoutEffect(() => {
    const updateTimelineHeight = () => {
      if (timelineItemsContainerRef.current && birthInfoRef.current) {
        // Calculate height to end just before the birth info box
        const birthInfoTop = birthInfoRef.current.offsetTop;
        setTimelineHeight(birthInfoTop - 30); // Just 24px gap before the birth info box
      }
    };

    if (timelineRef.isIntersecting) {
      requestAnimationFrame(updateTimelineHeight);
    }
  }, [timelineRef.isIntersecting]);

  return (
    <MainLayout>
      <div className="min-h-screen bg-black text-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto px-4">
        <motion.h1 className="text-4xl md:text-6xl font-bold mb-16 md:mb-12 text-red-600 text-center relative mt-16 md:mt-20 z-10"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 
            -translate-y-1/2 w-full text-center bg-black h-8">Work Experience</div>
        </motion.h1>

        <div className="relative" ref={timelineRef.ref}>
          <div className="h-8 md:h-16"></div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-white origin-top"
            style={{
              height: timelineHeight,
              animation: timelineRef.isIntersecting ? 'grow-line 1.5s ease-out forwards' : 'none',
              top: "2rem"
            }}>
          </div>

          <div className="space-y-16 md:space-y-24 mt-8 md:mt-16" ref={timelineItemsContainerRef}>
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={`${experience.company}-${index}`}
                {...experience}
                index={index}
              />
            ))}
          </div>

            {/* Add a spacer div between timeline items and birth info */}
            <div className="h-16"></div>

            <div ref={birthInfoRef} className="flex justify-center mt-4 mb-8 relative z-10">
              <div className="bg-gray-700 p-4 rounded-lg text-center max-w-xs">
                <p className="text-white">Born: 13 January 1998 in Patna</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}