import { useState } from "react"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useNavigate } from "react-router-dom"
import { StyledFormBox } from "../components/StyledFormBox"
import { gql, useQuery } from "@apollo/client"
import { Interest } from "../generated/graphql"

const defaultTheme = createTheme()

const GET_INTERESTS_QUERY = gql`
  query GetInterests {
    getInterests {
      id
      interest_name
    }
  }
`

const SignUp = () => {
  const [email, setEmail] = useState<string>("")
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [region, setRegion] = useState<string>("")
  const [role, setRole] = useState<string>("")
  const [gender, setGender] = useState<string>("")
  const [age, setAge] = useState<string>("")
  const [DBS, setDBS] = useState<string>("")
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

  const navigate = useNavigate()

  const { data, loading, error } = useQuery(GET_INTERESTS_QUERY)

  if (loading) return <p> Loading...</p>
  if (error) return <p> Error</p>

  // Handler functions
  const handleGenderChange = (event: SelectChangeEvent) => {
    setGender(event.target.value)
  }
  const handleDBSChange = (event: SelectChangeEvent) => {
    setDBS(event.target.value)
  }
  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value
    setSelectedInterests(typeof value === "string" ? value.split(",") : value)
  }
  const handleRegionChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value)
  }
  const handleRoleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value)
  }

  const signUpTextFields = [
    {
      id: "firstName",
      title: "First name",
      value: firstName,
      setState: setFirstName,
    },
    {
      id: "lastName",
      title: "Last Name",
      value: lastName,
      setState: setLastName,
    },
    { id: "email", title: "Email", value: email, setState: setEmail },
    {
      id: "password",
      title: "Password",
      value: password,
      setState: setPassword,
    },
    { id: "age", title: "Age", value: age, setState: setAge },
    {
      id: "phoneNumber",
      title: "Phone Number",
      value: phoneNumber,
      setState: setPhoneNumber,
    },
  ]

  const signUpSelectFields = [
    {
      id: "region",
      title: "Region",
      content: [
        "East Midlands",
        "East of England",
        "Greater London",
        "North East England",
        "North West England",
        "Northern Ireland",
        "Scotland",
        "South East England",
        "South West England",
        "Wales",
        "West Midlands",
      ],
      value: region,
      setState: handleRegionChange,
    },
    {
      id: "role",
      title: "Role",
      content: ["Volunteer", "Organisation", "Community leader"],
      value: role,
      setState: handleRoleChange,
    },

    {
      id: "gender",
      title: "Gender",
      content: ["Male", "Female", "Other"],
      value: gender,
      setState: handleGenderChange,
    },
    {
      id: "dbs",
      title: "DBS",
      content: ["Yes", "No"],
      value: DBS,
      setState: handleDBSChange,
    },
  ]

  const interests = data.getInterests
  console.log(interests)

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
            Sign up
          </Typography>
          <StyledFormBox component="form">
            <Grid container spacing={3}>
              {signUpTextFields.map((field) => (
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
              {signUpSelectFields.map((field) => (
                <Grid item lg={12}>
                  <FormControl fullWidth>
                    <InputLabel>{field.title}</InputLabel>
                    <Select
                      label={field.title}
                      id={field.id}
                      key={field.id}
                      value={field.value}
                      onChange={field.setState}
                    >
                      {field.content.map((elem) => (
                        <MenuItem value={elem}>{elem}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              ))}
              <Grid item lg={12}>
                <FormControl fullWidth>
                  <InputLabel>Interests</InputLabel>
                  <Select
                    multiple
                    label="Interests"
                    id="interests"
                    value={selectedInterests}
                    onChange={handleSelectChange}
                  >
                    {interests.map((interest: Interest) => (
                      <MenuItem
                        key={interest.id}
                        value={interest.interest_name}
                      >
                        {interest.interest_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                // register();
                navigate("/")
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </StyledFormBox>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default SignUp
