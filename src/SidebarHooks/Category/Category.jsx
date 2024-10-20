import Input from "../Input";
import "../../HooksCss/Category.css";

function Category({ handleChange }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="shirt"
          title="Man_Shirt"
          name="test"
        />
      
        <Input
          handleChange={handleChange}
          value="tops"
          title="Women_Top"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="women_dress"
          title="Women_Dress"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
