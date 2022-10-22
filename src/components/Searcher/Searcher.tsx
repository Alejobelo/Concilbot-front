import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import './Searcher.css'

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "000000",
  background: "#ffffff",
  height: "47px",
  border: "1px solid #283154",
  borderRadius: "8px",
  fontSize: "24px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "260px",
      "&:focus": {
        width: "298px",
      },
    },
  },
}));

const Searcher = (props: any) => {
  const { setInput } = props;

  const [valueInput, setValueInput] = useState("");
  const onSearchValueChange = (event: any) => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
  };

  const handleSubmit = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setInput(valueInput);
    }
  };

  return (
    <div className="container-top">
      <div>
        <h2 className="n-extracto">Extracto N°1234567890</h2>
      </div>
      <div className="container-top-inputs">
        <div className="input-search">
          <Search>
            <SearchIconWrapper className="index">
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar"
              value={valueInput}
              onChange={onSearchValueChange}
              onKeyDown={handleSubmit}
            />
          </Search>
        </div>
        <button className="btn-add-picture">Agregar fotos</button>
      </div>
    </div>
  );
};

export default Searcher;
