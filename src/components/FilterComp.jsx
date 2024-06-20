import { useState } from "react";


export const FilterComp = ({setSearchAndFilter}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setSearchAndFilter(prevState=>({
      ...prevState,
      filterQuery:selectedOption
    }))
  };

  return (
    <div className="flex flex-col p-2">
      <label htmlFor="category" className="block text-sm font-medium text-gray-700">
        Select a category
      </label>
      <select
        id="category"
        name="category"
        value={selectedOption}
        onChange={handleChange}
        className="shadow-lg mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="">-- Select category --</option>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
        <option value="entertainment">Entertainment</option>
        <option value="sports">Sports</option>
        <option value="science">Science</option>
        <option value="health">Health</option>
        <option value="general">General</option>

      </select>
    </div>
  )
}
