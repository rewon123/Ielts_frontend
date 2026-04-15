import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/svg/Logo";
import FullButton from "../Buttons/FullButton";
import { NavLink } from "react-router-dom";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  const [y, setY] = useState(window.scrollY);


  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: ""
  });

  const [isMobile, setIsMobile] = useState(false);

  // ✅ Responsive handler (BEST PRACTICE)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

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

    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSf4-zceyQi-YeHH3gyTjojn5DRDlPbCiaHg4aAjQN1aVWCPQA/formResponse";

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
      })
      .catch(() => {
        alert("Submission failed ❌");
      });
  };

  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <NavLink to="/" className="flexNullCenter">
          <div className="flexNullCenter">
            <img src="../../../Asset 4@4x.png" style={{ width: '40px' }} alt="" />
            <h1 style={{ marginLeft: "15px", fontFamily: 'cinzel' }} className="font20 whiteColor extraBold">
              IELTS Excellence
            </h1>
          </div>
        </NavLink>
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
            IELTS
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
            PTE
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
                  <NavLink to="/Freeclass/IeltsListening" style={{ textDecoration: 'none' }}>
                    <li><a class="dropdown-item" href="#">LISTENING</a></li>
                  </NavLink>

                  <NavLink to="/Freeclass/IeltsReading" style={{ textDecoration: 'none' }}>
                    <li><a class="dropdown-item" href="#">READING</a></li>
                  </NavLink>
                  <NavLink to="/Freeclass/IeltsSpeaking" style={{ textDecoration: 'none' }}>
                    <li><a class="dropdown-item" href="#">SPEAKING</a></li>
                  </NavLink>
                  <NavLink to="/Freeclass/IeltsWritingTask1" style={{ textDecoration: 'none' }}>
                    <li><a class="dropdown-item" href="#">WRITING TASK 1</a></li>
                  </NavLink>
                  <NavLink to="/Freeclass/IeltsWritingTask2" style={{ textDecoration: 'none' }}>
                    <li><a class="dropdown-item" href="#">WRITING TASK 2</a></li>
                  </NavLink>
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
      <UlStyle className="flexSpaceCenter" onClick={() => setShowModal(true)} >
        <FullButton title="FREE CLASS" />

      </UlStyle>
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "15px"
          }}
        >
          {/* STOP PROPAGATION */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "450px",
              background: "#fff",
              borderRadius: "14px",
              padding: isMobile ? "25px" : "40px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
              position: "relative"
            }}
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "12px",
                background: "transparent",
                border: "none",
                fontSize: "18px",
                cursor: "pointer"
              }}
            >
              ✕
            </button>

            <h3 style={{
              fontSize: isMobile ? "20px" : "26px",
              marginBottom: "20px"
            }}>
              Book a Free Class / Consultation
            </h3>

            <form style={styles.form} onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                placeholder="আপনার নাম *"
                value={formData.name}
                onChange={handleChange}
                style={{
                  ...styles.input,
                  fontSize: isMobile ? "13px" : "14px",
                  padding: isMobile ? "12px" : "14px"
                }}
                required
              />

              <input
                type="number"
                name="phone"
                placeholder="ফোন নাম্বার *"
                value={formData.phone}
                onChange={handleChange}
                style={{
                  ...styles.input,
                  fontSize: isMobile ? "13px" : "14px",
                  padding: isMobile ? "12px" : "14px"
                }}
                required
              />

              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                style={{
                  ...styles.input,
                  fontSize: isMobile ? "13px" : "14px",
                  padding: isMobile ? "12px" : "14px"
                }}
                required
              >
                <option value="">কোর্স নির্বাচন করুন *</option>
                <option>IELTS</option>
                <option>PTE</option>
                <option>Basic</option>
                <option>Study Abroad</option>
              </select>

              <button
                type="submit"
                style={{
                  ...styles.button,
                  fontSize: isMobile ? "14px" : "16px",
                  padding: isMobile ? "12px" : "14px",
                  marginTop: "10px"
                }}
              >
                কল বুক করুন
              </button>

            </form>
          </div>
        </div>
      )}
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

const styles = {
  wrapper: {
    background: "black"
  },
  container: {
    margin: "auto",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap"
  },
  formCard: {
    background: "#f5f5f5",
    borderRadius: "10px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
  },
  formTitle: {
    marginBottom: "25px",
    fontWeight: "700"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  },
  input: {
    borderRadius: "6px",
    border: "1px solid #dcdcdc",
    outline: "none"
  },
  button: {
    marginTop: "10px",
    borderRadius: "6px",
    border: "none",
    background: "#9c9c9c",
    color: "white",
    cursor: "pointer"
  },
  textSection: {
    color: "white",
    marginTop: "30px"
  },
  heading: {
    fontWeight: "700",
    marginBottom: "20px"
  },
  paragraph: {
    opacity: "0.9",
    lineHeight: "1.8"
  }
};


