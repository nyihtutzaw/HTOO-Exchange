import React from "react";
import { Circles } from "react-loader-spinner";
import Card from "@mui/material/Card";
import { Box, height } from "@mui/system";

const LoadingData = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh"
      }}
    >
      {/* <Card
        sx={{ backgroundColor: "transparent !important", alignItems: "center" }}
      > */}
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
      {/* </Card> */}
    </Box>
  );
};

export default LoadingData;
