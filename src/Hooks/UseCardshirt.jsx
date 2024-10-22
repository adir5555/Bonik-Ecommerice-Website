


import { useEffect, useState } from "react";

const UseCardshirt = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("men_shirt.json")
    
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, [setMenu]);

  return [menu, loading];
};

export default UseCardshirt;
