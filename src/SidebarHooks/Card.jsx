import { BsFillBagFill } from "react-icons/bs";
import { GiLoveMystery } from "react-icons/gi";
import { MdOutlinePreview } from "react-icons/md";
import { SlMagnifierAdd } from "react-icons/sl";

const Card = ({ imageUrl, newPrice, title, discountedPrice, brand }) => {
  // const Card = ({ img, title, reviews, prevPrice, newPrice }) => {
  return (
    <>
      {/* <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">

            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section> */}
      <div className="">
        {/* women top */}

       

        {/* Shirt */}
        <div className="rounded  border  hover:bg-white ">
          <div className="card shop-card ">
            <div className="">
              <figure className="">
                <img
                  className="p-2 sm:h-40  lg:h-96 w-96 "
                  src={imageUrl}
                  alt="car!"
                />
              </figure>
              <span className="absolute top-5 right-3 bg-white text-base-content rounded-full px-2">
                -20%
              </span>
            </div>
            <div className="card-actions">
              <button
                className="btn btn-outline btn-accent btn-circle"
                aria-label="add to cart"
              >
                <GiLoveMystery className="text-3xl text-base-content "></GiLoveMystery>
              </button>

              <button
                className="btn btn-circle btn-outline btn-accent"
                aria-label="add to whishlist"
              >
                <SlMagnifierAdd className="text-3xl text-base-content"></SlMagnifierAdd>
              </button>

              <button
                className="btn btn-circle btn-outline btn-accent"
                aria-label="compare"
              >
                <MdOutlinePreview className=" text-3xl text-base-content"></MdOutlinePreview>
              </button>
            </div>
          </div>
          <div className="px-2 text-base-content">
            <h2 className="lg:text-2xl font-semibold min-w-24 mb-2">{title}</h2>
            <h2 className="lg:text-xl min-w-24">{brand}</h2>
            <div className="flex  gap-1">
              <p className=" text-xl text-red-500">
                {newPrice}
                <span className=" font-extrabold">৳</span>
              </p>
              <p className="">
                <del>{discountedPrice}</del>
              </p>
            </div>
            <div className="card-actions justify-center my-3">
              <button className="btn  btn-outline btn-accent btn-circle w-full sm:max-w-md uppercase">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
