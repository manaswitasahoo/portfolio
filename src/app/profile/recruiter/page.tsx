"use client";

import React from 'react'; // Make sure to import React
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MainLayout } from '@/components/layout/MainLayout';
import { ProfileBanner } from '@/components/profile/ProfileBanner';
import { CardRow } from '@/components/profile/CardRow';
// Update imports at the top
import { Card } from '@/components/profile/Card';

// Top Picks cards data
const topPicksCards = [
  // {
  //   label: "Work Permit",
  //   imageUrl: "https://ext.same-assets.com/3048873195/105311936.jpeg",
  //   href: "/work-permit"
  // },
  {
    label: "Skills",
    imageUrl: "https://ext.same-assets.com/586183396/1724732849.jpeg",
    href: "/skills"
  },
  {
    label: "Experience",
    imageUrl: "https://ext.same-assets.com/212574815/3750205781.jpeg",
    href: "/work-experience"
  },
  {
    label: "Certifications",
    imageUrl: "https://ext.same-assets.com/1505963160/3618664127.jpeg",
    href: "/certifications"
  },
  {
    label: "Recommendations",
    imageUrl: "https://ext.same-assets.com/1667344157/2764858541.jpeg",
    href: "/recommendations"
  },
  {
    label: "Projects",
    imageUrl: "https://ext.same-assets.com/3968966852/4022270945.jpeg",
    href: "/projects"
  },
  {
    label: "Contact Me",
    imageUrl: "https://ext.same-assets.com/1216415949/1587688894.jpeg",
    href: "/contact-me"
  }
];

// Continue Watching cards data
const continueWatchingCards = [
  {
    label: "Music",
    imageUrl: "https://ext.same-assets.com/2856441299/1368048024.jpeg",
    href: "/music"
  },
  {
    label: "Blogs",
    imageUrl: "https://ext.same-assets.com/2637683392/3018728848.jpeg",
    href: "/blogs"
  },
  {
    label: "Contact Me",
    imageUrl: "https://ext.same-assets.com/1216415949/1587688894.jpeg",
    href: "/contact-me"
  }
];

export default function RecruiterProfile() {
  const settings = {
    dots: true,
    // infinite: true,
    // speed: 500,
    slidesToShow: 4, // Adjust the number of slides to show
    slidesToScroll: 1,
    arrows:false,
    swipe:true,
    // swipeToSlide:true,
    // autoplay: true, // Add autoplay if needed
    // autoplaySpeed: 3000, // Adjust autoplay speed (milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true
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

  return (
    <MainLayout>
      <ProfileBanner
        backgroundImage="https://ext.same-assets.com/2325684012/2846338995.gif"
      />

      <div className="flex flex-col px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-4">Today's Top Picks for Recruiters</h2>
          <Slider {...settings}>
            {topPicksCards.map((card) => (
              <div key={card.label} className="flex items-center justify-center"> {/* Add some spacing around each card */}
                <Card cardData={card} />
              </div>
            ))}
          </Slider>
      </div>

      <CardRow
        title="Continue Watching for Recruiters"
        cards={continueWatchingCards}
        isWatching={true}
      />
    </MainLayout>
  );
}
