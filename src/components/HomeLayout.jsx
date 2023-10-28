import React from "react";
import { Link, Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <nav>navbar</nav>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
