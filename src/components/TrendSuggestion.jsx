import React, { useEffect, useState } from "react";
import Image from "./img/Home.jpg";

export default function TrendSuggestion() {
  const CatagoryImages = [
    {
      id: "0",
      imageUrl: "./img/freg.jpg",
    },
    {
      id: "1",
      imageUrl: "./img/home-decore.jpg",
    },
    {
      id: "2",
      imageUrl: "./img/grosery.jpg",
    },
    {
      id: "3",
      imageUrl: "./img/laptop.jpg",
    },
    {
      id: "4",
      imageUrl: "./img/phone.jpg",
    },
    {
      id: "5",
      imageUrl: "./img/skin.jpg",
    },
  ];
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCatagories(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    // console.log(catagories);
  },[]);

  useEffect(()=>{
    console.log(catagories);
  },[catagories])

  return (
    <>
      <div className="w-full flex flex-col lg:gap-4 gap-2 h-auto bg-white px-[1.25rem] lg:px-[2rem] py-[1.5rem] rounded-[.3rem] ">
        <h2 className="text-[#000000] text-[2rem] ">Latest Trend</h2>
        <div className="w-full h-auto grid grid-cols-12 gap-4">
          {/* <div className="w-full h-auto lg:col-span-3 sm:col-span-6 md:col-span-4 col-span-12  border1">
            <div className="w-full h-auto flex flex-col ">
              <img src={Image} alt="" className="" />;
              <h4 className="text-[1.5rem] text-center">hellow</h4>
            </div>
          </div> */}
          
          {catagories &&
            catagories.map((catagory, index) => {
              <div
                key={index}
                className="w-full h-auto lg:col-span-3 sm:col-span-6 md:col-span-4 col-span-12  border1"
              >
                <h4>{catagory} </h4>
                {/* <div className="w-full h-auto flex flex-col ">
                  {CatagoryImages.map((image, id) => {
                    <img key={id} src={image.imageUrl} alt="" className="" />;
                  })}
                  <h4 className="text-[1.5rem] text-center">{catagory}</h4>
                </div> */}
              </div>;
            })}
        </div>
      </div>
    </>
  );
}
