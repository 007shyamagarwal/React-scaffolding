import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import find from 'lodash/find';
import sn from 'classnames';
import './dropdown.scss';

const blockName = 'dropdown-container';

const DropDown = ({
  heading,
  variant,
  values,
  selectedValue,
  onSelect,
  isStaticHeading,
  id,
  ...props
}) => {
  const [headingNew, setHeadingNew] = useState(selectedValue);
  useEffect(() => {
    if (heading) {
      setHeadingNew(heading);
    }
  }, [heading]);
  const handleDropDownSelect = (id, event) => {
    console.log('hey');
    const { value } = find(values, v => v.id == id);
    if (!isStaticHeading) setHeadingNew(value);
    onSelect(id, event);
  };
  return (
    <span className={sn(blockName)}>
      <Dropdown
        id={id}
        onSelect={(id, event) => {
          handleDropDownSelect(id, event);
        }}
        {...props}
      >
        <Dropdown.Toggle
          disabled={props.disabled}
          variant={variant}
          style={{ textTransform: 'capitalize' }}
          id="dropdown-basic"
        >
          {(typeof heading === 'object'
            ? heading.value
            : headingNew || heading
          ).toLowerCase()}
        </Dropdown.Toggle>

        <Dropdown.Menu id={id}>
          {values.map(dropDownItem => {
            return (
              <Dropdown.Item
                id={id}
                key={dropDownItem.id}
                disabled={dropDownItem.disabled}
                eventKey={dropDownItem.id}
              >
                {dropDownItem.value}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </span>
  );
};

DropDown.propTypes = {
  isColored: PropTypes.bool,
  isStaticHeading: PropTypes.bool,
  values: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  variant: PropTypes.string,
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  selectedValue: PropTypes.string,
  onSelect: PropTypes.func,
  disabled: PropTypes.bool
};

DropDown.defaultProps = {
  isColored: false,
  isStaticHeading: false,
  variant: '',
  heading: '',
  values: [],
  selectedValue: '',
  disabled: false,
  onSelect: () => {}
};

export default DropDown;
