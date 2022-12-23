import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Button, CardMedia, Grid, TextField } from "@mui/material";
import money5 from "../assets/images/money5.png"
import { withStyles } from '@material-ui/core/styles';
import { getToken } from "../utils/token"
import { useNavigate } from "react-router-dom";
import BackDropLoading from "../components/commons/backdrop/BackDrop";

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'green',
      },
      '&:hover fieldset': {
        borderColor: 'green',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);

const Login_form = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    setLoading(true);
    localStorage.setItem('Token', true)
    setTimeout(() => {
      const TOKEN = getToken();
      if (TOKEN) {
        setLoading(false)
        navigate("/admin/list-employee");
      }
    }, 2000)
  }

  return (
    <>
      {
        loading ? (
          <BackDropLoading />
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box
              >
                <Card

                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh"
                  }}
                >
                  <CardMedia

                    sx={{ height: 500, width: 600, margin: "10px" }}
                    image={money5}
                    title="green iguana"
                  />
                  <CardContent>

                  </CardContent>

                </Card>
              </Box >
            </Grid >
            <Grid item xs={6}>
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
                    margin: "10px"
                  }}
                >
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      textAlign="left"
                      mb={2}
                      color="#094708"
                    >
                      Sign In
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="p"
                      component="div"
                      textAlign="left"
                      color="green"
                      m={0}
                    >
                      Welcome to Htoo money exchange services?
                    </Typography>
                  </CardContent>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CssTextField
                      size='small'
                      label="Username"
                      fullWidth
                      className="search"
                      name="search"
                      // onChange={this.onChange}
                      type="text"
                      autoComplete=""
                      margin="normal"
                      inputProps={{
                        style: { fontFamily: 'nunito', color: 'black' },
                      }}
                    />

                    <CssTextField
                      size='small'
                      label="Password"
                      fullWidth
                      className="search"
                      name="search"
                      // onChange={this.onChange}
                      type="password"
                      autoComplete=""
                      margin="normal"
                      inputProps={{
                        style: { fontFamily: 'nunito', color: 'black' },
                      }}


                    />
                    <Button variant="contained" onClick={handleLogin} fullWidth sx={{
                      marginTop: "5px",
                      backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                        bgcolor: '#094708',
                        color: '#fff'
                      }
                    }}>
                      Sign in
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            </Grid>

          </Grid >
        )
      }

    </>


  );
};

export default Login_form;
