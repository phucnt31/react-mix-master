import React from "react";
import CocktailCard from "./CocktailCard";

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found...</h4>
    );
  }

  const formattedDrinks = drinks.map((drink) => {
    const { idDrink, strDrinkThumb, strGlass, strDrink, strAlcoholic } = drink;
    return {
      id: idDrink,
      img: strDrinkThumb,
      glass: strGlass,
      name: strDrink,
      info: strAlcoholic,
    };
  });

  return (
    <div>
      {formattedDrinks.map((drink) => {
        return <CocktailCard key={drink.id} {...drink} />;
      })}
    </div>
  );
};

export default CocktailList;
