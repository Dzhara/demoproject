import React from 'react';
import PropTypes from 'prop-types';
import { chunk } from 'lodash';
import Checkbox from '../checkbox/Checkbox';
import './CheckboxGroup.css';

export default class CheckboxGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const chunks = chunk(this.props.source, 3);

        return (
            <div className={'checkboxGroupWrapper'}>
                {
                    chunks.map((chunk, index) => {
                        return (
                            <div key={`currency-row-${index}`}>
                                {
                                    chunk.map((option) => {
                                        const optionLabel = option.label !== undefined && option.label !== null ? option.label : option;
                                        const optionValue = option.value !== undefined && option.value !== null ? option.value : option;
                                        const checked = this.props.selectedItems.includes(optionValue);
                                        return (
                                            <Checkbox
                                                key={`currency-item-${optionValue}`}
                                                value={optionValue}
                                                label={optionLabel}
                                                checked={checked}
                                                onChange={(state) => { this.props.onSelected(optionValue, state) }}
                                            />
                                        );
                                    })
                                }
                            </div>
                        )

                    })

                }
            </div >
        )
    }

}