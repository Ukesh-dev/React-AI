import styled from "styled-components";
import { GradientText } from "../../GlobalStyles";

export const FeatureWrapper = styled.div``;
export const FeatureHeading = styled.h2`
  position: relative;
  color: #fff;

  &::before {
    content: "";
    position: absolute;
    width: 50px;
    height: 2px;
    background: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%),
      #ffffff;
    top: -10px;
    left: 0;
  }
`;
export const FeatureDesc = styled.p`
  margin-top: 1.2rem;
  max-width: 80%;
  font-size: clamp(0.6rem, 2vw, 1rem);
  color: #fff;
  font-weight: 400;
`;
