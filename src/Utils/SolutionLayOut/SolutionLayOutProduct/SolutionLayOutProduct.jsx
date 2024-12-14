import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SolutionLayOutProduct.css";

const SolutionLayOutProduct = ({ products }) => {
  return (
    <div className="container my-4 SolutionLayOutProduct-main">
      <div className="row">
        {products.map((product, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="solution-pms-card shadow-sm h-100 product-card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-warning">
                    {[...Array(5)].map((_, idx) => (
                      <i
                        key={idx}
                        className={`fa fa-star star-padding ${
                          idx < product.rating ? "text-warning" : ""
                        }`}
                      ></i>
                    ))}
                  </div>
                  <div className="button-container">
                    <button className="btn btn-outline-secondary btn-sm custom-circle-btn">
                      <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x custom-circle"></i>
                        <i className="fa fa-arrow-right fa-stack-1x fa-inverse plus-icon"></i>
                      </span>
                    </button>
                    <button className="btn no-more-btn">
                      No more
                      <i className="fa fa-arrow-right arrow-icon"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionLayOutProduct;
