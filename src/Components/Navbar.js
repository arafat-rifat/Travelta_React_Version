import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import ListItem from "./ListItem";
import Item from "./Item";
import { HiMiniBars3 } from "react-icons/hi2";
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
          {/* Search Option */}
          <div className="flex justify-between items-center gap-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] h-[24px] hidden lg:block"
            >
              <g id="Vector">
                <g id="Vector_2">
                  <path
                    d="M10.3219 20.6419C8.28064 20.6419 6.28519 20.0366 4.58792 18.9025C2.89065 17.7684 1.56779 16.1565 0.786617 14.2706C0.0054484 12.3847 -0.198941 10.3095 0.199295 8.30744C0.597532 6.30537 1.58051 4.46635 3.02392 3.02294C4.46733 1.57953 6.30635 0.596555 8.30842 0.198319C10.3105 -0.199917 12.3857 0.00447184 14.2716 0.78564C16.1575 1.56681 17.7694 2.88967 18.9035 4.58694C20.0376 6.28421 20.6429 8.27967 20.6429 10.321C20.6429 11.6763 20.3759 13.0184 19.8573 14.2706C19.3386 15.5228 18.5783 16.6606 17.6199 17.619C16.6616 18.5774 15.5238 19.3376 14.2716 19.8563C13.0194 20.375 11.6773 20.6419 10.3219 20.6419ZM10.3219 2.06968C8.69541 2.06968 7.10541 2.552 5.753 3.45565C4.40059 4.3593 3.34652 5.64369 2.72407 7.14641C2.10163 8.64912 1.93877 10.3027 2.25609 11.8979C2.57341 13.4932 3.35665 14.9586 4.50678 16.1087C5.65691 17.2588 7.12226 18.0421 8.71754 18.3594C10.3128 18.6767 11.9664 18.5139 13.4691 17.8914C14.9718 17.269 16.2562 16.2149 17.1598 14.8625C18.0635 13.5101 18.5458 11.9201 18.5458 10.2935C18.5458 8.11244 17.6794 6.02067 16.1371 4.47839C14.5948 2.93612 12.503 2.06968 10.3219 2.06968Z"
                    fill="white"
                  />
                  <path
                    d="M22.973 24C22.8379 24.0006 22.7041 23.9743 22.5793 23.9225C22.4546 23.8707 22.3414 23.7945 22.2465 23.6984L16.5858 18.0377C16.4042 17.8428 16.3053 17.5851 16.31 17.3188C16.3147 17.0524 16.4226 16.7983 16.611 16.61C16.7993 16.4216 17.0534 16.3138 17.3197 16.3091C17.586 16.3044 17.8438 16.4032 18.0387 16.5848L23.6994 22.2456C23.8919 22.4383 24.0001 22.6996 24.0001 22.972C24.0001 23.2444 23.8919 23.5057 23.6994 23.6984C23.6045 23.7945 23.4914 23.8707 23.3666 23.9225C23.2419 23.9743 23.108 24.0006 22.973 24Z"
                    fill="white"
                  />
                </g>
              </g>
            </svg>

            <button className="flex justify-between items-center px-4 py-2 border-[0.5px] border-solid border-[#2B2B2B] bg-[#1B1B1B] rounded-md">
              <p className="text-base font-semibold font-inter text-white">
                USD
              </p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Frame 1000008620">
                  <path
                    id="Polygon 1"
                    d="M13.2983 13.8165C13.4127 13.9206 13.5874 13.9206 13.7019 13.8165L18.4259 9.52198C18.6288 9.33753 18.4983 9 18.2241 9H8.77604C8.50183 9 8.37134 9.33753 8.57424 9.52198L13.2983 13.8165Z"
                    fill="white"
                  />
                </g>
              </svg>
            </button>

            <button className="flex justify-between items-center px-4 py-2 gap-1 border border-solid border-[#2B2B2B] bg-[#1B1B1B] rounded-md">
              <p className="text-base font-semibold font-inter text-white">
                Eng
              </p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Frame 1000008620">
                  <path
                    id="Polygon 1"
                    d="M13.2983 13.8165C13.4127 13.9206 13.5874 13.9206 13.7019 13.8165L18.4259 9.52198C18.6288 9.33753 18.4983 9 18.2241 9H8.77604C8.50183 9 8.37134 9.33753 8.57424 9.52198L13.2983 13.8165Z"
                    fill="white"
                  />
                </g>
              </svg>
            </button>
          </div>
          {/* Mobile Menu Bar */}
          <div className="text-white font-inter font-semibold text-2xl block lg:hidden">
            <HiMiniBars3 />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Navbar;
