// src/components/FilterSort.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSortOption,
  setFilterPrice,
  selectSortOption,
  selectFilterPrice,
} from "./filterSlice";

const FilterSort = () => {
  //   const dispatch = useDispatch();
  //   const sortOption = useSelector(selectSortOption);
  //   const filterPrice = useSelector(selectFilterPrice);

  const dispatch = useDispatch();
  const currentSortOption = useSelector(selectSortOption);
  const currentFilterPrice = useSelector(selectFilterPrice);

  //   const handleSortChange = (e) => {
  //     dispatch(setSortOption(e.target.value));
  //   };

  //   const handleFilterChange = (e) => {
  //     dispatch(setFilterPrice(Number(e.target.value)));
  //   };

  const [priceInput, setPriceInput] = useState(currentFilterPrice);

  const handlePriceInputChange = (e) => {
    setPriceInput(e.target.value);
  };

  const handlePriceInputKeyPress = (e) => {
    if (e.onkeyDown === "Enter") {
      dispatch(setFilterPrice(Number(priceInput)));
    }
  };

  const handleSortChange = (e) => {
    dispatch(setSortOption(e.target.value));
  };

  return (
    // <div className="my-4 flex justify-between">
    //   <div>
    //     <label htmlFor="sort" className="mr-2">
    //       Sort By:
    //     </label>
    //     <select
    //       id="sort"
    //       value={sortOption}
    //       onChange={handleSortChange}
    //       className="p-2 border"
    //     >
    //       <option value="">None</option>
    //       <option value="alphabet">Alphabet a-z</option>
    //       <option value="alphabet">Alphabet z-a</option>
    //     </select>
    //   </div>
    //   <div>
    //     <label htmlFor="filter" className="mr-2">
    //       Filter By Price:
    //     </label>
    //     <input
    //       type="number"
    //       id="filter"
    //       value={filterPrice}
    //       onChange={handleFilterChange}
    //       className="p-2 border"
    //     />
    //   </div>
    // </div>
    <div className="mb-4">
      <div className="mb-4">
        <label
          htmlFor="price-filter"
          className="block text-sm font-medium text-gray-700"
        >
          Filter by Price (greater than or equal to):
        </label>
        <input
          id="price-filter"
          type="number"
          value={priceInput}
          onChange={handlePriceInputChange}
          onKeyDown={handlePriceInputKeyPress} // Trigger filter on Enter
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="sort-option"
          className="block text-sm font-medium text-gray-700"
        >
          Sort by:
        </label>
        <select
          id="sort-option"
          value={currentSortOption}
          onChange={handleSortChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="alphabet">Alphabetical</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSort;
