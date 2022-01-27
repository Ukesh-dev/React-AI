import React from "react";
import {
  CtaButton,
  CtaButtonContainer,
  CtaContainer,
  Ctah2,
  CtaP,
  CtaSection,
} from "./CtaStyles";

const Cta = () => {
  return (
    <CtaSection>
      <CtaContainer>
        <div>
          <CtaP>Request Early Access to Get Started</CtaP>
          <Ctah2>
            Register today & start exploring the endless possiblities.
          </Ctah2>
        </div>
        <CtaButtonContainer>
          <CtaButton>Get Started</CtaButton>
        </CtaButtonContainer>
      </CtaContainer>
    </CtaSection>
  );
};
export default Cta;
