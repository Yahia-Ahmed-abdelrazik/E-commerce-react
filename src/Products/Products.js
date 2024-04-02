import React from "react";
import "./Products.css";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { IoBagHandleSharp } from "react-icons/io5";

function Products() {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img
            className="card-img"
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="shose"
          />
          <div className="card-info">
            <h3 className="card-titel">hjll</h3>
            <section className="card-reviews">
              <IoIosStar   className="rating-star"/>
              <IoIosStar  className="rating-star"/>
              <IoIosStar  className="rating-star"/>
              <IoIosStar className="rating-star" />
              <IoIosStarHalf  className="rating-star"/>
              <span className="total-reviews">4</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>$300</del>200
              </div>
              <div className="bag">
                <IoBagHandleSharp className="bag-icon" />
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
}
export default Products;
