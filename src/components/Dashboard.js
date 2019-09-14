import React, { useReducer, useEffect } from 'react';
import { data } from '../data.js';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';
import LabelFields from './LabelField';
import Chart from './Chart';

const reducer = (state, action) => {
  switch (action.type) {
    case 'inputChange':
      return {
        ...state,
        tableValues: state.tableValues.map(data =>
          data.id == action.payload.id
            ? { ...data, [action.payload.key]: action.payload.value }
            : data
        )
      };
    case 'toggleDisabled':
      return {
        ...state,
        tableValues: state.tableValues.map(data =>
          data.id == action.payload.id
            ? { ...data, disabled: !data.disabled }
            : data
        )
      };
    case 'addRow':
      return {
        ...state,
        tableValues: [
          ...state.tableValues,
          {
            id: state.tableValues.length,
            'Station Code': '',
            Platform: '',
            Version: '',
            'CUTE Provider': '',
            'Connectivity Provider': '',
            'Connection name': '',
            'Local IT Contact details': '',
            'ASConnect active usage (Y/N)': '',
            disabled: false
          }
        ]
      };

    case 'initialState': {
      const { data } = action.payload;
      return {
        ...state,
        tableKeys: Object.values(data[0]),
        tableValues: data
          .filter((dt, i) => i !== 0)
          .map((dt, id) => {
            return {
              id,
              'Station Code': dt.A,
              Platform: dt.B,
              Version: dt.C,
              'CUTE Provider': dt.D,
              'Connectivity Provider': dt.E,
              'Connection name': dt.F,
              'Local IT Contact details': dt.G,
              'ASConnect active usage (Y/N)': dt.H,
              disabled: true
            };
          })
      };
    }

    default:
      throw new Error();
  }
};

const Dashboard = ({ ...props }) => {
  const [state, dispatcher] = useReducer(reducer, {});
  useEffect(() => {
    dispatcher({
      type: 'initialState',
      payload: { data }
    });
  }, []);
  console.log('state', state);
  return (
    <React.Fragment>
      <Tabs sid="users-group-tab">
        <Tab className="tab1" eventKey="my-achievements" title={'Data'}>
          <LabelFields state={state} dispatcher={dispatcher} {...props} />
        </Tab>
        <Tab eventKey="my-settings" title={'Chart'}>
          <Chart state={state} dispatcher={dispatcher} {...props} />
        </Tab>
      </Tabs>
    </React.Fragment>
  );
};

Dashboard.propTypes = {
  role: PropTypes.string.isRequired,
  language: PropTypes.arrayOf(PropTypes.string).isRequired
};

Dashboard.defaultProps = {};
export default Dashboard;
