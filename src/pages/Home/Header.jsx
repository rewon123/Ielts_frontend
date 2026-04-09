import React from "react";
import styled from "styled-components";
// Components";
// Assets
import HeaderImage from "../../assets/img/header-img.png";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import FullButton from "../../components/Buttons/FullButton";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <>

      <Wrapper id="home" className="container flexSpaceCenter">

        <div className="col-md-6 mobileMarginTop">

          <img src="https://res.cloudinary.com/dgjvl9dpb/image/upload/v1775033065/Asset_5_4x_plsbj1.png" style={{ width: '100%' }} alt="" />
          {/* <BtnWrapper> */}
          <div className="" style={{ width: '80%', display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
            <Link to='bookClass' >
              <FullButton title="Book a Free Class / Consultation" />
            </Link>
          </div>
        </div>

        <div className="col-md-6 " style={{ display: 'flex', justifyContent: 'center' }}>

          <Img className=" mobileMarginTopmin" src='https://res.cloudinary.com/dgjvl9dpb/image/upload/v1775033066/final_1_hero_image_e7hzr5.png' alt="office" style={{ zIndex: 9, width: '90%', height: '100%', paddingLeft: '25px' }} />

        </div>
        {/* <GreyDiv className="lightBg"></GreyDiv> */}


      </Wrapper>
      <div className="container">
        <div className="cardFather marginTop4btn">
          <Link to="PTE" spy={true} smooth={true} offset={-80}>
            <div className="investor-card " style={{ margin: 10 }}> <img src='https://res.cloudinary.com/dgjvl9dpb/image/upload/v1775032858/WhatsApp_Image_2026-03-31_at_22.31.04_c3c2oy.jpg' alt='pte' /></div>
          </Link>
          <Link to="ielts" spy={true} smooth={true} offset={-80}>
            <div className="investor-card " style={{ margin: 10 }}> <img src='https://res.cloudinary.com/dgjvl9dpb/image/upload/v1775033064/Asset_1_2x_t69tug.png' alt='pte' /></div>
          </Link>

          <div className="investor-card " style={{ margin: 10 }}> <img src='https://res.cloudinary.com/dgjvl9dpb/image/upload/v1775033064/WhatsApp_Image_2026-03-31_at_22.31.04_1_onxwcc.jpg' alt='pte' />
          </div>
          <div className="investor-card " style={{ margin: 10 }}> <img src='https://res.cloudinary.com/dgjvl9dpb/image/upload/v1775033063/Asset_3_2x_acuu0u.png' alt='pte' />
          </div>
          <div className="investor-card " style={{ margin: 10 }}> <img src='https://res.cloudinary.com/dgjvl9dpb/image/upload/v1775033064/WhatsApp_Image_2026-03-31_at_22.31.03_unkkmc.jpg' alt='pte' />
          </div>
        </div>
      </div>
    </>

  );
}


const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;

