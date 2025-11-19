import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaSpotify, FaApple } from 'react-icons/fa';

export default function Home() {
  // Common style for the dark, primary background
  const primaryBg = "bg-[#09001b]"; // A deep indigo/dark purple close to the image's background
  const primaryText = "text-white";
  const primaryRed = "text-[#E60000]"; // Bright red for accents
  const darkCard = "bg-[#18003a]"; // Slightly lighter dark background for cards/sections

  // Mock data for the multi-image section and social links
  const gridImages = [
    { url: 'https://via.placeholder.com/300x300/18003a/ffffff?text=Image+1', alt: 'Artist Image 1' },
    { url: 'https://via.placeholder.com/300x300/18003a/ffffff?text=Image+2', alt: 'Artist Image 2' },
    { url: 'https://via.placeholder.com/300x300/18003a/ffffff?text=Image+3', alt: 'Artist Image 3' },
    { url: 'https://via.placeholder.com/300x300/18003a/ffffff?text=Image+4', alt: 'Artist Image 4' },
  ];

  const socialLinks = [
    { icon: FaSpotify, href: '#', label: 'Spotify' },
    { icon: FaApple, href: '#', label: 'Apple Music' },
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaTiktok, href: '#', label: 'TikTok' },
  ];

  return (
    <div className={`min-h-screen ${primaryBg} ${primaryText}`}>

      {/* --- SECTION 1: HERO / HEADER IMAGE & LISTEN NOW --- */}
      <section className="w-full">
        {/* Header Image Area (The two figures standing together) */}
        <div 
          className="h-[60vh] md:h-[80vh] bg-cover bg-center"
          // Replace with your actual image URL for the main header image
          style={{ backgroundImage: "url('https://i.ibb.co/d0Fv6ZS9/IMG-20250425-WA0004.jpg')" }}
        >
          {/* Optional: Add a dark overlay to mimic the image's look */}
          <div className="w-full h-full bg-black/30"></div>
        </div>
        
        {/* Listen Now Button below the main image */}
        <div className={`py-6 flex justify-center ${darkCard}`}>
          <button className="px-12 py-3 border-2 border-white rounded-md text-lg font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Listen Now
          </button>
        </div>
      </section>

      {/* --- SECTION 2: MULTI-IMAGE GRID & LISTEN NOW --- */}
      <section className={`pt-10 pb-12 w-full max-w-7xl mx-auto px-4 md:px-0`}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {gridImages.map((img, index) => (
            <div key={index} className="aspect-square overflow-hidden">
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>

        {/* Listen Now Button below the grid */}
        <div className="mt-8 flex justify-center">
          <button className="px-12 py-3 border-2 border-white rounded-md text-lg font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Listen Now
          </button>
        </div>
        
        {/* Social Icons/Streaming Links row */}
        <div className="mt-10 flex justify-center space-x-6 text-2xl">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} aria-label={link.label} className="opacity-70 hover:opacity-100 transition-opacity">
              <link.icon />
            </a>
          ))}
        </div>
      </section>


      {/* --- SECTION 3: WE TRUST YOUR TOUR / CTA --- */}
      <section className={`py-16 md:py-24 ${primaryBg} border-t border-b border-white/10`}>
        <div className="text-center px-4">
          <h2 className={`text-[12vw] md:text-9xl font-extrabold leading-none ${primaryRed} tracking-tight opacity-90`}>
            WE TRUST
          </h2>
          <h2 className={`text-[12vw] md:text-9xl font-extrabold leading-none ${primaryRed} tracking-tight -mt-4 opacity-90`}>
            YOUR TOUR
          </h2>

          <div className="mt-10 max-w-lg mx-auto text-center text-sm font-light text-gray-300 border-t border-b py-6 border-white/20">
            <p className="mb-4 uppercase tracking-widest">
              Join us for the most exclusive music experience this year.
            </p>
            <p>
              Get ready to see King Vibez live! Be the first to know about new dates and cities.
            </p>
          </div>

          <button className="mt-8 px-10 py-3 border-2 border-white rounded-md text-lg font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Tour Updates
          </button>
        </div>
      </section>

      {/* --- SECTION 4: FOOTER / MAILING LIST --- */}
      <footer className={`pt-20 pb-10 ${primaryBg}`}>
        {/* Logos/Icons Area (Replace placeholder divs with actual images if needed) */}
        <div className="flex justify-center space-x-12 mb-10">
            {/* Placeholder for left logo/icon */}
            <div className="w-16 h-16 rounded-full border border-gray-500 flex items-center justify-center text-gray-500">Logo 1</div>
            {/* Placeholder for right logo/icon */}
            <div className="w-16 h-16 rounded-full border border-gray-500 flex items-center justify-center text-gray-500">Logo 2</div>
        </div>

        {/* Mailing List Form */}
        <div className="max-w-md mx-auto px-4">
            <h3 className="text-lg font-semibold text-center mb-6 uppercase tracking-wider">
                Join the Mailing List
            </h3>
            <div className="space-y-4">
                <input
                    type="email"
                    placeholder="Email Address"
                    className={`w-full p-3 ${darkCard} border border-gray-700 rounded-sm text-sm placeholder-gray-500`}
                />
                <input
                    type="text"
                    placeholder="First Name"
                    className={`w-full p-3 ${darkCard} border border-gray-700 rounded-sm text-sm placeholder-gray-500`}
                />
                <button className={`w-full p-3 bg-white text-black rounded-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors`}>
                    Subscribe
                </button>
            </div>
        </div>

        {/* Final Bottom Social Icons / Copyright */}
        <div className="mt-12 text-center">
            <div className="flex justify-center space-x-6 text-xl mb-4">
              {socialLinks.slice(2).map((link, index) => ( // Use only the last four social icons
                <a key={index} href={link.href} aria-label={link.label} className="opacity-70 hover:opacity-100 transition-opacity">
                  <link.icon />
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-xs">
                © {new Date().getFullYear()} KING VIBEZ • All Rights Reserved
            </p>
        </div>
      </footer>
    </div>
  );
}
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaSpotify, FaApple } from 'react-icons/fa';

export default function Home() {
  // Common style for the dark, primary background
  const primaryBg = "bg-[#09001b]"; // A deep indigo/dark purple close to the image's background
  const primaryText = "text-white";
  const primaryRed = "text-[#E60000]"; // Bright red for accents
  const darkCard = "bg-[#18003a]"; // Slightly lighter dark background for cards/sections

  // Mock data for the multi-image section and social links
  const gridImages = [
    { url: 'https://via.placeholder.com/300x300/18003a/ffffff?text=Image+1', alt: 'Artist Image 1' },
    { url: 'https://via.placeholder.com/300x300/18003a/ffffff?text=Image+2', alt: 'Artist Image 2' },
    { url: 'https://via.placeholder.com/300x300/18003a/ffffff?text=Image+3', alt: 'Artist Image 3' },
    { url: 'https://via.placeholder.com/300x300/18003a/ffffff?text=Image+4', alt: 'Artist Image 4' },
  ];

  const socialLinks = [
    { icon: FaSpotify, href: '#', label: 'Spotify' },
    { icon: FaApple, href: '#', label: 'Apple Music' },
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaTiktok, href: '#', label: 'TikTok' },
  ];

  return (
    <div className={`min-h-screen ${primaryBg} ${primaryText}`}>

      {/* --- SECTION 1: HERO / HEADER IMAGE & LISTEN NOW --- */}
      <section className="w-full">
        {/* Header Image Area (The two figures standing together) */}
        <div 
          className="h-[60vh] md:h-[80vh] bg-cover bg-center"
          // Replace with your actual image URL for the main header image
          style={{ backgroundImage: "url('https://i.ibb.co/d0Fv6ZS9/IMG-20250425-WA0004.jpg')" }}
        >
          {/* Optional: Add a dark overlay to mimic the image's look */}
          <div className="w-full h-full bg-black/30"></div>
        </div>
        
        {/* Listen Now Button below the main image */}
        <div className={`py-6 flex justify-center ${darkCard}`}>
          <button className="px-12 py-3 border-2 border-white rounded-md text-lg font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Listen Now
          </button>
        </div>
      </section>

      {/* --- SECTION 2: MULTI-IMAGE GRID & LISTEN NOW --- */}
      <section className={`pt-10 pb-12 w-full max-w-7xl mx-auto px-4 md:px-0`}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {gridImages.map((img, index) => (
            <div key={index} className="aspect-square overflow-hidden">
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>

        {/* Listen Now Button below the grid */}
        <div className="mt-8 flex justify-center">
          <button className="px-12 py-3 border-2 border-white rounded-md text-lg font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Listen Now
          </button>
        </div>
        
        {/* Social Icons/Streaming Links row */}
        <div className="mt-10 flex justify-center space-x-6 text-2xl">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} aria-label={link.label} className="opacity-70 hover:opacity-100 transition-opacity">
              <link.icon />
            </a>
          ))}
        </div>
      </section>


      {/* --- SECTION 3: WE TRUST YOUR TOUR / CTA --- */}
      <section className={`py-16 md:py-24 ${primaryBg} border-t border-b border-white/10`}>
        <div className="text-center px-4">
          <h2 className={`text-[12vw] md:text-9xl font-extrabold leading-none ${primaryRed} tracking-tight opacity-90`}>
            WE TRUST
          </h2>
          <h2 className={`text-[12vw] md:text-9xl font-extrabold leading-none ${primaryRed} tracking-tight -mt-4 opacity-90`}>
            YOUR TOUR
          </h2>

          <div className="mt-10 max-w-lg mx-auto text-center text-sm font-light text-gray-300 border-t border-b py-6 border-white/20">
            <p className="mb-4 uppercase tracking-widest">
              Join us for the most exclusive music experience this year.
            </p>
            <p>
              Get ready to see King Vibez live! Be the first to know about new dates and cities.
            </p>
          </div>

          <button className="mt-8 px-10 py-3 border-2 border-white rounded-md text-lg font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Tour Updates
          </button>
        </div>
      </section>

      {/* --- SECTION 4: FOOTER / MAILING LIST --- */}
      <footer className={`pt-20 pb-10 ${primaryBg}`}>
        {/* Logos/Icons Area (Replace placeholder divs with actual images if needed) */}
        <div className="flex justify-center space-x-12 mb-10">
            {/* Placeholder for left logo/icon */}
            <div className="w-16 h-16 rounded-full border border-gray-500 flex items-center justify-center text-gray-500">Logo 1</div>
            {/* Placeholder for right logo/icon */}
            <div className="w-16 h-16 rounded-full border border-gray-500 flex items-center justify-center text-gray-500">Logo 2</div>
        </div>

        {/* Mailing List Form */}
        <div className="max-w-md mx-auto px-4">
            <h3 className="text-lg font-semibold text-center mb-6 uppercase tracking-wider">
                Join the Mailing List
            </h3>
            <div className="space-y-4">
                <input
                    type="email"
                    placeholder="Email Address"
                    className={`w-full p-3 ${darkCard} border border-gray-700 rounded-sm text-sm placeholder-gray-500`}
                />
                <input
                    type="text"
                    placeholder="First Name"
                    className={`w-full p-3 ${darkCard} border border-gray-700 rounded-sm text-sm placeholder-gray-500`}
                />
                <button className={`w-full p-3 bg-white text-black rounded-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors`}>
                    Subscribe
                </button>
            </div>
        </div>

        {/* Final Bottom Social Icons / Copyright */}
        <div className="mt-12 text-center">
            <div className="flex justify-center space-x-6 text-xl mb-4">
              {socialLinks.slice(2).map((link, index) => ( // Use only the last four social icons
                <a key={index} href={link.href} aria-label={link.label} className="opacity-70 hover:opacity-100 transition-opacity">
                  <link.icon />
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-xs">
                © {new Date().getFullYear()} KING VIBEZ • All Rights Reserved
            </p>
        </div>
      </footer>
    </div>
  );
}
