import React from "react";
import { FeatureWrapper, FeatureHeading, FeatureDesc } from "./FeatureStyles";

const Feature = ({ text, title }) => {
  return (
    <FeatureWrapper>
      <FeatureHeading>{title}</FeatureHeading>
      <FeatureDesc>{text}</FeatureDesc>
    </FeatureWrapper>
  );
};

export default Feature;
