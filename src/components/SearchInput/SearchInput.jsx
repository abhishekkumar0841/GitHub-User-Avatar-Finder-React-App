import React from "react";

const SearchInput = ({input, updatedInput}) => {

  return (
    <div className="max-w-[80%] m-auto mt-4 mb-4 text-center ">
      <input
        className="text-center border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 outline-8 w-[20rem] font-bold tracking-wider"
        type="text"
        placeholder="Search GitHub Users"
        value={input}
        onChange={(e) => updatedInput(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
