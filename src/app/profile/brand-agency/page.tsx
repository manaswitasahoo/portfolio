"use client";

import { ProfilePage } from '@/components/profile/ProfilePage';
import SEO from '@/components/SEO';

export default function BrandAgencyProfile() {
  return (
    <>
      <SEO
        title="Brand/Agency Profile - Manaswita Sahoo"
        description="Growth marketing portfolio showcasing brand partnerships, performance marketing expertise, and data-driven growth strategy."
        pagePath="/profile/brand-agency"
        keywords="growth marketing, brand partnerships, performance marketing, data-driven growth"
      />
      <ProfilePage
        type="Brand/Agency"
        bannerImage="/videos/prodman2.gif"
      />
    </>
  );
}
