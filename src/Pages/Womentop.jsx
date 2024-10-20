import { GiLoveMystery } from "react-icons/gi";
import { MdOutlinePreview } from "react-icons/md";
import { SlMagnifierAdd } from "react-icons/sl";
import UseCard from "../Hooks/UseCard";
import SwipPhone from "../Components/SwipPhone";


const Womentop = () => {
  const [menut] = UseCard();
  return (
    <div className="lg:px-28">
      <div className="my-10">
        <SwipPhone></SwipPhone>
      </div>
      <div className="grid bg-[#dfe1e839] p-1  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {menut.map((cart, index) => (
                 <div key={index} className="rounded  border  hover:bg-white ">
                 <div className="card shop-card ">
                   <div className="">
                     <figure className="">
                       <img
                         className="p-2 sm:h-40  lg:h-96 w-96"
                         src={cart.imageUrl}
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
                   <h2 className="lg:text-xl min-w-24">{cart.brand}</h2>
                   <div className="flex  gap-1">
                     <p className=" text-xl text-red-500">
                       {cart.price}
                       <span className=" font-extrabold">৳</span>
                     </p>
                     <p className="">
                       <del>{cart.discountedPrice}</del>
                     </p>
                   </div>
                   <div className="card-actions justify-center my-3">
                     <button className="btn w-full sm:max-w-md btn-outline btn-accent btn-circle uppercase">
                       add to cart
                     </button>
                   </div>
                 </div>
               </div>
              ))}
            </div>
    </div>
  );
};

export default Womentop;