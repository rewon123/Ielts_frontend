import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "./Sidebar";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import FullButton from "../Buttons/FullButton";
import Backdrop from "../Elements/Backdrop";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <div className="darkBg" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 10 }}>
        {/* <h1>djsjdkjskdj</h1> */}
        <div className="" style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100vw' }}>
          <h3 style={{ letterSpacing: '2px', fontSize: '.89rem' }}>📞 01333411003 | ✉️ Studyabroad@ieltsexcellence.com | 📍 Dhanmondi 32 Shukrabad Office</h3>
        </div>
      </div>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px", marginTop: '16px' } : { height: "80px", marginTop: '18px' }}>
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <img src="../../../white.png" style={{ width: '40px' }} alt="" />
            <h1 style={{ marginLeft: "15px", fontFamily:'cinzel' }} className="font20 extraBold">
              IELTS Excellence
            </h1>
          </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="home" spy={true} smooth={true} offset={-80}>
                Home
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="ielts" spy={true} smooth={true} offset={-80}>
                IELTS
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="PTE" spy={true} smooth={true} offset={-80}>
                PTE
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="English" spy={true} smooth={true} offset={-80}>
                English
              </Link>
            </li>
            {/* <li className="">
              <p activeClass="active" style={{ padding: "10px 15px" }} to="Free_Classes" spy={true} smooth={true} offset={-80}>
                Free Classes

              </p>
            </li> */}
            <li class="nav-item dropdown semiBold font15 pointer">

              <p activeClass="active" className=" dropdown-toggle" role="button" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false" style={{ padding: "10px 15px", textDecoration: 'none' }} to="Free_Classes" spy={true} smooth={true} offset={-80}>
                Free Classes

              </p>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickable">
                <li class="p-3 dropend">
                  <a class="dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    IELTS
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <NavLink to="/Freeclass/IeltsListening" style={{ textDecoration: 'none' }}>
                      <li><a class="dropdown-item" href="#">LISTENING</a></li>
                    </NavLink>

                    <li><a class="dropdown-item" href="#">READING</a></li>
                    <li><a class="dropdown-item" href="#">SPEAKING</a></li>
                    <li><a class="dropdown-item" href="#">WRITING TASK 1</a></li>
                    <li><a class="dropdown-item" href="#">WRITING TASK 2</a></li>
                  </ul>
                </li>
                <li class="p-3 dropend">
                  <a class="dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    PTE
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a class="dropdown-item" href="#">LISTENING</a></li>
                    <li><a class="dropdown-item" href="#">READING</a></li>
                    <li><a class="dropdown-item" href="#">SPEAKING</a></li>
                    <li><a class="dropdown-item" href="#">WRITING</a></li>
                  </ul>
                </li>

              </ul>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "0" }} to="Study_Abroad " spy={true} smooth={true} offset={-80}>
                Study Abroad
              </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <Link to="bookClass"  >
              <FullButton title="Book a Free Class / Consultation" />
            </Link>

          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;


