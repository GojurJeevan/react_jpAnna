import React, { useEffect, useState } from "react";
import axios from "axios";
import PageNumbers from "../regex/PageNumbers";

const PER_PAGE = 10;

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await axios.get("https://dummyjson.com/products/category-list");
        setCategories(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        let url = "";

        if (searchQuery.trim()) {
          url = `https://dummyjson.com/products/search?q=${searchQuery.trim()}`;
        } else if (selectedCategory !== "all") {
          url = `https://dummyjson.com/products/category/${selectedCategory}`;
        } else {
          url = "https://dummyjson.com/products";
        }

        const res = await axios.get(url);
        setProducts(res.data.products || []);
        setTotalPages(Math.ceil((res.data.products?.length || 0) / PER_PAGE));
      } catch (err) {
        console.error(err);
        setProducts([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
    setPage(1);
  }, [searchQuery, selectedCategory]);

  const paginationProducts = products.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">Products</h1>

      <div className="max-w-4xl mx-auto mb-8 flex flex-col sm:flex-row gap-4 sm:items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products by name..."
          className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All categories</option>
          {categories.map((cat) => (
            <option key={cat.slug || cat} value={cat.slug || cat}>
              {cat.name || cat}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className="text-center text-gray-600 text-lg">Loading...</p>
      ) : paginationProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {paginationProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{item.description.slice(0, 100)}...</p>
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                View Details
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg">No products found.</p>
      )}

      <PageNumbers totalPages={totalPages} currentPage={page} onPageChange={setPage} />
    </div>
  );
}
