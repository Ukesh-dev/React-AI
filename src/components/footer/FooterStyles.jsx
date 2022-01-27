import styled from "styled-components";
import { Button, Container, GradientText, Section } from "../../GlobalStyles";

export const FooterSection = styled(Section)`
  padding-inline: 0;
  padding-bottom: 0;
  padding-top: clamp(2rem, 20vh, 8rem);
  margin-bottom: 0;
  margin-inline: 0;
  background: #031b34;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  justify-content: center;
`;

export const FooterHeader = styled(GradientText)`
  font-size: clamp(1.5rem, 20vw, 3.5rem);
  max-width: 821px;
  margin: 0 auto;
  text-align: center;
`;

export const FooterButtonWrapper = styled.div`
  flex-basis: 100%;
  text-align: center;
`;

export const FooterButton = styled(Button)`
  display: inline-block;
  outline: none;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  margin-block: clamp(2rem, 15vh, 4rem);
  padding: 1rem 2rem;
`;

export const FooterContent = styled.div`
  flex-basis: 100%;
  margin-top: clamp(2rem, 10vh, 3rem);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  justify-content: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding-inline: 1rem;
    text-align: center;
    gap: 3rem;
  }
  @media (max-width: 550px) {
    display: block;
    text-align: left;
  }

  > * {
    display: flex;
    flex-direction: column;

    > * {
      padding-top: 1.7rem;
    }
  }
`;

export const FooterColumn1 = styled.div`
  @media (min-width: 768px) {
    grid-column: span 2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 550px) {
    align-items: start;
  }
  align-items: center;
  /* justify-content: center; */
  text-align: left;

  > div {
    max-width: 40%;
    > * + * {
      margin-top: 1rem;
    }
  }
`;
export const FooterColumn1Logo = styled.img`
  max-width: 100px;
`;

export const FooterColumn1Text = styled.p`
  font-size: 12px;
`;
export const FooterColumn2 = styled.div`
  > :first-child {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
`;
export const FooterColumn2Link = styled.a`
  font-size: 12px;
`;
export const FooterColumn3 = styled.div`
  > :first-child {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
`;
export const FooterColumn3Link = styled.a`
  font-size: 12px;
`;
export const FooterColumn4 = styled.div`
  > :first-child {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
`;
export const FooterColumn4Link = styled.a`
  font-size: 12px;
  text-overflow: hidden;
`;

export const Footerfooter = styled.span`
  display: inline-block;
  padding-top: 3rem;
  font-size: 0.7rem;
  padding-bottom: 1rem;
`;
