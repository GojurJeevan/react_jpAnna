import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductsList() {
  const [data, setData] = useState([]);
  const apiEndPoint = axios.get("https://dummyjson.com/products");

  useEffect(() => {
    async function dataP() {
      let { data } = await apiEndPoint;
      setData(data.products);
    }
    dataP();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">
        Products
      </h1>

      {data.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-all duration-200"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              <p classnName="text-gray-600 text-sm mb-3">
                {item.description.slice(0, 80)}...
              </p>

              <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
