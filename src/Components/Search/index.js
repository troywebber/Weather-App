import "./index.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Search({ onClick, onChange }) {
  return (
    <>
      <div className="searchContainer">
        <TextField
          required
          onChange={onChange}
          id="standard-basic"
          label="Search for City"
          variant="standard"
        />
        <Button size="medium" variant="contained" onClick={onClick}>
          Search
        </Button>
      </div>
    </>
  );
}

export default Search;
