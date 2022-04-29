import React from "react";
import { Helmet } from "react-helmet-async";

const TitleChange = ({ title }) => {
  return (
    <Helmet>
      <title>{title} Car Rev</title>
    </Helmet>
  );
};

export default TitleChange;
