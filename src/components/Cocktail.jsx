import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import axios from "axios";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleCocktailUrl}${id}`);
  return { data, id };
};

const Cocktail = () => {
  const { data } = useLoaderData();
  console.log(data);
  return <div>Cocktail</div>;
};

export default Cocktail;
