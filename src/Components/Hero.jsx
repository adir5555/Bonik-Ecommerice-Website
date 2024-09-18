// import UseMenu from "../Hooks/UseMenu";
import Menus from "../Maps/Menus";
import Swiperss from "./Swiperss";

const Hero = () => {
  // const [menu] = UseMenu();
  return (
    <div className="home">
      <div className="mt-12">
        <div className="homeSlide ">
          <Swiperss></Swiperss>
        </div>
        <div className="">
          <Menus></Menus>
        </div>



        {/* <div className="">
          {menu.slice(0, 4).map((cart) => (
            <Menus key={cart._id} cart={cart}></Menus>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
