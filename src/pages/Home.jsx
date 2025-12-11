import React from "react";
import { Link } from "react-router-dom";
import { Banner } from "../banner/Banner";

const Home = () => {
  return (
<>
<Banner />
<div className="flex min-h-screen bg-gray-100">

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
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800">
              Authentication
            </h3>
            <p className="text-gray-600 mt-2">
              Access login and signup pages with regex-based validation.
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
  </>
  );
    
};

export default Home;
