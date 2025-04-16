import React, { Suspense, lazy } from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import { ThemeProvider } from "./context/theme";

// Lazy load components
const About = lazy(() => import("./components/About"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Services = lazy(() => import("./components/Services"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Careers = lazy(() => import("./components/Careers"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <ThemeProvider>
      <div className="text-white bg-zinc-950 h-full ">
        <Header />
        <Hero />

        <Suspense
          fallback={
            <div className="text-center py-10">Loading sections...</div>
          }
        >
          <About />
          <hr className="w-2/3 border border-[#adb3bd] mx-auto" />

          <Services />
          <hr className="w-2/3 border border-[#adb3bd] mx-auto" />

          <Testimonials />
          <hr className="w-2/3 border border-[#adb3bd] mx-auto" />

          <Careers />
          <hr className="w-2/3 border border-[#adb3bd] mx-auto" />

          <Contact />
          <hr className="w-2/3 border border-[#adb3bd] mx-auto" />

          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
