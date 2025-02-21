import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const categoryMenuList = ["All", "electronics", "jewelery", "men's clothing", "women's clothing"];

const AllProducts = () => {
  const [menu, setMenu] = useState("All");
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data); 
      setProducts(data); 
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="my-5">
 
      <div className="py-5 flex flex-col items-center justify-center">
        <ul className="flex items-center gap-x-5 text-xl">
          {categoryMenuList.map((item, index) => (
            <li
              key={index} 
              className={`bg-black rounded text-pink-500 cursor-pointer px-7 py-3 ${
                menu === item ? " text-yellow-500   " : ""
              }`}
              onClick={() => setMenu(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 justify-items-center">
        {products
          .filter((item) => menu === "All" || item.category === menu)
          .map((item) => (
            <ProductCard key={item.id} product={item} /> 
          ))}
      </div>
    </section>
  );
};

export default AllProducts;
