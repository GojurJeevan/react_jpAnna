import React, { Suspense } from "react";
import Loader from "../Loader/Loader";

let ProductsData = React.lazy(() => import("../Products/ProductsList"));

export const Product = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <ProductsData />
      </Suspense>
    </>
  );
};
