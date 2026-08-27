import { TextField } from "oks-ui";
import { Search } from "lucide-react";

/** TextField preset for search boxes. */
const SearchInput = ({
  value,
  onChange,
  placeholder = "Search…",
  className = "",
  ...rest
}) => (
  <div className={className}>
    <TextField
      aria-label="Search"
      size="sm"
      radius="lg"
      placeholder={placeholder}
      startIcon={<Search size={16} />}
      value={value}
      onChange={onChange ? (e) => onChange(e.target.value) : undefined}
      {...rest}
    />
  </div>
);

export default SearchInput;
