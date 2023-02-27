
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: "100%",
        overflowX: "auto",
    },
    table: {
        width: "200%",
        // minWidth: 700
    },
    thead: {
        backgroundColor: "#094708",
    },
    tHColor: {
        color: "#fff",
    },
});

const ExportedList = ({ data, handleEdit, handleDelete }) => {
    const classes = useStyles();
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (

        <table className={classes.table} aria-label="simple-table">
            <thead className={classes.thead}>
                <tr>
                    <td width="20px" className={classes.tHColor}>
                        {t("no")}
                    </td>
                    <td className={classes.tHColor} align="center">
                        {t("date-time")}
                    </td>
                    <td className={classes.tHColor} align="center">
                        {t("type")}
                    </td>
                    <td className={classes.tHColor} align="center">
                        {t("phone-out")}
                    </td>
                    <td className={classes.tHColor} align="center">
                        {t("phone-in")}
                    </td>
                    <td className={classes.tHColor} align="center">
                        {t("transition-id")}
                    </td>
                    <td className={classes.tHColor} align="center">
                        {t("transfer-amount")}
                    </td>
                    <td className={classes.tHColor} align="center">
                        {t("transfer-fee")}
                    </td>
                    <td className={classes.tHColor} align="center">
                        {t("export-amount")}
                    </td>
                    <td className={classes.tHColor} align="center">
                        ငွေသွင်းရန်ပမာဏ
                    </td>
                    <td className={classes.tHColor} align="center">
                        {t("wave-acc")}
                    </td>
                    <td className={classes.tHColor} align="center">
                        {t("comission")}
                    </td>
                    <td className={classes.tHColor} align="center">
                        {t("from-bank")}
                    </td>
                    <td className={classes.tHColor} align="center">
                        {t("to-bank")}
                    </td>
                    <td className={classes.tHColor} align="center">
                        {t("otm")}
                    </td>

                    <td className={classes.tHColor} align="center">
                        {t("wave-acc-left-money")}
                    </td>
                    <td className={classes.tHColor} align="center">
                        {t("total-e-money")}
                    </td>
                    <td className={classes.tHColor} align="center">
                        {t("total-cash-money")}
                    </td>
                    <td className={classes.tHColor} align="center">
                        {t("customer.name")}
                    </td>

                </tr>
            </thead>
            <tbody>
                {data?.map((row, index) => (
                    <tr key={index} onDoubleClick={() => {
                        navigate("/admin/wave-invoice/" + row.id)
                    }}>
                        <td width="20px" component="th" scope="row">
                            {index + 1}
                        </td>
                        <td align="center">
                            {dayjs(row.createdAt).format("DD/MM/YYYY HH:mm")}
                        </td>
                        <td align="center">{row.type && row.type[0].toUpperCase() + row.type.slice(1)}</td>
                        <td align="center">{row.sender_phone}</td>
                        <td align="center">{row.receiver_phone}</td>
                        <td align="center">{row.transaction_id}</td>
                        <td align="center">{row.type === "transfer" && row.amount}</td>
                        <td align="center">{row.transfer_fee}</td>
                        <td align="center">{row.type === "withdraw" && row.amount}</td>
                        <td align="center">{row.type === "deposit" && row.amount}</td>
                        <td align="center">{row?.bank_account?.name}-{row?.bank_account?.account_name}</td>
                        <td align="center">{row.commission}</td>

                        <td align="center">{row.type === "from bank" && row.amount}</td>

                        <td align="center">{row.type === "to bank" && row.amount}</td>
                        <td align="center">{row.otm}</td>
                        <td align="center">{ }</td>
                        <td align="center">{row.last_bank_amount}</td>
                        <td align="center">{row.last_cash_amount}</td>
                        <td align="center">{row.customer?.name}</td>

                    </tr>
                ))}
            </tbody>
        </table>

    );
};
export default ExportedList;
