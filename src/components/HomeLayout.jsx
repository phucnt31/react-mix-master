import React from "react";
import { Link } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <Link to="/">back home</Link>
      <h2>about</h2>
    </div>
  );
};

export default HomeLayout;
