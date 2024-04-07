import "./Colors.css";
import Inputs from "../../components/Inputs";

function Colors({ handelChange }) {
  return (
    <>
      <div>
        <h2 className="sidbar-title color-titlr">Color</h2>

        <label className="sidebar-label-container">
          <input onChange={handelChange} type="radio" name="test1" value="" />
          <span className="checkmark all"></span>All
        </label>

        <Inputs
          handelChange={handelChange}
          value="black"
          title="Black"
          color="black"
          name="test1"
        />
        <Inputs
          handelChange={handelChange}
          value="blue"
          title="Blue"
          color="blue"
          name="test1"
        />
        <Inputs
          handelChange={handelChange}
          value="red"
          title="Red"
          color="red"
          name="test1"
        />
        <label className="sidebar-label-container">
          <input onChange={handelChange} type="radio" name="test1" value="" />
          <span
            className="checkmark"
            style={{ backgroundColor: "#ccc", border: "2px solid black" }}
          ></span>
          white
        </label>
      </div>
    </>
  );
}
export default Colors;
