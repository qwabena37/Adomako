import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";
import {
  FaWhatsapp,
  FaArrowLeft,
} from "react-icons/fa";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const whatsappNumber = "233243160227"; // Replace with your actual WhatsApp number

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`products/${id}/`);

        setProduct(response.data);
      } catch (err) {
        console.error(err);
        setError("Unable to load product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-semibold">
          Loading product...
        </h2>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-semibold text-red-600">
          {error || "Product not found"}
        </h2>

        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 mt-6 bg-gray-800 text-white px-5 py-3 rounded-lg"
        >
          <FaArrowLeft />
          Back to Gallery
        </Link>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Adomako Agyenkwa Enterprise, I would like to inquire about:\n\n${product.name}`
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">

        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 mb-8 text-yellow-600 font-semibold"
        >
          <FaArrowLeft />
          Back to Gallery
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="p-6">
  <div className="bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center h-[300px] sm:h-[400px] lg:h-[500px]">

    <img
      src={
        product.image?.startsWith("http")
          ? product.image
          : `http://127.0.0.1:8000${product.image}`
      }
      alt={product.name}
      className="max-w-full max-h-full rounded-2xl object-contain rounded-2xl"
      onError={(e) => {
        console.log("Failed image:", e.target.src);
      }}
    />

  </div>
</div>

            <div className="p-8 flex flex-col justify-center">

              <div className="mb-4">
                <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                  Genuine Automobile Part
                </span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-yellow-600">
                  GHS {product.price}
                </span>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2">
                  Description
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold">
                    Stock Available
                  </h4>

                  <p className="text-gray-700">
                    {product.stock}
                  </p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold">
                    Product ID
                  </h4>

                  <p className="text-gray-700">
                    #{product.id}
                  </p>
                </div>

              </div>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
              >
                <FaWhatsapp size={24} />
                Inquire via WhatsApp
              </a>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
