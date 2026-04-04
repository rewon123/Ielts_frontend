import React from "react";
import styled from "styled-components";
// Assets
import QuoteIcon from "../../assets/svg/Quotes";

export default function TestimonialBox({ image }) {
  return (
    <Wrapper className="whiteBg radius8 flexNullCenter flexColumn">

      <Card>
        <iframe width="100%" height="250px" src={image} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <Bottom>
          {/* <Score>{score}</Score> */}
          {/* <UserName>{name}</UserName> */}
        </Bottom>
      </Card>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  width: 100%;
  padding: 20px 30px;
  margin-top: 30px;
`; const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 30px 25px;

  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;   /* ⭐ centers image and name */
`;

const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const Name = styled.h4`
  margin: 0;
  font-size: 18px;
`;

const ReviewText = styled.p`
  text-align: center;
  font-size: 15px;
  line-height: 1.6;
  margin: 20px 0;
  color: #555;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Score = styled.div`
  background: #ff4b2b;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
`;

const UserName = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #777;
`;