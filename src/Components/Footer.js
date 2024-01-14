import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <section className="bg-green-500">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-[60px] pt-[140px] pb-[60px]">
          <div className="bg-red-500">hjbk</div>
          <div className="bg-white">hjbk</div>
          <div className="bg-blue-500">hjbk</div>
          <div className="bg-yellow-500">hjbk</div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
