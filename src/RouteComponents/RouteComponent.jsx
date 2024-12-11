// src/components/Route.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageLayOut from "../Layout/HomePageLayOut/HomePageLayOut";
import ProductPageLayOut from "../Layout/ProductPageLayOut/ProductPageLayOut";
import SolutionPageLayOut from "../Layout/SolutionPageLayOut/SolutionPageLayOut";
import PgsSolutionPageLayOut from "../Layout/SolutionPageLayOut/PgsSolutionPageLayOut/PgsSolutionPageLayOut";
import PmsSolutionPageLayOut from "../Layout/SolutionPageLayOut/PmsSolutionPageLayOut/PmsSolutionPageLayOut";
import NavBarMain from "../Component/Header/NavBar/NavBarMain/NavBarMain";
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
const RouteComponent = () => {
  return (
    <Router>
      <NavBarMain />
      <Routes>
        <Route exact path="/" element={<HomePageLayOut />} />
        <Route path="/product" element={<ProductPageLayOut />} />
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
        <Route path="/product/crash-rated-barrier" element={<Crashpagelayout />}/>
        <Route path="/product/axle-breaker" element={<Axelbreakerpagelayout />}/>
        <Route path="/product/full-height-turnstile" element={<Fullheightturnstilepagelayout />}/>
        <Route path="/product/bollard" element={<Bollardpagelayout />} />
        <Route path="/product/slider-flap" element={<Slideflappagelayout/>} />
        <Route path="/product/swing-flap" element={<Swingflappagelayout />} />
        <Route path="/product/uvss" element={<Uvsspagelayout />} />
        <Route path="/solution/iot-solution" element={<IotSolutionPageLayOut />}/>
        <Route path="/solution/toll-management-solution" element={<TollManagementPageLayOut />}/>
        <Route path="/solution/mass-transit-fare-collection-solution" element={<MassTransitSolutionPageLayOut />}/>
      </Routes>
      <Footer />
    </Router>
  );
};
export default RouteComponent;
