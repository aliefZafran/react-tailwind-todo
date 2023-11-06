import React from "react";
import TimeDate from "./TimeDate";
import Button from "@mui/material/Button";

const TimeBlock = () => {
  return (
    <>
      <TimeDate />
      <div className="block text-center border-b border-black pt-8 pb-3">
        <h2 className=" font-semibold text-4xl">00:00</h2>
        <Button
          style={{
            marginTop: "16px",
            borderRadius: "50px",
            paddingLeft: "16px",
            paddingRight: "16px",
            backgroundColor: "#669BBC",
            color: "black",
            fontWeight: "700",
          }}
          variant="contained"
        >
          Set Pomodoro
        </Button>
      </div>
    </>
  );
};

export default TimeBlock;
