import axios from "axios";
import { useEffect, useMemo, useState, useCallback } from "react";
import Sidebar from "../sidebar/SideBar";

export const UserDetails = () => {
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const perPage = 15;

  useEffect(() => {
    async function dataApi() {
      const { data } = await axios.get("https://dummyjson.com/users?limit=120");
      setUserData(data.users);
    }
    dataApi();
  }, []);

  const filteredProducts = useMemo(() => {
    return userData.filter((person) =>
      person.firstName.toLowerCase().includes(search.toLowerCase())
    );
  }, [userData, search]);

  const totalPages = Math.ceil(filteredProducts.length / perPage);

  const pagination = filteredProducts.slice(
    (page - 1) * perPage,
    page * perPage
  );


  return (
    <div className="flex">

      <div className="p-6 bg-gray-100 min-h-screen flex-1">
        <h1 className="text-3xl font-bold mb-5 text-gray-800">User Details</h1>

        <input
          type="text"
          placeholder="firstName"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 px-4 py-3 rounded-lg w-80 mb-6
                     shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
          <table className="w-full text-left border border-gray-300 rounded-lg">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-5 py-3 border-b font-semibold text-gray-700">
                  S.No
                </th>
                <th className="px-5 py-3 border-b font-semibold text-gray-700">
                  Name
                </th>
                <th className="px-5 py-3 border-b font-semibold text-gray-700">
                  Email
                </th>
                <th className="px-5 py-3 border-b font-semibold text-gray-700">
                  Mobile
                </th>
                <th className="px-5 py-3 border-b font-semibold text-gray-700">
                  Gender
                </th>
                <th className="px-5 py-3 border-b font-semibold text-gray-700 text-center">
                  Edit
                </th>
                <th className="px-5 py-3 border-b font-semibold text-gray-700 text-center">
                  Delete
                </th>
              </tr>
            </thead>

            <tbody>
              {pagination.map((person) => (
                <tr
                  key={person.id}
                  className="hover:bg-gray-100 transition-all duration-200"
                >
                  <td className="px-5 py-3 border-b">{person.id}</td>
                  <td className="px-5 py-3 border-b">{person.firstName}</td>
                  <td className="px-5 py-3 border-b">{person.email}</td>
                  <td className="px-5 py-3 border-b">{person.phone}</td>
                  <td className="px-5 py-3 border-b capitalize">
                    {person.gender}
                  </td>

                  <td className="px-5 py-3 border-b text-center">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                      onClick={<Sidebar/>} 
                    >
                      Edit
                    </button>
                  </td>

                  <td className="px-5 py-3 border-b text-center">
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 rounded-lg border 
            ${
              page === i + 1
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700"
            }
            hover:bg-blue-500 hover:text-white transition`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
