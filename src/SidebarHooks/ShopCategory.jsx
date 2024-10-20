import { useEffect, useState } from "react";

import Card from "./Card";
import Sidebar from "./Sidebar";
import Recommended from "./Recommended";
import Products from "./Products";
import Navess from "../Coomon/Navess";

const ShopCategory = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    // fetch("men_shirt.json")
    fetch("Menus.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      });
  }, []);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = menu.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // function filteredData(products, selected, query) {
  //   let filteredProducts = products;

  //   // Filtering Input Items
  //   if (query) {
  //     filteredProducts = filteredItems;
  //   }

  //   // Applying selected filter
  //   if (selected) {
  //     filteredProducts = filteredProducts.filter(
  //       ({ thirdLavelCategory, color, brand, price, title }) =>

  //         thirdLavelCategory === selected ||
  //         color === selected ||
  //         brand === selected ||
  //         price === selected ||
  //         title === selected

  //     );
  //   }

  //   return filteredProducts.map(
  //     ({ imageUrl, price, title, index, discountedPrice, brand }) => (
  //       <Card
  //         key={index}
  //         imageUrl={imageUrl}
  //         title={title}
  //         brand={brand}
  //         price={price}
  //         discountedPrice={discountedPrice}
  //       />

  //     )
  //   );
  // }

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, reviews, prevPrice, newPrice, index }) => (
        <Card
          key={index}
          // key={Math.random()}
          img={img}
          title={title}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(menu, selectedCategory, query);
  return (
    <div>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3 ...">
          <Sidebar handleChange={handleChange}></Sidebar>
        </div>

        <div className="row-span-2 col-span-2 ...">
          <Recommended handleClick={handleClick}></Recommended>
          <Products result={result}></Products>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
