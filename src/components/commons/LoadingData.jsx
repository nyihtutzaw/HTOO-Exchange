import React from "react";
import { Circles } from "react-loader-spinner";
import Card from "@mui/material/Card";

const LoadingData = () => {
  return (
    <Card sx={{ backgroundColor: "transparent !important", alignItems: "center" }}>
      <Circles
        height="100"
        width="100"
        color="#92e08b"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      {/* <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#bee0ec"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      /> */}
    </Card>
  );
};

export default LoadingData;
