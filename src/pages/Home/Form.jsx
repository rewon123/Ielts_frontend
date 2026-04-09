import React, { useState, useEffect } from 'react';

const Form = () => {
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
        <div id='bookClass' style={{ marginTop: '50px', width: '100%' }}>
            <div style={{
                ...styles.wrapper,
                padding: isMobile ? "50px 20px" : "80px 40px"
            }}>
                <div style={styles.container} className="container">
                    <div className="row" style={{ width: "100%" }}>
                        
                        {/* LEFT FORM */}
                        <div className="col-md-6 col-xs-12">
                            <div style={{
                                ...styles.formCard,
                                padding: isMobile ? "25px" : "40px"
                            }}>
                                <h3 style={{
                                    ...styles.formTitle,
                                    fontSize: isMobile ? "20px" : "26px"
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
                                            padding: isMobile ? "12px" : "14px"
                                        }}
                                    >
                                        কল বুক করুন
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* RIGHT TEXT */}
                        <div className="col-md-6 col-xs-12">
                            <div style={styles.textSection}>
                                <h2 style={{
                                    ...styles.heading,
                                    fontSize: isMobile ? "26px" : "40px",
                                    lineHeight: isMobile ? "1.4" : "1.3"
                                }}>
                                    ফ্রি কলে পরামর্শ নিন <br />
                                    ক্যারিয়ার কাউন্সিলরের কাছ থেকে
                                </h2>

                                <p style={{
                                    ...styles.paragraph,
                                    fontSize: isMobile ? "14px" : "16px"
                                }}>
                                    আপনি যেন সঠিক ক্যারিয়ার সিদ্ধান্ত নিতে পারেন, তার জন্য আমরা
                                    দিচ্ছি ফ্রি ক্যারিয়ার কাউন্সেলিং সাপোর্ট। ক্যারিয়ার নিয়ে আপনার
                                    বিভিন্ন প্রশ্নের উত্তর পাবেন অভিজ্ঞ ক্যারিয়ার কাউন্সেলরদের কাছ
                                    থেকে।
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

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

export default Form;