import React from "react";
import { Container } from "../../GlobalStyles";
import {
  BrandContainer,
  BrandImgWrapper,
  BrandLogo,
  BrandWrapper,
} from "./BrandStyles";

const Brand = () => {
  return (
    <BrandWrapper>
      <Container>
        <BrandContainer>
          <BrandImgWrapper>
            <BrandLogo src="./assets/google.png"></BrandLogo>
          </BrandImgWrapper>
          <BrandImgWrapper>
            <BrandLogo src="./assets/shopify.png"></BrandLogo>
          </BrandImgWrapper>
          <BrandImgWrapper>
            <BrandLogo src="./assets/slack.png"></BrandLogo>
          </BrandImgWrapper>
          <BrandImgWrapper>
            <BrandLogo src="./assets/atlassian.png"></BrandLogo>
          </BrandImgWrapper>
          <BrandImgWrapper>
            <BrandLogo src="./assets/dropbox.png"></BrandLogo>
          </BrandImgWrapper>
        </BrandContainer>
      </Container>
    </BrandWrapper>
  );
};

export default Brand;
