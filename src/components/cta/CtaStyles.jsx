import styled from "styled-components";
import { Button, Container, Section } from "../../GlobalStyles";

export const CtaSection = styled(Section)`
  padding: 0;
  margin-inline: 1rem;
`;

export const CtaContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding-block: 1.2rem;
  padding-inline: 1rem;
  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10.7236px;
  max-width: 1000px;

  > div {
    margin-right: 2rem;
  }
  @media (max-width: 550px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    > div {
      margin-right: 0;
    }
  }
`;

export const CtaP = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: #0e0e0e;
`;
export const Ctah2 = styled.h2`
  font-family: Manrope;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  font-size: clamp(1rem, 2vw, 24px);
  /* or 187% */

  color: #000000;
`;
export const CtaButtonContainer = styled.div`
  display: grid;
  place-items: center;
`;

export const CtaButton = styled(Button)`
  display: inline-block;
  background: #000000;
  padding: 0.7rem 1rem;
  white-space: nowrap;
  border: none;
  outline: none;
  font-size: clamp(0.5rem, 2vw, 0.9rem);
  font-weight: bold;
  border-radius: 40px;

  @media (max-width: 550px) {
    margin-top: 1rem;
  }
`;
