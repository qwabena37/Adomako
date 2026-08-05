import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function AdminLogin() {

  const navigate = useNavigate();


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const login = async (e) => {

    e.preventDefault();


    try {

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/token/`,
        {
          username,
          password,
        }
      );


      localStorage.setItem(
        "access",
        response.data.access
      );


      localStorage.setItem(
        "refresh",
        response.data.refresh
      );


      navigate("/admin/dashboard");


    } catch (error) {

      console.log(error.response);

      alert("Invalid Credentials");

    }

  };


  return (

    <div className="min-h-screen flex justify-center items-center">


      <form
        onSubmit={login}
        className="bg-white shadow-lg p-8 rounded-xl w-96"
      >


        <h1 className="text-3xl font-bold mb-6">
          Admin Login
        </h1>


        <input
          type="text"
          placeholder="Username"
          className="w-full border p-3 mb-4"
          value={username}
          onChange={
            (e)=>setUsername(e.target.value)
          }
        />


        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-4"
          value={password}
          onChange={
            (e)=>setPassword(e.target.value)
          }
        />


        <button
          className="w-full bg-yellow-500 text-white py-3 rounded"
        >
          Login
        </button>


      </form>


    </div>

  );

}


export default AdminLogin;