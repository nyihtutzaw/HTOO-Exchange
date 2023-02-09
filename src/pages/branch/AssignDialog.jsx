import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  InputAdornment,
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function AssignDialog({
  open,
  handleClose,
  CssTextField,
  data,
  selectedEmployeeIds,
  handleChange,
  handleAssign,
}) {
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        style: { borderRadius: 18 },
      }}
    >
      <DialogTitle
        id="alert-dialog-title"
        bgcolor="#07824f"
        color="white"
        textAlign="center"
      >
        {"Brand Assign ဇယား"}
      </DialogTitle>
      <DialogContent>
        <CssTextField
          size="small"
          label="Search"
          fullWidth
          className="search"
          name="search"
          // onChange={this.onChange}
          type="text"
          autoComplete=""
          margin="normal"
          inputProps={{
            style: { fontFamily: "nunito", color: "black" },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon />
              </InputAdornment>
            ),
          }}
        />
        <FormGroup>
          {data.map((employee, index) => {
            return (
              <FormControlLabel
              key={index}
                control={
                  <Checkbox
                    value={employee.id}
                    checked={selectedEmployeeIds.find(
                      (id) => id === employee.id
                    )}
                    onChange={handleChange}
                  />
                }
                label={employee.name}
              />
            );
          })}
        </FormGroup>
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "15px",
        }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#fff",
            color: "black",
            minWidth: "200px",
            fontSize: "14px",
            ":hover": {
              bgcolor: "#fff",
              color: "black",
            },
          }}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#07824f",
            minWidth: "200px",
            fontSize: "14px",
            ":hover": {
              bgcolor: "#07824f",
              color: "#fff",
            },
          }}
          onClick={handleAssign}
          autoFocus
        >
          Assign Employee
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AssignDialog;
