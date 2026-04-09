import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TestimonialSlider from "../../components/Elements/TestimonialSlider";
import TestimonialBox from "../../components/Elements/TestimonialBox";
import Slider from "react-slick";

const ReviewSlider = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const settings = {
    infinite: true,
    speed: 500,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <div className="container">
        <HeaderInfo>
          <h1 className="font40 extraBold">What They Say?</h1>
          <p className="font13">
            I took my PTE exam through IELTS Excellence, and I am very satisfied
            with their service. Their guidance and support were really helpful
            throughout my preparation. <br />
            I would highly recommend them to anyone planning to take the PTE
            exam.
            <br />- Mrittika Hyea Hiramon
          </p>
        </HeaderInfo>

        {/* 👇 SWITCH SLIDER BASED ON SCREEN */}
        {!isMobile ? (
          <TestimonialSlider />
        ) : (
          <div className="" style={{marginLeft:'10px'}}>
            <SliderWrapper>
              <Slider {...settings}>
                <LogoWrapper className="flexCenter">
                  <TestimonialBox
                    name="Rahim Ahmed"
                    image="https://www.youtube.com/embed/umVRjruJ41g?si=HpAgtNmuWs7Hj4j3"
                    score="Band 7.5"
                    review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem libero deserunt illum quae quis dolor vel excepturi earum omnis maiores autem rerum amet sapiente voluptas consequuntur accusantium consequatur, doloremque asperiores?"
                  />
                </LogoWrapper>
                <LogoWrapper className="flexCenter">
                  <TestimonialBox
                    name="Rahim Ahmed"
                    image="https://www.youtube.com/embed/A3FZ_Hw055I?si=wHvEv0jsciGmGJl7"
                    score="Band 7.5"
                    review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem libero deserunt illum quae quis dolor vel excepturi earum omnis maiores autem rerum amet sapiente voluptas consequuntur accusantium consequatur, doloremque asperiores?"
                  />
                </LogoWrapper>

                <LogoWrapper className="flexCenter">
                  <TestimonialBox
                    name="Rahim Ahmed"
                    image="https://www.youtube.com/embed/IkAfrmCAy8g?si=G7Y3NEDlDNWqOkKM"
                    score="Band 7.5"
                    review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem libero deserunt illum quae quis dolor vel excepturi earum omnis maiores autem rerum amet sapiente voluptas consequuntur accusantium consequatur, doloremque asperiores?"
                  />
                </LogoWrapper>

                <LogoWrapper className="flexCenter">
                  <TestimonialBox
                    name="Rahim Ahmed"
                    image="https://www.youtube.com/embed/Uthg_6fdSiY?si=su1u80fR9v7VdVgC"
                    score="Band 7.5"
                    review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem libero deserunt illum quae quis dolor vel excepturi earum omnis maiores autem rerum amet sapiente voluptas consequuntur accusantium consequatur, doloremque asperiores?"
                  />
                </LogoWrapper>

                <LogoWrapper className="flexCenter">
                  <TestimonialBox
                    name="Rahim Ahmed"
                    image="https://www.youtube.com/embed/5u_8ti22QPs?si=0cf3inu2JDsH3ViX"
                    score="Band 7.5"
                    review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem libero deserunt illum quae quis dolor vel excepturi earum omnis maiores autem rerum amet sapiente voluptas consequuntur accusantium consequatur, doloremque asperiores?"
                  />
                </LogoWrapper>

              </Slider>
            </SliderWrapper>
          </div>
        )}
      </div>
    </div>
  );
};

const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const SliderWrapper = styled.div`
  .slick-prev:before,
  .slick-next:before {
    color: red;
    font-size: 30px;
  }
`;
const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;


export default ReviewSlider;