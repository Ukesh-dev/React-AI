import React from "react";
import { useInView } from "react-intersection-observer";
import {
  ArticleContainer,
  ArticleContenth2,
  ArticleContenth3,
  ArticleGrid,
  ArticleItemFlex,
  ArticleContent,
  ArticleItemImg,
  ArticleHeader,
  ArticleItem,
  ArticleSection,
} from "./ArticleStyles";
import { articleData } from "../../data/articleData";

const Article = ({ id, activeCharacter, setActiveCharacter }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  React.useEffect(() => {
    if (inView) {
      setActiveCharacter(id);
    }
  }, [activeCharacter, setActiveCharacter, id, inView]);
  return (
    <ArticleSection id={id} ref={ref}>
      <ArticleContainer>
        <ArticleHeader>
          A lot is happening,
          <span>We are bloggin about it.</span>
        </ArticleHeader>
        <div>
          {/* <ArticleItemFlex>
            <ArticleItem>
              <ArticleItemImg src="./assets/blog01.png"></ArticleItemImg>
              <ArticleContent>
                <div>
                  <ArticleContenth3>Sep 26, 2021</ArticleContenth3>
                  <ArticleContenth2>
                    GPT-3 and Open AI is the future. Let us Explore how it is?
                  </ArticleContenth2>
                </div>
                <ArticleContenth3>Read Full Article</ArticleContenth3>
              </ArticleContent>
            </ArticleItem>
          </ArticleItemFlex> */}
          <ArticleGrid>
            {articleData.map(({ title, text1, text2, img }, index) => {
              return (
                <React.Fragment key={index}>
                  <ArticleItem key={index}>
                    <ArticleItemImg src={img}></ArticleItemImg>
                    <ArticleContent>
                      <div>
                        <ArticleContenth3>{text1}</ArticleContenth3>
                        <ArticleContenth2>{title}</ArticleContenth2>
                      </div>
                      <ArticleContenth3>{text2}</ArticleContenth3>
                    </ArticleContent>
                  </ArticleItem>
                </React.Fragment>
              );
            })}
          </ArticleGrid>
        </div>
      </ArticleContainer>
    </ArticleSection>
  );
};

export default Article;
