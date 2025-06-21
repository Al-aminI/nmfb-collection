import React, { useState, useEffect } from "react";
import { Navigation } from "../components/landingPage/navigation";
import { PrivacyPolicy } from "../components/pages/privacy_policy";
import { Contact } from "../components/landingPage/contact";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";

import "../App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

export const PrivacyPolicyPage = () => {
  const [landingPageData, setLandingPageData] = useState({});
  
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  
  return (
    <div>
      <Navigation />
      <PrivacyPolicy />
      <Contact data={landingPageData.Contact} />
    </div>
  );
}; 