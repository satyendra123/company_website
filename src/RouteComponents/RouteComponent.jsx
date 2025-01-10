// src/components/Route.js
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePageLayOut from "../Layout/HomePageLayOut/HomePageLayOut";
import ProductPageLayOut from "../Layout/ProductPageLayOut/ProductPageLayOut";
import SolutionPageLayOut from "../Layout/SolutionPageLayOut/SolutionPageLayOut";
import PgsSolutionPageLayOut from "../Layout/SolutionPageLayOut/PgsSolutionPageLayOut/PgsSolutionPageLayOut";
import PmsSolutionPageLayOut from "../Layout/SolutionPageLayOut/PmsSolutionPageLayOut/PmsSolutionPageLayOut";
import NavBarMain from "../Component/Header/NavBar/NavBarMain/NavBarMain";
import About_Main from "../Component/About_us/About_Main/About_main";

import Footer from "../Component/Footer/Footer";
import FlappbarrierLayout from "../Layout/ProductPageLayOut/FlappbarrierLayout";
import TripodeTurnstileLayout from "../Layout/ProductPageLayOut/TripodeTurnstileLayout";
import TripodeTurnstile2Layout from "../Layout/ProductPageLayOut/TripodeTurnstile2Layout";
import Baggagescannerpagelayout from "../Layout/ProductPageLayOut/Baggagescannerpagelayout";
import Fullheightturnstilepagelayout from "../Layout/ProductPageLayOut/Fullheightturnstilepagelayout";
import Bollardpagelayout from "../Layout/ProductPageLayOut/Bollardpagelayout";
import IotSolutionPageLayOut from "../Layout/SolutionPageLayOut/IotSolutionPageLayOut/IotSolutionPageLayOut";
import TollManagementPageLayOut from "../Layout/SolutionPageLayOut/TollManagementPageLayOut/TollManagementPageLayOut";
import MassTransitSolutionPageLayOut from "../Layout/SolutionPageLayOut/MassTransitSolutionPageLayOut/MassTransitSolutionPageLayOut";
import Traffic_Management_layout from "../Layout/SolutionPageLayOut/Traffic_Management_Page_layout/Traffic_Management_layout"
import Q_Management_layout from "../Layout/SolutionPageLayOut/Q_Management_system/Q_Management_layout"
import Slidinggatelayout from "../Layout/ProductPageLayOut/Slidinggatelayout";
import Swinggatelayout from "../Layout/ProductPageLayOut/Swinggatelayout";
import Shutdoormotorpagelayout from "../Layout/ProductPageLayOut/Shutdoormotorpagelayout";
import Anprpagelayout from "../Layout/ProductPageLayOut/Anprpagelayout";
import Dfmdpagelayout from "../Layout/ProductPageLayOut/Dfmdpagelayout";
import Roadpagelayout from "../Layout/ProductPageLayOut/Roadpagelayout";
import Tyrepagelayout from "../Layout/ProductPageLayOut/Tyrepagelayout";
import Axelbreakerpagelayout from "../Layout/ProductPageLayOut/Axelbreakerpagelayout";
import Crashpagelayout from "../Layout/ProductPageLayOut/Crashpagelayout";
import Ptypepagelayout from "../Layout/ProductPageLayOut/Ptypepagelayout";
import Slideflappagelayout from "../Layout/ProductPageLayOut/Sliderflappagelayout";
import Swingflappagelayout from "../Layout/ProductPageLayOut/Swingflappagelayout";
import Uvsspagelayout from "../Layout/ProductPageLayOut/Uvsspagelayout";
import Droppagelayout from "../Layout/ProductPageLayOut/Droppagelayout";

import ItServicesPageLayout from '../Layout/ItServicesPageLayOut/ItServicesPageLayOut'
import SoftwaredevelopmentPageLayOut from '../Layout/ItServicesPageLayOut/SoftwaredevelopmentPageLayOut/SoftwaredevelopmentPageLayOut'
import SecuritysolutionPagelayout from '../Layout/ItServicesPageLayOut/SecuritysolutionPagelayout/SecuritysolutionPagelayout'
import AutomationPageLayOut from '../Layout/ItServicesPageLayOut/AutomationPageLayOut/AutomationPageLayOut'
import ConsultingandServicesPageLayOut from '../Layout/ItServicesPageLayOut/ConsultingandServicesPageLayOut/ConsultingandServicesPageLayOut'
import CloundServicesPageLayout from '../Layout/ItServicesPageLayOut/CloudServicesPageLayOut/CloudServicesPageLayOut'
import DevelopmentPageLayout from '../Layout/ItServicesPageLayOut/DevelopmentPageLayout/DevelopmentPageLayout'
import AIvisionPageLayout from '../Layout/ItServicesPageLayOut/AIvisionPageLayout/AIvisionPageLayout'
import Contact from '../Component/ContactUs/HomePageContact/Cantact_Main/Contact_Main'

//Solution page in case study in all product know more routes here
import IoTKnowMore from '../Component/Solution/PgsSolution/CaseStudy/Know_More'
import MassKnowMore from '../Component/Solution/MassTransitSolution/CaseStudy/Know_More'
import PGSKnowMore from '../Component/Solution/PgsSolution/CaseStudy/Know_More'
import PMSKnowMore from '../Component/Solution/PmsSolution/CaseStudy/Know_More'
import QMKnowMore from '../Component/Solution/Q_management_System/CaseStudy/Know_More'
import TOLLKnowMore from '../Component/Solution/TollManagement/CaseStudy/Know_More'
import TrafficKnowMore from '../Component/Solution/Traffic_management_System/CaseStudy/Know_More'


import KnowMain from '../Utils/SolutionLayOut/Know_More/Know_Main/KnowMain'

const RouteComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Page view tracker for Google Analytics
  const PageViewTracker = () => {
    const location = useLocation();

    useEffect(() => {
      ReactGA.send({ hitType: "pageview", page: location.pathname });
    }, [location]);

    return null;
  };

  return (
    <>
      <Router>
        <NavBarMain />
        <PageViewTracker />
        <Routes>
          <Route exact path="/" element={<HomePageLayOut />} />
          <Route path="/product" element={<ProductPageLayOut />} />
          <Route path="/about" element={<About_Main />} />
        
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route path="/solution" element={<SolutionPageLayOut />} />
          <Route
            path="/solution/parking-guidance-system"
            element={<PgsSolutionPageLayOut />}
          />
          <Route
            path="/solution/parking-management-system"
            element={<PmsSolutionPageLayOut />}
          />
          <Route path="/product/boombarrier" element={<ProductPageLayOut />} />
          <Route path="/product/flapbarrier" element={<FlappbarrierLayout />} />
          <Route
            path="/product/tripodeturnstile"
            element={<TripodeTurnstileLayout />}
          />
          <Route
            path="/product/tripodeturnstile-II"
            element={<TripodeTurnstile2Layout />}
          />
          <Route
            path="/product/baggag-escanner"
            element={<Baggagescannerpagelayout />}
          />
          <Route
            path="/product/sliding-gate-operator"
            element={<Slidinggatelayout />}
          />
          <Route
            path="/product/swing-gate-operator"
            element={<Swinggatelayout />}
          />
          <Route
            path="/product/shut-door-motor"
            element={<Shutdoormotorpagelayout />}
          />
          <Route path="/product/anpr-camera" element={<Anprpagelayout />} />
          <Route path="/product/dfmd" element={<Dfmdpagelayout />} />
          <Route path="/product/road-blocker" element={<Roadpagelayout />} />
          <Route path="/product/tyre-killer" element={<Tyrepagelayout />} />
          <Route path="/product/p-type-barrier" element={<Ptypepagelayout />} />
          <Route path="/product/drop-arm-barrier" element={<Droppagelayout />} />
          <Route path="/product/crash-rated-barrier" element={<Crashpagelayout />} />
          <Route path="/product/axle-breaker" element={<Axelbreakerpagelayout />} />
          <Route path="/product/full-height-turnstile" element={<Fullheightturnstilepagelayout />} />
          <Route path="/product/bollard" element={<Bollardpagelayout />} />
          <Route path="/product/slider-flap" element={<Slideflappagelayout />} />
          <Route path="/product/swing-flap" element={<Swingflappagelayout />} />
          <Route path="/product/uvss" element={<Uvsspagelayout />} />
          <Route path="/solution/iot-solution" element={<IotSolutionPageLayOut />} />
          <Route path="/solution/toll-management-solution" element={<TollManagementPageLayOut />} />
          <Route path="/solution/mass-transit-fare-collection-solution" element={<MassTransitSolutionPageLayOut />} />
          <Route path="/solution/Traffic-Management-System" element={<Traffic_Management_layout />} />
          <Route path="/solution/q-management-system" element={<Q_Management_layout />} />
          {/* all routes call here solution case study in know more */}
          <Route path="/iotsolution/knowmore" element={<IoTKnowMore />} />
          <Route path="/masssolution/knowmore" element={<MassKnowMore />} />
          <Route path="/pgssolution/knowmore" element={<PGSKnowMore />} />
          <Route path="/pmssolution/knowmore" element={<PMSKnowMore />} />
          <Route path="/qmssolution/knowmore" element={<QMKnowMore />} />
          <Route path="/tollsolution/knowmore" element={<TOLLKnowMore />} />
          <Route path="/tarrifsolution/knowmore" element={<TrafficKnowMore />} />



          <Route path="/services" element={<ItServicesPageLayout />} />
          <Route path="/services/Softwaredevelopment" element={<SoftwaredevelopmentPageLayOut />} />
          <Route path="/services/cloudservices" element={<CloundServicesPageLayout />} />
          <Route path="/services/automation" element={<AutomationPageLayOut />} />
          <Route path="/services/Securitysolution" element={<SecuritysolutionPagelayout />} />
          <Route path="/services/development" element={<DevelopmentPageLayout />} />
          <Route path="/services/consultingservices" element={<ConsultingandServicesPageLayOut />} />
          <Route path="/services/AIvision" element={<AIvisionPageLayout />} />
        </Routes>
        <Footer />
      </Router>

    </>
  );
};
export default RouteComponent;
