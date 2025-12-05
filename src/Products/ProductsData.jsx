import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { motion } from "framer-motion";

const ProductsData = () => {
  let { id } = useParams();
  const [product, setProducts] = useState();

  useEffect(() => {
    async function productDetails() {
      let { data } = await axios.get(`https://dummyjson.com/products/${id}`);
      setProducts(data);
    }
    productDetails();
  }, [id]);

  if (!product) return <Loader />;

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white p-8 shadow-2xl rounded-3xl max-w-3xl w-full border border-gray-200"
      >
        {/* Product Image */}
        <div className="w-full rounded-2xl overflow-hidden shadow-md">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-72 object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 mt-6 mb-3 tracking-wide">
          {product.title}
        </h1>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-lg mb-6">
          {product.description}
        </p>

        {/* Price & Rating */}
        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border">
          <p className="text-2xl font-bold text-blue-600">
            ${product.price}
          </p>
          <p className="text-yellow-500 font-semibold text-lg">
            ⭐ {product.rating}
          </p>
        </div>

        {/* Category */}
        <div className="mt-6">
          <h2 classname="text-xl font-semibold text-gray-800">Category:</h2>
          <p className="text-gray-600 text-lg mt-1 capitalize">
            {product.category}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductsData;
