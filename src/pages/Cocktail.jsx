import React from "react";
import { useLoaderData, Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";
import { useQuery } from "@tanstack/react-query";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleCocktail = (id) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktail(id));
    return { id };
  };

const Cocktail = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(singleCocktail(id));
  const navigate = useNavigate();

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
        <button type="button" className="btn" onClick={() => navigate(-1)}>
          back home
        </button>
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
