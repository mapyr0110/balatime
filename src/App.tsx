/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Gallery from "./components/Gallery";
import LocationMap from "./components/LocationMap";
import Testimonials from "./components/Testimonials";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";

export default function App() {
  const [selectedProgram, setSelectedProgram] = useState<string>("");

  const handleSelectProgram = (programName: string) => {
    setSelectedProgram(programName);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)] antialiased selection:bg-[var(--color-primary)]/20 selection:text-[var(--color-primary)]">
      {/* Sticky Top Header Navigation */}
      <Header />

      {/* Hero Intro Section */}
      <Hero />

      {/* About Us & Teachers Showcase */}
      <About />

      {/* Pricing and Core Programs Centerpiece */}
      <Programs onSelectProgram={handleSelectProgram} />

      {/* Interactive Map and Classroom Interior */}
      <LocationMap />

      {/* Animated Testimonial Carousels */}
      <Testimonials />

      {/* Real Classroom Portfolio & Gallery */}
      <Gallery />

      {/* Interactive Enrollment Form & FAQs with Local storage DB */}
      <LeadForm selectedProgram={selectedProgram} />

      {/* Complete Footer Section */}
      <Footer />
    </div>
  );
}
