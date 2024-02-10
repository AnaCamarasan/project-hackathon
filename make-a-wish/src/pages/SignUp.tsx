import { Select, TextInput, Button, SelectItem } from "carbon-components-react";
import styled from "styled-components";
import FormComponent from "../components/FormComponent";

const StyledFormContainer = styled.div`
  max-width: 300px;
  margin: 6rem auto;
  border: 2px solid #000; /* Example border */
  padding: 20px; /* Add some padding */
 
`;

// Styled form
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px; /* Space between form items */
  font-size: 1.2rem;
`;


const SignUp = () => {
  return (
    // <StyledFormContainer>
    //   <StyledForm>
    //     <TextInput
    //       id="first-name"
    //       labelText="First Name"
    //       placeholder="Enter your first name"
    //       type="text"
    //       required
    //     />
    //     <TextInput
    //       id="last-name"
    //       labelText="Last Name"
    //       placeholder="Enter your last name"
    //       type="text"
    //       required
    //     />
    //     <TextInput
    //       id="email"
    //       labelText="Email"
    //       placeholder="Enter your email"
    //       type="email"
    //       required
    //     />
    //     <TextInput
    //       id="password"
    //       labelText="Password"
    //       placeholder="Enter your password"
    //       type="password"
    //       required
    //     />
    //     <TextInput
    //       id="phone"
    //       labelText="Phone number"
    //       placeholder="Enter your phone number"
    //       type="password"  
    //       required
    //     />
    //     <Select
    //       id="role"
    //       defaultValue="Volunteer"
    //       labelText="Role"
    //     >
    //       <SelectItem value="placeholder-item" text="Choose a role" />
    //       <SelectItem value="volunteer" text="Volunteer" />
    //       <SelectItem value="organisation" text="Organisation" />
    //     </Select>
    //     <TextInput
    //       id="age"
    //       labelText="Age"
    //       placeholder="Enter your age"
    //       type="age"
    //       required
    //     />
    //     <Select required id="gender" defaultValue="Male" labelText="Gender">
    //       <SelectItem value="placeholder-item" text="Choose your gender" />
    //       <SelectItem value="male" text="Male" />
    //       <SelectItem value="female" text="Female" />
    //       <SelectItem value="other" text="Other" />
    //     </Select>
    //     <Select required id="region" defaultValue="London" labelText="Region">
    //       <SelectItem value="placeholder-item" text="Choose your region" />
    //       <SelectItem value="cornwall" text="Cornwall" />
    //       <SelectItem value="cumbria" text="Cumbria" />
    //       <SelectItem value="east_midlands" text="East Midlands" />
    //       <SelectItem value="east_of_england" text="East of England" />
    //       <SelectItem value="england" text="England" />
    //       <SelectItem value="herefordshire" text="Herefordshire" />
    //       <SelectItem value="london" text="London" />
    //       <SelectItem value="north_east" text="North East" />
    //       <SelectItem value="north_west" text="North West" />
    //       <SelectItem value="northern_ireland" text="Northern Ireland" />
    //       <SelectItem value="northumberland" text="Northumberland" />
    //       <SelectItem value="scotland" text="Scotland" />
    //       <SelectItem value="south_east" text="South East" />
    //       <SelectItem value="south_west" text="South West" />
    //       <SelectItem value="suffolk" text="Suffolk" />
    //       <SelectItem value="wales" text="Wales" />
    //       <SelectItem value="west_midlands" text="West Midlands" />
    //       <SelectItem
    //         value="yorkshire_and_the_humber"
    //         text="Yorkshire and the Humber"
    //       />
    //     </Select>

    //     <Button
    //       kind="primary"
    //       style={{ backgroundColor: "rgb(0, 97, 177)", color: "white", fontSize: '1rem' }}
    //       tabIndex={0}
    //       type="submit"
    //     >
    //       Sign Up
    //     </Button>
    //   </StyledForm>
    //   <p>Already have an account? <a href="/">Log in.</a></p>
    // </StyledFormContainer>
    <FormComponent />
  );
};

export default SignUp;
