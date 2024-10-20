import Input from "../Input";
import "../../HooksCss/Price.css";

const Price = ({ handleChange }) => {
  return (
    
  
     <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test2" />
        <span className="checkmark"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value={599}
        title="$0 - 599"
        name="test2"
      />

      <Input
        handleChange={handleChange}
        value={999}
        title="$599 - $999"
        name="test2"
      />

      <Input
        handleChange={handleChange}
        value={1399}
        title="$999 - $1399"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value={1499}
        title="$1399 - $1499"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value={1999}
        title="$1499 - $1999"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value={2499}
        title="$1999 - $2499"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value={2999}
        title="$2499 - $2999"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value={3999}
        title="$2999 - $3999"
        name="test2"
      />

      
    </div> 

    
  
  );
};

export default Price;
