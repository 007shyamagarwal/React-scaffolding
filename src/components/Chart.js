import React from 'react';
import { Sunburst } from 'react-vis';

const Chart = ({ state, ...props }) => {
  const { tableValues } = state;
  //   const mData = tableValues.map(dt => {});
  return (
    <React.Fragment>
      {/* <Sunburst
        hideRootNode
        colorType="literal"
        data={tableValues}
        height={300}
        width={350}
      /> */}
    </React.Fragment>
  );
};

Chart.propTypes = {};

Chart.defaultProps = {};
export default Chart;
