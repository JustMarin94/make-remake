import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, Box } from "@mui/material";
import styled from "styled-components";

const StyledFormControl = styled(FormControl)`
  margin: 20px 0;
  width: 100%;
  max-width: 200px;
`;

const StyledInputLabel = styled(InputLabel)`
  color: #333;
`;

const StyledSelect = styled(Select)`
  &.MuiOutlinedInput-root {
    & fieldset {
      border-color: #ccc;
    }
    &:hover fieldset {
      border-color: #aaa;
    }
    &.Mui-focused fieldset {
      border-color: #007bff;
    }
  }
`;

const SortDropdown = ({ onSortChange }) => {
  const [sortOption, setSortOption] = useState("latest");

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);
    if (onSortChange) {
      onSortChange(selectedOption);
    }
  };

  return (
    <Box
      sx={{
        width: "60vw",
        padding: "20px",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <StyledFormControl variant="outlined" fullWidth>
        <StyledInputLabel id="sort-by-label">Sort By</StyledInputLabel>
        <StyledSelect
          labelId="sort-by-label"
          id="sort-by"
          value={sortOption}
          onChange={handleChange}
          label="Sort By"
        >
          <MenuItem value="latest">Sort by Latest</MenuItem>
          <MenuItem value="oldest">Sort by Oldest</MenuItem>
        </StyledSelect>
      </StyledFormControl>
    </Box>
  );
};

export default SortDropdown;
