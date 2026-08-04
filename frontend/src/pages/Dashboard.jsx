
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <Link
          to="/admin/products"
          className="bg-blue-600 text-white p-6 rounded-xl shadow-lg text-center hover:bg-blue-700"
        >
          Product Management
        </Link>

        <Link
          to="/admin/inquiries"
          className="bg-green-600 text-white p-6 rounded-xl shadow-lg text-center hover:bg-green-700"
        >
          Customer Inquiries
        </Link>

        <Link
          to="/admin/create-product"
          className="bg-yellow-500 text-black p-6 rounded-xl shadow-lg text-center hover:bg-yellow-600"
        >
          Create Product
        </Link>

      </div>

    </div>
  );
}

export default Dashboard;

