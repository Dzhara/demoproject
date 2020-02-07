import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox as CheckboxSemantic } from 'semantic-ui-react';

import './Checkbox.css';
export default class Checkbox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            formattedValue: JSON.stringify(this.props.value)
        }
    }


    onChange = (e, { checked }) => {
        this.props.onChange(checked);
    }

    render() {
        const className = ['badge', this.props.checked ? 'selected' : null].join(' ');
        return (
            <CheckboxSemantic
                className={className}
                label={this.props.label}
                value={this.props.formattedValue}
                name={this.props.name}
                checked={this.props.checked}
                onChange={this.onChange}
            />
        );
    }
}

Checkbox.propTypes = {
    onChange: PropTypes.func,
    label: PropTypes.string,
    value: PropTypes.any,
    name: PropTypes.string,
    checked: PropTypes.bool
}

Checkbox.defaultProps = {
    onChange: () => { },
    label: null,
    value: undefined,
    name: null,
    checked: false
}