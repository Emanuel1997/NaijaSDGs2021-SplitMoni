import NavBar from "../components/navbar";
import { FormDiv, MyInput, StyledFooter, Submit } from "../components/styled";

const Login = () => {
  return (
    <>
      <NavBar />
      <FormDiv>
        <form>
          <label>
            <MyInput type="text" placeholder="Username" />
          </label>
          <label>
            <MyInput type="password" placeholder="Password" />
            <p>Forgot password?</p>
          </label>
          <Submit type="submit" value="Sign In" />
        </form>
        <label>
          <MyInput type="submit" value="Sign In with Google" />
        </label>
      </FormDiv>
      <StyledFooter />
    </>
  );
};

export default Login;
