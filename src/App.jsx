import React, { useEffect } from "react";
import { LandingPage } from "./Screens/landingpage";
import { CGPage } from "./Screens/cgPage";
import { CIPage } from "./Screens/cipage";
import { BHPage } from "./Screens/bhpage";
import { BGPage } from "./components/landingPage/bgpage";
import { DPPage } from "./Screens/dppage";
import { MPPage } from "./Screens/mppage";
import { CSRPage } from "./Screens/csrpage";
import { ADSHPage } from "./Screens/prdspages/adshPage";
import { DBRPage } from "./Screens/prdspages/ddrpage";
import { EDUPage } from "./Screens/prdspages/edupage";
import { GTPage } from "./Screens/prdspages/gtpage";
import { HALALPage } from "./Screens/prdspages/halalpage";
import { HJPage } from "./Screens/prdspages/hjpage";
import { IMPROVEPage } from "./Screens/prdspages/improvepage";
import { INFSAVINGSPage } from "./Screens/prdspages/infSavings";
import { RDBPage } from "./Screens/prdspages/rdbpage";
import { SAVINGSPage } from "./Screens/prdspages/savingspage";
import { SFAPage } from "./Screens/sfapage";
import { PrivacyPolicyPage } from "./Screens/privacyPolicyPage";
import { GalleryPage } from "./Screens/galleryPage";
import {BrowserRouter, Route, Routes} from 'react-router-dom';


const App = () => {
  useEffect(() => {
    let io = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("reveal-in");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
    }
    const observeAll = () => {
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        if (!el.classList.contains("reveal-in")) {
          io ? io.observe(el) : el.classList.add("reveal-in");
        }
      });
    };
observeAll();
    const mo = new MutationObserver(observeAll);
    if (document.getElementById("root")) {
      mo.observe(document.getElementById("root"), {
        childList: true,
        subtree: true,
      });
    }
    return () => {
      io && io.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={ <LandingPage /> } />
           <Route path='/gallery' element={ <GalleryPage /> } />
          <Route path='/corporateGovernance' element={ <CGPage /> } />
          <Route path='/corporateInformation' element={ <CIPage /> } />
          <Route path='/briefHistory' element={ <BHPage /> } />
          <Route path='/background' element={ <BGPage /> } />
          <Route path='/directorsProfile' element={ <DPPage /> } />
          <Route path='/managementProfile' element={ <MPPage /> } />
          <Route path='/corporateSocialResponsibility' element={ <CSRPage /> } />
          <Route path='/adashe' element={ <ADSHPage /> } />
          <Route path='/dabara' element={ <DBRPage /> } />
          <Route path='/ilimiJari' element={ <EDUPage /> } />
          <Route path='/guntunGatarinka' element={ <GTPage /> } />
          <Route path='/halalSavings' element={ <HALALPage /> } />
          <Route path='/hajjSavings' element={ <HJPage /> } />
          <Route path='/ingantaSanaa' element={ <IMPROVEPage /> } />
          <Route path='/infantSavings' element={ <INFSAVINGSPage /> } />
          <Route path='/raiDaBuri' element={ <RDBPage /> } />
          <Route path='/Savings' element={ <SAVINGSPage /> } />
          <Route path='/StatementOfFinancialAffairs' element={ <SFAPage /> } />
          <Route path='/privacyPolicy' element={ <PrivacyPolicyPage /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
