import "./Hero7.css";
// import { TbSquareRoundedPlus } from "react-icons/tb";
import { Accordion } from "react-bootstrap";

export function Hero7() {
  return (
    <div className="hero7">
      <h2 className="faq">faq</h2>
      <Accordion className="mt-5 p-3">
        <Accordion.Item eventKey="0" className="item">
          <Accordion.Header>
            Can I use Excel Compare with out an account?
          </Accordion.Header>
          <Accordion.Body>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="item">
          <Accordion.Header>
            Can I sign up using my Google or Apple account?
          </Accordion.Header>
          <Accordion.Body>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="item">
          <Accordion.Header>Can I download the merged file?</Accordion.Header>
          <Accordion.Body>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" className="item">
          <Accordion.Header>
            I forgot my password, What's next?
          </Accordion.Header>
          <Accordion.Body>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
