import styled from "styled-components";

export const Navbar = styled.header`
  .main {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 2rem auto;
    align-items: center;

    img {
      width: 8rem;
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    margin: auto 2rem;
  }
`;

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 2rem 10rem;
  background-color: ${(props) => props.theme.color.secondary};
  position: fixed;
  bottom: 0;
  width: 100%;
`;
export const MyInput = styled.input`
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  background: inherit;
  font-size: inherit;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
export const FormBox = styled.div`
  width: 60%;
  margin: auto;
  border: 1px solid black;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 2.5rem;
  min-height: 50vh;
  h2 {
    margin-bottom: 2rem;
    text-align: center;
  }
`;

export const Submit = styled(MyInput)`
  background-color: ${(props) => props.theme.color.button};
  margin: 2rem auto;
`;

export const HomeDiv = styled.div`
  width: 85%;
  margin: auto;
  .top {
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 95%;
    img {
      width: 500px;
      height: 425px;
    }
    .top-one {
      align-self: center;
      margin-right: 2rem;
      display: flex;
      flex-direction: column;
      .links {
        margin-top: 8rem;
      }
    }
  }
  .download {
    padding: 0.5rem auto;
    background-color: ${(props) => props.theme.color.secondary};
    width: 60%;
    margin: auto;
    text-align: center;
  }
  .button1 {
    padding: 1.5rem 3rem;
    background-color: ${(props) => props.theme.color.tertiary};
    margin: 1rem;
    &:hover {
      cursor: pointer;
    }
  }
  .button2 {
    padding: 1.5rem 3rem;
    background-color: ${(props) => props.theme.color.button};
    margin: 1rem;
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const FormDiv = styled.div`
  width: 40%;
  margin: 10% auto;
  display: flex;
  flex-direction: column;
  p {
    text-align: center;
  }
  .big {
    margin: 1rem auto;
    font-size: 1.2rem;
  }
`;
