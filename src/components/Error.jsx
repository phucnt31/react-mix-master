import React from "react";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div>
        <div>
          <img src={img} alt="not found" className="img" />
          <h3>Ohh! </h3>
          <p>We can't seem to find the page you're looking for</p>
          <Link to="/">back home</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h3>something went wrong</h3>
      </div>
    </div>
  );
};

export default Error;
