import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../features/auth/authActions'



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

const LoginForm = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  const {loading, error, userInfo, userToken } = useSelector((state) => state.auth)

  const dispatch = useDispatch()


  const navigate = useNavigate();
  const [loadings, setLoading] = useState(false)
  const TOKEN = getToken();

  const handleLogin = () => {
    dispatch(userLogin({email, password}))
    // setLoading(true);
    // localStorage.setItem('Token', true)
    // setTimeout(() => {
    //   if (TOKEN) {
    //     setLoading(false)
    //     navigate("/admin/list-employee");
    //   }
    // }, 2000)

  }

  useEffect(() => {
    if (TOKEN) {
      navigate("/admin/list-employee");
    }
  }, [TOKEN])



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
                      onChange={(e) =>setEmail(e.target.value)}
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
                      onChange={(e) =>setPassword(e.target.value)}
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
                      Sign insss
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

export default LoginForm;
