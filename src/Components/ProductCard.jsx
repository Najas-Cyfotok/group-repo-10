import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, title, image, price, category, discountPercentage, } = product;
  const indianRupee = Math.round(price * 80);
    // const discountedPrice = Math.round(indianRupee - (indianRupee * discountPercentage) / 100);

  return (
    <Link to={`/view/${id}`} className="block">
      <Card className="w-[300px] shadow-lg hover:shadow-xl transition duration-300">
        <CardHeader>
          <CardTitle className="uppercase text-lg font-bold">{title}</CardTitle>
        </CardHeader>

        <CardContent className="flex justify-center items-center rounded-md">
          <img src={image} alt={title} className="h-40 object-contain rounded-md" />
        </CardContent>

        <CardContent className="text-center">
          <CardDescription className="text-lg font-semibold uppercase">{category}</CardDescription>
          <p className="font-semibold text-2xl md:text-3xl text-green-600">₹ {price}</p>
          <p className="text-gray-600">
            <span className="line-through text-red-500">₹ {indianRupee}</span> ({price}% off)
          </p>
        </CardContent>

        <CardFooter className="flex justify-between px-4 pb-4">
          <Button variant="outline" className="flex items-center gap-2 hover:bg-gray-100">
            <FaShoppingCart /> <span className="max-sm:hidden">Add Cart</span>
          </Button>
          <Button className="text-white bg-pink-600 hover:bg-blue-500 flex items-center gap-2">
            <FaHeart /> <span className="max-sm:hidden">Buy Now</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
