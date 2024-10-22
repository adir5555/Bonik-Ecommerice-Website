import { Route, Routes } from "react-router-dom";
import "./App.css";
import Page from "./Pages/Menshirt";
import Footer from "./Coomon/Footer";
import Home from "./Pages/Home";
import Navess from "./Coomon/Navess";
import Welcome from "./Coomon/Welcome";
import Womendress from "./Pages/Womendress";
import Womentop from "./Pages/Womentop";
import Menshirt from "./Pages/Menshirt";
import { useContext } from "react";
import { AuthContext } from "./Provider/ProviderAuth";

function App() {
  const { handleInputChange, query } = useContext(AuthContext);
  return (
    <div className="">
      <Welcome></Welcome>
      <Navess handleInputChange={handleInputChange} query={query}></Navess>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/womendress" element={<Womendress></Womendress>}></Route>
        <Route path="/womentop" element={<Womentop></Womentop>}></Route>
        <Route path="/menshirt" element={<Menshirt></Menshirt>}></Route>
        <Route path="/" element={<Page></Page>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
