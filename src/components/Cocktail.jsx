import React from "react";
import { useLoaderData, Link, Navigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleCocktailUrl}${id}`);
  return { data, id };
};

const Cocktail = () => {
  const { data } = useLoaderData();
  if (!data.drinks) {
    return <Navigate to="/" />;
  }

  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: img,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const ingredients = Object.keys(singleDrink)
    .filter(
      (item) => item.startsWith("strIngredient") && singleDrink[item] !== null
    )
    .map((item) => singleDrink[item]);
  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={img} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name : </span>
            {name}
          </p>
          <p>
            <span className="drink-data">Category : </span>
            {category}
          </p>
          <p>
            <span className="drink-data">Info : </span>
            {info}
          </p>
          <p>
            <span className="drink-data">Ingredients : </span>
            {ingredients.map((item, index) => {
              return (
                <span className="ing" key={index}>
                  {item}
                  {index < ingredients.length - 1 ? ", " : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">Glass : </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">Instructions : </span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
