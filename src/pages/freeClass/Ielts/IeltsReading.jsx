import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Contact from '../../../components/footer/Footer';

const IeltsReading = () => {

   const sections = [
    {
        title: "True / False / Not Given",
        videos: [
            "8hly31xKli0",
            "r4q6m0b6g9Y",
            "dQw4w9WgXcQ"
        ]
    },
    {
        title: "Matching Headings",
        videos: [
            "V2XK8Z8m0xA",
            "kXYiU_JCYtU",
            "3JZ_D3ELwOQ"
        ]
    },
    {
        title: "Matching Information",
        videos: [
            "L_jWHffIx5E",
            "RgKAFK5djSk",
            "OPf0YbXqDm0"
        ]
    },
    {
        title: "Sentence Completion",
        videos: [
            "fJ9rUzIMcZQ",
            "CevxZvSJLk8",
            "eVTXPUF4Oz4"
        ]
    },
    {
        title: "Summary Completion",
        videos: [
            "YQHsXMglC9A",
            "hTWKbfoikeg",
            "ktvTqknDobU"
        ]
    },
    {
        title: "Flowchart / Diagram Completion",
        videos: [
            "pRpeEdMmmQ0",
            "9bZkp7q19f0",
            "60ItHLz5WEA"
        ]
    },
    {
        title: "Short Answer Questions",
        videos: [
            "kJQP7kiw5Fk",
            "hLQl3WQQoQ0",
            "3tmd-ClpJxA"
        ]
    }
];

    return (
        <div style={{ background: "#FFFFFF", minHeight: "100vh", position: "relative", zIndex: 0 }}>
            <Navbar />

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

            {/* HERO SECTION */}
            <div style={{
                marginTop: '99px',
                padding: "50px 15px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden"
            }}>

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
                        IELTS Reading
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
                                            title="IELTS Reading Video"
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

export default IeltsReading;