import React from 'react'
import { Box, Button } from "@material-ui/core";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { useTranslation } from "react-i18next";
function Filter({ handleClickOpen }) {
    const { t } = useTranslation();
    return (

        <Box
            m={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
        >
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                    label={t("start-date")}
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => (
                        <TextField {...params} sx={{ mr: 2 }} size="small" />
                    )}
                />
                <DesktopDatePicker
                    label={t("end-date")}
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => (
                        <TextField {...params} sx={{ mr: 2 }} size="small" />
                    )}
                />
            </LocalizationProvider>
            <Button
                variant="contained"
                size="small"
                sx={{
                    textTransform: "none",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    margin: "3px",
                    padding: "7px",
                    backgroundColor: "#1dad52",
                    minWidth: "100px",
                    fontSize: "14px",
                    ":hover": {
                        bgcolor: "#1dad52",
                        color: "#fff",
                    },
                }}
                onClick={handleLink}
            >
                <GetAppIcon />
                <Box>Excel Export</Box>
            </Button>
            <Button
                variant="contained"
                size="small"
                sx={{
                    textTransform: "none",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    margin: "3px",
                    padding: "7px",
                    backgroundColor: "#1dad52",
                    minWidth: "100px",
                    fontSize: "14px",
                    ":hover": {
                        bgcolor: "#1dad52",
                        color: "#fff",
                    },
                }}
                onClick={handleLink}
            >
                <PrintIcon />
                <Box>Print</Box>
            </Button> */}
            <Button
                variant="contained"
                size="small"
                sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    backgroundColor: "#1dad52",
                    minWidth: "200px",
                    fontSize: "14px",
                    ":hover": {
                        bgcolor: "#1dad52",
                        color: "#fff",
                    },
                }}
                onClick={handleClickOpen}
            >
                <AddCircleRoundedIcon />
                <Box>{t("new")}</Box>
            </Button>

        </Box>
    )
}

export default Filter