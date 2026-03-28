import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        course: ""
    });

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
            mode: "no-cors", // Google Forms does not allow CORS
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
        <div id='bookClass' style={{ marginTop: '50px' }}>
            <div style={styles.wrapper}>
                <div className='container' style={styles.container}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">

                            <div style={styles.formCard}>
                                <h3 style={styles.formTitle}>Book a Free Class / Consultation</h3>

                                <form style={styles.form} onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="আপনার নাম *"
                                        value={formData.name}
                                        onChange={handleChange}
                                        style={styles.input}
                                        required
                                    />
                                    <input
                                        type="number"
                                        name="phone"
                                        placeholder="ফোন নাম্বার *"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        style={styles.input}
                                        required
                                    />
                                    <select
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        style={styles.input}
                                        required
                                    >
                                        <option value="">কোর্স নির্বাচন করুন *</option>
                                        <option>IELTS</option>
                                        <option>PTE</option>
                                        <option>Basic</option>
                                        <option>Study Abroad</option>
                                    </select>
                                    <button type="submit" style={styles.button}>কল বুক করুন</button>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div style={styles.textSection}>
                                <h2 style={styles.heading}>
                                    ফ্রি কলে পরামর্শ নিন <br />
                                    ক্যারিয়ার কাউন্সিলরের কাছ থেকে
                                </h2>
                                <p style={styles.paragraph}>
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
    wrapper: { background: "black", padding: "80px 40px" },
    container: { margin: "auto", display: "flex", alignItems: "center" },
    formCard: { background: "#f5f5f5", padding: "40px", borderRadius: "10px", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" },
    formTitle: { fontSize: "26px", marginBottom: "25px", fontWeight: "700" },
    form: { display: "flex", flexDirection: "column", gap: "16px" },
    input: { padding: "14px", borderRadius: "6px", border: "1px solid #dcdcdc", fontSize: "14px", outline: "none" },
    button: { marginTop: "10px", padding: "14px", borderRadius: "6px", border: "none", background: "#9c9c9c", color: "white", fontSize: "16px", cursor: "pointer" },
    textSection: { color: "white", marginTop: '30px' },
    heading: { fontSize: "40px", fontWeight: "700", marginBottom: "20px", lineHeight: "1.3" },
    paragraph: { fontSize: "16px", opacity: "0.9", lineHeight: "1.8" }
};

export default Form;