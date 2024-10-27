const SearchBar = ({ onSearch }) => (
   <input
      type="text"
      placeholder="Search by event name or location"
      onChange={(e) => onSearch(e.target.value)}
      className="p-2 border border-gray-300 rounded w-full"
   />
);

export default SearchBar;
