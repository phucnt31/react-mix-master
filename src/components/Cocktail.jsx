import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import axios from "axios";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  console.log(params);
  return null;
};

const Cocktail = () => {
  return <div>Cocktail</div>;
};

export default Cocktail;
