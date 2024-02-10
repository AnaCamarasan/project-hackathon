import {useState} from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';

const StyledFormBox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: theme.shadows[3], // Use theme shadows for consistency
  }));

const defaultTheme = createTheme();

 const FormComponent = () => {
    const [email, setEmail] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [role, setRole] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [DBS, setDBS] = useState<string>("");
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const navigate = useNavigate();

  function register() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        firstName: firstName,
        surname: lastName,
        username: username,
        password: password,
        phone: phoneNumber,
        role: role,
        age: age,
        gender: gender,
        location: location,
      }),
    };
    fetch("http://localhost:5000/register", requestOptions)
      .then((response) => {
        if (response.status !== 200)
          alert("Failed to sign up: " + response.status);
        else navigate("/");
      })
      .catch((error) => {
        alert("Failed to sign up: " + error);
      });
  }

   // Handler functions
   const handleGenderChange = (event: SelectChangeEvent) => {
    setGender(event.target.value);
  };
  const handleDBSChange = (event: SelectChangeEvent) => {
    setDBS(event.target.value);
  };
  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    setSelectedInterests(typeof value === 'string' ? value.split(',') : value);
  };
  const handleLocationChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value);
  };
  const handleRoleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: '1rem',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4">
            Sign up
          </Typography>
          <StyledFormBox component="form">
            <Grid container  spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={firstName} // Bind the input value to the email state
                  onChange={(e) => setFirstName(e.target.value)} // Update the email state on change
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName} // Bind the input value to the email state
                  onChange={(e) => setLastName(e.target.value)} // Update the email state on change
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="user-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  autoFocus
                  value={username} // Bind the input value to the email state
                  onChange={(e) => setUsername(e.target.value)} // Update the email state on change
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email} // Bind the input value to the email state
                  onChange={(e) => setEmail(e.target.value)} // Update the email state on change
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password} // Bind the input value to the email state
                  onChange={(e) => setPassword(e.target.value)} // Update the email state on change
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="age"
                  name="age"
                  fullWidth
                  id="age"
                  label="Age"
                  value={age} // Bind the input value to the email state
                  onChange={(e) => setAge(e.target.value)} // Update the email state on change
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="location">Location</InputLabel>
                  <Select
                    label={"location"}
                    labelId="location"
                    id="location"
                    value={location}
                    onChange={handleLocationChange}
                  >
                    <MenuItem value="Scotland">Scotland</MenuItem>
                    <MenuItem value="Northern Ireland">
                      Northern Ireland
                    </MenuItem>
                    <MenuItem value="North East England">
                      North East England
                    </MenuItem>
                    <MenuItem value="North West England">
                      North West England
                    </MenuItem>
                    <MenuItem value="East Midlands">East Midlands</MenuItem>
                    <MenuItem value="West Midlands">West Midlands</MenuItem>
                    <MenuItem value="East of England">East of England</MenuItem>
                    <MenuItem value="Wales">Wales</MenuItem>
                    <MenuItem value="Greater London">Greater London</MenuItem>
                    <MenuItem value="South West England">
                      South West England
                    </MenuItem>
                    <MenuItem value="South East England">
                      South East England
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="phone number"
                  label="Phone Number"
                  name="phone number"
                  autoComplete="phone number"
                  value={phoneNumber} // Bind the input value to the email state
                  onChange={(e) => setPhoneNumber(e.target.value)} // Update the email state on change
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="role">Role</InputLabel>
                  <Select
                    label={"role"}
                    labelId="role"
                    id="role"
                    value={role}
                    onChange={handleRoleChange}
                  >
                    <MenuItem value="volunteer">Volunteer</MenuItem>
                    <MenuItem value="organisation">Organisation</MenuItem>
                    <MenuItem value="community leader">
                      Community Leader
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="interests">Interests</InputLabel>
                  <Select
                    label="Interests"
                    labelId="interests"
                    multiple
                    id="interests"
                    value={selectedInterests}
                    onChange={handleSelectChange}
                  >
                    <MenuItem value="Art">Art</MenuItem>
                    <MenuItem value="Athletics">Athletics</MenuItem>
                    <MenuItem value="Entertainment and Music">Entertainment and Music</MenuItem>
                    <MenuItem value="Travel">Travel</MenuItem>
                    <MenuItem value="STEM"> STEM</MenuItem>
                    <MenuItem value="Food and Cooking">Food and Cooking</MenuItem>
                    <MenuItem value="Nature">Nature</MenuItem>
                    <MenuItem value="Fundraising">Fundraising</MenuItem>
                    <MenuItem value="Fashion">Fashion</MenuItem>
                    <MenuItem value="Culture">Culture</MenuItem>
                    <MenuItem value="Adventures">Adventures</MenuItem>
                    <MenuItem value="Gaming">Gaming</MenuItem>
                    <MenuItem value="Healthcare">Healthcare</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="gender">Gender</InputLabel>
                  <Select
                    label={"gender"}
                    labelId="gender"
                    id="gender"
                    value={gender}
                    onChange={handleGenderChange}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="non-binary">Non-binary</MenuItem>
                    <MenuItem value="prefer-not-to-say">
                      Prefer not to say
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="DBS">DBS</InputLabel>
                  <Select
                    label={"DBS"}
                    labelId="DBS"
                    id="DBS"
                    value={DBS}
                    onChange={handleDBSChange}
                  >
                    <MenuItem value="yes">Yes</MenuItem>
                    <MenuItem value="no">No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="Receive updates on volunteering opportunities via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                register();
                navigate("/");

              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </StyledFormBox>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default FormComponent;