import React from 'react';
import Table from './Table';
import { Button } from 'react-bootstrap';

const LabelFields = ({ state = {}, dispatcher }) => {
  console.log('state', state);
  const handleSave = () => {
    // const json2xls = require('json2xls');
    // console.log(state.tableValues);
    // const xls = json2xls(state.tableValues);
    // fs.writeFileSync('data.xlsx', xls, 'binary');
  };
  const { tableKeys, tableValues } = state;
  return (
    <>
      <Table keys={tableKeys} data={tableValues} dispatcher={dispatcher} />
      <Button
        onClick={() =>
          dispatcher({
            type: 'addRow'
          })
        }
      >
        Add Row
      </Button>
      <Button onClick={() => handleSave()}>Save to Excel</Button>
    </>
  );
};

export default LabelFields;
