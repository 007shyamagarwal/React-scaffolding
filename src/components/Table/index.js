import React from 'react';
import PropTypes from 'prop-types';
import { Table as BootstrapTable, Button } from 'react-bootstrap';
import Input from '../Input';
import DropDown from '../DropDown';
import './table.scss';

const values = {
  Platform: [{ id: 0, value: 'p1' }, { id: 1, value: 'p2' }],
  Version: [
    { id: 0, value: 'v90' },
    { id: 1, value: 'V1' },
    { id: 2, value: 'v91/V1' },
    { id: 3, value: 'v91' },
    { id: 4, value: 'v91/ECUSE' },
    { id: 5, value: 'No ASConnect' },
    { id: 6, value: 'V90 / ECUSE' },
    { id: 7, value: 'ECUSE' }
  ],
  'CUTE Provider': [
    { id: 0, value: 'EDGE' },
    { id: 1, value: 'SITA' },
    { id: 2, value: 'RESA' },
    { id: 3, value: 'ULTRA' },
    { id: 4, value: 'ARINC' },
    { id: 5, value: 'AMADEUS' },
    { id: 6, value: 'RELIANCE' },
    { id: 7, value: 'SITA (Counters)/ARINC(Gates)' }
  ],
  'Connectivity Provider': [
    { id: 0, value: 'SITA' },
    { id: 1, value: 'ARINC' },
    { id: 2, value: 'AMADEUS' },
    { id: 3, value: 'S2S VPN' },
    { id: 4, value: 'SITA/ARINC' }
  ],
  'Connection name': [
    { id: 0, value: 'APH' },
    { id: 1, value: 'Express IP' },
    { id: 2, value: 'AVINET' },
    { id: 3, value: 'ACUS' },
    { id: 4, value: 'S2S VPN' },
    { id: 5, value: 'Express IP/AVINET' }
  ],
  'ASConnect active usage (Y/N)': [
    { id: 0, value: 'Yes' },
    { id: 1, value: 'No' }
  ]
};

const Table = ({ keys = [], data = [], dispatcher }) => {
  return (
    <BootstrapTable className="table" striped bordered>
      <thead>
        {keys.map(key => {
          return (
            <th key={key} style={{ textTransform: 'capitalize' }}>
              {key}
            </th>
          );
        })}
        <th />
      </thead>
      <tbody>
        {data.map((dataObj, i) => {
          return (
            <tr key={dataObj._id} className="table__row table__row--inactive">
              <>
                {keys.map(key => {
                  return (
                    <td key={key}>
                      {key !== 'Local IT Contact details' &&
                      key !== 'Station Code' ? (
                        <DropDown
                          id={i}
                          values={values[key]}
                          value={dataObj[key]}
                          heading={dataObj[key]}
                          disabled={dataObj.disabled}
                          onSelect={(id, event) => {
                            dispatcher({
                              type: 'inputChange',
                              payload: {
                                id: event.target.id,
                                key,
                                value: values[key][id].value
                              }
                            });
                          }}
                        />
                      ) : (
                        <Input
                          id={i}
                          value={dataObj[key]}
                          disabled={dataObj.disabled}
                          onChange={ev =>
                            dispatcher({
                              type: 'inputChange',
                              payload: {
                                id: ev.target.id,
                                key,
                                value: ev.target.value
                              }
                            })
                          }
                        />
                      )}
                    </td>
                  );
                })}
                <Button
                  id={i}
                  style={{ margin: '40px 16px 0' }}
                  onClick={ev =>
                    dispatcher({
                      type: 'toggleDisabled',
                      payload: {
                        id: ev.target.id
                      }
                    })
                  }
                >
                  Edit
                </Button>
              </>
            </tr>
          );
        })}
      </tbody>
    </BootstrapTable>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatcher: PropTypes.func.isRequired
};

Table.defaultProps = {
  displayColorTile: true,
  colorTileWidth: '35px',
  onSelect: null,
  tableId: ''
};
export default Table;
