import styled from "styled-components";
import { Container, GradientText } from "../../GlobalStyles";

export const FeaturesSection = styled.section``;

export const FeaturesContainer = styled(Container)`
  position: relative;
  z-index: 1;
`;
export const FeaturesWrapper = styled.div`
  position: relative;
  padding: 3rem;
  overflow: hidden;
  z-index: 1;
  background: #042c54;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &::before {
    position: absolute;
    content: "";
    z-index: -1;
    border-radius: 50%;
    background: #0f4279;
    /* background: green; */
    filter: blur(120px);
    width: 40%;
    aspect-ratio: 1;
    /* aspe */
    left: -270px;
    top: -220px;
  }
  &::after {
    content: "";
    position: absolute;
    position: absolute;
    width: 50%;
    aspect-ratio: 1;
    left: 706px;
    top: 320px;

    background: #1b78de;
    filter: blur(200px);
  }

  /* background-repeat: no-repeat;
  background-position: top bottom; */
`;
export const FeaturesHeadingWrapper = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  /* align-items: center; */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const FeaturesHeading = styled.h1`
  font-size: clamp(0.9rem, 8vw, 1.3rem);
  flex-basis: 30%;
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
export const FeaturesHeadingDesc = styled.p`
  font-size: clamp(0.5rem, 3vw, 1rem);
  flex-basis: 70%;
  color: #fff;
  @media (max-width: 768px) {
    margin-top: 1.2rem;
  }
`;
export const FeatureDescWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 3rem 0;
  flex-wrap: wrap;
`;
export const FeaturesDesc = styled(GradientText)`
  /* font-size: clamp(0.4rem, 2vw, 0.9rem); */

  @media (min-width: 768px) {
    flex-basis: 55%;
  }
`;
export const FeatureLink = styled.a`
  cursor: pointer;
  color: #ff8a71;
`;

export const FeaturedSection = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: flex-start;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 0.8rem;

  @media (max-width: 768px) {
    > * + * {
      margin-top: 2rem;
    }
  }
`;

export const FeaturesFutureContainer = styled.div`
  margin-top: 5rem;
  position: relative;
  /* padding: 4rem; */
  /* overflow: hidden; */

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 50%;
    aspect-ratio: 1;
    border-radius: 50%;
    /* left: -444px; */
    /* top: 1712px; */
    left: -200px;
    top: -200px;
    @media (max-width: 769px) {
      width: 100%;
      top: -100px;
      left: -100px;
    }

    background: #07325f;
    /* background: green; */
    filter: blur(200px);
  }
`;
export const FeaturesFutureContainerWrapper = styled(Container)`
  display: grid;
  /* padding: 0; */
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const FeaturesFutureColumn1 = styled.div`
  /* padding-right: 8rem; */
  padding-right: 1rem;
`;
export const FeaturesFutureColumn1Heading = styled(GradientText)`
  max-width: 30ch;
`;
export const FeaturesFutureColumn1Desc = styled.p`
  margin-block: 2rem;
`;
export const FeaturesFutureColumn2 = styled.div`
  > div {
    display: flex;
    /* align-items: flex-start; */
    justify-content: space-between;
  }
`;
// export const FeaturesFutureColumn2Wrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;
export const FeaturesFutureColumn2Data = styled.h2`
  font-size: 1rem;
  color: #fff;
  padding-top: 0.5rem;
  flex-basis: 30%;
  position: relative;
  color: #fff;

  &::before {
    content: "";
    position: absolute;
    width: 50px;
    height: 2px;
    background: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%),
      #ffffff;
    top: 0px;
    left: 0;
  }
  margin-bottom: 1.5rem;
`;
export const FeaturesFutureColumn3 = styled.div``;
export const FeaturesFutureColumn3Data = styled.p`
  margin-bottom: 1.5rem;
  flex-basis: 60%;
  font-size: clamp(0.5rem, 2vw, 0.8rem);
  color: var(--color-text);
`;
