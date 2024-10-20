import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UseCard from "../Hooks/UseCard";
import UseCarda from "../Hooks/UseCarda";
import UseCardshirt from "../Hooks/UseCardshirt";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};
const SwipPhone = () => {
  const [menu] = UseCard();
  const [menus] = UseCarda();
  const [menushirt] = UseCardshirt();
  // const [count, setCount] = useState(0);
  // const increment = () => {
  //   setCount(count + 1);
  // };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640, // Mobile view
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Tablet view
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // Laptop view
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1280, // Desktop view
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <div className="mt-24 px-2">
      <Slider {...settings}>
        {menus.slice(0, 5).map((productItems, index) => {
          return (
            <div key={index} className=" bg-zinc-100 px grid sm:grid-cols-2">
              <figure>
                <img
                  className="h-80 w-96"
                  src={productItems.imageUrl}
                  alt="Shoes"
                />
              </figure>
            </div>
          );
        })}
        {menu.slice(0, 5).map((productItems, index) => {
          return (
            <div key={index} className=" bg-zinc-100 px grid sm:grid-cols-2">
              <figure>
                <img
                  className="h-80 w-96"
                  src={productItems.imageUrl}
                  alt="Shoes"
                />
              </figure>
            </div>
          );
        })}
        {menushirt.slice(0, 5).map((productItems, index) => {
          return (
            <div key={index} className=" bg-zinc-100 px grid sm:grid-cols-2">
              <figure>
                <img
                  className="h-80 w-96"
                  src={productItems.imageUrl}
                  alt="Shoes"
                />
              </figure>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SwipPhone;
