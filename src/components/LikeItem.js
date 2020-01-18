import React from "react";

const LikeItem = function(props) {
  return (
    <li>
      <a
        className="likes__link"
        href={`#${props.item.id}`}
        onClick={props.likeItemOnClick}
      >
        <figure className="likes__fig">
          <img src={props.item.img} alt={props.item.title} />
        </figure>
        <div className="likes__data">
          <h4 className="likes__name">{props.item.title}</h4>
          <p className="likes__author">{props.item.author}</p>
        </div>
      </a>
    </li>
  );
};

export default LikeItem;
