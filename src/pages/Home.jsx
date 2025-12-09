import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col space-y-6">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

        <nav className="flex flex-col space-y-3">
          <Link
            to="/home"
            className="px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Home
          </Link>

          <Link
            to="/product"
            className="px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Products
          </Link>

          <Link
            to="/userdetails"
            className="px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            User Details
          </Link>

          <Link
            to="/login"
            className="px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Sign Up
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to the Dashboard
        </h1>

        <p className="text-lg text-gray-700 max-w-2xl">
          This is your main homepage. From here, you can navigate to different
          sections like Products, User Details, Login, and Sign Up.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800">
              Manage Products
            </h3>
            <p className="text-gray-600 mt-2">
              View, filter, and search through product listings easily.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800">
              View Users
            </h3>
            <p className="text-gray-600 mt-2">
              Check user details fetched from the API with pagination.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800">
              Authentication
            </h3>
            <p className="text-gray-600 mt-2">
              Access login and signup pages with regex-based validation.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
