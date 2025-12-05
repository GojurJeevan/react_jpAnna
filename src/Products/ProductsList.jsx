import axios from "axios";
import { useEffect, useState } from "react";

export const ProductsList = () => {
  let [dataProducts, setDataProducts] = useState([]);
  let [search, setSearch] = useState("");
  let [category, setCategory] = useState("");
  let [categoryList, setCategoryList] = useState([]);
  let [page, setPage] = useState(1);
  let [productButtons, setProductButtons] = useState(0);

  let perPage = 10;

  useEffect(() => {
    async function dataApi() {
      let { data } = await axios.get(
        "https://dummyjson.com/products/category-list"
      );
      setCategoryList(data);
    }
    dataApi();
  }, []);

  useEffect(() => {
    async function fetchApi() {
      let api;
      if (category) {
        api = `https://dummyjson.com/products/category/${category}`;
      } else if (search) {
        api = `https://dummyjson.com/products/search?q=${search}`;
      } else {
        api = `https://dummyjson.com/products?limit=100`;
      }

      let { data } = await axios.get(api);
      let allProducts = data.products || [];
      setProductButtons(allProducts.length);

      let pagination = allProducts.slice((page - 1) * perPage, page * perPage);
      setDataProducts(pagination);
    }
    fetchApi();
  }, [category, search, page]);

  let viewBtn = Math.ceil(productButtons / perPage);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
            setCategory("");
          }}
          className="w-full md:w-1/3 p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <select
          onChange={(e) => {
            setPage(1);
            setCategory(e.target.value);
            setSearch("");
          }}
          className="w-full md:w-1/3 p-2 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="">All Categories</option>
          {categoryList.map((item, i) => (
            <option value={item} key={i}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dataProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h1 className="text-lg font-semibold truncate">{item.title}</h1>
            <p className="text-sm text-gray-600 mt-2 line-clamp-3">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {viewBtn > 0 &&
          Array.from({ length: viewBtn }, (_, i) => i + 1).map((btn) => (
            <button
              className={`px-4 py-2 rounded-lg border shadow-sm ${
                page === btn
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-100"
              }`}
              onClick={() => setPage(btn)}
            >
              {btn}
            </button>
          ))}
      </div>
    </div>
  );
};
