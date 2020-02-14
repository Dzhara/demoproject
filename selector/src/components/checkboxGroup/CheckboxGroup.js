import React from "react";
import PropTypes from "prop-types";
import Checkbox from "../checkbox/Checkbox";
import style from "./CheckboxGroup.module.scss";

export default class CheckboxGroup extends React.Component {

  render() {
    return (
      <div className={style.checkboxGroupWrapper}>
        {this.props.source.map((option) => {
          const optionLabel =
            option.label !== undefined && option.label !== null
              ? option.label
              : option;
          const optionValue =
            option.value !== undefined && option.value !== null
              ? option.value
              : option;
          const checked = this.props.selectedItems.includes(optionValue);
          return (<div className={style.checkboxGroupItem} key={`checkbox-item-${optionValue}`}>
            <Checkbox
              value={optionValue}
              label={optionLabel}
              checked={checked}
              onChange={state => {
                this.props.onSelected(optionValue, state);
              }}
            /></div>)
        })}
      </div>
    );
  }
}

CheckboxGroup.propTypes = {
  source: PropTypes.arrayOf(Object).isRequired,
  selectedItems: PropTypes.array
}

CheckboxGroup.defaultProps = {
  source: undefined
}
