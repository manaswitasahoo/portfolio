"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MainLayout } from '@/components/layout/MainLayout';
import { ProfileBanner } from '@/components/profile/ProfileBanner';
import { CardRow } from '@/components/profile/CardRow';
import { Card } from '@/components/profile/Card';

interface ProfilePageProps {
  type: 'Recruiter' | 'Brand/Agency';
  bannerImage: string;
}

const sharedTopPicks = [
  {
    label: "Skills",
    imageUrl: "/skills_marketing.jpg",  // Updated to use the new image
    href: "/skills"
  },
  {
    label: "Experience",
    imageUrl: "/experience_marketing.jpg",
    href: "/work-experience"
  },
  // {
  //   label: "Certifications",
  //   imageUrl: "https://ext.same-assets.com/1505963160/3618664127.jpeg",
  //   href: "/certifications"
  // },
  // {
  //   label: "Recommendations",
  //   imageUrl: "https://ext.same-assets.com/1667344157/2764858541.jpeg",
  //   href: "/recommendations"
  // },
  // {
  //   label: "Projects",
  //   imageUrl: "/painter.webp",
  //   href: "/projects"
  // },
  {
    label: "About Me",
    imageUrl: "/manaswita_about.jpg",
    href: "/about-me"
  }
];

const sharedContinueWatching = [
  {
    label: "Contact Me",
    imageUrl: "/contact.png",
    href: "/contact-me"
  }
  // {
  //   label: "Blogs",
  //   imageUrl: "https://ext.same-assets.com/2637683392/3018728848.jpeg",
  //   href: "/blogs"
  // },
  
];

const sliderSettings = {
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  swipe: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export function ProfilePage({ type, bannerImage }: ProfilePageProps) {
  return (
    <MainLayout>
      <ProfileBanner backgroundImage={bannerImage} />

      <div className="flex flex-col px-4 md:px-8 mt-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-red-600">Today's Top Picks for {type}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sharedTopPicks.map((card) => (
            <div key={card.label} className="flex flex-col">
              <Card cardData={card} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col px-4 md:px-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-red-600">Continue Watching for {type}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sharedContinueWatching.map((card) => (
            <div key={card.label} className="flex flex-col">
              <Card cardData={card} />
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}