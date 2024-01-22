
import React, { useState, useEffect } from "react";
import { Navigation } from "../landingPage/navigation";
import { BG } from "../pages/bg";

import { Contact } from "../landingPage/contact";
import JsonData from "../../data/data.json";
import SmoothScroll from "smooth-scroll";

import "../../App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

export const BGPage = () => {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Navigation />
      
      <BG />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};
