// import { useContext } from "react";
import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
// import Recommended from "./Recommended";
// import { AuthContext } from "./ShopCategory";

const Sidebar = ({handleChange}) => {
  // const { handleChange, handleClick} =
  //   useContext(AuthContext);

  return (
    <div>
      {/* <Recommended handleClick={handleClick}></Recommended> */}
      <Category handleChange={handleChange}></Category>
      <Price handleChange={handleChange}></Price>
      <Colors handleChange={handleChange}></Colors>
    </div>
  );
};

export default Sidebar;
