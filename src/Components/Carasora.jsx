import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import UseCard from "../Hooks/UseCard";

const Carasora = () => {
  const [menu] = UseCard();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div>
      <Carousel responsive={responsive} className="my-10 p-4">
        {menu.map((ite, index) => (
          <div key={index} className="  ">
            <figure>
                <img
                className="h-72 w-72 "
                 src={ite.imageUrl}
                  alt="Shoes"
                />
              </figure>
           
          </div>
        ))}
      </Carousel>
      
    </div>
  );
};

export default Carasora;
