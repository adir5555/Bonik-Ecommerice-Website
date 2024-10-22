import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { BiMenuAltRight } from "react-icons/bi";
import Sidebar from "../SidebarHooks/Sidebar";
import Card from "../SidebarHooks/Card";
import Recommended from "../SidebarHooks/Recommended";
import Products from "../SidebarHooks/Products";
import CardA from "../SidebarHooks/CardA";
import CartB from "../SidebarHooks/CartB";
import { useContext } from "react";
import { AuthContext } from "../Provider/ProviderAuth";
import Check from "./Check";


const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const {
    filteredItems,
    filteredItemss,
    filteredItemsss,
    menu,
    menut,
    menud,
    query,
    
  } = useContext(AuthContext);

  const [rowwss, setRowwss] = useState(false);

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItemsss;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, brand, newPrice, title }) =>
          category === selected ||
          color === selected ||
          brand === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ imageUrl, newPrice, title, index, discountedPrice, brand }) => (
        <Card
          key={index}
          imageUrl={imageUrl}
          title={title}
          brand={brand}
          newPrice={newPrice}
          discountedPrice={discountedPrice}
        />
      )
    );
  }
  function filteredDataA(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItemss;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, brand, newPrice, title }) =>
          category === selected ||
          color === selected ||
          brand === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ imageUrl, newPrice, title, index, discountedPrice, brand }) => (
        <CardA
          key={index}
          imageUrl={imageUrl}
          title={title}
          brand={brand}
          newPrice={newPrice}
          discountedPrice={discountedPrice}
        />
      )
    );
  }
  function filteredDataB(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, brand, newPrice, title }) =>
          category === selected ||
          color === selected ||
          brand === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ imageUrl, newPrice, title, index, discountedPrice, brand }) => (
        <CartB
          key={index}
          imageUrl={imageUrl}
          title={title}
          brand={brand}
          newPrice={newPrice}
          discountedPrice={discountedPrice}
        />
      )
    );
  }

  const result = filteredData(menu, selectedCategory, query);
  const resultA = filteredDataA(menud, selectedCategory, query);
  const resultB = filteredDataB(menut, selectedCategory, query);

  const rowSpanOption = (
    <>
      <Recommended handleClick={handleClick}></Recommended>
      <Sidebar handleChange={handleChange}></Sidebar>
    </>
  );

  return (
    <div className="mt-12">
      <div className="grid grid-rows-3 p-4 grid-flow-col gap-4 ">
        <div className="row-span-2 col-span-2 text-base-content sm:flex hidden bg-[#dfe1e839] p-2 pt-2 ...">
          <div className="flex flex-col w-48 gap-4">
            <h2 className="text-center uppercase text-3xl font-semibold">
              Sidebar
            </h2>
            <hr className="mt-2" />
            {rowSpanOption}
          </div>
        </div>

        {/*  */}
        <div className="row-span-3 pt-2 bg-[#dfe1e839]  ...">
          <div className="flex justify-between px-4 mb-3">
            <h2 className="text-3xl hidden sm:flex uppercase">Shop</h2>
            <div className="flex items-center gap-2">
              <button className="" onClick={() => setRowwss(true)}>
                <BiMenuAltRight className="text-xl cursor-pointer sm:hidden"></BiMenuAltRight>
              </button>
              <h2 className="text-xl lg:hidden uppercase ">Filter</h2>
            </div>

            <div className="flex items-center gap-2">
              <h2 className="text-xl uppercase">Sort by: </h2>

              <select className="select border-none select-success w-28 text-base-content ">
                <option disabled selected>
                  All Categories
                </option>
                <option>Sci-fi</option>
                <option>Drama</option>
                <option>Action</option>
              </select>
            </div>
          </div>

          <hr className="mb-3" />

          <div className="row-span-2 col-span-2 ...">
            <Products
              result={result}
              resultA={resultA}
              resultB={resultB}
            ></Products>

            {query && (
              <div className="">
                {result.length > 0 ? (
                  <ul>
                    {result.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>erwyhhhhhhhhhh</p>
                  

                  
                )}
               
              </div>
            )}

           

          </div>
        </div>
      </div>

      <div
        className={`absolute top-0 right-0 overflow-hidden bg-slate-100 transition-all ${
          rowwss ? "sm:w-96 h-full z-10" : "w-0"
        } `}
      >
        <div className="flex flex-col text-black">
          <div
            onClick={() => setRowwss(false)}
            className=" flex items-center gap-4 p-3"
          >
            <GoArrowLeft className="h-4 rotate-180 text-3xl"></GoArrowLeft>
            <p>Back</p>
          </div>

          <div className="flex flex-col gap-5 p-3">
            <hr />
            {/* {rowSpanOption} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
