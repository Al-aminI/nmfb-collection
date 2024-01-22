
import React, { useState, useEffect } from "react";
import { Navigation } from "../components/landingPage/navigation";
import { MP } from "../components/pages/mp";

import { Contact } from "../components/landingPage/contact";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";

import "../App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

export const MPPage = () => {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Navigation />
      
      <MP />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};
