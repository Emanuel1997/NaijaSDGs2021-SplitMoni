import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { HomeDiv } from "../components/styled";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HomeDiv>
        <div className="top">
          <div className="top-one">
            <h1>The Easiest way to send and receive money in installments</h1>
            <p>Pay your money at low interest anytime anywhere</p>
            <div className="links">
              <Link className="button1" to="/withdraw">
                Withdraw Money
              </Link>
              <Link className="button2" to="/send">
                Send Money
              </Link>
            </div>
          </div>
          <div className="top-two">
            <img src="/images/pana.png" alt="pana" />
            <div className="download">Download split money on google play</div>
          </div>
        </div>
      </HomeDiv>
      <Footer />
    </div>
  );
};

export default Home;
