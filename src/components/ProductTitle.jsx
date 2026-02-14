import { useEffect, useState } from "react";

function ProductTitle() {
  const [produit, setProduit] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((data) => {
        setProduit(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Chargement...</h2>;
  }

  return <h2>{produit.title}</h2>;
}

export default ProductTitle;
