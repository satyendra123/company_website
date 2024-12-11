import React, { useEffect, useRef } from "react";
import "./OurClients.css"; // Ensure this file is correctly imported
import CLientImg from "./OurClientImages/handshake.png";
import ClientImg from "./OurClientImages/ourClients2.png";

import NexaImg from "./OurClientImages/nexa_logo.png";
import TataImg from "./OurClientImages/tata_logo.png";
import DaloopalImg from "./OurClientImages/daloopa_logo.jpg";
import HeroImg from "./OurClientImages/hero_logo.png";
import LnTImg from "./OurClientImages/LnT_logo.png";
import BarcoImg from "./OurClientImages/Barco_logo2.png";
import TechMahindraImg from "./OurClientImages/Tech_mahindra_logo2.png";
import ContinentalImg from "./OurClientImages/continental_logo.webp";
import DensoImg from "./OurClientImages/denso_logo.png";
import HyundaiImg from "./OurClientImages/hyundai_logo.png";
import SuzukiImg from "./OurClientImages/suzuki_logo.png";
import OmexeImg from "./OurClientImages/omaxe_logo.png";

import OPGCImg from "./OurClientImages/opgc_logo.png";
import IOCLImg from "./OurClientImages/indianiol_logo.webp";
import SkymarkImg from "./OurClientImages/skymark_logo.png";
import ChetuImg from "./OurClientImages/chetu_logo.jpg";
import AcediaImg from "./OurClientImages/acedia_logo.png";
import JBMImg from "./OurClientImages/jbm_logo.png";
import JKCCImg from "./OurClientImages/jkcc_logo.png";
import APLImg from "./OurClientImages/aplapollo_logo.png";
import HoneywellImg from "./OurClientImages/honeywell_logo.jpg";
import PGIImg from "./OurClientImages/pgichandigarh_logo.jpg";
import TSOilImg from "./OurClientImages/ts_oil_logo.jpg";

import ShreeImg from "./OurClientImages/shreecement_logo.png";
import BirlaImg from "./OurClientImages/birlacement_logo.png";
import UITImg from "./OurClientImages/uitkota_logo.jpg";
import IITDelhiImg from "./OurClientImages/iitdelhi_logo.png";
import IITKanpurImg from "./OurClientImages/iitkanpur_logo.png";
import PCAImg from "./OurClientImages/pca_logo.png";
import AxisImg from "./OurClientImages/axisbank_logo.png";
import JKBankImg from "./OurClientImages/jkbank_logo.png";
import HolidayInnImg from "./OurClientImages/holidayInn_logo.webp";
import NielitImg from "./OurClientImages/nielit_logo.jpg";
import LybrateImg from "./OurClientImages/lybrate_logo.jpg";

const logos = [
  { src: NexaImg, name: "Nexa" },
  { src: TataImg, name: "Tata" },
  { src: DaloopalImg, name: "Daloopa" },
  { src: HeroImg, name: "Hero" },
  { src: LnTImg, name: "L&T" },
  { src: BarcoImg, name: "Barco" },
  { src: TechMahindraImg, name: "Tech Mahindra" },
  { src: ContinentalImg, name: "Continental" },
  { src: DensoImg, name: "Denso" },
  { src: HyundaiImg, name: "Hyundai" },
  { src: SuzukiImg, name: "Suzuki Motor" },
  { src: OmexeImg, name: "Omexe Group" },
];

const logos2 = [
  { src: OPGCImg, name: "OPGC" },
  { src: IOCLImg, name: "IOCL" },
  { src: SkymarkImg, name: "SkyMark" },
  { src: ChetuImg, name: "Chetu" },
  { src: AcediaImg, name: "Acedia Next" },
  { src: JBMImg, name: "JBM" },
  { src: JKCCImg, name: "JKCC" },
  { src: APLImg, name: "APL Apollo" },
  { src: HoneywellImg, name: "Honeywell" },
  { src: PGIImg, name: "PGI Chandigarh" },
  { src: TSOilImg, name: "Ts Oil Fed" },
];

const logos3 = [
  { src: ShreeImg, name: "Shree Cement" },
  { src: BirlaImg, name: "Birla Cement" },
  { src: UITImg, name: "UIT Kota" },
  { src: IITDelhiImg, name: "IIT Delhi" },
  { src: IITKanpurImg, name: "IIT Kanpur" },
  { src: PCAImg, name: "PCA" },
  { src: AxisImg, name: "Axis Bank" },
  { src: JKBankImg, name: "JK Bank" },
  { src: HolidayInnImg, name: "Holiday Inn" },
  { src: NielitImg, name: "Nielit" },
  { src: LybrateImg, name: "Lybrate" },
];

const OurClients = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Duplicate content for seamless scrolling
      const clone = container.cloneNode(true);
      container.appendChild(clone);
    }
  }, []);
  return (
    <div className="client-logos container-fluid mb-5">
      <div className="case-study-header-main" style={{ maxWidth: "100%" }}>
        <div className="case-study-header mt-5">
          <h2 className="case-study-header-text">OUR INCREDIBLE VISIONNARIES</h2>

          {/* <h2 className="case-study-sub-header-text">
            We have case studies for any <span> environment </span>
          </h2> */}
        </div>
      </div>
      <div className="container">
        <div className="row mt-3">
          <img src={ClientImg} alt="" height={"150px"} />
        </div>
        <div className="row align-items-start full mt-3">
          <div className="col-12 col-md-4">
            <div
              className="our-client-left"
              style={{
                padding: "20px",
                marginTop: "33px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                backgroundColor: "#fff",
                textAlign: "left",
                width: "100%",
                // height: "30%",
                maxWidth: "400px",
                border: "20px",
                marginBottom: "20px",
                fontFamily:
                  "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;",
                fontSize: "17px",
                fontWeight: 300,
                // fontStyle: 'italic'
              }}
            >
              Our clients are the cornerstone of our success, driving our
              innovation and commitment. your trust drives our innovation, and
              your satisfaction defines our success.
            </div>
            {/* <img src={CLientImg} alt="Handshake" className="handshake-img" /> */}
          </div>
          <div className=" col-12 col-md-8 ">
            <div>
              <div className="logo-scroll scroled ">
                <div className="logo-grid">
                  {[...logos, ...logos].map((logo, index) => (
                    <div className="logo-item" key={index}>
                      <img src={logo.src} alt={logo.name} />
                      <p className="cname">{logo.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="logo-scroll">
                <div className="logo-grid2">
                  {[...logos2, ...logos2].map((logo, index) => (
                    <div className="logo-item" key={index}>
                      <img src={logo.src} alt={logo.name} />
                      <p className="cname">{logo.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="logo-scroll">
                <div className="logo-grid3">
                  {[...logos3, ...logos3].map((logo, index) => (
                    <div className="logo-item" key={index}>
                      <img src={logo.src} alt={logo.name} />
                      <p className="cname">{logo.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurClients;
