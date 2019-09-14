import React from 'react';
import { FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import './input.scss';

const Input = ({ placeholder, disabled, value, ...restProps }) => {
  const blockName = 'input-container';
  return (
    <React.Fragment>
      <FormControl
        style={{ minWidth: '200px' }}
        as="textarea"
        rows="3"
        className={blockName}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        type="text"
        {...restProps}
      />
    </React.Fragment>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  iconImage: PropTypes.string,
  isClearable: PropTypes.bool,
  onClear: PropTypes.func
};

Input.defaultProps = {
  placeholder: '',
  disabled: false,
  value: '',
  icon: '',
  iconImage: '',
  isClearable: false,
  onClear: noop
};

export default Input;
