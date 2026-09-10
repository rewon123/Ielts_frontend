import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

// Components & Assets
import FullButton from "../../components/Buttons/FullButton";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Wrapper id="home" className="container flexSpaceCenter">
        <div className="col-md-6 mobileMarginTop">
          <img
            src="https://res.cloudinary.com/dgjvl9dpb/image/upload/v1775033065/Asset_5_4x_plsbj1.png"
            style={{ width: "100%" }}
            alt="Hero Banner Title"
          />
          <div
            style={{
              width: "80%",
              display: "flex",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            <Link to="bookClass" spy={true} smooth={true} offset={-80}>
              <FullButton title="Book a Free Class / Consultation" />
            </Link>
          </div>
        </div>

        <div
          className="col-md-6"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Img
            className="mobileMarginTopmin"
            src="https://res.cloudinary.com/dgjvl9dpb/image/upload/v1775033066/final_1_hero_image_e7hzr5.png"
            alt="office"
            style={{
              zIndex: 9,
              width: "90%",
              height: "100%",
              paddingLeft: "25px",
            }}
          />
        </div>
      </Wrapper>

      <div className="container">
        <div className="cardFather marginTop4btn">
          <Link to="PTE" spy={true} smooth={true} offset={-80}>
            <div className="investor-card" style={{ margin: 10 }}>
              <img
                src="https://res.cloudinary.com/dgjvl9dpb/image/upload/v1775032858/WhatsApp_Image_2026-03-31_at_22.31.04_c3c2oy.jpg"
                alt="pte"
              />
            </div>
          </Link>

          <Link to="ielts" spy={true} smooth={true} offset={-80}>
            <div className="investor-card" style={{ margin: 10 }}>
              <img
                src="https://res.cloudinary.com/dgjvl9dpb/image/upload/v1775033064/Asset_1_2x_t69tug.png"
                alt="ielts"
              />
            </div>
          </Link>

          <div className="investor-card" style={{ margin: 10 }}>
            <img
              src="https://res.cloudinary.com/dgjvl9dpb/image/upload/v1775033064/WhatsApp_Image_2026-03-31_at_22.31.04_1_onxwcc.jpg"
              alt="course"
            />
          </div>

          <div className="investor-card" style={{ margin: 10 }}>
            <img
              src="https://res.cloudinary.com/dgjvl9dpb/image/upload/v1775033063/Asset_3_2x_acuu0u.png"
              alt="course"
            />
          </div>

          <Link to="bookClass" spy={true} smooth={true} offset={-80}>
            <div className="investor-card" style={{ margin: 10 }}>
              <img
                src="https://res.cloudinary.com/dgjvl9dpb/image/upload/v1775033064/WhatsApp_Image_2026-03-31_at_22.31.03_unkkmc.jpg"
                alt="book class"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  margin-top: 0px;

  @media (min-width: 960px) {
    margin-top: -100px;
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }
    @media (max-width: 960px) {
    margin-top: 50px;
  }
`;

const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;