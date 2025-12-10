import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "../Loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const ProductsData = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [review, setReview] = useState([]);

  useEffect(() => {
    async function productDetails() {
      const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(data);
      setSelectedImage(data.thumbnail);
    }
    productDetails();
  }, [id]);

  useEffect(() => {
    async function productReview() {
      const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
      setReview(data.reviews);
    }
    productReview();
  }, [id]);

  if (!product) return <Loader />;

  return (
    <div className="px-4 py-6 bg-gray-100 min-h-screen flex flex-col lg:flex-row gap-8 justify-center">

      {/* LEFT IMAGE + ACTION BUTTONS */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full lg:max-w-md xl:max-w-lg sticky top-20 h-fitp-4"
      >
        {/* Big Image */}
        <img
          src={selectedImage}
          alt="Product"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] xl:h-[500px] object-contain border rounded border-gray-200"
        />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="bg-amber-500 w-full py-3 text-white rounded hover:bg-amber-600">
            Add to Cart
          </button>
          <button className="bg-red-500 w-full py-3 text-white rounded hover:bg-red-600">
            Buy Now
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-2xl border border-gray-200 p-5 sm:p-8"
      >
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2">
          {product.title}
        </h1>

        <p className="text-gray-500 text-sm sm:text-base">
          Brand:{" "}
          <span className="font-semibold text-black">{product.brand}</span> —{" "}
          {product.category}
        </p>

        <div className="flex flex-wrap items-center text-sm gap-2 mt-2">
          <span className="bg-green-600 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
            <FontAwesomeIcon icon={faStar} /> {product.rating}
          </span>
          <span className="text-gray-500 text-xs sm:text-sm">
            (2,340 ratings & 320 reviews)
          </span>
        </div>

        <hr className="my-4" />

        <div className="text-2xl sm:text-3xl font-semibold">
          ${product.price}
        </div>
        <div className="text-green-600 font-medium text-sm sm:text-base">
          {product.discountPercentage}% OFF
        </div>

        <hr className="my-4" />

        <p className="text-gray-700 mb-2 text-sm sm:text-base">
          <FontAwesomeIcon icon={faCircleCheck} className="text-green-600" /> In
          Stock: {product.stock}
        </p>

        <h3 className="text-lg font-semibold mt-4">Description</h3>
        <p className="text-gray-700 mt-2 text-sm sm:text-base">
          {product.description}
        </p>

        <h3 className="text-lg font-semibold mt-6">Highlights</h3>
        <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-1 text-sm sm:text-base">
          <li>High quality product</li>
          <li>Best in the segment</li>
          <li>Premium build & durability</li>
          <li>Available in multiple colors</li>
        </ul>

        {/* SHIPPING */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded text-sm sm:text-base">
          <p className="font-semibold">Shipping</p>
          <p className="text-gray-700">{product.shippingInformation}</p>
        </div>

        {/* WARRANTY */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded text-sm sm:text-base">
          <p className="font-semibold">Warranty</p>
          <p className="text-gray-700">{product.warrantyInformation}</p>
        </div>

        {/* REVIEWS */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-3">Reviews</h3>

          {review.length === 0 && (
            <p className="text-gray-500">No reviews available.</p>
          )}

          {review.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-lg shadow-sm border mb-4 text-sm sm:text-base"
            >
              <div className="flex items-center gap-2">
                <span className="bg-green-600 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                  <FontAwesomeIcon icon={faStar} /> {item.rating}
                </span>
                <p className="text-gray-700 font-medium">
                  {item.reviewerName}
                </p>
              </div>

              <p className="text-gray-600 mt-2">{item.comment}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProductsData;
