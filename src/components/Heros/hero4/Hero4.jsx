import "./Hero4.css";
import QuickSetUp from "../images/QuickSetUp.svg";
import ReceivePayment from "../images/ReceivePayment.svg";
import Tracktips from "../images/Track-tips.svg";
export function Hero4() {
  return (
    <div className="hero4">
      <h2 className="heading">What We Are Known For</h2>
      <div className="boxs">
        <div className="box">
          <div className="ball">
            <img src={QuickSetUp} alt="" />
          </div>
          <h3 className="box-head">Quick Setup</h3>
          <p className="box-para">
            Lorem ipsum dolor sit amet consectetur. Cursus vestibulum .
          </p>
        </div>
        <div className="box">
          <div className="ball">
            <img src={ReceivePayment} alt="" />
          </div>
          <h3 className="box-head">Receive Payment</h3>
          <p className="box-para">
            FLorem ipsum dolor sit amet consectetur. Cursus vestibulum sit mi
            suspendisse sed eleifen
          </p>
        </div>
        <div className="box">
          <div className="ball">
            <img src={Tracktips} alt="" />
          </div>
          <h3 className="box-head">Track Tips Received</h3>
          <p className="box-para">
            FLorem ipsum dolor sit amet consectetur. Cursus vestibulum sit mi
            suspendisse sed eleifen
          </p>
        </div>
      </div>
    </div>
  );
}
