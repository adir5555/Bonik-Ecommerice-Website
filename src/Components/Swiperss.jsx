
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UseMenu from "../Hooks/UseMenu";
import "../Coomon/Fooerss/Swipers.css";

const Swiperss = () => {
  const [menu] = UseMenu();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <div>
      <Slider {...settings}>
        {menu.map((value, index)  => {
            return (
              <>
                <div className='lg:flex justify-between p-4' key={index}>
                  <div className='left'>
                    <h1 className="">{value.title}</h1>
                    <p className="text-2xl">{value.loremm}</p>
                    
                    <button className='btn btn-outline btn-accent'>Visit Collections</button>
                  </div>
                  <div className=''>
                    <img src={value.image} className="w-full h-96" alt='' />
                  </div>
                </div>
              </>
            )
        })}
      </Slider>
    </div>
  );
};

export default Swiperss;
