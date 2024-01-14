import React from "react";

const Banner = ({ className, style, children }) => {
  return (
    <section className={className} style={style}>
      {children}
    </section>
  );
};

export default Banner;
