import React from "react";
import Tilt from "react-parallax-tilt";
import { Container } from "../../GlobalStyles";
import {
  HeroButton,
  HeroContent,
  HeroDescription,
  HeroForm,
  HeroHeading,
  HeroImg,
  HeroImgBox,
  HeroInput,
  HeroPeople,
  HeroPeopleDesc,
  HeroSection,
  HeroWrapper,
} from "./HeroStyles";

const Hero = React.forwardRef(
  ({ id, inView, setActiveCharacter, activeCharacter }, ref) => {
    React.useEffect(() => {
      if (inView) {
        setActiveCharacter(id);
      }
    }, [activeCharacter, inView, setActiveCharacter, id]);
    return (
      <HeroSection id={id}>
        <Container>
          <HeroWrapper>
            <HeroContent>
              <HeroHeading ref={ref}>
                Let's Build Something Amazing with GPT-3 OpenAI
              </HeroHeading>
              <HeroDescription>
                Yet bed any for travelling assistance indulgence upleasing. Not
                thoughts all exercise blessing. Indulgence way everything joy
                alteration boisterous the attachment. Party we years to order
                allow asked of.
              </HeroDescription>
              <HeroForm>
                <HeroInput placeholder="Enter your E-mail." />
                <HeroButton>Get Started</HeroButton>
              </HeroForm>
              <HeroPeople>
                <HeroImg src="./assets/people.png"></HeroImg>
                <HeroPeopleDesc>
                  1,600 people requested access a visit in last 24 hours
                </HeroPeopleDesc>
              </HeroPeople>
            </HeroContent>
            <HeroImgBox>
              <Tilt scale={1.1} tiltReverse={true}>
                <img src="./assets/ai.png" alt="ai" />
              </Tilt>
            </HeroImgBox>
          </HeroWrapper>
        </Container>
      </HeroSection>
    );
  }
);
export default Hero;
