import React from "react";

const Sushi = (props) => {
  let eaten 
  return (
    <div className="sushi">
      <div
        className="plate"
        onClick={() => {
          eaten = !eaten;
          console.log(eaten);
          props.handleEat(props.sushi.price);
        }}
      >
        {!eaten && (
          <img src={props.sushi.img_url} width="100%" alt={props.sushi.name} />
        )}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  );
};

export default Sushi;
