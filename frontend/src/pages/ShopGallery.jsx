import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import api from "../services/api";

function ShopGallery() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await api.get(
        `products/?search=${search}`
      );

      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [search]);

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10">

      {/* Page Header */}

      <div className="text-center mb-8 sm:mb-10">

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          Product Gallery
        </h1>

        <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-3xl mx-auto">
          Explore our wide range of genuine automobile parts for
          Toyota, Honda, Hyundai, Nissan, Mercedes-Benz, Volvo,
          SsangYong and many other vehicle brands.
        </p>

      </div>

      {/* Search Bar */}

      <div className="mb-8 sm:mb-10">

        <div className="max-w-sm sm:max-w-lg md:max-w-2xl mx-auto relative">

          <FaSearch
            className="
              absolute
              left-3 sm:left-4
              top-1/2
              -translate-y-1/2
              text-gray-400
              text-xs sm:text-sm md:text-base
            "
          />

          <input
            type="text"
            placeholder="Search automobile parts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              pl-9 sm:pl-12
              pr-3 sm:pr-4
              py-2 sm:py-3 md:py-4
              text-xs sm:text-sm md:text-base
              border
              border-gray-300
              rounded-lg sm:rounded-xl
              shadow-sm
              focus:outline-none
              focus:ring-2
              focus:ring-yellow-500
              transition-all
            "
          />

        </div>

      </div>

      {/* Product Count */}

      <div className="mb-4 sm:mb-6">

        <p className="text-center text-sm sm:text-base text-gray-600">
          {products.length} Product
          {products.length !== 1 ? "s" : ""} Found
        </p>

      </div>

      {/* Loading */}

      {loading ? (

        <div className="text-center py-20">

          <h2 className="text-xl sm:text-2xl font-semibold">
            Loading Products...
          </h2>

        </div>

      ) : (

        <>

          {products.length === 0 ? (

            <div className="text-center py-20">

              <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
                No products found
              </h2>

              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                Try searching for another product.
              </p>

            </div>

          ) : (

            <div
              className="
                grid
                grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                gap-3
                sm:gap-4
                md:gap-5
                lg:gap-6
              "
            >

              {products.map((product) => (

                <div
                  key={product.id}
                  className="
                    bg-white
                    rounded-lg
                    sm:rounded-xl
                    lg:rounded-2xl
                    shadow-md
                    hover:shadow-xl
                    overflow-hidden
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >

                  <img
  src={product.image}
  alt={product.name}
  className="
    h-28
    sm:h-40
    md:h-48
    lg:h-56
    w-full
    object-cover
  "
/>

                  <div className="p-2 sm:p-3 md:p-4">

                    <h3
                      className="
                        font-bold
                        text-xs
                        sm:text-sm
                        md:text-base
                        lg:text-lg
                        text-gray-900
                        line-clamp-2
                      "
                    >
                      {product.name}
                    </h3>

                    <p
                      className="
                        text-xs
                        sm:text-sm
                        text-gray-600
                        mt-2
                        line-clamp-2
                      "
                    >
                      {product.description?.slice(0, 90)}
                      ...
                    </p>

                    <div className="mt-3">

                      <Link
                        to={`/product/${product.id}`}
                        className="
                          inline-block
                          bg-yellow-500
                          hover:bg-yellow-600
                          text-white
                          text-[11px]
                          sm:text-xs
                          md:text-sm
                          px-2
                          sm:px-3
                          md:px-4
                          py-1.5
                          sm:py-2
                          rounded-lg
                          font-medium
                          transition
                        "
                      >
                        View Details
                      </Link>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </>

      )}

    </div>
  );
}

export default ShopGallery;
