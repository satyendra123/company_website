import React from "react";
import Banner from "../Banner/Banner";

import Customer_Relation from "../../../Component/About_us/Customer_Relation/Customer_Relation";
import Our_Vision from "../Our_Vision/Our_Vision";
import Who_We from "../Who_We/Who_We"
import Company_Ethics from "../Company_Ethics/Company_Ethics"
import Our_Value from "../Our_Value/Our_Value";
import World_Map from "../World_Map/WorldMap"
import Management_Desk from "../Management_Desk/Management_Desk";


const IotSolutionPageLayOut = () => { 
  return (
    <>
      <Banner />
      <Who_We/>
      <Customer_Relation/>
      <Our_Vision />
      
      <Company_Ethics/>
      <Our_Value/>
      <Management_Desk/>
      <World_Map/>
    </>
  );
};

export default IotSolutionPageLayOut;
