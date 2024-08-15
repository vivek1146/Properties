import React from "react";

const Filter = ({ onFilterChange }) => {
  return (
    <div>
      <label>
        Location:
        <select onChange={(e) => onFilterChange("location", e.target.value)}>
          <option value='all'>All</option>
          <option value='city'>City</option>
          <option value='beach'>Beach</option>
          <option value='mountain'>Mountain</option>
        </select>
      </label>
      {/* Add more filters as needed */}
    </div>
  );
};

export default Filter;
