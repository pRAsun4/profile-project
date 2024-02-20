import React, { useEffect, useState } from "react";
import Image from "./img/Home.jpg";
import Freg from "./img/freg.jpg";
import Grosery from "./img/grosery.jpg";
import HomeDecore from "./img/home-decore.jpg";
import Laptop from "./img/laptop.jpg";
import Phone from "./img/phone.jpg";
import Skin from "./img/skin.jpg";

export default function TrendSuggestion() {
  // const CatagoryImages = [
  //   Freg, Grosery, HomeDecore, Laptop, Phone, Skin
  // ];
  const [catagories, setCatagories] = useState('');
  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCatagories(data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    
  };

  useEffect(() => {
    fetchData();
    // console.log(catagories);
  }, []);

  return (
    <>
      <div className="w-full flex flex-col lg:gap-4 gap-2 h-auto bg-white px-[1.25rem] lg:px-[2rem] py-[1.5rem] rounded-[.3rem] ">
        <h2 className="text-[#000000] text-[2rem] ">Latest Trend</h2>
        <div className="w-full h-auto grid grid-cols-12 gap-4">
          {catagories &&
            catagories.slice(0, 6).map((item, id) => {
              return (
                <div
                  key={id}
                  className="w-full h-auto lg:col-span-2 sm:col-span-6 md:col-span-4 col-span-12  border1"
                >
                  <div className="w-full h-auto flex flex-col ">
                    <img src={item.thumbnail} alt="" />
                    <h4 className="text-[1.5rem] text-center">{item.category}</h4>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
