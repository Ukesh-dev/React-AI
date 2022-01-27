import styled from "styled-components";
import { Container, GradientText } from "../../GlobalStyles";

export const ArticleSection = styled.div`
  padding-top: 1rem;
`;

export const ArticleContainer = styled(Container)`
  /* > div {
    display: flex;
  } */
  /* height: 1000px; */
`;

export const ArticleHeader = styled(GradientText)`
  font-size: clamp(1.5rem, 6vw, 3.2rem);
  margin-block: 2rem;
  > span {
    display: block;
  }
`;

export const ArticleGrid = styled.div`
  flex: 1;
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-template-columns: 400.27px repeat(auto-fit, minmax(280.27px, 1fr));
  gap: 2rem;

  /* @media (max-width: 768px) {
    grid-template-columns: 327.27px repeat(auto-fit, minmax(200.27, 1fr));
  } */
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(327px, 1fr));
  }

  > :nth-child(1) {
    grid-row: span 2;
    > img {
      aspect-ratio: 1/ 0.75;
    }
    @media (max-width: 768px) {
      > img {
        aspect-ratio: 1/0.5;
      }
    }
  }
  /* grid-template-columns: repeat(auto-fit, minmax(100px, 250px)); */
  /* gap: 2rem; */
`;

// export const ArticleItemFlex = styled.div`
//   flex: 0.6;
//   margin-right: 2rem;
//   > div {
//     height: 100%;
//   }
//   img {
//     aspect-ratio: 1/0.75;
//   }
// `;

export const ArticleItem = styled.div`
  /* display: grid; */
  display: flex;
  flex-direction: column;
  /* background: var(--color-footer); */
  /* aspect-ratio: 1/1.5; */
  /* > * {
    grid-row: 1 /2;
    grid-column: 1 /2;
  } */
`;

export const ArticleItemImg = styled.img`
  aspect-ratio: 1 / 0.5;
  object-fit: cover;
`;

export const ArticleContent = styled.div`
  height: 100%;
  align-self: end;
  display: flex;
  flex-direction: column;
  background: var(--color-footer);
  justify-content: space-between;
  padding-block: 2rem;
  padding-inline: 1rem;
`;

export const ArticleContentP = styled.p`
  font-size: 11.649px;
  color: #fff;
  line-height: 35px;
`;

export const ArticleContenth2 = styled.h2`
  font-weight: 800;
  line-height: 30px;
  color: #fff;
  font-size: 25.11px;
`;

export const ArticleContenth3 = styled.h3`
  cursor: pointer;
`;
