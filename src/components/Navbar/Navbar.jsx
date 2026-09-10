import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
// Components
import Sidebar from "./Sidebar";
import Backdrop from "../Elements/Backdrop";

export default function Navbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: ""
  });

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSf4-zceyQi-YeHH3gyTjojn5DRDlPbCiaHg4aAjQN1aVWCPQA/formResponse";

    const data = new FormData();
    data.append("entry.1458476435", formData.name);
    data.append("entry.998766128", formData.phone);
    data.append("entry.2009468866", formData.course);

    fetch(formURL, {
      method: "POST",
      mode: "no-cors",
      body: data
    })
      .then(() => {
        alert("Form submitted successfully ✅");
        setFormData({ name: "", phone: "", course: "" });
        setShowModal(false);
      })
      .catch(() => {
        alert("Submission failed ❌");
      });
  };

  return (
    <>
      {/* Top Header Contact Bar */}
      <TopBar>
        <span>
          <span className="icon">📞</span> 01333411003
        </span>
        <span className="sep">|</span>
        <span>
          <span className="icon">✉️</span> Studyabroad@ieltsexcellence.com
        </span>
        <span className="sep">|</span>
        <span>
          <span className="icon">📍</span> Dhanmondi 32 Shukrabad Office
        </span>
      </TopBar>

      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}

      {/* Main Navbar */}
      <Wrapper isScrolled={y > 100}>
        <NavInner className="container">
         <NavLink className="pointer flexNullCenter" to="/" smooth={true} style={{ color: 'black', border: 'none' }}>
            <img src="../../../white.png" style={{ width: '40px' }} alt="" />
            <h1 style={{ marginLeft: "15px", fontFamily: 'cinzel' }} className="font20 extraBold">
              IELTS Excellence
            </h1>
          </NavLink>

          <BurgerWrapper onClick={() => toggleSidebar(!sidebarOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </BurgerWrapper>

          <UlWrapper>
            <li>
              <Link activeClass="active" to="home" spy={true} smooth={true} offset={-80}>
                Home
              </Link>
            </li>

            {/* Dropdown Menu for Free Classes */}
            <DropdownLi>
              <span className="dropdown-title">Free Classes ▾</span>
              <DropdownMenu>
                <SubDropdownLi>
                  <span className="sub-title">IELTS ▸</span>
                  <SubDropdownMenu>
                    <NavLink to="/Freeclass/IeltsListening">LISTENING</NavLink>
                    <NavLink to="/Freeclass/IeltsReading">READING</NavLink>
                    <NavLink to="/Freeclass/IeltsSpeaking">SPEAKING</NavLink>
                    <NavLink to="/Freeclass/IeltsWritingTask1">WRITING TASK 1</NavLink>
                    <NavLink to="/Freeclass/IeltsWritingTask2">WRITING TASK 2</NavLink>
                  </SubDropdownMenu>
                </SubDropdownLi>

                <SubDropdownLi>
                  <span className="sub-title">PTE ▸</span>
                  <SubDropdownMenu>
                    <NavLink to="/Freeclass/PteListening">LISTENING</NavLink>
                    <NavLink to="/Freeclass/PteReading">READING</NavLink>
                    <NavLink to="/Freeclass/PteSpeaking">SPEAKING</NavLink>
                    <NavLink to="/Freeclass/PteWritting">WRITING</NavLink>
                  </SubDropdownMenu>
                </SubDropdownLi>
              </DropdownMenu>
            </DropdownLi>

            <li>
              <Link activeClass="active" to="ielts" spy={true} smooth={true} offset={-80}>
                IELTS
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="PTE" spy={true} smooth={true} offset={-80}>
                PTE
              </Link>
            </li>
            <li>
              <NavLink activeClass="active" to="/English">
                English
              </NavLink>
            </li>
            <li>
              <Link activeClass="active" to="Study_Abroad" spy={true} smooth={true} offset={-80}>
                Study Abroad
              </Link>
            </li>
          </UlWrapper>

          <UlWrapperRight>
            <CtaButton onClick={() => setShowModal(true)}>
              Book a Free Class / Consultation
            </CtaButton>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>

      {/* Booking Form Modal */}
      {showModal && (
        <ModalBackdrop onClick={() => setShowModal(false)}>
          <ModalCard onClick={(e) => e.stopPropagation()} isMobile={isMobile}>
            <CloseButton onClick={() => setShowModal(false)}>✕</CloseButton>

            <ModalTitle isMobile={isMobile}>Book a Free Class / Consultation</ModalTitle>

            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="আপনার নাম *"
                value={formData.name}
                onChange={handleChange}
                isMobile={isMobile}
                required
              />

              <Input
                type="number"
                name="phone"
                placeholder="ফোন নাম্বার *"
                value={formData.phone}
                onChange={handleChange}
                isMobile={isMobile}
                required
              />

              <Select
                name="course"
                value={formData.course}
                onChange={handleChange}
                isMobile={isMobile}
                required
              >
                <option value="">কোর্স নির্বাচন করুন *</option>
                <option>IELTS</option>
                <option>PTE</option>
                <option>Basic</option>
                <option>Study Abroad</option>
              </Select>

              <SubmitBtn type="submit" isMobile={isMobile}>
                কল বুক করুন
              </SubmitBtn>
            </Form>
          </ModalCard>
        </ModalBackdrop>
      )}
    </>
  );
}

/* ================= STYLED COMPONENTS ================= */

const TopBar = styled.div`
  background: #0d0d0d;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  font-family: 'Poppins', sans-serif;

  span {
    display: flex;
    align-items: center;
    gap: 6px;
    white-space: nowrap;
  }
  .sep {
    color: #8a8a8a;
    font-weight: 400;
  }
  .icon {
    color: #ff2b2b;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 11px;
    padding: 6px 12px;
    gap: 6px;
    .sep { display: none; }
  }
`;

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 40px;
  left: 0;
  z-index: 999;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  height: ${(props) => (props.isScrolled ? "65px" : "80px")};
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    top: 58px;
    height: 60px;
  }
`;

const NavInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  margin: 0 auto;

  @media (max-width: 1000px) {
    padding: 0 20px;
  }
`;

const BrandLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
`;

const HexLogo = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 15px;
  color: #0d0d0d;
  background: linear-gradient(#fff, #fff) padding-box, #c9a227;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  border: 2px solid #c9a227;
`;

const BrandName = styled.h1`
  font-family: 'Playfair Display', serif;
  font-weight: 800;
  font-size: 24px;
  color: #0d0d0d;
  letter-spacing: 0.3px;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 28px;
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    color: #152a4e;
    font-weight: 600;
    font-size: 15px;
    text-decoration: none;
    cursor: pointer;
    padding-bottom: 4px;
    transition: color 0.2s ease;

    &:hover,
    &.active {
      border-bottom: 3px solid #152a4e;
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #ffffff;
  min-width: 180px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
  border-radius: 6px;
  padding: 8px 0;
  z-index: 10;
`;

const SubDropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 100%;
  background: #ffffff;
  min-width: 190px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
  border-radius: 6px;
  padding: 8px 0;

  a {
    display: block;
    padding: 8px 16px;
    color: #152a4e;
    font-size: 13.5px;
    border-bottom: none !important;

    &:hover {
      background: #f5f5f5;
      color: #ff2b2b;
    }
  }
`;

const DropdownLi = styled.li`
  position: relative;

  .dropdown-title {
    color: #152a4e;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    padding-bottom: 4px;
  }

  &:hover ${DropdownMenu} {
    display: block;
  }
`;

const SubDropdownLi = styled.div`
  position: relative;
  padding: 8px 16px;

  .sub-title {
    color: #152a4e;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    display: block;
  }

  &:hover ${SubDropdownMenu} {
    display: block;
  }

  &:hover {
    background: #f8f9fa;
  }
`;

const UlWrapperRight = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;

const CtaButton = styled.button`
  background: #ff2b2b;
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  padding: 12px 24px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 6px 16px rgba(255, 43, 43, 0.35);
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    opacity: 0.92;
    transform: translateY(-1px);
  }
`;

const BurgerWrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;

  span {
    width: 25px;
    height: 3px;
    background: #152a4e;
    border-radius: 2px;
  }

  @media (max-width: 1000px) {
    display: flex;
  }
`;

/* Modal Styled Components */
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 15px;
`;

const ModalCard = styled.div`
  width: 100%;
  max-width: 450px;
  background: #fff;
  border-radius: 14px;
  padding: ${(props) => (props.isMobile ? "25px" : "40px")};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 14px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #555;
`;

const ModalTitle = styled.h3`
  font-size: ${(props) => (props.isMobile ? "20px" : "24px")};
  margin-bottom: 20px;
  font-weight: 700;
  color: #0d0d0d;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  outline: none;
  font-size: ${(props) => (props.isMobile ? "13px" : "14px")};
  padding: ${(props) => (props.isMobile ? "12px" : "14px")};

  &:focus {
    border-color: #ff2b2b;
  }
`;

const Select = styled.select`
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  outline: none;
  font-size: ${(props) => (props.isMobile ? "13px" : "14px")};
  padding: ${(props) => (props.isMobile ? "12px" : "14px")};

  &:focus {
    border-color: #ff2b2b;
  }
`;

const SubmitBtn = styled.button`
  margin-top: 10px;
  border-radius: 6px;
  border: none;
  background: #ff2b2b;
  color: white;
  font-weight: 600;
  cursor: pointer;
  font-size: ${(props) => (props.isMobile ? "14px" : "16px")};
  padding: ${(props) => (props.isMobile ? "12px" : "14px")};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;