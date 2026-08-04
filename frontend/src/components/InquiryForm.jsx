import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    api
      .get(`products/${id}/`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return <div className="p-10">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      <div className="grid md:grid-cols-2 gap-10">

        <img
          src={`http://127.0.0.1:8000${product.image}`}
          alt={product.name}
          className="rounded-xl shadow-lg"
        />

        <div>

          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="mt-4 text-gray-700">
            {product.description}
          </p>

          <p className="mt-4 text-xl font-semibold">
            GHS {product.price}
          </p>

          <a
            href={`https://wa.me/233XXXXXXXXX?text=Hello, I would like to inquire about ${product.name}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded"
          >
            Request Product
          </a>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;
