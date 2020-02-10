import React from "react";
import PropTypes from "prop-types";
import { chunk, isUndefined } from "lodash";
import CheckboxGroup from "../checkboxGroup/CheckboxGroup";
import CloseIcon from "../closeIcon/CloseIcon";
import {
  addUniqueArrayValue,
  removeUniqueArrayValue
} from "../../utils/arrayUtils";
import { itemsInRow } from "../../utils/constants";
import style from "./SelectorPanel.module.scss";

export default class SelectorPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        className={style.selectedItem}
        key={`selected-item-${el}`}
      >
        {el}
        <CloseIcon onClick={() => {
          this.onDeselected(el);
        }} />
      </div>
    );
  };

  selectedItemsTemplate = () => {
    return (
      <div className={style.selectedItemsWrapper}>
        {this.chunks.map((chunk, index) => {
          return (
            <div
              className={style.rowWrapper}
              key={`selected-items-row-${index}`}
            >
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
      <div className={style.itemsWrapper}>
        <CheckboxGroup
          onSelected={this.onSelected}
          selectedItems={this.state.selectedItems}
          source={this.props.source}
        />
      </div>
    );
  };

  render() {
    return (
      <div className={style.panelContainer}>
        {this.selectedItemsTemplate()}
        {this.availableItemsTemplate()}
      </div>
    );
  }
}

SelectorPanel.propTypes = {
  source: PropTypes.arrayOf(Object)
};
