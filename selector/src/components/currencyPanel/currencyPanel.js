import React from 'react';
import { chunk, isUndefined } from 'lodash';
import CheckboxGroup from '../checkboxGroup/CheckboxGroup';
import { addUniqueArrayValue, removeUniqueArrayValue } from '../../utils/arrayUtils';
import './currencyPanel.css';

export default class CurrencyPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            source: [
                { label: 'EUR', value: 'EUR' },
                { label: 'PLN', value: 'PLN' },
                { label: 'GEL', value: 'GEL' },
                { label: 'DKK', value: 'DKK' },
                { label: 'CZK', value: 'CZK' },
                { label: 'GBP', value: 'GBP' },
                { label: 'SEK', value: 'SEK' },
                { label: 'USD', value: 'USD' },
                { label: 'RUB', value: 'RUB' }
            ],
            selectedItems: []
        }
    }

    onDeselected = (value) => {
        if (!isUndefined(value)) {
            this.setState((prevState) => {
                const newValue = removeUniqueArrayValue(prevState.selectedItems, value);
                return Object.assign({}, prevState, { selectedItems: newValue });
            });
        }
    }

    onSelected = (value, state) => {
        if (!isUndefined(value)) {
            this.setState((prevState) => {
                const newValue = state ? addUniqueArrayValue(prevState.selectedItems, value) : removeUniqueArrayValue(prevState.selectedItems, value);
                return Object.assign({}, prevState, { selectedItems: newValue });
            });
        }
    }

    render() {
        const chunks = chunk(this.state.selectedItems, 3);
        return (
            <div className='panelContainer'>
                <div className='selectedItemsWrapper'>
                    {
                        chunks.map((chunk, index) => {
                            return (
                                <div className={'rowWrapper'} key={`selected-items-row-${index}`}>
                                    {chunk.map((el) => {
                                        return (
                                            <div className='selectedItem' onClick={() => { this.onDeselected(el) }} key={`selected-item-${el}`}>{el}
                                                <div className='close'></div>
                                            </div>)
                                    })}
                                </div>)

                        })
                    }
                </div>
                <div className='itemsWrapper'>
                    <CheckboxGroup
                        onSelected={this.onSelected}
                        selectedItems={this.state.selectedItems}
                        source={this.state.source}
                    />
                </div>
            </div>
        )

    }


}