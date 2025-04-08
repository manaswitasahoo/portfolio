"use client";

import { ProfilePage } from '@/components/profile/ProfilePage';
import SEO from '@/components/SEO';

export default function DeveloperProfile() {
  return (
    <>
      <SEO 
        title="Developer Profile - Apoorv Abhishek"
        description="Technical portfolio showcasing my development skills, projects, and technical expertise."
        pagePath="/profile/developer"
        keywords="developer, full stack, technical skills, programming"
      />
      <ProfilePage 
        type="Developer"
        bannerImage="https://ext.same-assets.com/2325684012/2846338995.gif"
      />
    </>
  );
}
