import "./Category.css";
import Inputs from "../../components/Inputs";

function Category({ handelChange }) {
  return (
    <>
      <div>
        <h2 className="sidebar-title">Category</h2>
      </div>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handelChange} type="radio" name="test" value="" />
          <span className="checkmark"></span>All
        </label>

        <Inputs
          handelChange={handelChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Inputs
          handelChange={handelChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Inputs
          handelChange={handelChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Inputs
          handelChange={handelChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </>
  );
}
export default Category;
