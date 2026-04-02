import React, { useEffect, useState } from 'react';
import ProjectBox from '../../components/Elements/ProjectBox';
import FullButton from '../../components/Buttons/FullButton';
import Slider from 'react-slick';
import styled from 'styled-components';


const Stories = () => {




    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");



    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // check on mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const sliderData = [
        {
            src: "https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775127305/nahian_lzs3aj.png",
            alt: "Client Logo 1",
            link: "https://example.com/client1"
        },
        {
            src: "https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775127306/istiak_v4_vazzdb.png",
            alt: "Client Logo 2",
            link: "https://example.com/client2"
        },
        {
            src: "https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775127316/Nasif_Bhai_visa_success_zmkim4.png",
            alt: "Client Logo 3",
            link: "https://example.com/client3"
        },
        {
            src: "https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775127365/Saif_visa_3_r5dzui.png",
            alt: "Client Logo 4",
            link: "https://example.com/client4"
        },
        {
            src: "https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775127413/Maliha_apu_visa_success_v3_lex0wv.png",
            alt: "Client Logo 5",
            link: "https://example.com/client5"
        },
        {
            src: "https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775127448/visa_s5sfoa.png",
            alt: "Client Logo 6",
            link: "https://example.com/client6"
        }
    ];


    const settings = {
        infinite: true,
        speed: 500,
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
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

    const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
    const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  padding: 10%;
`;
    const SliderWrapper = styled.div`
  .slick-prev:before,
  .slick-next:before {
    color: red;
    font-size: 30px;
  }
`;

    const handleImageClick = (src) => {
        setSelectedImage(src);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage("");
    };

    const projectData = [
        {
            img: "https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775125991/fayez_bhai_wcd5hm.png",
            title: "Awesome Project",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        },
        {
            img: "https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775125950/Md_nahid_Dhali_with_Sakib_Sir_knb7ni.png",
            title: "Awesome Project",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        },
        {
            img: "https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775125771/Noor_Mohammad_Emon_2_pl8a60.png",
            title: "Awesome Project",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        },
        {
            img: "https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775125682/Mrittika_vrvceh.png",
            title: "Awesome Project",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        },
        {
            img: "https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775125646/md_jihad_chowdhury_Sakib_SIR_xavbh6.png",
            title: "Awesome Project",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        },
        {
            img: "https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775126639/Kanika_2_ujewun.png",
            title: "Awesome Project",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        }
    ];


    const IeltsprojectData = [
        {
            img: "https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775126780/Lafin_Rahman_Apu_blur_nmnirk.png",
            title: "Awesome Project",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        },
        {
            img: "https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775126800/Shahadat_IELTS_wcjqqz.png",
            title: "Awesome Project",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        },
        {
            img: "https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775126869/Jahidul_2_lidhpz.png",
            title: "Awesome Project",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        },
        {
            img: "https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775126910/Mridula_Apu_nwte5d.png",
            title: "Awesome Project",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        },
        {
            img: "https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775126936/Nahian_hcbdgc.png",
            title: "Awesome Project",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        },
        {
            img: "https://res.cloudinary.com/dqmo9ctjb/image/upload/v1775127120/Rezwan_qcjqvb.png",
            title: "Awesome Project",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        }
    ];


    return (
        <div className=''>
            <div className="">
                <div className=" row" style={{ paddingLeft: '3%' }}>
                    <div className="col-md-6" style={{ width: '95%' }}>
                        <h1 style={{ marginLeft: '30px' }}>IELTS SUCCESS STORIES  </h1>

                        <div className=" textCenter col-xs-12" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >

                            {IeltsprojectData.map((item, index) => (
                                <div className="col-md-4" key={index}>
                                    <ProjectBox
                                        img={item.img}
                                        title={item.title}
                                        text={item.text}
                                        action={() => alert("clicked")}
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="col-md-6" style={{ width: '95%' }}>
                        <h1 style={{ marginLeft: '30px' }}>PTE SUCCESS STORIES  </h1>


                        <div className=" textCenter col-xs-12" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >

                            {projectData.map((item, index) => (
                                <div className="col-md-4" key={index}>
                                    <ProjectBox
                                        img={item.img}
                                        title={item.title}
                                        text={item.text}
                                        action={() => alert("clicked")}
                                    />
                                </div>
                            ))}
                            {/* <div className=" col-md-4 ">
                                <ProjectBox
                                    img={'https://scontent.fdac206-1.fna.fbcdn.net/v/t39.30808-6/636926664_122182255652596608_1579071818636388322_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=JXFvawpzR9gQ7kNvwF56J5d&_nc_oc=Adrh-KvEWqNLK04UuZM9qpY4PRS2AjcOk8PZB8b0nuqkamp2Sy4titiV53-m_eoknhc&_nc_zt=23&_nc_ht=scontent.fdac206-1.fna&_nc_gid=-2oChMKnbT1ql3N-l0k9aQ&_nc_ss=7a32e&oh=00_Afzg_UL3mab4ADJO4fQQT0FlfemVvZMh2anIZOYiqcW8XQ&oe=69C5AC3D'}
                                    title="Awesome Project"
                                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                                    action={() => alert("clicked")}
                                />
                            </div>
                            <div className=" col-md-4 ">
                                <ProjectBox
                                    img={'https://scontent.fdac206-1.fna.fbcdn.net/v/t39.30808-6/636926664_122182255652596608_1579071818636388322_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=JXFvawpzR9gQ7kNvwF56J5d&_nc_oc=Adrh-KvEWqNLK04UuZM9qpY4PRS2AjcOk8PZB8b0nuqkamp2Sy4titiV53-m_eoknhc&_nc_zt=23&_nc_ht=scontent.fdac206-1.fna&_nc_gid=-2oChMKnbT1ql3N-l0k9aQ&_nc_ss=7a32e&oh=00_Afzg_UL3mab4ADJO4fQQT0FlfemVvZMh2anIZOYiqcW8XQ&oe=69C5AC3D'}
                                    title="Awesome Project"
                                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                                    action={() => alert("clicked")}
                                />
                            </div>
                            <div className=" col-md-4 ">
                                <ProjectBox
                                    img={'https://scontent.fdac206-1.fna.fbcdn.net/v/t39.30808-6/636926664_122182255652596608_1579071818636388322_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=JXFvawpzR9gQ7kNvwF56J5d&_nc_oc=Adrh-KvEWqNLK04UuZM9qpY4PRS2AjcOk8PZB8b0nuqkamp2Sy4titiV53-m_eoknhc&_nc_zt=23&_nc_ht=scontent.fdac206-1.fna&_nc_gid=-2oChMKnbT1ql3N-l0k9aQ&_nc_ss=7a32e&oh=00_Afzg_UL3mab4ADJO4fQQT0FlfemVvZMh2anIZOYiqcW8XQ&oe=69C5AC3D'}
                                    title="Awesome Project"
                                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                                    action={() => alert("clicked")}
                                />
                            </div> */}
                        </div>

                    </div>
                </div>
                <div className="row flexCenter">
                    <div style={{ margin: "50px 0", width: "200px" }}>
                        <FullButton title="Load More" action={() => alert("clicked")} />
                    </div>
                </div>
            </div>
            <div className=" container" style={{ marginTop: '15px' }}>
                <div className="" >
                    <h1>VISA SUCCESS STORIES  </h1>
                    <SliderWrapper>
                        <Slider {...settings}>
                            {sliderData.map((src, index) => (
                                <LogoWrapper key={index} className="flexCenter">
                                    <ImgStyle src={src.src} alt={src.alt} onClick={() => handleImageClick(src.src)} />
                                </LogoWrapper>
                            ))}
                        </Slider>

                        {modalOpen && (
                            <ModalOverlay onClick={closeModal}>
                                <ModalImage src={selectedImage} alt="large client logo" />
                            </ModalOverlay>
                        )}
                    </SliderWrapper>
                </div>
            </div>

        </div>
    );
};


// Modal styling
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  border-radius: 10px;
`;
export default Stories;












