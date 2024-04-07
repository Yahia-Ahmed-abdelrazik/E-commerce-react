import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { IoBagHandleSharp } from "react-icons/io5";

function Card({ img, title, star, reviews, prevPrice, newPrice }) {
  return (
    <section className="card">
      <img className="card-img" src={img} alt={title} />
      <div className="card-info">
        <h3 className="card-titel">{title}</h3>
        <section className="card-reviews">
          <IoIosStar className="rating-star" />
          <IoIosStar className="rating-star" />
          <IoIosStar className="rating-star" />
          <IoIosStar className="rating-star" />
          <IoIosStarHalf className="rating-star" />
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del>
            {newPrice}
          </div>
          <div className="bag">
            <IoBagHandleSharp className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Card;
