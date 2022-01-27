import styled from "styled-components";
import { Container, GradientText } from "../../GlobalStyles";

export const PossibilitySection = styled.div``;
export const PossibilityContainer = styled(Container)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PossibilityImgWrapper = styled.div`
  flex-basis: 40%;
  display: grid;
  place-items: center;
`;
export const PossibilityImg = styled.img`
  width: 90%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
export const PossibilityDescWrapper = styled.div`
  padding-top: 2rem;
  flex-basis: 50%;
`;
export const PossibilityDesch3 = styled.h3`
  line-height: 30px;
  font-size: clamp(0.5rem, 2vw, 0.8rem);
`;
export const PossibilityDesch3II = styled.h3`
  font-size: clamp(0.5rem, 2vw, 0.8rem);
  margin-bottom: 1.2rem;
  color: #ff8a71;
`;
export const PossibilityDesh2 = styled(GradientText)`
  font-size: clamp(1.5rem, 2vw, 2rem);
`;
export const PossibilityDescP = styled.p`
  margin-block: 1.2rem;
  font-size: clamp(0.6rem, 2vw, 0.8rem);
`;
