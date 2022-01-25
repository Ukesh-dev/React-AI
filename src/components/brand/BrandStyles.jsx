import styled from "styled-components";
import { Section } from "../../GlobalStyles";

export const BrandWrapper = styled(Section)`
  padding: 0rem 0;
`;

export const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  text-align: center;
  justify-content: center;

  > * + * {
    /* margin-left: 2rem; */
    /* margin-block: 2rem; */
  }
`;

export const BrandImgWrapper = styled.div`
  /* max-width: 300px; */
  /* min-width: 120px; */
  width: 150px;
  display: grid;
  /* margin: 1rem; */
  place-items: center;
  margin-block: 1rem;
`;
export const BrandLogo = styled.img`
  /* width: 80%; */
`;
