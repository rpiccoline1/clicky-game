import React from "react";
import "./friendCard.css";

const FriendCard = props => (
  <div className="card" onClick={props.picClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default FriendCard;