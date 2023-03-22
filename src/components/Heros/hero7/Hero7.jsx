import "./Hero7.css";
import { TbSquareRoundedPlus } from "react-icons/tb";

export function Hero7() {
  return (
    <div className="hero7">
      <h2 className="faq">faq</h2>
      <table className="table">
        <tbody>
          <tr>
            <td>
              <a href="">Can I use Excel Compare with out an account?</a>
            </td>
            <td>
              <TbSquareRoundedPlus />
            </td>
          </tr>
          <tr>
            <td>
              <a href="">Can I sign up using my Google or Apple account?</a>
            </td>
            <td>
              <TbSquareRoundedPlus />
            </td>
          </tr>
          <tr>
            <td>
              <a href="">Can I download the merged file?</a>
            </td>
            <td>
              <TbSquareRoundedPlus />
            </td>
          </tr>
          <tr>
            <td>
              <a href="">I forgot my password, What's next?</a>
            </td>
            <td>
              <TbSquareRoundedPlus />
            </td>
          </tr>
          <tr>
            <td>
              <a href="">Question Number Five</a>
            </td>
            <td>
              <TbSquareRoundedPlus />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
