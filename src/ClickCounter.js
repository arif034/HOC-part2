import { Component } from "react";
import HOCComponent from "./HOCComponent";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <button onClick={incrementCount}>Clicked {count} times</button>;
  }
}

export default HOCComponent(ClickCounter);
