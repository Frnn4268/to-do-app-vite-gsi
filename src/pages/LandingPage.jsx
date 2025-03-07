/**
 * @file LandingPage.jsx
 * @description This component represents the landing page of the To-Do application.
 * It serves as the main entry point for users before logging in or signing up.
 * The page includes a navigation bar, a hero section, a features section, and a footer.
 *
 * @component
 * @returns {JSX.Element} The landing page layout.
 */

import React from 'react';
import Navbar from '../components/common/navbar/Navbar';
import HeroSection from '../components/landing/sections/HeroSection';
import FeaturesSection from '../components/landing/sections/FeaturesSection';
import FooterSection from '../components/landing/sections/FooterSection';

/**
 * LandingPage Component
 * 
 * This component structures the landing page layout using different sections:
 * - `Navbar`: The navigation bar displayed at the top of the page.
 * - `HeroSection`: The introductory section that highlights the app's purpose.
 * - `FeaturesSection`: A section showcasing the key features of the application.
 * - `FooterSection`: The footer containing additional information and links.
 * 
 * @returns {JSX.Element} The landing page layout.
 */
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FooterSection />
    </>
  );
};

export default LandingPage;
