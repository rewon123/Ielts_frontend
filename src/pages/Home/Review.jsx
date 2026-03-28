import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialSlider from "../../components/Elements/TestimonialSlider";


const ReviewSlider = () => {

  return (
    <div className="" style={{ marginTop: '50px' }}>
      <div className="container">
        <HeaderInfo>
          <h1 className="font40 extraBold">What They Say?</h1>
          <p className="font13">
            I took my PTE exam through IELTS Excellence, and I am very satisfied with their service. Their guidance and support were really helpful throughout my preparation. <br /> I would highly recommend them to anyone planning to take the PTE exam.
            <br />
            - Mrittika Hyea Hiramon

          </p>
        </HeaderInfo>
        <TestimonialSlider />
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

export default ReviewSlider;
