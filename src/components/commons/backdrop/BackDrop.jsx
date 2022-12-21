import { Backdrop } from "@mui/material";
import React from "react";
import LoadingData from "../LoadingData";

const BackDropLoading = () => {
  return (
    <Backdrop
      sx={{
        color: "#ffffff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={true}
    >
      <LoadingData />
    </Backdrop>
  );
};

export default BackDropLoading;
