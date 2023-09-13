import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import bannerDesktop from "./images/banner-desktop.jpg";
import jewels from "./images/jewels.png";
import heels from "./images/heels.png";
import chain from "./images/chain.png";
import shoes from "./images/shoes.png";
import payment from "./images/payment.jpg";
import calling from "./images/calling-img.jpg";
import timeDelivery from "./images/time-delivery.jpg";
import Categories from "./Categories";
const Home = () => {
  return (
    <div>
      <div className="desktop-navbar d-none d-md-block">
        <nav className="navbar shadow-sm navbar-expand-md navbar-light">
          <div className="container">
            <a className="navbar-brand" href="#"></a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  fs-16  me-auto mb-2 mb-lg-0 ">
                <li className="nav-item ">
                  <a
                    className="nav-link fw-500 text_black fs-16"
                    aria-current="page"
                    href="#"
                  >
                    Deals
                  </a>
                </li>
                <li className="nav-item  ms-lg-4">
                  <a className="nav-link fw-500 text_black fs-16" href="#">
                    What's New
                  </a>
                </li>
                <li className="nav-item  ms-lg-4">
                  <a className="nav-link fw-500 text_black fs-16" href="#">
                    Delivery
                  </a>
                </li>
              </ul>
              <form className="d-flex me-4">
                <input
                  className="form-control me-2 br-20 fs-16  shadow-none"
                  type="search"
                  placeholder="Search Product"
                  aria-label="Search"
                />
              </form>
              <a href="" className="btn">
                <span className="fw-500 fs-16 p-0"> Login</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
      <section className="d-md-none shadow-sm">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center p-2">
            <a
              className="btn btn_success rounded shadow-none"
              data-bs-toggle="offcanvas"
              href="#mobile-navbar"
              role="button"
              aria-controls="mobile-navbar"
            >
              <span className="fa fa-bars fa-lg "></span>
            </a>
            <form className="d-flex">
              <input
                className="form-control br-20 fs-16  shadow-none"
                type="search"
                placeholder="Search Product"
                aria-label="Search"
              />
            </form>
          </div>
          <div
            className="offcanvas offcanvas-start"
            tabindex="-1"
            id="mobile-navbar"
            aria-labelledby="mobile-navbarLabel"
          >
            <div className="offcanvas-header">
              <a className="navbar-brand" href="#"></a>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body py-0">
              <ul className="dropdown mt-3 list-unstyled">
                <li className="nav-item fs-15">
                  <a
                    className="nav-link text_black ps-0"
                    aria-current="page"
                    href="#"
                  >
                    Deals
                  </a>
                </li>
                <li className="nav-item fs-15">
                  <a className="nav-link text_black ps-0" href="#">
                    What's New
                  </a>
                </li>
                <li className="nav-item fs-15">
                  <a className="nav-link text_black ps-0" href="#">
                    Delivery
                  </a>
                </li>
                <a href="" className="btn px-0 text_darkgreen fw-600 ">
                  <span className=" fs-15 p-0"> Login</span>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div>
        <img src={bannerDesktop} className="img-fluid w-100" alt="Banner" />
      </div>
      <section className="pt-4 mt-5">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h2 className="fs-26 mb-4 text_black fw-600">Popular Categories</h2>
            
            <Link to="./categories" className="btn fs-15 fw-500 border-0 shadow-none align-self-start text_blue">
              View all <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <div className="grid_column my-4">
          <Link to="./categories" className="text-decoration-none">
          
          <div className="mb-3 choose_brand rounded p-3 text-center">
            <div>
              <i className="fa-solid fa-cart-shopping icons"></i>
            </div>
            <div className="mt-3">
              <h3 className="fs-16 text_black fw-600">Facility Management</h3>
            </div>
          </div>
          </Link>
          <Link to="./categories" className="text-decoration-none">
          <div className="mb-3 choose_brand rounded p-3 text-center">
            <div>
              <div>
                <i className="fa-solid fa-truck-fast icons"></i>
              </div>
              <div className="mt-3">
                <h3 className="fs-16 text_black fw-600">Logistics</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link to="./categories" className="text-decoration-none">

          <div className="mb-3 choose_brand rounded p-3 text-center">
            <div>
              <div>
                <i className="fa-brands fa-shopify icons"></i>
              </div>
              <div className="mt-3">
                <h3 className="fs-16 text_black fw-600">Apparel</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link to="./categories" className="text-decoration-none">

          <div className="mb-3 choose_brand rounded p-3 text-center">
            <div>
              <div>
                <i className="fa-solid fa-cart-shopping icons"></i>
              </div>
              <div className="mt-3">
                <h3 className="fs-16 text_black fw-600">Medicals</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link to="./categories" className="text-decoration-none">

          <div className="mb-3 choose_brand rounded p-3 text-center">
            <div>
              <div>
                <i className="fa-solid fa-truck-fast icons"></i>
              </div>
              <div className="mt-3">
                <h3 className="fs-16 text_black fw-600">Sprouts</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link to="./categories" className="text-decoration-none">

          <div className="mb-3 choose_brand rounded p-3 text-center">
            <div>
              <div>
                <i className="fa-solid fa-truck-fast icons"></i>
              </div>
              <div className="mt-3">
                <h3 className="fs-16 text_black fw-600">Logistics</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link to="./categories" className="text-decoration-none">

          <div className="mb-3 choose_brand rounded p-3 text-center">
            <div>
              <div>
                <i className="fa-brands fa-shopify icons"></i>
              </div>
              <div className="mt-3">
                <h3 className="fs-16 text_black fw-600">Apparel</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link to="./categories" className="text-decoration-none">

          <div className="mb-3 choose_brand rounded p-3 text-center">
            <div>
              <div>
                <i className="fa-solid fa-cart-shopping icons"></i>
              </div>
              <div className="mt-3">
                <h3 className="fs-16 text_black fw-600">Medicals</h3>
              </div>
            </div>
          </div>
          </Link>
          <Link to="./categories" className="text-decoration-none">

          <div className="mb-3 choose_brand rounded p-3 text-center">
            <div>
              <div>
                <i className="fa-solid fa-truck-fast icons"></i>
              </div>
              <div className="mt-3">
                <h3 className="fs-16 text_black fw-600">Sprouts</h3>
              </div>
            </div>
          </div>
          </Link>
        </div>
        </div>
      </section>
      <section className="pt-5 mt-5">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h2 className="fs-26 mb-4 text_black fw-600">Featured products</h2>
            <button className="btn fs-15 fw-500 border-0 shadow-none align-self-start text_blue">
              View all <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="row  mb-3">
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-5 mt-1">
              <div className="card  h-100 border-0">
                <div className="card-body p-0">
                  <i className="fa-regular fa-heart wishlist_icon fs-20"></i>
                  <div className="text-center choose_brand rounded">
                    <img
                      src={heels}
                      alt="Hells"
                      className="on_hover img-fluid rounded"
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <h3 className="fs-18 fw-600  text_black mt-3 mb-0">
                      Heels
                    </h3>
                    <span className="fs-18 fw-600  text_black mt-3">
                      <i className="fa-solid fa-dollar-sign fs-14"></i>59.00
                    </span>
                  </div>

                  <p className="text_black fs-12 mb-0">Organic and Certified</p>
                  <span className="fs-12">
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star-half-stroke text_lightgreen"></i>
                    (121)
                  </span>
                  <button className="btn btn_cart fs-14 d-block mt-3 px-3 shadow-none fw-600 text_black">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-5 mt-1">
              <div className="card  h-100 border-0">
                <div className="card-body p-0">
                  <i className="fa-regular fa-heart wishlist_icon fs-20"></i>
                  <div className="text-center choose_brand rounded">
                    <img
                      src={chain}
                      alt="Shoes"
                      className="on_hover img-fluid rounded"
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <h3 className="fs-18 fw-600  text_black mt-3 mb-0">
                      Shoes
                    </h3>
                    <span className="fs-18 fw-600  text_black mt-3">
                      <i className="fa-solid fa-dollar-sign fs-14"></i>59.00
                    </span>
                  </div>

                  <p className="text_black fs-12 mb-0">Organic and Certified</p>
                  <span className="fs-12">
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star-half-stroke text_lightgreen"></i>
                    (121)
                  </span>
                  <button className="btn btn_cart fs-14 d-block mt-3 px-3 shadow-none fw-600 text_black">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-5 mt-1">
              <div className="card  h-100 border-0">
                <div className="card-body p-0">
                  <i className="fa-regular fa-heart wishlist_icon fs-20"></i>
                  <div className="text-center choose_brand rounded">
                    <img
                      src={jewels}
                      alt="Jewels"
                      className="on_hover img-fluid rounded"
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <h3 className="fs-18 fw-600  text_black mt-3 mb-0">
                      Jewels
                    </h3>
                    <span className="fs-18 fw-600  text_black mt-3">
                      <i className="fa-solid fa-dollar-sign fs-14"></i>59.00
                    </span>
                  </div>

                  <p className="text_black fs-12 mb-0">Organic and Certified</p>
                  <span className="fs-12">
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star-half-stroke text_lightgreen"></i>
                    (121)
                  </span>
                  <button className="btn btn_cart fs-14 d-block mt-3 px-3 shadow-none fw-600 text_black">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-5 mt-1">
              <div className="card  h-100 border-0">
                <div className="card-body p-0">
                  <i className="fa-regular fa-heart wishlist_icon fs-20"></i>
                  <div className="text-center choose_brand rounded">
                    <img
                      src={chain}
                      alt="Chain"
                      className="on_hover img-fluid rounded"
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <h3 className="fs-18 fw-600  text_black mt-3 mb-0">
                      Chain
                    </h3>
                    <span className="fs-18 fw-600  text_black mt-3">
                      <i className="fa-solid fa-dollar-sign fs-14"></i>59.00
                    </span>
                  </div>

                  <p className="text_black fs-12 mb-0">Organic and Certified</p>
                  <span className="fs-12">
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star-half-stroke text_lightgreen"></i>
                    (121)
                  </span>
                  <button className="btn btn_cart fs-14 d-block mt-3 px-3 shadow-none fw-600 text_black">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-5 mt-1">
              <div className="card  h-100 border-0">
                <div className="card-body p-0">
                  <i className="fa-regular fa-heart wishlist_icon fs-20"></i>
                  <div className="text-center choose_brand rounded">
                    <img
                      src={heels}
                      alt="Hells"
                      className="on_hover img-fluid rounded"
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <h3 className="fs-18 fw-600  text_black mt-3 mb-0">
                      Heels
                    </h3>
                    <span className="fs-18 fw-600  text_black mt-3">
                      <i className="fa-solid fa-dollar-sign fs-14"></i>59.00
                    </span>
                  </div>

                  <p className="text_black fs-12 mb-0">Organic and Certified</p>
                  <span className="fs-12">
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star-half-stroke text_lightgreen"></i>
                    (121)
                  </span>
                  <button className="btn btn_cart fs-14 d-block mt-3 px-3 shadow-none fw-600 text_black">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-5 mt-1">
              <div className="card  h-100 border-0">
                <div className="card-body p-0">
                  <i className="fa-regular fa-heart wishlist_icon fs-20"></i>
                  <div className="text-center choose_brand rounded">
                    <img
                      src={shoes}
                      alt="Shoes"
                      className="on_hover img-fluid rounded"
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <h3 className="fs-18 fw-600  text_black mt-3 mb-0">
                      Shoes
                    </h3>
                    <span className="fs-18 fw-600  text_black mt-3">
                      <i className="fa-solid fa-dollar-sign fs-14"></i>59.00
                    </span>
                  </div>

                  <p className="text_black fs-12 mb-0">Organic and Certified</p>
                  <span className="fs-12">
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star-half-stroke text_lightgreen"></i>
                    (121)
                  </span>
                  <button className="btn btn_cart fs-14 d-block mt-3 px-3 shadow-none fw-600 text_black">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-5 mt-1">
              <div className="card  h-100 border-0">
                <div className="card-body p-0">
                  <i className="fa-regular fa-heart wishlist_icon fs-20"></i>
                  <div className="text-center choose_brand rounded">
                    <img
                      src={jewels}
                      alt="Jewels"
                      className="on_hover img-fluid rounded"
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <h3 className="fs-18 fw-600  text_black mt-3 mb-0">
                      Jewels
                    </h3>
                    <span className="fs-18 fw-600  text_black mt-3">
                      <i className="fa-solid fa-dollar-sign fs-14"></i>59.00
                    </span>
                  </div>

                  <p className="text_black fs-12 mb-0">Organic and Certified</p>
                  <span className="fs-12">
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star-half-stroke text_lightgreen"></i>
                    (121)
                  </span>
                  <button className="btn btn_cart fs-14 d-block mt-3 px-3 shadow-none fw-600 text_black">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-5 mt-1">
              <div className="card  h-100 border-0">
                <div className="card-body p-0">
                  <i className="fa-regular fa-heart wishlist_icon fs-20"></i>
                  <div className="text-center choose_brand rounded">
                    <img
                      src={chain}
                      alt="Chain"
                      className="on_hover img-fluid rounded"
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <h3 className="fs-18 fw-600  text_black mt-3 mb-0">
                      Chain
                    </h3>
                    <span className="fs-18 fw-600  text_black mt-3">
                      <i className="fa-solid fa-dollar-sign fs-14"></i>59.00
                    </span>
                  </div>

                  <p className="text_black fs-12 mb-0">Organic and Certified</p>
                  <span className="fs-12">
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star text_lightgreen"></i>
                    <i className="fa-solid fa-star-half-stroke text_lightgreen"></i>
                    (121)
                  </span>
                  <button className="btn btn_cart fs-14 d-block mt-3 px-3 shadow-none fw-600 text_black">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 py-5">
    <div className="container">
      <h2 className="fs-22 mb-4 text_black fw-600">Featured Services</h2>
      <div className=" row flex-no  wrap overflow-auto mt-3 mb-4">
        <div className="col-md-4 col-lg-4 mb-4">
          <div className="card  border-0 h-100">
            <div className="card-body p-4 pb-2 bg_lightblue rounded-top">
              <div className="">
                <h2 className="fs-18 mb-0 text_black fw-600">Save</h2>
                <i className="fa-solid text_lightblue fa-dollar-sign fs-28"></i>
                <span className="fs-40 text_lightblue fw-600 align-middle">100</span>
                <p className="fs-13 mb-0 text_black mb-3"> Explore Our Furniture and Home furnishing range</p>
              </div>

            </div>
            <div className="zoom-img">
              <img src={calling} className="img-fluid rounded-bottom" alt="Frequently asked questions"/>

            </div>

          </div>
        </div>
        <div className="col-md-4 col-lg-4 mb-4">
          <div className="card border-0 h-100">
            <div className="card-body pb-2 p-4 bg_lightyellow rounded-top">
              <div className="">
                <h2 className="fs-18 mb-0 text_black fw-600">Save</h2>
                <i className="fa-solid text_lightyellow fa-dollar-sign fs-28"></i>
                <span className="fs-40 text_lightyellow fw-600 align-middle">100</span>
                <p className="fs-13 mb-0 text_black mb-3"> Explore Our Furniture and Home furnishing range</p>
              </div>

            </div>
            <div className="zoom-img">
              <img src={timeDelivery} className="img-fluid  rounded-bottom" alt="Online payment"/>
            </div>
          </div>

        </div>
        <div className="col-md-4 col-lg-4 mb-4">
          <div className="card border-0 h-100">
            <div className="card-body pb-2 p-4 bg_lightblue rounded-top">
              <div className="">
                <h2 className="fs-18 mb-0 text_black fw-600">Save</h2>
                <i className="fa-solid text_lightblue fa-dollar-sign fs-28"></i>
                <span className="fs-40 text_lightblue fw-600 align-middle">100</span>
                <p className="fs-13 mb-0 text_black mb-3"> Explore Our Furniture and Home furnishing range</p>
              </div>

            </div>
            <div className="zoom-img">
              <img src={payment} className="img-fluid  rounded-bottom" alt="On time Delivery"/>
            </div>
          </div>

        </div>
       
      </div>
    </div>
  </section>
    </div>
  );
};

export default Home;
