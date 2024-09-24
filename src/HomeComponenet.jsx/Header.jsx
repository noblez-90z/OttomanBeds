import { faAddressBook, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faSearch,
  faLocationDot,
  faPhone,
  faEnvelope,
  faCartShopping,
  faBars,
  faPlus,
  faBed,
  faCouch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ottoman.avif.png";
import { useSelector } from "react-redux";
import { selectCart } from "../MainShopping/cartSlice";
import { selectWishlist } from "../MainShopping/wishlistSlice";

const Header = () => {
  const [ads, setAds] = useState(false);
  const handleAds = () => {
    setAds(!ads);
  };

  const [products, setProduct] = useState(false);

  const handleMouseEnterProduct = () => {
    setProduct(true);
  };
  const handleMouseLeaveProduct = () => {
    setProduct(false);
  };

  const [bed, setBed] = useState(false);
  const handleMouseEnter = () => {
    setBed(true);
  };
  const handleMouseLeave = () => {
    setBed(false);
  };

  const [headboard, setHeadboard] = useState(false);

  const handleMouseEnterHeadboard = () => {
    setHeadboard(true);
  };
  const handleMouseLeaveHeadboard = () => {
    setHeadboard(false);
  };
  const [mattresses, setMattresses] = useState(false);

  const handleMouseEnterMattresses = () => {
    setMattresses(true);
  };
  const handleMouseLeaveMattresses = () => {
    setMattresses(false);
  };
  const [faq, setFaq] = useState(false);

  const handleMouseEnterFaq = () => {
    setFaq(true);
  };
  const handleMouseLeaveFaq = () => {
    setFaq(false);
  };
  const [SideNavBar, setSideNavBar] = useState(false);
  const handleSideNavBar = () => {
    setSideNavBar(!SideNavBar);
  };
  const [category, setCategory] = useState(false);
  const catDisplay = () => {
    setCategory(!category);
  };
  const advertise = [
    { deal: "i appreciate good work, my expirences has been great," },
    { deal: "special thanks for the effictive service," },
    { deal: "i never knew it was this easy to pay for light bill," },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === advertise.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change item set every 3 seconds

    return () => clearInterval(interval);
  }, [advertise.length]);

  const cartItems = useSelector(selectCart);
  const wishlistItems = useSelector(selectWishlist);
  return (
    <div className=" capitalize">
      <div
        className={`block h-fit  bg-[#14324b] text-white ${
          ads ? "hidden" : "block"
        }`}
      >
        <p
          className="flex items-center gap-2 justify-end px-2 text-left  cursor-pointer"
          onClick={handleAds}
        >
          <FontAwesomeIcon icon={faXmark} />
          close
        </p>
        {advertise.map((ad, index) => (
          <div
            key={index}
            className={`text-center px-2 ${
              index === currentIndex ? "block" : "hidden"
            }`}
          >
            <p>{ad.deal} </p>
          </div>
        ))}
      </div>
      <div className=" block md:flex justify-between items-center text-center py-2 px-3 bg-[#f4f6f9] text-[#bb9369]">
        <div className="block md:flex gap-3">
          <p>
            <FontAwesomeIcon icon={faPhone} className="pr-2" />
            <Link>09022108521</Link>
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="pr-2" />
            <Link>info@ottoman-beds.co.uk</Link>
          </p>
        </div>
        <div className="">
          <p>
            Summer sale discount off <span className="text-black">50%!</span>
            <Link className="text-black"> Shop Now</Link>
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faLocationDot} />
          <p>location</p>
        </div>
      </div>
      <div className=" flex justify-between md:justify-end items-center gap-20  py-2 px-3">
        <div className="md:hidden">
          <FontAwesomeIcon icon={faBars} onClick={handleSideNavBar} />
        </div>
        <div className=" w-full md:w-[60%] flex justify-between items-center bg-[#ffffff]">
          <div className="">
            <img src={logo} alt="" className=" object-center  object-cover" />
          </div>
          <div className="flex ">
            <div className="h-12 px-2">
              <FontAwesomeIcon
                icon={faSearch}
                size="xl"
                className=" mt-4 hover:bg-scale-125 transition-all duration-500  cursor-pointer hover:text-[#bb9369]"
              />
            </div>
            <div className="hidden md:block h-12 px-2  relative">
              <Link to="/Wishlist">
                <FontAwesomeIcon
                  icon={faHeart}
                  size="xl"
                  className=" mt-4 hover:scale-125 transition-all duration-500  cursor-pointer hover:text-[#bb9369]"
                />
                <span className=" px-1  absolute top-0  right-0 rounded-full  bg-black text-white   ">
                  {wishlistItems.length}
                </span>
              </Link>
            </div>
            <div className="h-12 px-2   relative">
              <Link to="/Cart">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="xl"
                  className="mt-4 hover:scale-125 transition-all duration-500  cursor-pointer hover:text-[#bb9369]"
                />
                <span className=" px-1  absolute top-0  right-0 rounded-full  bg-black text-white   ">
                  {cartItems.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block h-14  bg-[#14324b] text-white">
        <div className="mx-auto py-3">
          <nav>
            <div className="flex gap-4 justify-center list-none  ">
              <li>
                <Link to="/Shop">shop</Link>
              </li>
              <li
                onMouseEnter={handleMouseEnterProduct}
                onMouseLeave={handleMouseLeaveProduct}
                className="block w-16 z-20 "
              >
                <Link to="">products</Link>
                {products && (
                  <nav>
                    <div className="bg-white text-[#333] px-6 py-2 mt-5 mr-28 w-52">
                      <li className="py-2">
                        <Link to="/OttoBeds">ottoman beds</Link>
                      </li>
                      <li className="py-2">
                        <Link to="/headboard">headboards</Link>
                      </li>
                      <li className="py-2">
                        <Link to="/Bed">mattresses</Link>
                      </li>
                      <li className="py-2">
                        <Link to="/Frame">ottoman box</Link>
                      </li>
                    </div>
                  </nav>
                )}
              </li>
              <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="block w-10 z-20"
              >
                <Link to="">beds</Link>
                {bed && (
                  <nav>
                    <div className="bg-white text-[#333] px-6 py-2 mt-5 mr-28 w-64 z-20">
                      <li className="py-2">
                        <Link to="/Bed">single unit adjustable beds</Link>
                      </li>
                      <li className="py-2">
                        <Link to="/Bed">twin base adjustable beds</Link>
                      </li>
                      <li className="py-2">
                        <Link to="/Bed">wingback collection</Link>
                      </li>
                      <li className="py-2">
                        <Link to="/Bed">chesterfeild collection</Link>
                      </li>
                      <li className="py-2">
                        <Link to="/Bed">panel collection</Link>
                      </li>
                      <li className="py-2">
                        <Link>plain collection</Link>
                      </li>
                      <li className="py-2">
                        <Link to="/Bed">curvy collection</Link>
                      </li>
                      <li className="py-2">
                        <Link>extra deep collection</Link>
                      </li>
                      <li className="py-2">
                        <Link to="/Bed">super deep collection</Link>
                      </li>
                      <li className="py-2">
                        <Link to="/Bed">single beds</Link>
                      </li>
                    </div>
                  </nav>
                )}
              </li>
              <li
                onMouseEnter={handleMouseEnterHeadboard}
                onMouseLeave={handleMouseLeaveHeadboard}
                className="block w-24 z-20"
              >
                <Link to="">headboards</Link>
                {headboard && (
                  <nav>
                    <div className="bg-white text-[#333] px-6 py-2 mt-5 mr-28 w-64 z-20">
                      <li className="py-2">
                        <Link to="/Frame">wingback collection</Link>
                      </li>
                      <li className="py-2">
                        <Link to="/Frame">plain collection</Link>
                      </li>
                      <li className="py-2">
                        <Link to="/Frame">panel collection</Link>
                      </li>
                      <li className="py-2">
                        <Link to="/Frame">chesterfeild collection</Link>
                      </li>
                      <li className="py-2">
                        <Link to="/Frame">strutted headboards collection</Link>
                      </li>
                      <li className="py-2">
                        <Link to="/Frame">curvey collection</Link>
                      </li>
                      <li className="py-2">
                        <Link to="/Frame">curvy collection</Link>
                      </li>
                    </div>
                  </nav>
                )}
              </li>
              <li
                onMouseEnter={handleMouseEnterMattresses}
                onMouseLeave={handleMouseLeaveMattresses}
                className="block w-20 z-20"
              >
                <Link to="">mattresses</Link>
                {mattresses && (
                  <nav>
                    <div className="bg-white text-[#333] px-6 py-2 mt-5 mr-28 w-64">
                      <li className="py-2">
                        <Link>orthopaedic collection</Link>
                      </li>
                      <li className="py-2">
                        <Link>cotton and wool collection</Link>
                      </li>
                      <li className="py-2">
                        <Link>latex mattresses collection</Link>
                      </li>
                      <li className="py-2">
                        <Link>memory foam collection </Link>
                      </li>
                      <li className="py-2">
                        <Link>pillow top mattresses collection</Link>
                      </li>
                    </div>
                  </nav>
                )}
              </li>
              <li>
                <Link to="">blog</Link>
              </li>
              <li>
                <Link to="">about us</Link>
              </li>
              <li
                onMouseEnter={handleMouseEnterFaq}
                onMouseLeave={handleMouseLeaveFaq}
                className="block w-8 z-20"
              >
                <Link to="">faq</Link>
                {faq && (
                  <nav>
                    <div className="bg-white text-[#333] px-6 py-2 mt-5 mr-28 w-64">
                      <li className="py-2">
                        <Link>fitting instruction</Link>
                      </li>
                      <li className="py-2">
                        <Link>frequently asked questions</Link>
                      </li>
                    </div>
                  </nav>
                )}
              </li>
              <li>
                <Link to="">order swatches</Link>
              </li>
            </div>
          </nav>
        </div>
      </div>
      {/* mobile side navBar */}
      <div
        className={`block md:hidden  h-screen w-[85%] absolute top-0 left-0 z-30 ${
          SideNavBar ? "block" : "hidden"
        }`}
      >
        <div
          className={`z-10 block md:hidden   h-screen w-[91%] absolute top-0 left-0 ${
            SideNavBar ? "block" : "hidden"
          }`}
        >
          <div className="">
            <div className="">
              <div className="flex justify-between border bg-[#d9d9d9] py-6 px-3">
                <h2
                  onClick={catDisplay}
                  className="cursor-pointer active:border-b-3 border-gray-500"
                >
                  menu
                </h2>
                <h2 onClick={catDisplay} className="cursor-pointer">
                  categories
                </h2>
              </div>
              <div className="bg-white list-none h-[90vh]">
                {category ? (
                  <nav>
                    <div className="">
                      <li className="flex gap-2 items-center py-2 px-3 ">
                        <FontAwesomeIcon icon={faBed} />
                        <Link to="/Bed">beds</Link>
                      </li>
                      <li className="flex gap-2 items-center py-2 px-3 ">
                        <FontAwesomeIcon icon={faBed} />
                        <Link>adjustable beds</Link>
                      </li>
                      <li className="flex gap-2 items-center py-2 px-3 ">
                        <FontAwesomeIcon icon={faCouch} />
                        <Link to="/Bed">beds and bed frame</Link>
                      </li>
                      <li className="flex gap-2 items-center py-2 px-3 ">
                        <FontAwesomeIcon icon={faBed} />
                        <Link to="/Frame">chesterfeild collection</Link>
                      </li>
                      <li className=" py-2 px-3 ">double</li>
                    </div>
                  </nav>
                ) : (
                  <div className="w-full">
                    <nav>
                      <div className="list-none ">
                        <li className="py-2 px-3 font-semibold">
                          <Link to="/Shop">shop</Link>
                        </li>
                        <li className="py-2 px-3 font-semibold">
                          <Link to="/Bed">beds</Link>
                        </li>
                        <li className="py-2 px-3 font-semibold">
                          <Link>mattresses</Link>
                        </li>
                        <li className="py-2 px-3 font-semibold">
                          <Link to="/headboard">
                            ottoman bed base without headboard
                          </Link>
                        </li>
                        <li className="flex justify-between py-2 px-3 font-semibold">
                          <Link>order swatches</Link>
                          <FontAwesomeIcon icon={faPlus} />
                        </li>
                        <li className="py-2 px-3 font-semibold">
                          <Link>blog</Link>
                        </li>
                        <li className="flex gap-2 py-2 px-3 font-semibold">
                          <FontAwesomeIcon icon={faHeart} />
                          <Link to="/Wishlist">wishlist</Link>
                        </li>
                        <li className="flex gap-2 py-2 px-3 font-semibold">
                          <FontAwesomeIcon icon={faSearch} />
                          <Link>search</Link>
                        </li>
                      </div>
                    </nav>
                    <div className="border-t-2 border-gray-400 py-3">
                      <span className="py-2 px-3">need help?</span>
                      <p className="flex gap-2 items-center py-2 px-3 ">
                        <FontAwesomeIcon icon={faPhone} />
                        01924465009
                      </p>
                      <p className=" flex gap-2 items-center py-2 px-3 ">
                        <FontAwesomeIcon icon={faEnvelope} />
                        info@ottoman-bed.co.uk
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            SideNavBar ? "block" : "hidden"
          } block md:hidden h-8 absolute top-0 right-0  bg-[#14324b] px-2 text-white`}
        >
          <FontAwesomeIcon icon={faXmark} onClick={handleSideNavBar} />
        </div>
      </div>
    </div>
  );
};

export default Header;
