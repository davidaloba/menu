import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => filterItems("all")}>
        all
      </button>
      {categories.map((category, index) => {
        return (
          <button
            className="filter-btn"
            onClick={() => filterItems("breakfast")}
          >
            breakfast
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
