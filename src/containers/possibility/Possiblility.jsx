import React from "react";
import InView, { useInView } from "react-intersection-observer";
import {
  PossibilityContainer,
  PossibilityImgWrapper,
  PossibilitySection,
  PossibilityImg,
  PossibilityDescWrapper,
  PossibilityDesch3,
  PossibilityDescP,
  PossibilityDesch3II,
  PossibilityDesh2,
} from "./PossibilityStyles";

const Possiblility = ({ setActiveCharacter, id }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  React.useEffect(() => {
    if (inView) {
      setActiveCharacter(id);
    }
  }, [inView, setActiveCharacter, id]);
  return (
    <PossibilitySection id={id}>
      <PossibilityContainer ref={ref}>
        <InView triggerOnce={true} rootMargin="500px">
          {({ ref, inView }) => (
            <PossibilityImgWrapper ref={ref}>
              {inView && (
                <PossibilityImg src="./assets/possibility.png"></PossibilityImg>
              )}
            </PossibilityImgWrapper>
          )}
        </InView>
        <PossibilityDescWrapper>
          <PossibilityDesch3>
            Request Early Access to Get Started
          </PossibilityDesch3>
          <PossibilityDesh2>
            The possibilities are beyond your imagination
          </PossibilityDesh2>
          <PossibilityDescP>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </PossibilityDescP>
          <PossibilityDesch3II>
            Request Early Access to Get Started
          </PossibilityDesch3II>
        </PossibilityDescWrapper>
      </PossibilityContainer>
    </PossibilitySection>
  );
};

export default Possiblility;
