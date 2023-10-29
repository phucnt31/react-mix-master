import React from "react";

const CocktailCard = ({ id, img, name, info, glass }) => {
  return (
    <article>
      <img src={img} alt={name} className="img" />
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
      </div>
    </article>
  );
};

export default CocktailCard;
