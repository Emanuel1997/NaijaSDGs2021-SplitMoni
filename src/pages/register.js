import NavBar from "../components/navbar";
import { FormDiv, MyInput, StyledFooter, Submit } from "../components/styled";

const Register = () => {
  return (
    <>
      <NavBar />
      <FormDiv>
        <form>
          <label>
            <MyInput type="text" placeholder="Phone Number" />
          </label>
          <Submit type="submit" value="Sign Up" />
        </form>
        <p className="big">Or</p>
        <label>
          <MyInput type="submit" value="Continue with Google" />
        </label>
        <label>
          <MyInput type="submit" value="Continue with Twitter" />
        </label>
      </FormDiv>
      <StyledFooter />
    </>
  );
};

export default Register;
