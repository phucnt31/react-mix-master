import React from "react";
import Wrapper from "../assets/wrappers/CocktailCard";

const CocktailCard = ({ id, img, name, info, glass }) => {
  return (
    <Wrapper>
      <img src={img} alt={name} className="img" />
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
      </div>
    </Wrapper>
  );
};

export default CocktailCard;
