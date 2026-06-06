const UserFilters = ({
  cities,
  city,
  setCity,
  sort,
  setSort,
}) => {
 return (
  <div className="filters">
    <select
      className="filter-select"
      value={city}
      onChange={(e) =>
        setCity(e.target.value)
      }
    >
      <option value="All">
        All Cities
      </option>

      {cities.map((cityName) => (
        <option
          key={cityName}
          value={cityName}
        >
          {cityName}
        </option>
      ))}
    </select>

    <select
      className="filter-select"
      value={sort}
      onChange={(e) =>
        setSort(e.target.value)
      }
    >
      <option value="">
        Sort By
      </option>

      <option value="nameAsc">
        Name A-Z
      </option>

      <option value="nameDesc">
        Name Z-A
      </option>

      <option value="cityAsc">
        City A-Z
      </option>

      <option value="companyAsc">
        Company A-Z
      </option>
    </select>
  </div>
);
};

export default UserFilters;