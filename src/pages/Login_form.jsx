import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";

const Login_form = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh"
      }}
    >
      <Card
        sx={{
          maxWidth: 350
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
            m={0}
          >
            Login Form
          </Typography>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px"
          }}
        >
          <TextField
            id="outlined-basic"
            label="UserName"
            variant="outlined"
            sx={{ marginBottom: "15px" }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            sx={{ marginBottom: "15px" }}
          />

          <Button variant="contained" fullWidth>
            Login
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login_form;
