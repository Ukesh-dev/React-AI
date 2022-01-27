import React from "react";
import Tilt from "react-vanilla-tilt";
import { Container, GradientText } from "../../GlobalStyles";
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
        console.log("in View");
        setActiveCharacter(id);
      }

      // activeClass =
      //   props.activeCharacter === props.data.name
      //     ? "character-block--active"
      //     : "";
    }, [inView, setActiveCharacter, id]);
    return (
      <HeroSection>
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
              <Tilt
                style={{ background: "none" }}
                options={{ scale: 0, max: 35 }}
              >
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
