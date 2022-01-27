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
const articleData = [
  {
    text1: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    text2: "Read Full Article",
    img: "./assets/blog01.png",
  },
  {
    text1: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    text2: "Read Full Article",
    img: "./assets/blog02.png",
  },
  {
    text1: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    text2: "Read Full Article",
    img: "./assets/blog03.png",
  },
  {
    text1: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    text2: "Read Full Article",
    img: "./assets/blog04.png",
  },
  {
    text1: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    text2: "Read Full Article",
    img: "./assets/blog05.png",
  },
];

const Article = ({
  id,
  activeCharacter,
  setActiveCharacter,
  observerMargin,
  pageHeight,
}) => {
  console.log(observerMargin);
  const { ref, inView } = useInView({
    // rootMargin: `-${
    //   pageHeight % 2 === 0 ? observerMargin - 1 : observerMargin
    // }px 0px -${observerMargin}px 0px`,
    threshold: 0.2,
  });
  React.useEffect(() => {
    if (inView) {
      setActiveCharacter(id);
    }
  }, [setActiveCharacter, id, inView]);
  return (
    <ArticleSection ref={ref}>
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
