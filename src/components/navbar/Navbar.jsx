import React from "react";
import { Container } from "../../GlobalStyles";
import {
  Logo,
  NavbarItems,
  NavbarItemsWrapper,
  NavbarWrapper,
  NavbarItem,
  NavbarLinks,
  NavbarButton,
  HeaderStyled,
  NavButtonWrapper,
  MenuBtn,
} from "./NavbarStyles";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const ulref = React.useRef(null);
  const [height, setHeight] = React.useState(0);
  const [toggle, setToggle] = React.useState(false);
  const getHeight = () => {
    if (ulref && ulref.current) {
      const height = ulref.current.getBoundingClientRect().height;
      setHeight(height);
    }
  };
  return (
    <HeaderStyled>
      <Container>
        <NavbarWrapper>
          <Logo>
            <img src="./assets/logo.svg" alt="" />
          </Logo>
          <NavbarItemsWrapper toggle={toggle} height={height}>
            <NavbarItems ref={ulref}>
              <NavbarItem>
                <NavbarLinks href="#home">Home</NavbarLinks>
              </NavbarItem>
              <NavbarItem>
                <NavbarLinks href="#wgpt3">What is GPT3?</NavbarLinks>
              </NavbarItem>
              <NavbarItem>
                <NavbarLinks href="#possibility">Open AI</NavbarLinks>
              </NavbarItem>
              <NavbarItem>
                <NavbarLinks href="#features">Case Studies</NavbarLinks>
              </NavbarItem>
              <NavbarItem>
                <NavbarLinks href="#blog">Library</NavbarLinks>
              </NavbarItem>
              <NavbarItem>
                <NavbarLinks href="#singin">Sign In </NavbarLinks>
              </NavbarItem>
              <NavbarItem>
                <NavbarLinks href="#singin">Sign Up</NavbarLinks>
              </NavbarItem>
            </NavbarItems>
          </NavbarItemsWrapper>
          <NavButtonWrapper>
            <NavbarButton>Sign In</NavbarButton>
            <NavbarButton>Sign Up</NavbarButton>
            <MenuBtn
              onClick={() => {
                setToggle(!toggle);
                getHeight();
              }}
              toggle={toggle}
            >
              {toggle ? <RiCloseLine /> : <RiMenu3Line />}
            </MenuBtn>
          </NavButtonWrapper>
        </NavbarWrapper>
      </Container>
    </HeaderStyled>
  );
};

export default Navbar;
