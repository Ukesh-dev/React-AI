import React from "react";
import { useInView } from "react-intersection-observer";
import {
  FooterButton,
  FooterButtonWrapper,
  FooterColumn1,
  FooterColumn1Logo,
  FooterColumn1Text,
  FooterColumn2,
  FooterColumn2Link,
  FooterColumn3,
  FooterColumn3Link,
  FooterColumn4,
  FooterColumn4Link,
  FooterContainer,
  FooterContent,
  Footerfooter,
  FooterHeader,
  FooterSection,
} from "./FooterStyles";

const Footer = ({ id, setActiveCharacter }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  React.useEffect(() => {
    if (inView) {
      setActiveCharacter(id);
    }
  }, [inView, setActiveCharacter, id]);
  return (
    <FooterSection>
      <FooterContainer id={id}>
        <FooterHeader>
          Do you want to step into the future before others
        </FooterHeader>
        <FooterButtonWrapper ref={ref}>
          <FooterButton>Request Early Access</FooterButton>
        </FooterButtonWrapper>
        <FooterContent>
          <FooterColumn1>
            <div>
              <FooterColumn1Logo src="./assets/logo.svg" />
              <FooterColumn1Text>
                Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
              </FooterColumn1Text>
            </div>
          </FooterColumn1>
          <FooterColumn2>
            <FooterColumn2Link>Links</FooterColumn2Link>
            <FooterColumn2Link>Ovenrons</FooterColumn2Link>
            <FooterColumn2Link>Social Media</FooterColumn2Link>
            <FooterColumn2Link>Contacts</FooterColumn2Link>
          </FooterColumn2>
          <FooterColumn3>
            <FooterColumn3Link>Company</FooterColumn3Link>
            <FooterColumn3Link>Terms & Condition</FooterColumn3Link>
            <FooterColumn3Link>Privacy Policy</FooterColumn3Link>
            <FooterColumn3Link>Contact</FooterColumn3Link>
          </FooterColumn3>
          <FooterColumn4>
            <FooterColumn4Link>Get in touch</FooterColumn4Link>
            <FooterColumn4Link>
              Crechterwoord K12 182 DK Alknjkcb
            </FooterColumn4Link>
            <FooterColumn4Link>085-132567</FooterColumn4Link>
            <FooterColumn4Link>info@payme.net</FooterColumn4Link>
          </FooterColumn4>
        </FooterContent>
        <Footerfooter>© 2021 GPT-3. All rights reserved.</Footerfooter>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
