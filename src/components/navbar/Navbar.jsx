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
import { navbarData } from "../../data/navbarData";

const Navbar = ({ activeCharacter }) => {
  const ulref = React.useRef(null);
  const [height, setHeight] = React.useState(0);
  const [toggle, setToggle] = React.useState(false);
  const getHeight = () => {
    if (ulref && ulref.current) {
      const height = ulref.current.getBoundingClientRect().height;
      setHeight(height);
    }
  };
  const [isFixed, setIsFixed] = React.useState(false);
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };
  const renderItems = () => {
    const handleCLick = (e) => {
      e.preventDefault();
      setToggle(!toggle);
      const element = e.target.getAttribute("href");
      let location = document.querySelector(element).offsetTop;
      if (location === 0) {
        window.scrollTo({
          top: 0,
        });
      } else {
        window.scrollTo({
          behavior: "smooth",
          left: 0,
          top: location - 90,
        });
      }
    };
    return navbarData.map(({ id, text }) => {
      let activeClass = activeCharacter === id ? "active" : "inactive";

      return (
        <NavbarItem key={id}>
          <NavbarLinks
            href={`#${id}`}
            onClick={handleCLick}
            className={activeClass}
          >
            {text}
          </NavbarLinks>
        </NavbarItem>
      );
    });
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <HeaderStyled fixed={isFixed}>
      <Container>
        <NavbarWrapper>
          <Logo>
            <img src="./assets/logo.svg" alt="" />
          </Logo>
          <NavbarItemsWrapper toggle={toggle} height={height}>
            <NavbarItems ref={ulref}>
              {renderItems()}
              <NavbarItem>
                <NavbarLinks href="#singin">Sign In </NavbarLinks>
                <div></div>
              </NavbarItem>
              <NavbarItem>
                <NavbarLinks href="#singin">Sign Up</NavbarLinks>
                <div></div>
              </NavbarItem>

              {/* <NavbarItem>
                <NavbarLinks href="#wgpt3">What is GPT3?</NavbarLinks>
                <div></div>
              </NavbarItem>
              <NavbarItem>
                <NavbarLinks href="#possibility">Open AI</NavbarLinks>
                <div></div>
              </NavbarItem>
              <NavbarItem>
                <NavbarLinks href="#features">Case Studies</NavbarLinks>
                <div></div>
              </NavbarItem>
              <NavbarItem>
                <NavbarLinks href="#blog">Library</NavbarLinks>
                <div></div>
              </NavbarItem>
              <NavbarItem>
                <NavbarLinks href="#singin">Sign In </NavbarLinks>
                <div></div>
              </NavbarItem>
              <NavbarItem>
                <NavbarLinks href="#singin">Sign Up</NavbarLinks>
                <div></div>
              </NavbarItem> */}
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
