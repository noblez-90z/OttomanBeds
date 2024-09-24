import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faPinterest,
  faSnapchat,
  faTelegram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faPlus,
  faLocation,
  faPhone,
  faCartShopping,
  faSearch,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [touch, setTouch] = useState(false);
  const drop = () => {
    setTouch(!touch);
  };
  const [support, setSupport] = useState(false);
  const supportDrop = () => {
    setSupport(!support);
  };
  const [info, setInfo] = useState(false);
  const infoDrop = () => {
    setInfo(!info);
  };
  const [newsletter, setNewsletter] = useState(false);
  const newsletterDrop = () => {
    setNewsletter(!newsletter);
  };
  const [icon, setIcon] = useState(faMinus);
  const iconToogle = () => {
    setIcon(icon === faMinus ? faPlus : faMinus);
  };
  const handleOne = () => {
    drop();
    iconToogle();
  };
  const [iconSupport, setIconSupport] = useState(faMinus);
  const iconSupportToogle = () => {
    setIconSupport(iconSupport === faMinus ? faPlus : faMinus);
  };
  const handleTwo = () => {
    supportDrop();
    iconSupportToogle();
  };
  const [iconInfo, setIconInfo] = useState(faMinus);
  const iconInfoToogle = () => {
    setIconInfo(iconInfo === faMinus ? faPlus : faMinus);
  };
  const handleThree = () => {
    infoDrop();
    iconInfoToogle();
  };
  const [iconNewsletter, setIconNewsletter] = useState(faMinus);
  const iconNewsletterToogle = () => {
    setIconNewsletter(iconNewsletter === faMinus ? faPlus : faMinus);
  };
  const handleFour = () => {
    newsletterDrop();
    iconNewsletterToogle();
  };
  return (
    <div className="capitalize mt-3">
      <div className="flex justify-between md:gap-4  overflow-x-auto">
        <div className="flex first py-2 border   md:w-full">
          <div className="flex gap-3 py-2 px-3 w-[300px] md:w-full ">
            <div className="">
              {
                <svg className=" t4s-icon-truck w-6 h-6 " viewBox="0 0 24 24">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              }
            </div>
            <div className="">
              <h1 className="font-bold">fast free delivery</h1>
              <p className="py-2">
                free shipping on all uk order or order aboe $100
              </p>
            </div>
          </div>
          <div className="flex gap-3 py-2 px-3 ">
            <div className="">
              {
                <svg className=" t4s-icon-help w-8 h-8" viewBox="0 0 32 32">
                  <path d="M 16 3.205 c -7.066 0 -12.795 5.728 -12.795 12.795 s 5.729 12.794 12.795 12.795 c 7.067 -0.001 12.795 -5.729 12.795 -12.795 s -5.729 -12.795 -12.795 -12.795 Z M 15.999 21.864 c -3.233 0 -5.863 -2.631 -5.863 -5.864 s 2.631 -5.864 5.864 -5.864 h 0.001 c 3.233 0 5.863 2.631 5.863 5.864 s -2.631 5.864 -5.865 5.864 Z M 22.395 13.327 l 4.028 -2.693 c 0.832 1.609 1.305 3.433 1.305 5.366 c 0 1.909 -0.461 3.71 -1.273 5.305 l -4.035 -2.699 c 0.327 -0.805 0.511 -1.683 0.511 -2.606 c 0 -0.948 -0.191 -1.85 -0.535 -2.673 Z M 25.89 9.708 l -3.99 2.668 c -0.58 -0.942 -1.377 -1.733 -2.325 -2.305 l 2.669 -3.991 c 1.466 0.926 2.712 2.167 3.645 3.629 Z M 21.316 5.55 l -2.698 4.034 c -0.808 -0.33 -1.69 -0.515 -2.617 -0.515 h -0.001 c -0.927 0 -1.809 0.185 -2.617 0.515 l -2.698 -4.034 c 1.597 -0.816 3.402 -1.279 5.315 -1.279 s 3.719 0.463 5.316 1.279 Z M 9.756 6.078 l 2.67 3.992 c -0.95 0.574 -1.748 1.367 -2.329 2.311 l -3.991 -2.669 c 0.934 -1.464 2.182 -2.707 3.65 -3.634 Z M 5.574 10.639 l 4.029 2.694 c -0.343 0.822 -0.533 1.722 -0.533 2.667 c 0 0.92 0.183 1.797 0.509 2.599 l -4.036 2.7 c -0.81 -1.593 -1.27 -3.393 -1.27 -5.299 c 0 -1.931 0.472 -3.753 1.303 -5.361 Z M 6.069 22.229 l 3.992 -2.669 c 0.576 0.959 1.377 1.766 2.331 2.35 l -2.669 3.99 c -1.473 -0.937 -2.724 -2.193 -3.654 -3.671 Z M 10.65 26.432 l 2.695 -4.03 c 0.818 0.34 1.713 0.529 2.654 0.529 c 0.001 0 0.001 0 0.001 0 c 0.941 0 1.838 -0.189 2.656 -0.529 l 2.695 4.03 c -1.606 0.827 -3.424 1.297 -5.351 1.297 s -3.745 -0.47 -5.35 -1.297 Z M 22.278 25.899 l -2.669 -3.991 c 0.952 -0.583 1.751 -1.387 2.327 -2.344 l 3.992 2.67 c -0.93 1.475 -2.179 2.729 -3.65 3.665 Z"></path>
                </svg>
              }
            </div>
            <div className="">
              <h1 className="font-bold">support 24/7</h1>
              <p className="py-2">contact us 24 hours a day, 7 days a week</p>
            </div>
          </div>
        </div>
        <div className="flex second py-2 border w-full">
          <div className="flex gap-3 py-2 px-3 w-[300px]">
            <div className="">
              {
                <svg className=" t4s-icon-refesh w-8 h-8" viewBox="0 0 32 32">
                  <path d="M 27.729 18.664 c 0 6.467 -5.261 11.729 -11.729 11.729 s -11.729 -5.261 -11.729 -11.729 c 0 -6.452 5.237 -11.703 11.684 -11.728 v 5.333 l 10.129 -5.865 l -10.129 -5.864 v 5.33 c -7.047 0.024 -12.751 5.741 -12.751 12.794 c 0 7.065 5.727 12.795 12.795 12.795 c 7.066 0 12.795 -5.73 12.795 -12.795 h -1.066 Z M 17.022 2.39 l 6.935 4.015 l -6.935 4.016 v -8.03 Z"></path>
                </svg>
              }
            </div>
            <div className="">
              <h1 className="font-bold">30 days return</h1>
              <p className="py-2">
                simply return it within 30 days for an exchange
              </p>
            </div>
          </div>
          <div className="flex gap-3 py-2 px-3">
            <div className="">
              {
                <svg
                  className=" t4s-icon-door-lock w-7 h-8"
                  viewBox="0 0 27 32"
                >
                  <path d="M 13.333 2.667 c -7.36 0 -13.333 5.973 -13.333 13.333 s 5.973 13.333 13.333 13.333 c 7.36 0 13.333 -5.973 13.333 -13.333 s -5.973 -13.333 -13.333 -13.333 Z M 13.333 28.267 c -6.773 0 -12.267 -5.493 -12.267 -12.267 s 5.493 -12.267 12.267 -12.267 c 6.773 0 12.267 5.493 12.267 12.267 s -5.493 12.267 -12.267 12.267 Z"></path>
                  <path d="M 17.6 12.8 c 0 -2.347 -1.92 -4.267 -4.267 -4.267 s -4.267 1.92 -4.267 4.267 c 0 1.6 0.907 3.04 2.24 3.733 l -2.24 6.4 h 8.533 l -2.187 -6.4 c 1.28 -0.747 2.187 -2.133 2.187 -3.733 Z M 16.107 21.867 h -5.547 l 1.707 -4.96 l 0.32 -0.853 l -0.8 -0.427 c -1.013 -0.587 -1.653 -1.653 -1.653 -2.827 c 0 -1.76 1.44 -3.2 3.2 -3.2 s 3.2 1.44 3.2 3.2 c 0 1.173 -0.64 2.24 -1.653 2.773 l -0.8 0.427 l 0.267 0.853 l 1.76 5.013 Z"></path>
                </svg>
              }
            </div>
            <div className="">
              <h1 className="font-bold">100% payment secure</h1>
              <p className="py-2">we ensure secure payment with PEV</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3 py-2 px-3 border w-[300px] ">
          <div className="">
            {
              <svg className=" t4s-icon-diamond w-7 h-8" viewBox="0 0 28 32">
                <path d="M 27.467 10.667 l -6.293 -7.467 h -14.4 l -6.293 7.467 l -0.48 0.533 l 0.427 0.533 l 13.547 17.067 l 13.973 -17.6 l -0.48 -0.533 Z M 26.08 10.667 h -10.72 l 5.333 -6.347 l 5.387 6.347 Z M 13.92 10.667 l -5.547 -6.4 h 10.987 l -5.44 6.4 Z M 7.147 4.427 l 5.387 6.24 h -10.667 l 5.28 -6.24 Z M 13.44 11.733 v 14.667 l -11.68 -14.667 h 11.68 Z M 14.507 26.4 v -14.667 h 11.627 l -11.627 14.667 Z"></path>
              </svg>
            }
          </div>
          <div className="">
            <h1 className="font-bold">5 years warranty</h1>
            <p className="py-2">use this text to describe</p>
          </div>
        </div>
      </div>
      {/* fotter main */}
      <div className="block md:flex justify-between gap-4 h-fit md:h-[300px] bg-[#fff8f0]  px-3">
        <div className={`block  h-10 md:h-fit ${touch ? "h-10" : "h-fit"}`}>
          <p className="flex justify-between md:hidden py-3 font-bold ">
            get in touch
            <FontAwesomeIcon icon={icon} onClick={handleOne} />
          </p>
          <div
            className={`block md:block  ${
              touch ? "h-10 hidden" : "h-fit block"
            } h-10 md:h-fit`}
          >
            <p className="  py-2">
              <FontAwesomeIcon icon={faLocation} className="pr-2" />
              unit 5, 144-150 bradfort rd, dewbury WF13 2HA
            </p>
            <p className="  py-2">
              <FontAwesomeIcon icon={faEnvelope} className="pr-2" />
              info@donnellnoblez@gmail.com
            </p>
            <p className="  py-2">
              <FontAwesomeIcon icon={faPhone} className="pr-2" />
              09022108521
            </p>
            <div className="flex gap-4 py-3">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faXTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faPinterest} />
            </div>
          </div>
        </div>
        <div className={`block  h-10 md:h-fit ${support ? "h-10" : "h-fit"}`}>
          <h1 className="flex justify-between py-3 font-bold">
            supports
            <FontAwesomeIcon
              icon={iconSupport}
              onClick={handleTwo}
              className="md:hidden"
            />
          </h1>
          <nav>
            <div
              className={`block md:block  ${
                support ? "h-10 hidden" : "h-fit block"
              } list-none mt-2 w-full md:w-fit md:h-fit`}
            >
              <li className="py-2">
                <Link>track your order</Link>
              </li>
              <li className="py-2">
                <Link>search</Link>
              </li>
              <li className="py-2">
                <Link>shipping policy</Link>
              </li>
              <li className="py-2">
                <Link>terms of service</Link>
              </li>
              <li className="py-2">
                <Link>contact information</Link>
              </li>
            </div>
          </nav>
        </div>
        <div className={`block  h-10 md:h-fit ${info ? "h-10" : "h-fit"}`}>
          <h1 className="flex justify-between py-3 font-bold ">
            information
            <FontAwesomeIcon
              icon={iconInfo}
              onClick={handleThree}
              className="md:hidden"
            />
          </h1>
          <nav>
            <div
              className={`block md:block  ${
                info ? "h-10 hidden" : "h-fit block"
              } list-none mt-2 md:h-fit`}
            >
              <li className="py-2">
                <Link to="/Shop">about us</Link>
              </li>
              <li className="py-2">
                <Link>contact</Link>
              </li>
            </div>
          </nav>
        </div>
        <div
          className={`block  h-10 md:h-fit ${newsletter ? "h-10" : "h-fit"}`}
        >
          <h1 className="flex justify-between py-3 font-bold ">
            newsletter signup
            <FontAwesomeIcon
              icon={iconNewsletter}
              onClick={handleFour}
              className="md:hidden"
            />
          </h1>
          <div
            className={`block md:block  ${
              newsletter ? "h-10 hidden" : "h-fit block"
            } list-none mt-2 md:h-fit`}
          >
            <p className="py-3">
              subscribe to our newsletter and get 10% off your first purchase
            </p>
            <div className="bg-white rounded-xl shadow-md my-3 px-4 w-fit py-2">
              <input
                type="text"
                placeholder="your email address"
                className="px-3 py-2 outline-none"
              />
              <button className="py-2 px-3 rounded-xl bg-[#14324b] text-white">
                subscribe
              </button>
            </div>
            <div className="flex gap-3 py-3">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faXTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faTelegram} />
              <FontAwesomeIcon icon={faSnapchat} />
            </div>
          </div>
        </div>
      </div>
      <div className=" mb-20 md:mb-0 px-4 text-center py-3 ">
        <p>
          copyright &copy; 2024{" "}
          <span className="text-blue-400">5 star beds ltd</span> all right
          reserved. powered by{" "}
          <span className="text-gray-600">ottoman beds</span>
        </p>
      </div>
      <div className="md:hidden flex justify-between items-center px-3 bg-white fixed bottom-0 h-20 w-full ">
        <div className="">
          <Link to="/Shop">
            {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="feather feather-grid w-6 h-6 stroke-2"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            }
          </Link>
        </div>
        <div className="block h-12 px-2  relative">
          <Link>
            <FontAwesomeIcon icon={faHeart} size="xl" className=" mt-4" />
            <span className=" px-1  absolute top-0  right-0 rounded-full  bg-black text-white   ">
              0
            </span>
          </Link>
        </div>
        <div className="h-12 px-2   relative">
          <Link>
            <FontAwesomeIcon
              icon={faCartShopping}
              size="xl"
              className="mt-4 hover:ease-in-out"
            />
            <span className=" px-1  absolute top-0  right-0 rounded-full  bg-black text-white   ">
              0
            </span>
          </Link>
        </div>
        <div className="h-12 px-2">
          <FontAwesomeIcon icon={faSearch} size="xl" className=" mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
