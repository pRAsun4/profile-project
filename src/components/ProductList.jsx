import React, { useEffect, useState } from "react";
import SearchIcon from "../components/img/search.png";
import DownArrow from "../components/img/down-arrow.png";
import { Link, useParams } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
import redHeart from "./img/red-heart.png";
import whiteHeart from "./img/Heart.png";

export default function ProductList() {
  const [openBrand, setOpenBrand] = useState(false);
  const [products, setProducts] = useState();
  const handleBrandOpne = () => {
    setOpenBrand(!openBrand);
  };

  const handleToggleHeart = (item) =>{
    setProducts(prevData => {
      return prevData.map(it => {
        if (it.id === item.id) {
          // If the object is found, add or update the new key-value pair
          if (item.is_m) {
            return { ...it, ['is_m']: !item.is_m };
          }
          return { ...it, ['is_m']: true };
        }
        return it;
      });
    })
  }
  
  const { id } = useParams();

  const productData = async () => {
    try {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/categories/${id}/products`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    productData();
  }, [id]);

  return (
    <>
      <section className="flex flex-col lg:gap-12 sm:gap-6 gap-5 ">
        <div className="container flex justify-center items-center sm:pt-[2rem] pt-6 ">
          <div className="relative  h-auto w-[40rem] flex justify-center items-center ">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-[3.5625rem] bg-white rounded-[0.875rem] px-[1.7125rem] py-[0.625rem] focus:outline-none focus:border-sky-500 focus:ring-1 "
              id="searchInput"
            />
            <img
              src={SearchIcon}
              alt=""
              className="absolute sm:top-[0.625rem] top-auto right-[1.25rem] h-8"
            />
          </div>
        </div>
        <div className="w-full flex relative  border1">
          <div className="side-bar sticky top-0 left-0 h-dvh min-w-[310px] md:flex hidden flex-col lg:ps-[2.5rem] ps-4 overflow-scroll border1">
            <h1 className="text-[2rem] text-left mb-9">Search Results</h1>
            <div className="brand flex flex-col items-start relative border1">
              <div
                className="flex w-full justify-between cursor-pointer pr-4 "
                onClick={handleBrandOpne}
              >
                <h5 className="text-[1.25rem] ">BRAND</h5>
                <img src={DownArrow} alt="" />
              </div>
              {openBrand && (
                <div
                  className={`w-full brand-open absolute top-[1.875rem] left-0 border1 h-10 ${
                    openBrand ? "open" : ""
                  }`}
                ></div>
              )}
            </div>
          </div>
          <div className="main-content w-full grid grid-cols-12 lg:gap-x-8 sm:gap-x-6 lg:gap-y-6 gap-y-7 lg:px-[3.125rem] sm:px-[1.5rem] px-[1.25rem] lg:py-[3rem] py-[2rem]  ">
            {products &&
              products.map((item, id) => (
                <div
                  key={id}
                  className="cards relative lg:col-span-3 sm:col-span-6 md:col-span-4 col-span-12 lg:min-h-[15rem] md:min-h-[10rem] h-full rounded-[4px]  "
                >
                  <img
                    value={id}
                    src={item.is_m ? redHeart : whiteHeart }
                    onClick={()=>handleToggleHeart(item)}
                    alt="heart image"
                    className="absolute top-[.5rem] right-[.5rem] max-w-[2rem] h-8 "
                  />
                  <img src={item.images} className="h-full w-full rounded-[4px] "/>
                  <h4 className="mt-[1rem] ">
                    {item.title.substring(0, 20)}....
                  </h4>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
{
  /* <Swiper
                   
                    spaceBetween={10}
                    
                    autoplay={{
                      delay: 1500,
                      disableOnInteraction: true,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                  >
                    {item.images.map((image, index) =>(
                      <SwiperSlide key={index}>
                        <img src={image} alt={`Product ${id} Image ${index}`} className="max-h-[10rem]"/>
                        
                      </SwiperSlide>
                    ))}
                    
                    
                  </Swiper> */
}
