import React, { useState } from "react";
import data from "./data";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
function Item() {
  const [totalCost, setTotalCost] = useState(0);
  const { title } = useParams();

  return (
    <div className="main-div">
      <Navbar />
      {data
        .filter((item) => {
          if (item.title === title) {
            return item;
          } else {
            return null;
          }
        })
        .map((item, index) => {
          const { title, desc, img, price } = item;
          return (
            <div>
              <div key={index} className="item-div">
                <div className="item-image left side">
                  <img src={img} alt="This is a photos" />
                </div>

                <div className="right-side">
                  <h2 className="item-title">{title}</h2>
                  <h3 className="price">Price: $ {price}</h3>
                  <h3 className="quantities">Quantities</h3>
                  <input
                    type="number"
                    name="quantity"
                    id="quantity-input"
                    onChange={(e) => setTotalCost(e.target.value)}
                    value={totalCost}
                  />
                  <h3 className="price">Total cost : {totalCost * price}</h3>
                  <button
                    className="order-button"
                    onClick={() => alert("Added to Cart")}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="order-button"
                    onClick={() => alert("Order Created")}
                  >
                    Order Now
                  </button>
                </div>
              </div>
              <div className="hr-container">
                <hr className="horizontal-row" />
                <hr className="horizontal-row" />
              </div>
              <div className="bottom">
                <p>{desc}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores esse in vitae dolorum ullam, molestiae officia ad
                  repellat et dignissimos eveniet sequi debitis recusandae
                  mollitia neque, quo facere dolor! Velit vel unde ipsum
                  exercitationem, necessitatibus nihil? Cumque culpa, unde
                  doloremque ut, hic consequatur sint praesentium, accusamus
                  ipsa repellendus exercitationem porro.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit distinctio dolore odio nisi error nesciunt
                  voluptatibus, magnam est natus, nostrum ducimus, aspernatur
                  temporibus maiores nulla tempore laborum adipisci perspiciatis
                  eos perferendis omnis. Quae, quas. Quis atque quo iure id.
                  Provident animi sequi omnis aliquam, blanditiis deserunt magni
                  velit dolorem illo corrupti necessitatibus voluptatibus eius
                  quibusdam nihil, dicta aperiam sunt ipsum? Ducimus quae
                  aliquam soluta laborum! Vel hic fugit commodi quam id expedita
                  nisi eius doloremque at et. Est corrupti similique beatae in
                  ea dolorem eveniet unde, eligendi repudiandae aliquam rerum
                  repellendus ullam voluptate, perspiciatis nihil minima
                  laboriosam qui nam. Facilis.
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Item;
