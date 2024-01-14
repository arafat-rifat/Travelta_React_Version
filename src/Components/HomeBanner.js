import React from "react";
import Container from "./Container";
import CustomButton from "./CustomButton";

const HomeBanner = () => {
  return (
    <section
      className="bg-cover bg-center h-screen relative"
      style={{ backgroundImage: "url('/assets/HomeBanner.jpg')" }}
    >
      <div class="bg-gradient-to-r from-[#00000082] to-[#ffffff0d] via-[#00000061] h-[100%] w-[100%] absolute"></div>
      <Container>
        <div className="flex flex-col justify-start py-[40px] xl:py-[120px]">
          <h1 className="text-white text-center xl:text-start text-[35px] xl:text-[80px] font-Messiri font-bold z-10">
            Discover, Stay, Enjoy,
            <br /> Your World, Your Way
          </h1>
          <p className="font-inter font-normal text-center xl:text-start text-[12px] xl:text-[24px] text-white z-10">
            Unlock Extraordinary Adventures and Unparalleled Comfort with
            <br />
            travelta. Discover the world's wonders through curated journeys, and
            <br />
            indulge in exceptional stays that redefine relaxation.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default HomeBanner;
