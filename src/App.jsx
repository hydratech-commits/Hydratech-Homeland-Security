import React from "react";
import Hero from "./components/Hero";

import Portfolio from "./components/Portfolio";
import Tech from "./components/Tech";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Header from "./components/Header";
import { ThemeProvider } from "./context/theme";
import TestimonialSection16 from "./components/Testimonials";
import Careers from "./components/Careers";

function App() {
  return (
    <ThemeProvider>
      <div className="text-white bg-zinc-950 h-full ">
        <Header />
        <Hero />
        <About />
        <hr className="w-2/3 border border-[#adb3bd] mx-auto" />
        <Portfolio />
        <hr className="w-2/3 border border-[#adb3bd] mx-auto" />
        <TestimonialSection16 />
        <hr className="w-2/3 border border-[#adb3bd] mx-auto" />
        <Tech />
        <hr className="w-2/3 border border-[#adb3bd] mx-auto" />
        <Careers/>
        <hr className="w-2/3 border border-[#adb3bd] mx-auto" />
        <Contact />
        <hr className="w-2/3 border border-[#adb3bd] mx-auto" />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
