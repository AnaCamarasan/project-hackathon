import { useState } from "react"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useNavigate } from "react-router-dom"
import { StyledFormBox } from "../components/StyledFormBox"
import { useLoginMutation } from "../generated/graphql"

const defaultTheme = createTheme()

const LogIn = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [login, { error }] = useLoginMutation({
    variables: {
      email: email,
      password: password,
    },
  })

  const navigate = useNavigate()

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()

  //   try {
  //     const response = await login()
  //     if (response.data?.login) {
  //       navigate("/home")
  //     } else if (error) {
  //       console.error(error.message)
  //     }
  //   } catch (err) {
  //     console.error("Login error:", err)
  //   }
  // }

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
          <img
            style={{ height: "100%", width: "100%", marginTop: "1rem" }}
            src="./../make-a-wish-1-logo-png-transparent.png"
          />
          <Typography style={{ marginTop: "3rem" }} component="h1" variant="h4">
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
                    type={field.id === "password" ? "password" : "email"}
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
                login({
                  variables: {
                    email: email,
                    password: password,
                  },
                })
                if (error) console.log(error.message)
                else navigate("/home")
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
  )
}

export default LogIn
