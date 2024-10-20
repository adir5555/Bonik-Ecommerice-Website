import { useEffect, useState } from "react";

const UseCard = () => {
  const [menut, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("women_top.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);

  return [menut, loading];
};

export default UseCard;
