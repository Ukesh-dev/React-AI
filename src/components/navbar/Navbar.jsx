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

const navbarData = [
  {
    id: "home",
    text: "Home",
  },
  {
    id: "GPT3",
    text: "What is GPT3",
  },
  {
    id: "openAi",
    text: "Open AI",
  },
  {
    id: "caseStudies",
    text: "Case Studies",
  },
  {
    id: "library",
    text: "Library",
  },
];

const Navbar = ({ activeCharacter }) => {
  const ulref = React.useRef(null);
  // const [active, setActive] = useState(false);
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
    return navbarData.map(({ id, text }) => {
      let activeClass = activeCharacter == id ? "active" : "inactive";

      return (
        <NavbarItem key={id}>
          <NavbarLinks href={`#${id}`} className={activeClass}>
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
