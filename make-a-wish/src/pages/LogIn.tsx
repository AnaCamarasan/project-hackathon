import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { StyledFormBox } from "../components/StyledFormBox";

const defaultTheme = createTheme();

const LogIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
 
  const navigate = useNavigate()

  const logInFields = [
    { id: "email", title: "Email", value: email, setState: setEmail },
    {
      id: "password",
      title: "Password",
      value: password,
      setState: setPassword,
    },
  ]

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography style={{marginTop: '3rem'}} component="h1" variant="h4">
            Log In
          </Typography>
          <StyledFormBox component="form">
            <Grid container spacing={3}>
              {logInFields.map((field) => (
                <Grid item lg={12}>
                  <TextField
                    required
                    fullWidth
                    autoFocus
                    name={field.id}
                    id={field.id}
                    label={field.title}
                    value={field.value}
                    onChange={(e) => field.setState(e.target.value)}
                  />
                </Grid>
              ))}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                // register();
                navigate("/home");
              }}
            >
              Log In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  Don't have an account? Sign up here.
                </Link>
              </Grid>
            </Grid>
          </StyledFormBox>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LogIn;
