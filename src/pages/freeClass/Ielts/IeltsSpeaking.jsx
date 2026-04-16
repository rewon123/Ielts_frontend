import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Contact from '../../../components/footer/Footer';

const IeltsSpeaking = () => {

    const sections = [
        {
            title: "Part 1: Introduction & Personal Questions",
            videos: [

                "VSzTWPycr3o",
                "ZqVhbdvTe1c",
                "PHwKJHbtu4M",
                "noJR9E5r7ak",
            ]
        },
        {
            title: "Part 2: Cue Card ",
            videos: [
                "PM54QrboPR0",
                "ZvZTtgO-D8s",
                "lnTfVuLsCHo"
            ]
        },
        {
            title: "Part 3: Discussion – Detailed Questions",
            videos: [
                "AqFvZISLtvQ",
                "p4S3PBeg-5M",
                "wSq3FJDz2u8",
                "vvyEGp5RmXo"
            ]
        },
    
    ];

    return (
        <div style={{ background: "#FFFFFF", minHeight: "100vh" }}>
            <Navbar />

            {/* HERO SECTION */}
            <div style={{
                marginTop: '99px',
                padding: "50px 15px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden"
            }}>

                {/* FIXED BACKGROUND SHAPES */}
                <div style={{
                    position: "fixed",
                    width: "180px",
                    height: "180px",
                    background: "#FFFaf5",
                    borderRadius: "50%",
                    top: "60px",
                    left: "-60px",
                    zIndex: -1,
                    pointerEvents: "none"
                }}></div>

                <div style={{
                    position: "fixed",
                    width: "140px",
                    height: "140px",
                    background: "#FFFaf5",
                    borderRadius: "50%",
                    bottom: "-60px",
                    right: "-60px",
                    zIndex: -1,
                    pointerEvents: "none"
                }}></div>

                {/* TITLE */}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "15px",
                    flexWrap: "wrap"
                }}>
                    <div style={{
                        height: "2px",
                        width: "60px",
                        background: "linear-gradient(to right, gold, #d4af37)"
                    }}></div>

                    <h1 style={{
                        fontSize: "clamp(26px, 5vw, 42px)",
                        fontWeight: "700",
                        margin: 0
                    }}>
                        IELTS Speaking
                    </h1>

                    <div style={{
                        height: "2px",
                        width: "60px",
                        background: "linear-gradient(to right, gold, #d4af37)"
                    }}></div>
                </div>

                <p style={{ color: "#666", marginTop: "10px", fontSize: "14px" }}>
                    Practice real exam questions with video solutions
                </p>
            </div>

            <div className="container">

                {sections.map((section, secIndex) => (
                    <div key={secIndex} style={{ marginBottom: "50px" }}>

                        {/* SECTION TITLE */}
                        <h2 style={{
                            fontSize: "clamp(20px, 4vw, 28px)",
                            fontWeight: "600",
                            marginBottom: "20px"
                        }}>
                            {section.title}
                        </h2>

                        {/* VIDEOS */}
                        <div className="row">
                            {section.videos.map((videoId, index) => (
                                <div className="col-md-4 col-sm-6 col-12" key={index}>
                                    <div style={{
                                        background: "#fff",
                                        padding: "10px",
                                        borderRadius: "12px",
                                        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                                        marginBottom: "20px"
                                    }}>
                                        <iframe
                                            width="100%"
                                            height="200"
                                            src={`https://www.youtube.com/embed/${videoId}`}
                                            title="IELTS Listening Video"
                                            style={{ borderRadius: "10px", border: "none" }}
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}

            </div>
            {/* FOOTER */}
            <div style={{ position: "relative", zIndex: 1 }}>
                <Contact />
            </div>
        </div>
    );
};
export default IeltsSpeaking;