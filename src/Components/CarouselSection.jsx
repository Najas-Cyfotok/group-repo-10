import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const bannerImg = [
  { id: 1, img: "/_Banner1.png" },
  { id: 2, img: "/banner2.png" },
  { id: 3, img: "/Banner3.png" },
  { id: 4, img: "/banner4.png" },
];

const CarouselSection = () => {
  return (
    <section className="flex items-center justify-center h-screen max-md:h-auto">
      <Carousel className="w-full max-md:mt-1 border rounded-lg shadow-lg overflow-hidden">
        <CarouselContent>
          {bannerImg.map((item, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <img
                src={item.img}
                alt={`Slide ${index + 1}`}
                className="w-full object-cover rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 text-white bg-black/50 p-2 rounded-full hover:bg-black transition max-md:hidden" />
        <CarouselNext className="absolute right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black transition max-md:hidden" />
      </Carousel>
    </section>
  );
};

export default CarouselSection;
