import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Pte() {
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
    <Wrapper id="PTE" style={{ marginTop: '-150px' }}>
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
              <div className="row" style={{ marginTop: 20 }}>
                <div className="col-md-6 col-xs-6" style={{ padding: '0 5px' }}>
                  <div className="pricing-box" >
                    <img onClick={() => setShowModal(true)} src="https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775739380/Asset_6_4x_emrw6u.png" style={{ width: '100%', borderRadius: '10px' }} alt="" />
                  </div>
                </div>
                <div className="col-md-6 col-xs-6" style={{ padding: '0 5px' }}>
                  <div className="pricing-box" >
                    <img onClick={() => setShowModal(true)} src="https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775739377/Asset_8_4x_waioij.png" style={{ width: '100%', borderRadius: '10px' }} alt="" />
                  </div>
                </div>

              </div>
              <div className="row" style={{ marginTop: 20 }}>
                <div className="col-md-6 col-xs-6" style={{ padding: '0 5px' }}>
                  <div className="pricing-box" >
                    <img onClick={() => setShowModal(true)} src="https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775739377/Asset_9_4x_wygwph.png" style={{ width: '100%', borderRadius: '10px' }} alt="" />
                  </div>
                </div>
                <div className="col-md-6 col-xs-6" style={{ padding: '0 5px' }}>
                  <div className="pricing-box">
                    <img onClick={() => setShowModal(true)} src="https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775739376/Asset_7_4x_pdvhz0.png" style={{ width: '100%', borderRadius: '10px' }} alt="" />
                  </div>
                </div>

              </div>
            </AddRight>

          </Advertising>
        </div>
      </div>
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




const Wrapper = styled.section`
  width: 100%;
`;
// const HeaderInfo = styled.div`
//   @media (max-width: 860px) {
//     text-align: center;
//   }
// `;
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
// const ButtonsRow = styled.div`
//   @media (max-width: 860px) {
//     justify-content: space-between;
//   }
// `;
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
