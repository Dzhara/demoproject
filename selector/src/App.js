import React from "react";
import SelectorPanel from "./components/selectorPanel/selectorPanel";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: [
        { label: "EUR", value: "EUR" },
        { label: "PLN", value: "PLN" },
        { label: "GEL", value: "GEL" },
        { label: "DKK", value: "DKK" },
        { label: "CZK", value: "CZK" },
        { label: "GBP", value: "GBP" },
        { label: "SEK", value: "SEK" },
        { label: "USD", value: "USD" },
        { label: "RUB", value: "RUB" }
      ]
    };
  }

  render() {
    return (
      <div className='App'>
        <div>Selector demo</div>
        <SelectorPanel source={this.state.source} />
      </div>
    );
  }
}
