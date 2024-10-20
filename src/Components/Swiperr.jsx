import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import UseCard from "../Hooks/UseCard";

export default function Swiperr() {
  const [menu] = UseCard();
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  return (
    <>
      <Swiper
        breakpoints={{
          // when window width is >= 320px (for mobile)
          320: {
            slidesPerView: 1, // show 1 slide at a time on mobile
            spaceBetween: 10,
          },
          // when window width is >= 640px (for tablets)
          640: {
            slidesPerView: 2, // show 2 slides at a time on tablets
            spaceBetween: 20,
          },
          // when window width is >= 1024px (for laptops/desktops)
          1024: {
            slidesPerView: 3, // show 3 slides at a time on laptops/desktops
            spaceBetween: 30,
          },
        }}
        onSwiper={setSwiperRef}
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="responsive">
          {menu.map((ite, index) => (
            <SwiperSlide key={index}>
              <div className="my-10 w-96 h-96">
                <img className="w-full h-full" src={ite.imageUrl} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      <p className="append-buttons">
        <button onClick={() => prepend2()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => prepend()} className="prepend-slide">
          Prepend Slide
        </button>
        <button onClick={() => append()} className="append-slide">
          Append Slide
        </button>
        <button onClick={() => append2()} className="append-2-slides">
          Append 2 Slides
        </button>
      </p>
    </>
  );
}
