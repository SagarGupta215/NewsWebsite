import  { useState } from 'react';

export const SearchComp = ({setSearchAndFilter}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    setSearchAndFilter(prevState=>({
      ...prevState,
      searchQuery:searchQuery
    }))
  };

  return (
    <div className="flex flex-col p-2">
      <label htmlFor="search" className="block text-sm font-medium text-gray-700">
        Search
      </label>
      <input
        type="text"
        id="search"
        name="search"
        value={searchQuery}
        onChange={handleChange}
        className=" mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Search..."
      />
    </div>
  );
};
