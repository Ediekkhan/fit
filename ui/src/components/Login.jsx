import React, { useContext, useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../lib/utils/apiRequest"; //  apiRequest carry the axios method in lib folder
import { AuthContext } from "../context/AuthContext";
// import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const navigate = useNavigate();

  const { updateUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
    setError("");
    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        email,
        password,
      });
      navigate("/UserProfile");
      updateUser(res.data);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-md mt-10">
      <h2 className="text-2xl font-semibold text-center m-4">Login</h2>
      <div className="flex justify-center m-4">
        <button className="bg-red-600 text-white rounded-full p-2 mr-4">
          <FaGoogle size={24} />
        </button>
        <button className="bg-blue-700 text-white rounded-full p-2">
          <FaFacebook size={24} />
        </button>
      </div>
      <div className="text-center mt-4">
        <span className="line"> ------------ or ------------ </span>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block  text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full  px-3 py-2 border rounded-md  focus:border-blue-800"
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md  focus:border-blue-800"
            required
            placeholder="Enter password"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Login
        </button>
        <br /> {error && <span>{error}</span>}
      </form>

      <p className="text-center mt-4">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500 hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default Login;
