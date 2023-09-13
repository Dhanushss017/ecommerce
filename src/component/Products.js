import React,{useState} from "react";
import jewels from "./images/jewels.png";
import heels from "./images/heels.png";
import chain from "./images/chain.png";
import "./Style.css";
import { Link } from "react-router-dom";

const itemsPerPage = 8;
  

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1); 
  const data = [
    { id: 1, name: 'heels', price: 59.00 },
    { id: 2, name: 'shoes', price: 59.00 },
    { id: 3, name: 'jewels', price: 59.00 },
    { id: 4, name: 'chain', price: 59.00 },
    { id: 5, name: 'heels', price: 59.00 },
    { id: 6, name: 'Jewels', price: 59.00 },
    { id: 7, name: 'heels', price: 59.00 },
    { id: 8, name: 'Jewels', price: 59.00 },
    { id: 9, name: 'heels', price: 59.00 },
    { id: 10, name: 'Jewels', price: 59.00 },
    // Add more items here
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const itemsToDisplay = data.slice(indexOfFirstItem, indexOfLastItem);

  // Step 4: Create navigation buttons to switch between pages
  const nextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  return (
    <div>
      <div className="py-3 shadow">
        <div className="container  d-flex justify-content-between">
          <div className="align-self-center">
            <Link to="/categories-details">
              <i className="fa-solid text_black fa-chevron-left fs-18"></i>
            </Link>
          </div>
          <div>
            <form className="d-flex">
              <input
                className="form-control me-2 br-20 fs-16 shadow-none"
                type="search"
                placeholder="Search Categories"
                aria-label="Search"
              />
              <i className="fa-solid fa-table-cells-large btn border-0 fs-20 align-self-center"></i>
            </form>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <h3 className="fs-20">
          <Link className="text-decoration-none text_black" to="/categories">
            {" "}
            Facility management{" "}
          </Link>
          <Link
            className="text-decoration-none text_black"
            to="/categories-details"
          >
            <span>- &nbsp; Maintainanance services</span>
          </Link>
          <span>  - &nbsp; Level 3</span>
        </h3>
        <ul
          className="nav nav-pills nav_tabs my-4 d-flex overflow-auto flex-nowrap"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item me-3 me-lg-2" role="presentation">
            <button
              className="nav-link text_black  fs-16 active"
              id="pills-all-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-all"
              type="button"
              role="tab"
              aria-controls="pills-all"
              aria-selected="true"
            >
              All
            </button>
          </li>
          <li className="nav-item me-3 me-lg-2" role="presentation">
            <button
              className="nav-link text_black text-nowrap  fs-16"
              id="pills-maintainance-services-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-maintainance-services"
              type="button"
              role="tab"
              aria-controls="pills-maintainance-services"
              aria-selected="false"
            >
              Maintainance services
            </button>
          </li>
          <li className="nav-item me-3 me-lg-2" role="presentation">
            <button
              className="nav-link text_black  text-nowrap fs-16"
              id="pills-uniforms-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-uniforms"
              type="button"
              role="tab"
              aria-controls="pills-uniforms"
              aria-selected="false"
            >
              Work wear & Uniforms
            </button>
          </li>
          <li className="nav-item me-3 me-lg-2" role="presentation">
            <button
              className="nav-link text_black text-nowrap  fs-16"
              id="pills-viewall-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-viewall"
              type="button"
              role="tab"
              aria-controls="pills-viewall"
              aria-selected="true"
            >
              View All
            </button>
          </li>
        </ul>
        
        <div className="tab-content" id="pills-tabContent">
        
          <div
            className="tab-pane fade show active"
            id="pills-all"
            role="tabpanel"
            aria-labelledby="pills-all-tab"
          >
           
          
          <div className="row  mb-3">
          {itemsToDisplay.map((item) => (
     
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-5 mt-1">
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
            
            ))}
          </div>
          <div className="d-flex justify-content-center">
        <button className="btn fs-18 fw-500" onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <button  className="btn fs-18 fw-500" onClick={nextPage} disabled={currentPage === Math.ceil(data.length / itemsPerPage)}>Next</button>
      </div>
          
        
</div>

  
          <div
            className="tab-pane fade"
            id="pills-maintainance-services"
            role="tabpanel"
            aria-labelledby="pills-maintainance-services-tab"
          >
            
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

                      <p className="text_black fs-12 mb-0">
                        Organic and Certified
                      </p>
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

                      <p className="text_black fs-12 mb-0">
                        Organic and Certified
                      </p>
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

                      <p className="text_black fs-12 mb-0">
                        Organic and Certified
                      </p>
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
          <div
            className="tab-pane fade"
            id="pills-uniforms"
            role="tabpanel"
            aria-labelledby="pills-uniforms-tab"
          >
           
              <div className="row  mb-3">
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

                      <p className="text_black fs-12 mb-0">
                        Organic and Certified
                      </p>
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

                      <p className="text_black fs-12 mb-0">
                        Organic and Certified
                      </p>
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

                      <p className="text_black fs-12 mb-0">
                        Organic and Certified
                      </p>
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
        </div>
        
      </div>
      

    </div>
  );
};

export default Products;
