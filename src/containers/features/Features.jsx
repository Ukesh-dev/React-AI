import React from "react";
import {
  FeatureDescWrapper,
  FeaturesFutureContainerWrapper,
  FeaturesSection,
  FeaturedSection,
  FeatureLink,
  FeaturesContainer,
  FeaturesDesc,
  FeaturesFutureColumn1,
  FeaturesFutureColumn1Heading,
  FeaturesFutureColumn1Desc,
  FeaturesFutureColumn2,
  FeaturesFutureContainer,
  FeaturesHeading,
  FeaturesHeadingDesc,
  FeaturesHeadingWrapper,
  FeaturesWrapper,
  FeaturesFutureColumn2Data,
  FeaturesFutureColumn3Data,
} from "../../containers/features/FeaturesStyles";
import Feature from "../../components/feature/Feature";
import { featuresData } from "../../data/featuresData";
const Features = React.forwardRef(
  ({ id, inView, activeCharacter, setActiveCharacter }, ref) => {
    React.useEffect(() => {
      if (inView) {
        setActiveCharacter(id);
      }
    }, [inView, activeCharacter, setActiveCharacter, id]);
    return (
      <FeaturesSection id={id} ref={ref}>
        <FeaturesContainer>
          <FeaturesWrapper>
            <FeaturesHeadingWrapper>
              <FeaturesHeading>What is GPT-3</FeaturesHeading>
              <FeaturesHeadingDesc>
                We so opinion friends me message as delight. Whole front do of
                plate heard oh ought. His defective nor convinced residence own.
                Connection has put impossible own apartments boisterous. At
                jointure ladyship an insisted so humanity he. Friendly bachelor
                entrance to on by.
              </FeaturesHeadingDesc>
            </FeaturesHeadingWrapper>
            <FeatureDescWrapper>
              <FeaturesDesc>
                The possibilities are beyond your imagination
              </FeaturesDesc>
              <FeatureLink>Enquiry the letter</FeatureLink>
            </FeatureDescWrapper>
            <FeaturedSection>
              <Feature
                title="Chatbots"
                text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
              ></Feature>
              <Feature
                title="Knowledgebase"
                text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
              ></Feature>
              <Feature
                title="Education"
                text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
              />
            </FeaturedSection>
          </FeaturesWrapper>
        </FeaturesContainer>
        <FeaturesFutureContainer className="gradint__bg">
          <FeaturesFutureContainerWrapper>
            <FeaturesFutureColumn1>
              <FeaturesFutureColumn1Heading>
                The Future is Now and You Just Need To Realize It. Step into
                Future Today & Make it Happen.
              </FeaturesFutureColumn1Heading>
              <FeaturesFutureColumn1Desc>
                Request Early Access to Get Started
              </FeaturesFutureColumn1Desc>
            </FeaturesFutureColumn1>
            <FeaturesFutureColumn2>
              {featuresData.map(({ title, text }, index) => {
                return (
                  <div key={index}>
                    <FeaturesFutureColumn2Data key={index}>
                      {title}
                    </FeaturesFutureColumn2Data>
                    <FeaturesFutureColumn3Data>
                      {text}
                    </FeaturesFutureColumn3Data>
                  </div>
                );
              })}
            </FeaturesFutureColumn2>
          </FeaturesFutureContainerWrapper>
        </FeaturesFutureContainer>
      </FeaturesSection>
    );
  }
);

export default Features;
