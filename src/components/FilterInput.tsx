import type { FilterInputProps } from "../types";

const FilterInput = ({ filter, onFilterChange }: FilterInputProps) => {
  return (
    <div className="filter">
      <input
        placeholder="Filter coins by name or symbol"
        type="text"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default FilterInput;
