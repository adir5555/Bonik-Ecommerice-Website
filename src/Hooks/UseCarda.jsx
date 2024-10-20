
import { useEffect, useState } from "react";

const UseCarda = () => {
  const [menud, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("women_dress.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);

  return [menud, loading];
};

export default UseCarda;
