import { useEffect, useState } from "react";
import api from "../services/api";

function ProductsAdmin() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    featured: false,
  });

  const [image, setImage] = useState(null);

  const fetchProducts = () => {
    api
      .get("products/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    api
      .get("categories/")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));

    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token =
        localStorage.getItem("access");

      const data = new FormData();

      data.append("name", formData.name);
      data.append(
        "description",
        formData.description
      );
      data.append("price", formData.price);
      data.append("stock", formData.stock);
      data.append(
        "category",
        formData.category
      );
      data.append(
        "featured",
        formData.featured
      );

      if (image) {
        data.append("image", image);
      }

      await api.post(
        "products/",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      alert(
        "Product added successfully"
      );

      setFormData({
        name: "",
        description: "",
        price: "",
        stock: "",
        category: "",
        featured: false,
      });

      setImage(null);

      fetchProducts();

    } catch (error) {
      console.error(error);
      alert(
        "Failed to save product"
      );
    }
  };

  const deleteProduct = async (id) => {
    const confirmed =
      window.confirm(
        "Delete this product?"
      );

    if (!confirmed) return;

    try {
      const token =
        localStorage.getItem("access");

      await api.delete(
        `products/${id}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchProducts();

      alert(
        "Product deleted successfully"
      );

    } catch (error) {
      console.log(error);
      alert(
        "Failed to delete product"
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">

      {/* Add Product Form */}
      <div className="bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-4xl font-bold mb-8">
          Add Product
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <textarea
            name="description"
            placeholder="Product Description"
            rows="5"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          >
            <option value="">
              Select Category
            </option>

            {categories.map(
              (category) => (
                <option
                  key={category.id}
                  value={category.id}
                >
                  {category.name}
                </option>
              )
            )}
          </select>

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock Quantity"
            value={formData.stock}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImage(
                e.target.files[0]
              )
            }
            className="w-full border p-3 rounded"
            required
          />

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              name="featured"
              checked={
                formData.featured
              }
              onChange={handleChange}
            />

            Featured Product

          </label>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-semibold"
          >
            Save Product
          </button>

        </form>

      </div>

      {/* Products Management */}
      <div className="mt-12">

        <h2 className="text-3xl font-bold mb-6">
          Product Management
        </h2>

        <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
          <div className="overflow-x-auto">
          <table className="w-full">

            <thead>

              <tr className="bg-gray-100">

                <th className="p-4 text-left">
                  Image
                </th>

                <th className="p-4 text-left">
                  Product
                </th>

                <th className="p-4 text-left">
                  Price
                </th>

                <th className="p-4 text-left">
                  Stock
                </th>

                <th className="p-4 text-left">
                  Featured
                </th>

                <th className="p-4 text-left">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {products.map((product) => (

                <tr
                  key={product.id}
                  className="border-t"
                >

                  <td className="p-4">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />

                  </td>

                  <td className="p-4 font-medium">
                    {product.name}
                  </td>

                  <td className="p-4">
                    GH₵ {product.price}
                  </td>

                  <td className="p-4">
                    {product.stock}
                  </td>

                  <td className="p-4">

                    {product.featured ? (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        Yes
                      </span>
                    ) : (
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                        No
                      </span>
                    )}

                  </td>

                  <td className="p-4 flex gap-2">

                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        deleteProduct(
                          product.id
                        )
                      }
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>
        </div>
        </div>

      </div>

    </div>
  );
}

export default ProductsAdmin;
