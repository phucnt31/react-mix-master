import React from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";
import { useQuery } from "@tanstack/react-query";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktails = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const resp = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return resp.data.drinks;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "";
    await queryClient.ensureQueryData(searchCocktails(searchTerm));
    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktails(searchTerm));

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
