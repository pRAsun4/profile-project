import React, { useEffect, useState } from "react";

import Loader from "./Loader";
import { Link } from "react-router-dom";

export default function TrendSuggestion() {
  const popularSuggestion = [
    {
      id: 0,
      name: "Striped shirt dress"
    },
    {
      id: 1,
      name: "Satin shirts"
    },
    {
      id: 2,
      name: "Denim jumpsuit"
    },
    {
      id: 3,
      name: "Leather dresses"
    },
    {
      id: 4,
      name: "Solid tshirts"
    }
    
  ]
  const [catagories, setCatagories] = useState([]);
  const [loader, setLoader] = useState(true);
  const [popularSuggestions, setPopularSuggestions] = useState(popularSuggestion);

  // console.log(popularSuggestions);
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
    const interval = setInterval(popularSuggestion, 3000);
    // return clearInterval(interval)

    console.log(interval);
  }, []);

  return (
    <>
      <div className="w-full flex flex-col lg:gap-4 gap-2 h-auto bg-white px-[1.25rem] lg:px-[2rem] py-[1.7rem] rounded-[.3rem] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
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
                  className="w-full h-auto lg:col-span-2 sm:col-span-6 md:col-span-4 col-span-12 rounded-[0.25rem] "
                  key={id}
                  to={`/product-page/${id +1}/products`}
                >
                  <div className="w-full h-auto flex flex-col ">
                    <img src={item.image} alt="" className="rounded-[0.25rem] sm:mb-[0.625rem] mb-[0.425rem] "/>
                    <p className="text-[1.3rem] text-left">{item.name}</p>
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
