import React from "react";
import styled from "styled-components";

export default function Ielts() {
  return (
    <Wrapper id="ielts" style={{ marginTop: '-85px' }}>
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">

            <AddRight>
              <h4 className="font15 semiBold">A few words about company</h4>
              <h2 className="font extraBold">Achieve High Band Scores with Expert IELTS Coaching</h2>
              <p className="font12 semiBold" style={{ fontSize: '14px' }}>
                Excel in IELTS preparation with targeted practice. Master IELTS writing, improve language skills, and take realistic mock tests replicating the exam format.
              </p>
              <div className="row" style={{ marginTop: 20 }}>
                <div className="col-md-6 col-xs-6" style={{ padding: '0 5px' }}>
                  <div className="pricing-box">
                    <img src="https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775736569/Asset_5_4x_npfvwp.png" style={{ width: '100%', borderRadius: '10px' }} alt="" />
                  </div>
                </div>
                <div className="col-md-6 col-xs-6" style={{ padding: '0 5px' }}>
                  <div className="pricing-box">
                    <img src="https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775736568/Asset_2_4x_jr2ppz.png" style={{ width: '100%', borderRadius: '10px' }} alt="" />
                  </div>
                </div>

              </div>
              <div className="row" style={{ marginTop: 20 }} >
                <div className="col-md-6 col-xs-6" style={{ padding: '0 5px' }}>
                  <div className="pricing-box">
                    <img src="https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775736568/Asset_3_4x_bbamqt.png" style={{ width: '100%', borderRadius: '10px' }} alt="" />
                  </div>

                </div>
                <div className="col-md-6 col-xs-6" style={{ padding: '0 5px' }}>
                  <div className="pricing-box">
                    <img src="https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775736568/Asset_4_4x_ummjn9.png" style={{ width: '100%', borderRadius: '10px' }} alt="" />
                  </div>

                </div>

              </div>
            </AddRight>
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src='https://res.cloudinary.com/dgjvl9dpb/image/upload/v1775033064/WhatsApp_Image_2026-03-31_at_18.07.50_mdgt6e.jpg' style={{ marginTop: '110px' }} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
