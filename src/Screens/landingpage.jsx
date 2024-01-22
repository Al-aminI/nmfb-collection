
import React, { useState, useEffect } from "react";
import { Navigation } from "../components/landingPage/navigation";
import { Header } from "../components/landingPage/header";
import { Features } from "../components/landingPage/features";
import { About } from "../components/landingPage/about";
import { Services } from "../components/landingPage/services";
import { Gallery } from "../components/landingPage/gallery";
import { Testimonials } from "../components/landingPage/testimonials";
import { Team } from "../components/landingPage/Team";
import { Vision } from "../components/landingPage/vision";
import { Contact } from "../components/landingPage/contact";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";

import "../App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

export const LandingPage = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Vision data={landingPageData.Vision} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};
