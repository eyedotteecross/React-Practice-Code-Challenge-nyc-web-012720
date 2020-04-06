import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi.js";

const SushiContainer = (props) => {
  const renderSushis = (sushis) => {
    let slicedSushis = sushis.slice(props.start, props.end);
    return slicedSushis.map((sushi) => {
      return <Sushi key={sushi.id} sushi={sushi} handleEat={props.handleEat}/>;
    });
  };

  return (
    <Fragment>
      <div className="belt">
        {renderSushis(props.sushis)}
        <MoreButton handleClick={props.updateIndexes} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
