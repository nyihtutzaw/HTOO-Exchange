import { Typography } from "@mui/material";
import React from "react";

const Employee = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "1000px",
        backgroundColor: "green",
        // marginTop: "64px",
        zIndex: 2
      }}
    >
      <Typography color="red">Employee</Typography>
    </div>
  );
};

export default Employee;
