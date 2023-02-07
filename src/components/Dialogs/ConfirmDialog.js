import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const ConfirmDialog = ( {onToggle, title, body, onConfirm} ) => {
  confirmAlert({
    title: title,
    message: body,
    buttons: [
      {
        label: "Yes",
        onClick: onConfirm,
      },
      {
        label: "No",
        onClick: () => onToggle,
      },
    ],
  });
};
export default ConfirmDialog;
