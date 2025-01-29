import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandLogo from "./components/BrandLogo";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import BlogsComp from "./components/BlogsComp";
import Footer from "./components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 100,
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden bg-white dark:bg-black duration-300">
      <Navbar />
      <Hero />
      <BrandLogo />
      <Services />
      <Testimonials />
      <BlogsComp />
      <Footer />
    </div>
  );
};

export default App;
