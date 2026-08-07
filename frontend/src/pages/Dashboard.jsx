import { Link, useNavigate } from "react-router-dom";


function Dashboard() {


  const navigate = useNavigate();



  const logout = () => {


    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );


    if(confirmLogout){

      localStorage.removeItem("access");

      localStorage.removeItem("refresh");

      navigate("/admin/login");

    }


  };



  return (


    <div className="min-h-screen bg-gray-100 p-6">


      {/* Header */}

      <div className="flex flex-col md:flex-row justify-between items-center mb-10">


        <h1 className="text-3xl font-bold text-gray-800">

          Admin Dashboard

        </h1>



        <button

          onClick={logout}

          className="mt-4 md:mt-0 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow"

        >

          Logout

        </button>



      </div>





      {/* Admin Menu */}

      <div className="bg-white rounded-2xl shadow-lg p-8">


        <h2 className="text-xl font-semibold mb-6">

          Admin Menu

        </h2>



        <div className="grid md:grid-cols-3 gap-6">



          <Link

            to="/admin/products"

            className="bg-blue-600 text-white p-6 rounded-xl shadow-lg text-center hover:bg-blue-700 transition duration-300"

          >

            Product Management

          </Link>




          <Link

            to="/admin/inquiries"

            className="bg-green-600 text-white p-6 rounded-xl shadow-lg text-center hover:bg-green-700 transition duration-300"

          >

            Customer Inquiries

          </Link>




          <Link

            to="/admin/create-product"

            className="bg-yellow-500 text-black p-6 rounded-xl shadow-lg text-center hover:bg-yellow-600 transition duration-300"

          >

            Create Product

          </Link>



        </div>



      </div>



    </div>


  );

}


export default Dashboard;