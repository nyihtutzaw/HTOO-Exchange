import { Box, Grid, Divider, Typography, Button } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import logo from "../../assets/images/logo.png";
import { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { useTranslation } from "react-i18next";
import * as ExchangeService from "./../../services/exchangeService";
import { useParams } from "react-router-dom";

import dayjs from "dayjs";

const Invoice = () => {
  const componentRef = useRef();
  const { t } = useTranslation();
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const response = await ExchangeService.getEach(id);
      setData(response.data);
    }
    loadData();
  }, [id]);

  return (
    <>
      <Navbar />
      {data && (
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
                    <Typography>{t("date")}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {dayjs(data.createdAt).format("YYYY-MM-DD")}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography>{t("time")}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {" "}
                      {dayjs(data.createdAt).format("h:mm A")}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography> {t("employee.name")}</Typography>
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
                <Typography> {t("customer.name")}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>{data?.customer?.name}</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography> {t("branch-bank-in")}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>{data?.from_bank_account?.account_name}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>{t("branch-bank-out")}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>{data?.to_bank_account?.account_name}</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography>{t("amount-money-in")}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>{data?.from_transfer_amount}</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography> {t("amount-money-out")}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>{data?.to_transfer_amount}</Typography>
              </Grid>
            </Grid>
          </Box>
        </div>
      )}
    </>
  );
};
export default Invoice;
