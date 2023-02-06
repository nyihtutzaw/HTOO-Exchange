import { useState, useCallback } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Button, CardMedia, Grid, TextField } from "@mui/material";
import money5 from "../assets/images/money5.png";
import { withStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import BackDropLoading from "../components/commons/backdrop/BackDrop";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as AuthService from "./../services/authService";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../store/reducer.auth";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "green",
      },
      "&:hover fieldset": {
        borderColor: "green",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
})(TextField);

const LoginForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = useCallback(
    async (values) => {
      const response = await AuthService.login(values);
      dispatch(setToken(response.data.token));
      dispatch(setUser(response.data.admin));
      navigate("/admin/list-wave");
      reset();
    },
    [dispatch, navigate, reset]
  );

  return (
    <>
      {loading ? (
        <BackDropLoading />
      ) : (
        <form onSubmit={handleSubmit(handleLogin)}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box>
                <Card
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                  }}
                >
                  <CardMedia
                    sx={{ height: 500, width: 600, margin: "10px" }}
                    image={money5}
                    title="green iguana"
                  />
                  <CardContent></CardContent>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "100vh",
                }}
              >
                <Card
                  sx={{
                    margin: "10px",
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
                      size="small"
                      label="Email"
                      fullWidth
                      className="search"
                      name="email"
                      {...register("email")}
                      type="email"
                      autoComplete=""
                      margin="normal"
                      error={errors.email?.message}
                      helperText={errors.email?.message}
                      inputProps={{
                        style: { fontFamily: "nunito", color: "black" },
                      }}
                    />

                    <CssTextField
                      size="small"
                      label="Password"
                      fullWidth
                      className="search"
                      name="password"
                      {...register("password")}
                      type="password"
                      autoComplete=""
                      margin="normal"
                      error={errors.password?.message}
                      helperText={errors.password?.message}
                      inputProps={{
                        style: { fontFamily: "nunito", color: "black" },
                      }}
                    />

                    <Button
                      variant="contained"
                      fullWidth
                      type="submit"
                      sx={{
                        marginTop: "5px",
                        backgroundColor: "#094708",
                        minWidth: "200px",
                        fontSize: "14px",
                        ":hover": {
                          bgcolor: "#094708",
                          color: "#fff",
                        },
                      }}
                    >
                      Sign in
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </form>
      )}
    </>
  );
};

export default LoginForm;
