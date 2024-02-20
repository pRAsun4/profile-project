import { useState } from "react";
import "../components/Style.css";
import BackgroundImg from "../components/img/Home.jpg";
import SearchLogo from "../components/img/search.png";
import TrendSuggestion from "./TrendSuggestion";

function LandingPage() {
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen(!open);
    console.log("hellow");
  };

  return (
    <>
      <section
        className="landing-section flex  justify-center w-full min-h-dvh bg-no-repeat bg-cover overflow-scroll sm:overflow-auto scroll-smooth "
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundPosition: "center center",
        }}
      >
        <div className="search flex flex-col lg:gap-6 gap-4  container mx-auto items-center h-fit mt-8 ">
          <div className="lg:max-w-[57.2rem] w-full h-auto relative">
            <input
              type="text"
              onClick={handleChange}
              placeholder="Search"
              className="sticky sm:relative w-full h-[3.2rem] px-8 lg:px-[2.5rem] py-4 lg:py-[1.25rem] bg-[#fff] rounded-[0.6rem] focus:outline-none"
            />
            <img
              src={SearchLogo}
              alt=""
              className="absolute right-[2.5rem] top-[0.75rem] h-[1.5rem] object-contain"
            />
          </div>
          {open && (
            <TrendSuggestion/>
          )}
        </div>
      </section>
    </>
  );
}

export default LandingPage;
