import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
const Details = () => {
  return (
    <div>
      <div className="py-3 shadow">
        <div className="container  d-flex">
          <div className="align-self-center">
            <Link to="/categories">
              <i className="fa-solid text_black fa-chevron-left fs-18"></i>
            </Link>
          </div>
          <div>
            <h1 className="fs-26 ms-5 text-center">Facility management</h1>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="accordion" id="maintainace">
          <div className="accordion-item border-0 border-bottom">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button text_black fs-18 bg-transparent border-bottom shadow-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Maintainance services
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#maintainace"
            >
              <div className="accordion-body">
                <Link
                  to="/products"
                  className="text-decoration-none text_black"
                >
                  <p className="border-bottom">Level 3</p>
                </Link>
                <Link
                  to="/products"
                  className="text-decoration-none text_black"
                >
                <p className="border-bottom">Level 2</p>
                </Link>
                <Link
                  to="/products"
                  className="text-decoration-none text_black"
                >
                <p className="">Level 1</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="accordion-item border-0 border-bottom">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button  text_black fs-18 bg-transparent border-bottom shadow-none collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Work wear & UniformsCustodial services
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="border-bottom">Level 3</p>
                <p className="border-bottom">Level 2</p>
                <p className="">Level 1</p>
              </div>
            </div>
          </div>
          <div className="accordion-item border-0 border-bottom">
            <h2 className="accordion-header" id="headingthree">
              <button
                className="accordion-button  text_black fs-18 bg-transparent border-bottom shadow-none collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Custodial services
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingthree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="border-bottom">Level 3</p>
                <p className="border-bottom">Level 2</p>
                <p className="">Level 1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
