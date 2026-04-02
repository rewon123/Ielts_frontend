import React from "react";
import styled from "styled-components";
import FullButton from "../../components/Buttons/FullButton";
import { Link } from "react-scroll";

export default function Pte() {
  return (
    <Wrapper id="PTE">
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <StyledImg src="https://res.cloudinary.com/dgjvl9dpb/image/upload/v1775033064/pte_chchne.png" alt="add" />                                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">A few words about company</h4>
              <h2 className="font extraBold">Crack the PTE Exam with Confidence</h2>
              <p className="font12 semiBold" style={{ fontSize: '14px' }}>
                Achieve your desired PTE score with expert-led training. Learn test-taking strategies, enhance English proficiency, and practice with interactive mock tests.                            </p>
              <div className="row">
                <div className="col-sm-6">
                  <div class="pricing-box">
                    <h2>PTE VIP. (OFFLINE)</h2>
                    <div class="details">
                      <span>
                        <img decoding="async" src="https://enhanceenglishbd.com/wp-content/uploads/2024/11/calendar.png" alt="Calendar Icon" /> 3-6 Weeks
                        <br />
                        <img decoding="async" src="https://enhanceenglishbd.com/wp-content/uploads/2024/11/presentation.png" alt="Class Icon" /> 18 PTE Classes
                      </span>
                    </div>
                    <p class="price-text">Price<span class="price"> ৳10,000</span></p>
                    <Link to='bookClass'>
                      <div className="buttons">
                        <a id="contact-us-btn" className="join-now">Join Now</a>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div class="pricing-box">
                    <h2>PTE VIP. <br /> (ONLINE)</h2>

                    <div class="details">
                      <span>
                        <img decoding="async" src="https://enhanceenglishbd.com/wp-content/uploads/2024/11/calendar.png" alt="Calendar Icon" /> 1 Months
                        <br />
                        <img decoding="async" src="https://enhanceenglishbd.com/wp-content/uploads/2024/11/presentation.png" alt="Class Icon" /> 18 live Classes
                      </span>
                    </div>
                    <p class="price-text">Price<span class="price"> ৳7,000</span></p>

                    <Link to='bookClass'>
                      <div className="buttons">
                        <a id="contact-us-btn" className="join-now">Join Now</a>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row" style={{ marginTop: 20 }}>
                <div className="col-sm-6">
                  <div class="pricing-box">
                    <h2>Basic to PTE. (OFFLINE)</h2>
                    <div class="details">
                      <span>
                        <img decoding="async" src="https://enhanceenglishbd.com/wp-content/uploads/2024/11/calendar.png" alt="Calendar Icon" /> 3 Months
                        <br />
                        <img decoding="async" src="https://enhanceenglishbd.com/wp-content/uploads/2024/11/presentation.png" alt="Class Icon" /> 43 PTE Classes
                      </span>
                    </div>
                    <p class="price-text">Price<span class="price"> ৳15,000</span></p>

                    <Link to='bookClass'>
                      <div className="buttons">
                        <a id="contact-us-btn" className="join-now">Join Now</a>
                      </div>
                    </Link>

                  </div>
                </div>
                <div className="col-sm-6">
                  <div class="pricing-box">
                    <h2>Basic to PTE. (ONLINE)</h2>
                    <div class="details">
                      <span>
                        <img decoding="async" src="https://enhanceenglishbd.com/wp-content/uploads/2024/11/calendar.png" alt="Calendar Icon" /> 3 Months
                        <br />
                        <img decoding="async" src="https://enhanceenglishbd.com/wp-content/uploads/2024/11/presentation.png" alt="Class Icon" /> 43 PTE Classes
                      </span>
                    </div>
                    <p class="price-text">Price<span class="price"> ৳10,000</span></p>

                    <Link to='bookClass'>
                      <div className="buttons">
                        <a id="contact-us-btn" className="join-now">Join Now</a>
                      </div>
                    </Link>

                  </div>
                </div>

              </div>
            </AddRight>

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

const StyledImg = styled.img`
  border-radius: 8px;

  @media (max-width: 768px) {
    margin-top: 100px;
  }
`;