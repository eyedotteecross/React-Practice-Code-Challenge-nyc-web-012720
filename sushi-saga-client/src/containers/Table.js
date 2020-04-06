import React, { Fragment } from "react";

const Table = (props) => {
  const renderPlates = (sushis) => {
    let slicedSushis = sushis.slice(0, 4);
    return slicedSushis.map((x, index) => {
      return (
        <div key={index} className="empty-plate" style={{ top: -7 * index }} />
      );
    });
  };

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.moneys} remaining!
      </h1>
      <div className="table">
        <div className="stack">{renderPlates(props.sushis)}</div>
      </div>
    </Fragment>
  );
};

export default Table;
