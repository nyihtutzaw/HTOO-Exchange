import { Box, Grid, Divider, Typography, Button } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import logo from "../../assets/images/logo.png";
import { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { useTranslation } from "react-i18next";
import * as WaveMoneyTranscationService from "./../../services/waveMoneyTransactionService";
import { useParams } from "react-router-dom";

import dayjs from "dayjs";

const Invoice = () => {
    const componentRef = useRef();
    const { t } = useTranslation();
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        async function loadData() {
            const response = await WaveMoneyTranscationService.getEach(id);
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
                                <Typography> {t("type")}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>{data?.type}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>{t("transition-id")}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>{data?.transaction_id}</Typography>
                            </Grid>
                            {data?.type === "deposit" && (<>
                                <Grid item xs={6}>
                                    <Typography>ငွေသွင်းရန်ပမာဏ</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{data?.amount}</Typography>
                                </Grid>
                            </>)}
                            {data?.type === "deposit" && (<>
                                <Grid item xs={6}>
                                    <Typography>{t("comission")}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{data?.commission}</Typography>
                                </Grid>
                            </>)}
                            {data?.type === "withdraw" && (<>
                                <Grid item xs={6}>
                                    <Typography>  {t("export-amount")}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{data?.amount}</Typography>
                                </Grid>
                            </>)}
                            {data?.type === "withdraw" && (<>
                                <Grid item xs={6}>
                                    <Typography>{t("comission")}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{data?.commission}</Typography>
                                </Grid>
                            </>)}

                            {data?.type === "from bank" && (<>
                                <Grid item xs={6}>
                                    <Typography> {t("from-bank")}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{data?.bank_account?.name}-{data?.bank_account?.account_name}</Typography>
                                </Grid>
                            </>)}
                            {data?.type === "from bank" && (<>
                                <Grid item xs={6}>
                                    <Typography>  {t("transfer-amount")}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{data?.amount}</Typography>
                                </Grid>
                            </>)}

                            {data?.type === "to bank" && (<>
                                <Grid item xs={6}>
                                    <Typography> {t("to-bank")}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{data?.bank_account?.name}-{data?.bank_account?.account_name}</Typography>
                                </Grid>
                            </>)}
                            {data?.type === "to bank" && (<>
                                <Grid item xs={6}>
                                    <Typography>  {t("transfer-amount")}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{data?.amount}</Typography>
                                </Grid>
                            </>)}
                            {data?.type === "transfer" && (<>
                                <Grid item xs={6}>
                                    <Typography>  {t("transfer-amount")}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{data?.amount}</Typography>
                                </Grid>
                            </>)}
                            {data?.type === "transfer" && (<>
                                <Grid item xs={6}>
                                    <Typography>  {t("phone-out")}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{data?.sender_phone}</Typography>
                                </Grid>
                            </>)}

                            {data?.type === "transfer" && (<>
                                <Grid item xs={6}>
                                    <Typography>  {t("phone-in")}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{data?.receiver_phone}</Typography>
                                </Grid>
                            </>)}
                            {data?.type === "transfer" && (<>
                                <Grid item xs={6}>
                                    <Typography>  {t("transfer-fee")}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{data?.transfer_fee}</Typography>
                                </Grid>
                            </>)}

                        </Grid>
                    </Box>
                </div>
            )}
        </>
    );
};
export default Invoice;
