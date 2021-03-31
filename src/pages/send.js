import NavBar from "../components/navbar";
import { FormBox, MyInput, StyledFooter, Submit } from "../components/styled";

const Send = () => {
  return (
    <>
      <NavBar />
      <FormBox>
        <h2>Money Transfer</h2>
        <form>
          <label>
            <MyInput type="text" placeholder="Receivers Account Number" />
          </label>
          <label>
            <MyInput type="text" placeholder="Amount" />
          </label>
          <label>
            <MyInput type="text" placeholder="Receivers Name" />
          </label>
          <Submit type="submit" value="Proceed" />
        </form>
      </FormBox>
      <StyledFooter />
    </>
  );
};

export default Send;
