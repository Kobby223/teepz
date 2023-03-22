// import mailbox from "../images/mailbox.svg";
// import "./Hero8.css";
// export function Hero8() {
//   return (
//     <div className="hero8">
//       <div className="item">
//         <img src={mailbox} alt="" />
//       </div>
//       <div className="contents item">
//         <h3 className="h3 item">Help is on the way</h3>
//         <p className="pp item">
//           Have additional questions for us? Get in touch
//         </p>
//         <div className="item">
//           <button className="btnn item">Get Help</button>
//           <button className="btnn-out item"></button>
//         </div>
//       </div>
//     </div>
//   );
// }
import "./Hero8.css";
import GetStarted from "../images/mailbox.svg";
// import GetStarted from "../images/GetStarted.svg";
export function Hero8() {
  return (
    <div className="hero8">
      <div className="get-started item">
        <img src={GetStarted} alt="" />
      </div>
      <div className="content item">
        <h2 className="h1 item">Help is on the way</h2>
        <p className="p item">
          Have additional questions for us? Get in touch.
        </p>
        <button className="btn item">Get Help</button>
      </div>
    </div>
  );
}
