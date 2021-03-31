import NavBar from "../components/navbar";
import { FormBox, MyInput, StyledFooter, Submit } from "../components/styled";

const Withdraw = () => {
  return (
    <>
      <NavBar />
      <FormBox>
        <h2>Enter Withdrawal Amount</h2>
        <form>
          <label>
            <MyInput type="text" placeholder="Amount" />
          </label>
          <label>
            <MyInput type="text" placeholder="Account Number" />
          </label>
          <Submit type="submit" value="Proceed" />
        </form>
      </FormBox>
      <StyledFooter />
    </>
  );
};

export default Withdraw;
