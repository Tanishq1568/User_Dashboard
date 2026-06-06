const SearchBox = ({
  search,
  setSearch,
}) => {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search Users..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />
  );
};

export default SearchBox;