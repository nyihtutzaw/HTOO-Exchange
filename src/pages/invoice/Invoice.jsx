import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  CardActionArea,
  Divider,
  Typography,
  Button,
} from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import logo from "../../assets/images/logo.png";
import { useRef } from "react";
import ReactToPrint from "react-to-print";

const Invoice = () => {
  const componentRef = useRef();

  return (
    <>
      <Navbar />
      <div
        style={{
          // position: "absolute",
          width: "100%",
          height: "80%",
          marginTop: "75px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "800px",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <ReactToPrint
            trigger={() => (
              <Button
                sx={{
                  textTransform: "none",
                  margin: "5px",
                  backgroundColor: "#094708",
                  ":hover": {
                    bgcolor: "#094708",
                    color: "#fff",
                  },
                }}
                variant="contained"
              >
                Print
              </Button>
            )}
            content={() => componentRef.current}
          />
        </div>
        <Box width={800} ref={componentRef} mb={4}>
          <Box display="flex" justifyContent="center">
            <img src={logo} width={200} height={200} />
          </Box>
          <Divider />
          <Grid
            container
            spacing={2}
            padding={3}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography>ရက်စွဲ</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>2022-10-10</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography>အချိန်</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>10:00 AM</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography>ဝန်ထမ်းအမည်</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Mg Mg</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <Grid
            container
            spacing={3}
            px={6}
            py={3}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={6}>
              <Typography>Transaction ID</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textal>0000</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography>ငွေလွှဲသူဖုန်းနံပါတ်</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>11111</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography>ငွေထုတ်သူဖုန်းနံပါတ်</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>2222</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography>လွှဲမည့်ငွေပမာဏ</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>100</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography>ထုတ်မည့်ငွေပမာဏ</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>2222</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography>ငွေလွှဲခ</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>100</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography>မှတ်ချက်</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>hello hello</Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};
export default Invoice;
