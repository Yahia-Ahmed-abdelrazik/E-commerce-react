import "./Price.css";
import Inputs from "../../components/Inputs";

function Price({ handelChange }) {
  return (
    <>
      <div className="ml">
        <h2 className="sidbar-title price-titlr">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handelChange} type="radio" name="test2" value="" />
          <span className="checkmark"></span>All
        </label>

        <Inputs
          handelChange={handelChange}
          value={50}
          title="$0-50"
          name="test2"
        />
        <Inputs
          handelChange={handelChange}
          value={100}
          title="$50-100"
          name="test2"
        />
        <Inputs
          handelChange={handelChange}
          value={150}
          title="$100-150"
          name="test2"
        />
        <Inputs
          handelChange={handelChange}
          value={200}
          title="Over $150"
          name="test2"
        />

      </div>
    </>
  );
}

export default Price;
