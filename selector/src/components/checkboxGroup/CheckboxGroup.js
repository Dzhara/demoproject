import React from "react";
import PropTypes from "prop-types";
import { chunk } from "lodash";
import { itemsInRow } from "../../utils/constants";
import Checkbox from "../checkbox/Checkbox";
import style from "./CheckboxGroup.module.scss";

export default class CheckboxGroup extends React.Component {
  get chunks() {
    return chunk(this.props.source, itemsInRow);
  }

  render() {
    return (
      <div className={style.checkboxGroupWrapper}>
        {this.chunks.map((chunk, index) => {
          return (
            <div key={`checkbox-row-${index}`}>
              {chunk.map(option => {
                const optionLabel =
                  option.label !== undefined && option.label !== null
                    ? option.label
                    : option;
                const optionValue =
                  option.value !== undefined && option.value !== null
                    ? option.value
                    : option;
                const checked = this.props.selectedItems.includes(optionValue);
                return (
                  <Checkbox
                    key={`checkbox-item-${optionValue}`}
                    value={optionValue}
                    label={optionLabel}
                    checked={checked}
                    onChange={state => {
                      this.props.onSelected(optionValue, state);
                    }}
                  />
                );
              })}
            </div>
          );
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
