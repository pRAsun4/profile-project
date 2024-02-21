import React, { useEffect, useState } from "react";
import Image from "./img/Home.jpg";
import Freg from "./img/freg.jpg";
import Grosery from "./img/grosery.jpg";
import HomeDecore from "./img/home-decore.jpg";
import Laptop from "./img/laptop.jpg";
import Phone from "./img/phone.jpg";
import Skin from "./img/skin.jpg";
import Loader from "./Loader";
import { Link } from "react-router-dom";

export default function TrendSuggestion() {
  // const CatagoryImages = [
  //   Freg, Grosery, HomeDecore, Laptop, Phone, Skin
  // ];
  const [catagories, setCatagories] = useState([]);
  const [loader, setLoader] = useState(false);

  // console.log(catagories);
  const fetchData = async () => {
    setLoader(true);
    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/categories"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCatagories(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoader(false);
  };

  useEffect(() => {
    fetchData();
    // console.log(catagories);
  }, []);

  return (
    <>
      <div className="w-full flex flex-col lg:gap-4 gap-2 h-auto bg-white px-[1.25rem] lg:px-[2rem] py-[1.7rem] rounded-[.3rem] ">
        <h2 className="text-[#000000] text-[2rem] ">Latest Trend</h2>
        <div className="w-full h-auto grid grid-cols-12 gap-4">
          <div className="hidden lg:block col-span-1"></div>
          {loader ? (
            <Loader />
          ) : (
            catagories &&
            catagories.slice(0, 5).map((item, id) => {
              return (
                <Link
                  className="w-full h-auto lg:col-span-2 sm:col-span-6 md:col-span-4 col-span-12  border1"
                  key={id}
                  to={`/product-page/${id +1}/products`}
                >
                  <div className="w-full h-auto flex flex-col ">
                    <img src={item.image} alt="" />
                    <h4 className="text-[1.3rem] text-center">{item.name}</h4>
                  </div>
                </Link>
              );
            })
          )}
          <div className="hidden lg:block col-span-1 "></div>
        </div>
      </div>
    </>
  );
}
