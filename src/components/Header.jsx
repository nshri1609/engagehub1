import { useLocation } from "react-router-dom";
import { useState } from "react";
import { engagehub } from "../assets";
import { navigation, byIndustryFeatures, benefits } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { enablePageScroll } from "scroll-lock";
import Dropdown from "react-multilevel-dropdown";

const Header = () => {
  const { hash: pathname } = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-gray-200-90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-gray-200" : "bg-gray-200/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7 xl:px-10 max-lg:py-4">
        <a
          className="flex items-center justify-between w-[12rem] xl:mr-8"
          href="#hero"
        >
          <img src={engagehub} alt="brainwave" width={80} height={80} />
          <p className="text-lg text-n-8">ENGAGEHUB</p>
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-gray-200 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center mx-auto lg:flex-row">
            {navigation.map((item) =>
              item.title === "Solutions" ? (
                <div className="mx-4" key={item.id}>
                  <div className="md:block hidden">
                    <Dropdown
                      key={item.id}
                      title={
                        <span className="flex items-center text-2xl lg:text-[12px] font-code uppercase text-n-8 transition-colors hover:text-color-1">
                          {item.title}
                          <span className="ml-2">▼</span>
                        </span>
                      }
                      onOptionClick={handleClick}
                      className="font-code text-2xl my-6 uppercase transition-colors hover:text-color-1 bg-gray-200"
                    >
                      <Dropdown.Item className="py-2 px-4 text-n-8 font-code text-1xl uppercase transition-colors hover:text-color-1">
                        BY INDUSTRY
                        <Dropdown.Submenu
                          position="right"
                          className="max-h-120 overflow-y-auto w-[24rem] flex-initial text-n-8 break-words overflow-hidden"
                        >
                          {byIndustryFeatures.map((item) => (
                            <Dropdown.Item
                              key={item.id}
                              className="py-2 px-4 text-n-8 break-words overflow-visible"
                            >
                              {item.title}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Submenu>
                      </Dropdown.Item>
                      <Dropdown.Item className="py-2 px-4 font-code text-1xl uppercase transition-colors hover:text-color-1 text-n-8">
                        By Features
                        <Dropdown.Submenu
                          position="right"
                          className="max-h-100 overflow-y-auto w-[24rem] flex-initial text-n-8 break-words overflow-hidden"
                        >
                          {benefits.map((item) => (
                            <Dropdown.Item
                              key={item.id}
                              className="py-2 px-4 text-n-8 break-words overflow-visible"
                            >
                              {item.title}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Submenu>
                      </Dropdown.Item>
                    </Dropdown>
                  </div>
                  <div className="block md:hidden my-3">
                    <Dropdown
                      key={item.id}
                      title={
                        <span className="flex items-center text-2xl  font-code uppercase text-n-8 transition-colors hover:text-color-1">
                          {item.title}
                          <span className="ml-1">▼</span>
                        </span>
                      }
                      onOptionClick={handleClick}
                      className="font-code text-2xl uppercase transition-colors hover:text-color-1 bg-gray-200"
                    >
                      <Dropdown.Item className="py-2 px-4 text-n-8 font-code text-1xl uppercase transition-colors hover:text-color-1">
                        BY INDUSTRY
                        <Dropdown.Submenu
                          position="bottom"
                          className="max-h-60 overflow-y-auto overflow-x-auto w-[24rem] flex-initial text-n-8 break-words overflow-hidden"
                        >
                          {byIndustryFeatures.map((item) => (
                            <Dropdown.Item
                              key={item.id}
                              className="py-2 px-4 text-n-8 break-words overflow-visible"
                            >
                              {item.title}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Submenu>
                      </Dropdown.Item>
                      <Dropdown.Item className="py-2 px-4 font-code text-1xl uppercase transition-colors hover:text-color-1 text-n-8">
                        By Features
                        <Dropdown.Submenu
                          position="bottom"
                          className="max-h-60 overflow-y-auto overflow-x-auto w-[15rem] flex-initial text-n-8 break-words overflow-hidden"
                        >
                          {benefits.map((item) => (
                            <Dropdown.Item
                              key={item.id}
                              className="py-2 px-4 text-n-8 break-words"
                            >
                              {item.title}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Submenu>
                      </Dropdown.Item>
                    </Dropdown>
                  </div>
                </div>
              ) : (
                <a
                  key={item.id}
                  href={item.url}
                  className={`block relative font-code text-2xl uppercase text-n-8 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.url === pathname ? "z-2 lg:text-n-8" : "lg:text-n-8/50"
                  } lg:leading-5 lg:hover:text-n-8`}
                  onClick={handleClick}
                >
                  {item.title}
                </a>
              )
            )}
          </div>

          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-8/50 transition-colors hover:text-n-8 lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
