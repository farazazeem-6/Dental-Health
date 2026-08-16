import { useState } from 'react';
import { css } from '../styled-system/css';
import { SplashScreen } from './view/SplashScreen';
import { Navbar } from './view/Navbar';
import { HeroSection } from './view/HeroSection';
import { GallerySection } from './view/GallerySection';
import { ImplantSection } from './view/ImplantSection';
import { ContactSection } from './view/ContactSection';
import { FooterSection } from './view/FooterSection';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className={css({ bg: 'brand.white' })}>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <Navbar />
      <HeroSection />
      <GallerySection />
      <ImplantSection />
      <ContactSection />
      <FooterSection />
 </div>
  );
}
