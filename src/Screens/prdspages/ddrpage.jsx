
import React, { useState, useEffect } from "react";
import { Navigation } from "../../components/landingPage/navigation";
import { DBR} from "../../components/products/dbr";

import { Contact } from "../../components/landingPage/contact";
import JsonData from "../../data/data.json";
import SmoothScroll from "smooth-scroll";

import "../../App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

export const DBRPage = () => {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Navigation />
      
      <DBR />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};
