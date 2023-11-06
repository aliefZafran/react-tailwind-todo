import React from "react";
import TimeBlock from "../time&date/TimeBlock";
import SearchBar from "../searchbar/SearchBar";

const MainCard = () => {
  return (
    <div className="flex justify-center w-2/4 h-min max-h-[80%] bg-myMainCard px-2 py-4 rounded-3xl">
      <div className="block text-center w-4/5">
        <h1 className="font-bold font-sans text-2xl py-2 ">
          ToDo List
        </h1>
        <TimeBlock />
        <SearchBar />
      </div>
    </div>
  );
};

export default MainCard;
