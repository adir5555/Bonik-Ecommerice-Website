import { createContext, useState } from "react";
import UseCard from "../Hooks/UseCard";
import UseCarda from "../Hooks/UseCarda";
import UseCardshirt from "../Hooks/UseCardshirt";

export const AuthContext =createContext(null)
const ProviderAuth = ({children}) => {

  const [menut] = UseCard();
  const [menud] = UseCarda();
  const [menu] = UseCardshirt();
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = menut.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  const filteredItemss = menud.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  const filteredItemsss = menu.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const authInfo ={
    filteredItems,
    filteredItemss,
    filteredItemsss,
    handleInputChange,
    menu,
    menut,
    menud,
    query
  }
  return (
    <div className=" ">
     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ProviderAuth;