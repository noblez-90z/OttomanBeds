import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const SideNavBar = () => {
  const [category, setCategory] = useState(false);
  const catDisplay = () => {
    setCategory(!category);
  };
  return (
    <div className="flex">
      <div className=" w-[200px]  border-2 border-blue-500">
        <div className="flex gap-4">
          <h2 onClick={catDisplay} className="cursor-pointer">
            menu
          </h2>
          <h2
            onClick={catDisplay}
            className="cursor-pointer focus:border-3 border-gray-500
          "
          >
            categories
          </h2>
        </div>
        <div className="">
          <div className={`${category ? "hidden" : "block"}`}>
            <nav>
              <div className="">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>56</li>
              </div>
            </nav>
          </div>
          {category && (
            <nav>
              <div className="">
                <li>12</li>
                <li>23</li>
                <li>34</li>
                <li>45</li>
                <li>56</li>
                <li>58</li>
              </div>
            </nav>
          )}
        </div>
      </div>
      <div className="h-8 border border-red-500 bg-[#14324b] px-2 text-white">
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>
  );
};

export default SideNavBar;
