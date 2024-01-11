import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import ListItem from "./ListItem";
import Item from "./Item";
const Navbar = () => {
  return (
    <section className="bg-black">
      <Container>
        <Flex className="flex justify-between items-center py-[40px]">
          {/* Logo */}
          <div>
            <h2 className="text-[20px] lg:text-[40px] font-bold text-[#E2941F]">
              Travelta
            </h2>
          </div>
          {/* Menubar */}
          <div className="hidden lg:block">
            <ListItem className="flex items-center justify-between gap-x-[40px]">
              <Item
                itemName="Home"
                className="font-inter font-semibold text-base text-white"
              />
              <Item
                itemName="About Us"
                className="font-inter font-semibold text-base text-white"
              />
              <Item
                itemName="Destination"
                className=" font-inter font-semibold text-base text-white"
              />
              <Item
                itemName="Packages"
                className="font-inter font-semibold text-base text-white"
              />
              <Item
                itemName="pages"
                className="font-inter font-semibold text-base text-white"
              />
              <Item
                itemName="Blog & News"
                className="font-inter font-semibold text-base text-white"
              />
            </ListItem>
          </div>
          {/* Searchbar */}
          <div></div>
          {/* Mobile Menu Bar */}
          <div></div>
        </Flex>
      </Container>
    </section>
  );
};

export default Navbar;
