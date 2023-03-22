import "./CreateCode.css";
import { Component } from "react";

class CreateCode extends Component {
  constructor() {
    super();
    this.state = {
      randomText: " ",
      code: "",
      //   showInfo: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  myArray = ["TOM254", "TOM05YU", "SAM254", "TAN304"];
  componentDidMount() {
    setInterval(() => {
      this.setState({
        randomText:
          this.myArray[Math.floor(Math.random() * this.myArray.length)],
      });
    }, 1000);
  }
  handleChange(e) {
    this.setState({ code: e.target.value });
  }
  handleSubmit(event) {
    alert(this.state.username);
    event.preventDefault();
    // this.setState({ showInfo: true });
  }
  render() {
    return (
      <div className="container">
        <div className="box">
          <div className="box-info">
            <p className="p1">Let’s Create Your Code</p>
            <p className="p2">
              We will use the name to generate your secret Teepz code
            </p>
            <form onSubmit={this.handleSubmit}>
              <input
                value={this.state.code}
                type="text"
                placeholder="Enter Nickname or business name"
                onChange={this.handleChange}
              />
            </form>
          </div>
          <button>confirm</button>
          <div className="suggest">
            <p className="p3">Suggestions </p>
            <p className="p4">{this.state.randomText}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateCode;
