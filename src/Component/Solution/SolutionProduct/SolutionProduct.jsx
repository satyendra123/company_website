import React from "react";
import Boom1 from './SolutionProductImages/Boom1.png';
import Anpr from './SolutionProductImages/ANPR.png';
import Boom3 from './SolutionProductImages/Boom3.png';
import circle from './SolutionProductImages/circle.png';
import basket from './SolutionProductImages/basket.png';
import { FaStar } from 'react-icons/fa';
import { FaBox } from 'react-icons/fa';
import SolutionLayOutProduct from '../../../Utils/SolutionLayOut/SolutionLayOutProduct/SolutionLayOutProduct';
import './SolutionProduct.css'

const SolutionProduct = () => {
  return (
    <div>
      <h3 className="text-center m-5">Product</h3>
      <div className="d-flex justify-content-center align-items-center gap-5 product-container">

      <div className="product-card">
          <div className="d-flex justify-content-center">
            <img src={Boom1} alt="" className="img-fluid" />
          </div>
          <div>
            <p>ANPR uses automated number plate recognition tech for vehicle identification</p>
          </div>

          <div className="d-flex gap-5">
            <div>
              <img src={basket} alt="" />
            </div>
            <div style={{ display: 'flex', gap: '4px', justifyContent: "center" }}>

              {[...Array(5)].map((_, index) => (
                <FaStar key={index} style={{ color: '#FFD700', fontSize: '24px' }} />
              ))}

            </div>
          </div>
        </div>


        <div className="product-card">
          <div className="d-flex justify-content-center">
            <img src={Anpr} alt="" className="img-fluid" />
          </div>
          <div>
            <p>ANPR uses automated number plate recognition tech for vehicle identification</p>
          </div>

          <div className="d-flex gap-5">
            <div>
              <img src={basket} alt="" />
            </div>
            <div style={{ display: 'flex', gap: '4px', justifyContent: "center" }}>

              {[...Array(5)].map((_, index) => (
                <FaStar key={index} style={{ color: '#FFD700', fontSize: '24px' }} />
              ))}

            </div>
          </div>
        </div>

        <div className="product-card">
          <div className="d-flex justify-content-center">
            <img src={Boom3} alt="" className="img-fluid" />
          </div>
          <div>
            <p>strong security with durable construction and secure locks to prevent unauthorized entry</p>
          </div>
          <div className="d-flex gap-5">
            <div>
              <img src={basket} alt="" />
            </div>
            <div style={{ display: 'flex', gap: '4px', justifyContent: "center" }}>

              {[...Array(5)].map((_, index) => (
                <FaStar key={index} style={{ color: '#FFD700', fontSize: '24px', }} />
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionProduct;