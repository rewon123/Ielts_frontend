import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets

export default function Contact() {


  return (
    <Wrapper>

      <footer className="footer" style={{ backgroundColor: 'black' }}>
        <div className="container">
          <div className="row text-white">
            <div className="footer-col">
              <h4>Free classes</h4>
              <ul>
                <li><a href="#">IELTS</a></li>
                <li><a href="#">PTE</a></li>
                <li><a href="#">SPOKEN ENGLISH </a></li>
                <li><a href="#">WRITING GRAMMAR</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li><a href="#">STUDY ABROAD</a></li>
                <li><a href="#">CONSULTATION</a></li>

              </ul>
            </div>
            <div className="footer-col">
              {/* <h4>online shop</h4>
              <ul>
                <li><a href="#">watch</a></li>
                <li><a href="#">bag</a></li>
                <li><a href="#">shoes</a></li>
                <li><a href="#">dress</a></li>
              </ul> */}
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1130.3409691877623!2d90.37741611716727!3d23.752166698343768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9efb53c1efb%3A0xf4ccedc93a341055!2sIELTS%20Excellence%20Bangladesh!5e0!3m2!1sen!2sbd!4v1774975760911!5m2!1sen!2sbd"
                width="100%"
                height="135"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="social-links">
                <a href="https://www.facebook.com/IELTSExcellenceBangladesh">ⓕ</a>
                <a href="https://www.youtube.com/@IELTSExcellenceBangladesh" style={{color:'red}'}}>▶</a>
                <a href="https://www.instagram.com/ieltsexcellence2024/"> @ </a>
                <a href="https://www.linkedin.com/company/ielts-excellence-bangladesh">in</a>
              </div>
             
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
