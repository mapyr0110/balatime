import { useState } from "react";
import { LangProvider } from "./context/LangContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Gallery from "./components/Gallery";
import LocationMap from "./components/LocationMap";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";

export default function App() {
  const [selectedProgram, setSelectedProgram] = useState<string>("");

  return (
    <LangProvider>
      <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)] antialiased selection:bg-[var(--color-primary)]/20 selection:text-[var(--color-primary)]">
        <Header />
        <Hero />
        <About />
        <Programs onSelectProgram={setSelectedProgram} />
        <LocationMap />
        <Gallery />
        <LeadForm selectedProgram={selectedProgram} />
        <Footer />
      </div>
    </LangProvider>
  );
}