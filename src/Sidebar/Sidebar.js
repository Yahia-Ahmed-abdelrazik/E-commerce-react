import "./Sidebar.css";
import { TiShoppingCart } from "react-icons/ti";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

function Sidebar({ handelChange }) {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            <TiShoppingCart />
          </h1>
        </div>
        <Category  handelChange={handelChange} />
        <Price handelChange={handelChange} />
        <Colors  handelChange={handelChange}/>
      </section>
    </>
  );
}
export default Sidebar;
