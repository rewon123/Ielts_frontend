import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from './Header';
import Services from './Services';
import Ielts from './Ielts';
import Pte from './Pte';
import Stories from './Stories';
import Review from './Review';
import Form from './Form';
import Footer from '../../components/footer/Footer';

const Home = () => {

    return (
        <div>

            <Navbar></Navbar>
            <Header></Header>
            <Ielts></Ielts>
            <Pte></Pte>
            <Stories></Stories>
            <Review></Review>
            <Form></Form>
            <Footer></Footer>
            <a
                href="https://wa.me/8801782044359"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    backgroundColor: "#25D366",
                    color: "white",
                    borderRadius: "50%",
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "30px",
                    textDecoration: "none",
                    zIndex: 9999
                }}
            >
                <img src="https://cdn-icons-png.flaticon.com/512/3536/3536445.png" style={{width: "30px", height: "30px"}} alt="" />
            </a>
        </div>
    );
};



export default Home;

