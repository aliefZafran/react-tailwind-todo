import { Button, TextField } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <div className="border-2 border-red-600 py-8 h-14 flex justify-between items-center">
      <TextField
        id="outlined-basic"
        label="Add task"
        variant="outlined"
        size="small"
        sx={{ height: 40, backgroundColor: "white" }}
      />
      <div className="flex w-48 justify-between">
        <Button
          variant="contained"
          size="small"
          sx={{ width: 90 }}
          color="success"
        >
          Add
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={{ width: 90 }}
          color="error"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
