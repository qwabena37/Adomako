
import { Link, useNavigate } from "react-router-dom";


function InquiriesAdmin() {


  const navigate = useNavigate();



  const logout = () => {


    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );


    if (confirmLogout) {

      localStorage.removeItem("access");

      localStorage.removeItem("refresh");

      navigate("/admin/login");

    }


  };



  return (


    <div className="min-h-screen bg-gray-100 p-6 md:p-10">


      {/* Header */}

      <div className="flex flex-col md:flex-row justify-between items-center mb-8">


        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">

          Customer Inquiries

        </h1>



        <button

          onClick={logout}

          className="mt-4 md:mt-0 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow"

        >

          Logout

        </button>


      </div>




      {/* Back Button */}

      <Link

        to="/admin/dashboard"

        className="inline-flex items-center mb-8 bg-gray-800 hover:bg-gray-900 text-white px-5 py-3 rounded-lg font-semibold transition"

      >

        ← Back to Admin Menu

      </Link>




      {/* Inquiry Section */}

      <div className="bg-white rounded-2xl shadow-lg p-8">


        <h2 className="text-2xl font-bold mb-6">

          Customer Messages

        </h2>



        <div className="text-center py-16 text-gray-500">


          <p className="text-lg">

            No customer inquiries available yet.

          </p>


        </div>



      </div>



    </div>


  );

}



export default InquiriesAdmin;
