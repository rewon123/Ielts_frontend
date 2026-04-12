import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/svg/Logo";
import FullButton from "../Buttons/FullButton";
import { NavLink } from "react-router-dom";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <img src="../../../Asset 4@4x.png" style={{ width: '40px' }} alt="" />
          <h1 style={{ marginLeft: "15px", fontFamily: 'cinzel' }} className="font20 whiteColor extraBold">
            IELTS Excellence
          </h1>
        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">

        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="services"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Ielts
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="projects"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Pte
          </Link>
        </li>
        {/* <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="blog"
            spy={true}
            smooth={true}
            offset={-60}
          >
            English
          </Link>
        </li> */}
        <li className="semiBold whiteColor font15 pointer">
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
                  <NavLink to="/Freeclass/IeltsListening" style={{ textDecoration: 'none' }} onClick={() => toggleSidebar(!sidebarOpen)}>
                    <li><a class="dropdown-item" href="">LISTENING</a></li>
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
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Study_Abroad
          </Link>
        </li>
      </UlStyle>
      <UlStyle className="flexSpaceCenter">
        <FullButton title="FREE CLASS" />

      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  // padding: 40px;
  li {
    margin: 20px 0;
  }
`;
