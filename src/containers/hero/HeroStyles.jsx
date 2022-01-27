import styled from "styled-components";
import { GradientText } from "../../GlobalStyles";
export const HeroSection = styled.div`
  padding: 3.5rem 1rem;
  padding: clamp(4rem, 20vh, 10rem) 1rem 2rem;
  @media (max-width: 760px) {
    padding-bottom: 0;
  }
`;
export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
`;
export const HeroContent = styled.div`
  display: flex;
  flex-basis: 60%;
  justify-content: center;
  flex-direction: column;
`;
export const HeroHeading = styled(GradientText)`
  font-size: clamp(1.5rem, 5vw, 3.5rem);
  line-height: 1.2;
`;

export const HeroDescription = styled.p`
  font-size: clamp(0.3rem, 4vw, 1rem);
  line-height: 1.2;
  margin-block: 1.2rem;
  @media screen and (min-width: 500px) {
    max-width: 50ch;
  }
`;
export const HeroForm = styled.form`
  display: flex;
  width: 100%;
  margin-bottom: 1.5rem;
`;
export const HeroInput = styled.input`
  background: var(--color-footer);
  padding: 0.4rem 0.5rem;
  color: #fff;
  outline: none;
  flex-basis: 50%;
  font-size: clamp(0.3rem, 3vw, 0.9rem);
  border: var(--color-footer);
  border-radius: 5px 0 0 5px;
`;

export const HeroButton = styled.button`
  font-size: clamp(0.4rem, 1.5vw, 1rem);
  flex-basis: 27%;
  padding-inline: 0.8rem;
  color: #fff;
  font-weight: 700;
  background: #bd4b09;
  outline: none;
  border: none;
  border-radius: 0 5px 5px 0;
  @media screen and (max-width: 550px) {
    flex-basis: 30%;
  }
`;

export const HeroPeople = styled.div`
  font-size: clamp(0.1rem, 3vw, 0.9rem);
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    text-align: center;
    display: grid;
    place-items: center;
    margin: 0.9rem auto;
  }
`;
export const HeroImg = styled.img`
  width: 150px;
  margin-right: 0.5rem;
`;
export const HeroPeopleDesc = styled.p`
  white-space: wrap;
`;

export const HeroImgBox = styled.div`
  display: grid;
  place-items: center;
  flex-basis: 40%;
  > img {
    @media screen and (max-width: 768px) {
      max-width: 80%;
    }
  }
`;
