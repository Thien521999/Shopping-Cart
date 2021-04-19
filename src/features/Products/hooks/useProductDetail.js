import productApi from "api/productApi";
import { useEffect, useState } from "react";

export default function useProductDetail(productId) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const result = await productApi.get(productId);
        //console.log(result);
        setProduct(result);
      } catch (error) {
        console.log("Failed to fectch product:", error);
      }

      setLoading(false);
    })();
  }, [productId]);

  //retun ve data
  return {product, loading};
}
