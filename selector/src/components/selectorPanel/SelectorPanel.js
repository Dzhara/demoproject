import React from "react";
import PropTypes from "prop-types";
import CheckboxGroup from "../checkboxGroup/CheckboxGroup";
import CloseIcon from "../closeIcon/CloseIcon";
import style from "./SelectorPanel.module.scss";

export default class SelectorPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: []
    };
  }

  onDeselected = value => {
    if (value === undefined) return;

    this.setState(prevState => {
      const newItems = prevState.selectedItems.slice();
      const index = prevState.selectedItems.indexOf(value);
      newItems.splice(index, 1);
      return Object.assign({}, prevState, { selectedItems: newItems });
    });

  };

  onSelected = (value) => {
    if (value === undefined) return;

    this.setState(prevState => {
      const newItems = prevState.selectedItems.slice();
      const index = prevState.selectedItems.indexOf(value);
      if (index === -1) {
        newItems.push(value);
      } else newItems.splice(index, 1);
      return Object.assign({}, prevState, { selectedItems: newItems });
    });

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
        {
          this.state.selectedItems.map((el) => {
            return this.selectedItemTemplate(el);
          })
        }
      </div>
    );
  };

  availableItemsTemplate = () => {
    return (
      <div className={style.availableItemsWrapper}>
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
