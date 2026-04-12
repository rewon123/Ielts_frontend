import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    dots: true,
    slidesToShow: 2.7,
    slidesToScroll: 2,
        autoplay: true,          // ✅ ADD THIS
    autoplaySpeed: 1700,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
  const SliderWrapper = styled.div`
  .slick-prev:before,
  .slick-next:before {
    color: red;
    font-size: 30px;
  }
`;
  return (
    <div className="">
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
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
