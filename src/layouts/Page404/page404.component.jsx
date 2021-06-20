import React from "react";
import PropTypes from "prop-types";

const Page404 = ({ message }) => {
  return (
    <section className="page-not-found">
      <div className="container">
        <div className="outer">
          <h1>{message}</h1>
        </div>
      </div>
    </section>
  );
};

Page404.propTypes = {
  message: PropTypes.string,
};
Page404.defaultProps = {
  message: "Page not Found",
};
export default Page404;
