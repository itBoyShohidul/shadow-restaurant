import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import data from "./data";
// import Item from "./Item";
const allCategories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [renderValue, setRenderValue] = useState("all");

  return (
    <div>
      <heading className="main-title">
        <h1>Shadow Restaurant</h1>
        <div className="underline"></div>
      </heading>

      <category className="btn-container">
        {allCategories.map((category, index) => {
          return (
            <button
              className="filter-btn"
              key={index}
              onClick={() => {
                setRenderValue(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </category>

      <items className="items-container">
        {data
          .filter((item) => {
            if (renderValue === "breakfast") {
              return item.category === "breakfast";
            } else if (renderValue === "lunch") {
              return item.category === "lunch";
            } else if (renderValue === "shakes") {
              return item.category === "shakes";
            } else if (renderValue === "all") {
              return item;
            } else {
              return null;
            }
          })
          .map((item, index) => {
            const { img, title, desc, price } = item;
            return (
              <div key={index} className="menu-item">
                <img className="photo" src={img} alt="" />
                <h3 className="title">{title}</h3>
                <p>{desc}</p>
                <h4 className="price">Price: ${price}</h4>
                <Link className="deal-btn" to={title}>
                  Go to Deal
                </Link>
              </div>
            );
          })}
      </items>
    </div>
  );
}

export default App;
