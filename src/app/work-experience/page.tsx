"use client";

import { MainLayout } from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
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
  skills: string;
  achievements: string[];
  isLeft: boolean;
  color: AllowedColor;
  index?: number;
  url?: string;
  isEducation?: boolean;
};

function ExperienceItem({ position, company, period, skills, achievements, isLeft, color, index, url, isEducation }: ExperienceItemProps) {
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

  // Update the getColorClass function for solid colors
  const getColorClass = (color: AllowedColor) => {
    const colorMap = {
      red: 'bg-red-500',
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      yellow: 'bg-amber-400',
      purple: 'bg-purple-500',
      pink: 'bg-pink-500',
      indigo: 'bg-indigo-500',
      gray: 'bg-gray-100 text-gray-900',
    };
    return colorMap[color];
  };

  // Update the cardContent section with improved hierarchy
  const cardContent = (
    <div ref={contentRef} className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-xl md:text-2xl font-bold tracking-tight">{position}</h3>
        <h4 className={cn(
          "text-base md:text-lg flex items-center gap-2 opacity-90",
          hasAnimated && "animate-fade-in"
        )} onClick={url && url !== '#' ? handleCompanyClick : undefined}>
          {url && url !== '#' && <Favicon url={url} />}
          <span className={url && url !== '#' ? "underline decoration-dashed cursor-pointer" : ""}>
            {company}
          </span>
        </h4>
      </div>

      <div className="space-y-1">
        <p className="text-[0.5rem] text-gray-700 uppercase tracking-wider opacity-75 font-medium">Skills</p>
        <p className="text-xs md:text-[0.9rem] opacity-90 leading-relaxed">{skills}</p>
      </div>

      <div className="space-y-2">
        <p className="text-[0.5rem] text-gray-700 uppercase tracking-wider opacity-75 font-medium">Key Achievements</p>
        <div className={cn(
          "transition-all duration-300",
          !isExpanded && "max-h-[200px] overflow-hidden relative"
        )}>
          <ul className="text-xs md:text-[0.9rem] opacity-90">
            {achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-xs mt-1.5">•</span>
                <span className="leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
          {!isExpanded && showToggle && (
            <div className="absolute bottom-0 left-0 right-0 h-16 " />
          )}
        </div>
      </div>

      {showToggle && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-2 text-sm bg-black/20 hover:bg-black/30 rounded-md transition-all flex items-center justify-center gap-2 font-medium backdrop-blur-sm"
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
          <div className={cn(
            "w-full md:w-6/12 px-4 md:pr-8 order-2 md:order-1",
            hasAnimated && "animate-card-appear-left"
          )}>
            <div className={cn(
              getColorClass(color),
              "rounded-xl p-6 shadow-lg backdrop-blur-sm border border-white/10",
              "transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            )}>
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
              {
                'bg-gray-500': color === 'gray',
                'bg-red-500': color === 'red',
                'bg-blue-500': color === 'blue',
                'bg-green-500': color === 'green',
                'bg-amber-400': color === 'yellow',
                'bg-purple-500': color === 'purple',
                'bg-pink-500': color === 'pink',
                'bg-indigo-500': color === 'indigo',
              },
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
      position: "Growth Marketing Associate",
      company: "Aurm",
      period: "Sep 2025 - Present",
      skills: "Meta Ads, Google Ads, CRM & Retention Marketing, Creative Strategy, Data Analytics & Reporting",
      achievements: [
        "Ran Advantage+ campaigns focused on awareness, resulting in a 4.5% increase in website sessions and traffic.",
        "Executed Top-of-Funnel (TOF) campaigns that improved overall engagement by 35%.",
        "Managed Bottom-of-Funnel (BOF) campaigns that increased lead volume by 8.7%.",
        "Improved lead conversion by 3.5% through optimized audience targeting and creatives.",
        "Reduced CPL by 34% and CAC by 45%.",
        "Managed Search campaigns to capture high-intent users.",
        "Ran Demand Gen campaigns aimed at boosting brand awareness, increasing Traffic Acquisition by 21.94%.",
        "Executed WhatsApp campaigns for retargeting, reactivation, and lead nurturing.",
        "Managed email marketing campaigns improving user engagement and conversion rates by almost 5%.",
        "Developed high-converting messaging frameworks that increased CTR by 3.1% across priority campaign creatives.",
        "Built a centralized dashboard to monitor performance across Meta, Google, CRM, and key funnel metrics."
      ],
      isLeft: false,
      color: "blue" as AllowedColor,
      url: "https://www.aurm.in",
      isEducation: false,
    },
    {
      position: "Brand Partnership Associate",
      company: "Kapiva",
      period: "June 2024 - Sep 2025",
      skills: "Campaign Management, Revenue Generation, Brand Partnerships, Performance Marketing, Fraud Detection, P&L Analysis",
      achievements: [
        "Managed campaigns across GPay Console, PhonePe, and Amazon Pay, achieving 70% of revenue through strategic bid placements and monthly creative updates, boosting CTR by 18%.",
        "Generated ₹40 Lakhs monthly from PhonePe and GPay (67% of total campaign revenue) and ₹20 Lakhs from affiliate marketing via agencies and coupon/cashback sites.",
        "Onboarded key partners such as Flipkart, Jio, Paytm, Mobikwik, Magicpin, Plum, Plutosone, expanding the affiliate partnership network by 30%.",
        "Scaled Meta and Google Ads budgets from ₹2Cr to ₹8.4Cr/month (320% growth) while maintaining cost efficiency and improving conversion metrics.",
        "Boosted ROAS from 0.47 to 0.52 and reduced CPL by 6.2% through audience segmentation, creative optimization, and bid strategy refinements.",
        "Increased awareness budget share from 5% to 10% for top-performing SKUs, improving funnel efficiency and lowering acquisition costs.",
        "Implemented bid multipliers, Advantage+ setups on Meta and Performance Max, automated bidding on Google, driving 12% reduction in CPA for priority products.",
        "Identified and resolved ₹98K in revenue fraud by leveraging Trackier dashboard analytics and conducting detailed analyses of click IPs, operating systems, and cookie durations.",
        "Conducted spend vs. revenue analysis to optimize budget allocation, increasing ROI by 20%."
      ],
      isLeft: true,
      color: "green" as AllowedColor,
      url: "https://www.kapiva.in",
      isEducation: false,
    },
    {
      position: "Brand Partnership Executive",
      company: "Rapido",
      period: "Dec 2023 - June 2024",
      skills: "Loyalty Programs, Brand Partnerships, API Integrations, Growth Marketing, User Retention",
      achievements: [
        "Initiated loyalty program for Rapido Captains to increase Daily Rides by 7.8%, working days by 5% and quality by 12%.",
        "Conducted 300+ interviews with Rapido Captains across India to reduce monetary incentives, reducing costs by 15%.",
        "Partnered with 10+ new brands such as Swiggy, Netmeds, Pharmeasy, IOCL, Unigas, Total Gas, Alt Balaji, Zee5 to provide vouchers to Captains, increasing retention by 3.2%.",
        "Facilitated API integrations with Delhi Metro to augment a new source of ride booking, boosting daily transaction value by ₹14 lakhs.",
        "Successfully conducted PWA PoCs with Urban Company, DriveU, Meesho, Nobroker to improve commute efficiency of service partners by 15-20% and increasing rides by 1.6%.",
        "Designed and implemented brand visibility campaigns with Dineout, CRED and Explorex increasing FTUs by 2.8%.",
        "Co-ordinated 50+ meme marketing assets with media agencies increasing platform subscribers by 20%."
      ],
      isLeft: false,
      color: "purple" as AllowedColor,
      url: "https://www.rapido.bike",
      isEducation: false,
    },
    {
      position: "Marketing and Sales Intern",
      company: "Mondelez International",
      period: "June 2022 - July 2022",
      skills: "Sales, Retail Distribution, Planogram Analysis, Brand Presence",
      achievements: [
        "Increased outlets in existing routes improving resource utilization per route.",
        "Added 27 new outlets to Cadbury's Brand Presence.",
        "Conducted comprehensive planogram analysis to identify strategic merchandising opportunities within retail outlets."
      ],
      isLeft: true,
      color: "yellow" as AllowedColor,
      url: "https://www.mondelezinternational.com",
      isEducation: false,
    },
    {
      position: "MBA - Marketing",
      company: "KIIT School of Management, Bhubaneswar",
      period: "2021 - 2023",
      skills: "Marketing Strategy, Consumer Behavior, Brand Management, Market Research",
      achievements: ["MBA with specialization in Marketing from KIIT Deemed University."],
      isLeft: false,
      color: "gray" as AllowedColor,
      url: "https://ksom.ac.in",
      isEducation: true,
    },
    {
      position: "B.Sc",
      company: "Unitech Degree College, Nayagarh, Odisha",
      period: "2017 - 2020",
      skills: "Science, Foundational Education",
      achievements: ["Bachelor of Science from Utkal University."],
      isLeft: true,
      color: "gray" as AllowedColor,
      url: "#",
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
                <p className="text-white">Based in: Bengaluru, Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}