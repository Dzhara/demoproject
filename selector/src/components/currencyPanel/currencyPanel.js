import React from "react";
import { chunk, isUndefined } from "lodash";
import CheckboxGroup from "../checkboxGroup/CheckboxGroup";
import CloseIcon from "../closeIcon/closeIcon";
import {
  addUniqueArrayValue,
  removeUniqueArrayValue
} from "../../utils/arrayUtils";
import { itemsInRow } from "../../utils/constants";
import "./currencyPanel.css";

export default class CurrencyPanel extends React.Component {
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
      ],
      selectedItems: []
    };
  }

  get chunks() {
    return chunk(this.state.selectedItems, itemsInRow);
  }

  onDeselected = value => {
    if (!isUndefined(value)) {
      this.setState(prevState => {
        const newValue = removeUniqueArrayValue(prevState.selectedItems, value);
        return Object.assign({}, prevState, { selectedItems: newValue });
      });
    }
  };

  onSelected = (value, state) => {
    if (!isUndefined(value)) {
      this.setState(prevState => {
        const newValue = state
          ? addUniqueArrayValue(prevState.selectedItems, value)
          : removeUniqueArrayValue(prevState.selectedItems, value);
        return Object.assign({}, prevState, { selectedItems: newValue });
      });
    }
  };

  selectedItemTemplate = el => {
    return (
      <div
        className='selectedItem'
        onClick={() => {
          this.onDeselected(el);
        }}
        key={`selected-item-${el}`}
      >
        {el}
        <CloseIcon />
      </div>
    );
  };

  selectedItemsTemplate = () => {
    return (
      <div className='selectedItemsWrapper'>
        {this.chunks.map((chunk, index) => {
          return (
            <div className={"rowWrapper"} key={`selected-items-row-${index}`}>
              {chunk.map(el => {
                return this.selectedItemTemplate(el);
              })}
            </div>
          );
        })}
      </div>
    );
  };

  availableItemsTemplate = () => {
    return (
      <div className='itemsWrapper'>
        <CheckboxGroup
          onSelected={this.onSelected}
          selectedItems={this.state.selectedItems}
          source={this.state.source}
        />
      </div>
    );
  };

  render() {
    return (
      <div className='panelContainer'>
        {this.selectedItemsTemplate()}
        {this.availableItemsTemplate()}
      </div>
    );
  }
}
