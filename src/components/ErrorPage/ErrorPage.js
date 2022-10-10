import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="container text-center">
      <h2 className="mt-5">Oops sorry!</h2>
      <p>{error.status || error.message} Not Found :)</p>
    </div>
  );
};

export default ErrorPage;
