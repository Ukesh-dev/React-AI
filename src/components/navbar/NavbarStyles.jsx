import styled from "styled-components";
import { Button } from "../../GlobalStyles";

export const HeaderStyled = styled.header`
  padding: 0.9rem 0;
  /* background-size: cover; */
  /* background-position: center; */
  background: -moz-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* opera 11.10+ */
  background: -o-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* ie 10+ */
  background: -ms-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );
`;

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  /* padding: 2rem 6rem; */
`;
export const Logo = styled.div`
  @media screen and (max-width: 768px) {
    order: 1;
  }
  flex-basis: clamp(80px, 10vw, 120px);
  > img {
    width: 62.01px;
    height: 16.02px;
  }
`;

export const NavbarItemsWrapper = styled.div`
  /* background: transparent; */

  overflow: hidden;
  @media screen and (max-width: 768px) {
    transition: all 0.35s ease;
    order: 4;
    flex-basis: 100%;
    /* flex-grow: 1; */
    @media screen and (max-width: 768px) {
      height: ${({ toggle, height }) => (toggle ? height : 0)}px;
    }
  }
`;

export const NavbarItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  > * + * {
    margin-left: clamp(1rem, 5vw, 1.5rem);
  }
  > :last-child,
  > :nth-last-child(2) {
    display: none;
  }
  @media screen and (max-width: 550px) {
    > :last-child,
    > :nth-last-child(2) {
      display: block;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    > * {
      margin: 0;
      text-align: center;
    }
  }
  @media screen and (max-width: 550px) {
    display: grid;
    grid-template-rows: repeat(auto, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const NavbarItem = styled.li`
  padding: 1rem 0rem;
  list-style: none;

  @media (max-width: 768px) {
    padding: 0.5rem 0;
    text-align: left;
  }
`;
export const NavbarLinks = styled.a`
  color: #fff;
  font-weight: 500;
  font-size: clamp(0.5rem, 1.5vw, 1rem);
  cursor: pointer;
  text-decoration: none;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const NavbarButton = styled.button`
  display: inline-block;
  outline: none;
  cursor: pointer;
  border: none;
  font-weight: 500;
  line-height: 1;
  font-size: 0.9rem;
  background: transparent;
  color: #fff;
  padding: 0.7rem 0.5rem;

  /* padding: 0.8rem 3rem; */
`;
export const NavButtonWrapper = styled.div`
  display: flex;
  /* align-items: flex-end; */
  justify-content: center;
  @media screen and (max-width: 768px) {
    order: 2;
  }
  > :nth-child(2) {
    background: #bd4b09;
    margin-inline: 0.5rem;
    border-radius: 5px;
  }
  @media screen and (max-width: 550px) {
    > :nth-child(1),
    > :nth-child(2) {
      display: none;
    }
  }
`;

export const MenuBtn = styled(Button)`
  width: 30px;
  padding-top: 0.3rem;
  /* transition: all 5s ease; */
  font-size: 1.5rem;
  @media screen and (max-width: 768px) {
    order: 3;
  }
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
