
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import api from "../services/api";

function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    api
      .get("products/")
      .then((res) => {
        const featured = res.data
          .filter((product) => product.featured === true)
          .slice(0, 10);

        setFeaturedProducts(featured);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Hero />

      {/* Business Introduction Section */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold text-sm">
            Trusted Automobile Parts Dealer
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            Adomako Agyenkwa Enterprise
          </h2>

          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Adomako Agyenkwa Enterprise is a trusted supplier of genuine and
            high-quality automobile spare parts for Toyota, Honda, Hyundai,
            Nissan, BMW, Mercedes-Benz and other leading vehicle brands.
            We are committed to providing quality products, competitive prices,
            and excellent customer service to vehicle owners, mechanics,
            transport operators and automobile dealers.
          </p>

          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mt-6">
            Whether you need engine components, suspension systems, brake parts,
            filters, electrical accessories, body parts or maintenance products,
            we provide reliable solutions to keep your vehicle operating at its best.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                Genuine Parts
              </h3>

              <p className="text-gray-300">
                Original and quality-tested automobile parts sourced from
                trusted manufacturers and suppliers.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                Wide Selection
              </h3>

              <p className="text-gray-300">
                Comprehensive automobile parts inventory covering multiple
                vehicle brands and models.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                Fast Support
              </h3>

              <p className="text-gray-300">
                Quick product inquiries and professional customer assistance
                through WhatsApp and direct contact.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Products in Stock Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Products in Stock
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore some of our most popular and highly demanded automobile
            spare parts available for immediate inquiry and purchase.
          </p>
        </div>

        {featuredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No featured products available at the moment.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

            {featuredProducts.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-60 w-full object-cover"
                />

                <div className="p-5">

                  <h3 className="text-xl font-bold mb-2">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  <div className="flex justify-between items-center mb-4">

                    <span className="text-yellow-600 font-bold text-lg">
                      GH₵ {product.price}
                    </span>

                    <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                      Category {product.category}
                    </span>

                  </div>

                  <a
                    href={`https://wa.me/233243160227?text=Hello Adomako Agyenkwa Enterprise, I am interested in ${encodeURIComponent(
                      product.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition duration-300"
                  >
                    Inquire on WhatsApp
                  </a>

                </div>
              </div>

            ))}

          </div>
        )}

      </section>
    </div>
  );
}

export default Home;
