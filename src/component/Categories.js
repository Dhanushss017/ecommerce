import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Style.css";

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);
  
  useEffect(() => {
    setFilteredCategories(categories);
  }, []);

  const categories = [
    { id: 1, name: "Facility Management", icon: "fa-cart-shopping" },
    { id: 2, name: "Courier Transportation", icon: "fa-truck-fast" },
    { id: 3, name: "Apparel", icon: "fa-brands fa-shopify" },
    { id: 4, name: "Medicals", icon: "fa-cart-shopping" },
    { id: 5, name: "Sprouts", icon: "fa-truck-fast" },
    { id: 6, name: "Agriculture", icon: "fa-cart-shopping" },
    { id: 7, name: "Sports", icon: "fa-truck-fast" },
    { id: 8, name: "Cloths", icon: "fa-brands fa-shopify" },
    { id: 9, name: "Kitchen", icon: "fa-cart-shopping" },
    { id: 10, name: "Sprouts", icon: "fa-truck-fast" },
  ];

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = categories.filter((category) =>
      category.name.toLowerCase().includes(query)
    );
    setFilteredCategories(filtered);
  };

  return (
    <div>
      <div className="py-3 shadow">
        <div className="container d-flex justify-content-between">
          <div className="align-self-center">
            <Link to="/">
              <i className="fa-solid text_black fa-chevron-left fs-18"></i>
            </Link>
          </div>
          <form className="me-4">
            <input
              className="form-control me-2 br-20 fs-16 shadow-none"
              type="search"
              placeholder="Search Categories"
              aria-label="Search"
              onChange={handleSearch}
            />
          </form>
        </div>
      </div>
      <div className="container mt-5">
        <h1 className="fs-20 text_black fw-500">All Categories</h1>
        <div className="grid_column my-4">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <Link
                to={`/categories-details`}
                className="text-decoration-none"
                key={category.id}
              >
                <div className="mb-3 choose_brand rounded p-3 text-center">
                  <div>
                    <i className={`fa-solid ${category.icon} icons`}></i>
                  </div>
                  <div className="mt-3">
                    <h3 className="fs-16 text_black fw-600">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No search found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
