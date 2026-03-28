import React, { useState } from 'react';
import ProjectBox from '../../components/Elements/ProjectBox';
import FullButton from '../../components/Buttons/FullButton';
import Slider from 'react-slick';
import styled from 'styled-components';


const Stories = () => {




    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const sliderData = [
        {
            src: "https://scontent.fdac191-1.fna.fbcdn.net/v/t39.30808-6/655729662_122185764974596608_4327045190827223078_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=108&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=z2v1NyGY4SQQ7kNvwErcZgt&_nc_oc=AdpjBbCPItObWJYa7jKFmFW-8iPYyZTZRD4aT7cV1hk9oODM5auHDAAZ3b88Cf_Z4qE&_nc_zt=23&_nc_ht=scontent.fdac191-1.fna&_nc_gid=qOcjQgndMN24arSTu4kUGQ&_nc_ss=7a32e&oh=00_Afy6clionSyyRnj4VwpvH1uP7IA368lCMs-BFb9mdQJDtw&oe=69CD68B0",
            alt: "Client Logo 1",
            link: "https://example.com/client1"
        },
        {
            src: "https://scontent.fdac191-1.fna.fbcdn.net/v/t39.30808-6/657090093_122185764932596608_2232282563548476093_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=102&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=rWpZGqtEu5gQ7kNvwFP0YpQ&_nc_oc=AdoYyvpisVJaokKp2HR5hWINInE4uylluiprJd12OAj1gDxA-EaryIyrAzctFcykWg4&_nc_zt=23&_nc_ht=scontent.fdac191-1.fna&_nc_gid=qOcjQgndMN24arSTu4kUGQ&_nc_ss=7a32e&oh=00_AfxWSxNZBcdk5UzIq0aIVfkDzncFn2klvQf6-4wySgoovA&oe=69CD4E30",
            alt: "Client Logo 2",
            link: "https://example.com/client2"
        },
        {
            src: "https://scontent.fdac191-1.fna.fbcdn.net/v/t39.30808-6/658928585_122185764884596608_8214110532182300650_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=103&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=FDohgcBvCwsQ7kNvwF0P-Us&_nc_oc=AdryHIYHgm1D0AJQ9WjW1l2zl1L707MbQ40eLK-hENlmcARarbHk9fAjhH3LI1yQcyw&_nc_zt=23&_nc_ht=scontent.fdac191-1.fna&_nc_gid=qOcjQgndMN24arSTu4kUGQ&_nc_ss=7a32e&oh=00_Afx0i_b7o-pq24fzi41AUpndibm4vi9M8ONlrzwI913tZw&oe=69CD6D84",
            alt: "Client Logo 3",
            link: "https://example.com/client3"
        },
        {
            src: "https://scontent.fdac191-1.fna.fbcdn.net/v/t39.30808-6/651751339_122184402152596608_82886878653161012_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=105&ccb=1-7&_nc_sid=a934a8&_nc_ohc=8LaeGYYHAeoQ7kNvwG9mrCK&_nc_oc=Adq30p0H3lmXati-lEjFiY4JfabNoLBW6XvtoCDg9rOid4W4eIlqAO_J8ZOmpGKjoXY&_nc_zt=23&_nc_ht=scontent.fdac191-1.fna&_nc_gid=NOwc9FoXTOkeAwSDIkoljQ&_nc_ss=7a32e&oh=00_AfwChDuY-PFCNnMsTBx1TBqJwb3RU5DDvpbOD9aN45OUig&oe=69CD6BDC",
            alt: "Client Logo 4",
            link: "https://example.com/client4"
        },
        {
            src: "https://scontent.fdac191-1.fna.fbcdn.net/v/t39.30808-6/656674585_122185764842596608_927039108658723503_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=110&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=czJ_UikO6FkQ7kNvwHfQYtd&_nc_oc=AdqYdkhIcX99zwPkjhpYRPHzGwAxr7CkdxP_qbPiOJ4nCoMjCIw7p0h7Pvq2043doSU&_nc_zt=23&_nc_ht=scontent.fdac191-1.fna&_nc_gid=qOcjQgndMN24arSTu4kUGQ&_nc_ss=7a32e&oh=00_AfzsnAwrFRiPoRExPbEMjrzlZflFUjPLn_RmnV1Cc8LJhw&oe=69CD7563",
            alt: "Client Logo 5",
            link: "https://example.com/client5"
        },
        {
            src: "https://scontent.fdac191-1.fna.fbcdn.net/v/t39.30808-6/658930656_122185764800596608_7739205142186562411_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=103&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=W5VZFR8qdtUQ7kNvwGhOfGb&_nc_oc=Adpm20IX2DwU0GrRm2zPW2ygPZKBPyJDu2zs7lPfukeQn7q9Hv_m-q597701R8uEZEM&_nc_zt=23&_nc_ht=scontent.fdac191-1.fna&_nc_gid=qOcjQgndMN24arSTu4kUGQ&_nc_ss=7a32e&oh=00_AfwoxFZAcLRpgCKhQmHLgsXux3_U8OHHKmvzrBMbvm8Gwg&oe=69CD5E47",
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

    return (
        <div className=''>
            <div className="">
                <div className=" row" style={{ paddingLeft: '3%' }}>
                    <div className="col-md-6" style={{ width: '95%' }}>
                        <h1 style={{ marginLeft: '30px' }}>IELTS SUCCESS STORIES  </h1>

                        <div className=" textCenter col-xs-12" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >

                            <div className="col-md-4  ">
                                <ProjectBox
                                    img={'https://scontent.fdac206-1.fna.fbcdn.net/v/t39.30808-6/641459064_122182860494596608_3284274470315279653_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=iEumhKeRGmkQ7kNvwFYKGFh&_nc_oc=AdrJdtyyGsGvFISxzKNFGyY0_iqyGKySH4WDAsRtMIlZjrP9J2mHVMoytDylxam08z4&_nc_zt=23&_nc_ht=scontent.fdac206-1.fna&_nc_gid=UHKFx-GVOSutpRXPADdlHw&_nc_ss=7a32e&oh=00_AfxhZdlxkUuQsv-Onz3B4ls_edOUI5oAr6zBCSIjJYqAEw&oe=69C5A877'}
                                    title="Awesome Project"
                                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                                    action={() => alert("clicked")}
                                />
                            </div>
                            <div className="col-md-4  ">
                                <ProjectBox
                                    img={'https://scontent.fdac191-1.fna.fbcdn.net/v/t39.30808-6/565935569_122168130818596608_6594623255868150008_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=107&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=Q7io_nEDAJoQ7kNvwEGl3ih&_nc_oc=AdoWQ_BZn3KCQnylq2HxYGeZg5x5Whj0Dso75ddv6vv-m9zrZKYfabyUBzPKonMghN8&_nc_zt=23&_nc_ht=scontent.fdac191-1.fna&_nc_gid=o0GDuULLXhqgZ5hsxrbHsQ&_nc_ss=7a32e&oh=00_AfwgREr7lbiVwc6COF8D3PDnH8r989dnvRu07Tt9rIm6lw&oe=69C81DE6'}
                                    title="Awesome Project"
                                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                                    action={() => alert("clicked")}
                                />
                            </div>
                            <div className="col-md-4  ">
                                <ProjectBox
                                    img={'https://scontent.fdac191-1.fna.fbcdn.net/v/t39.30808-6/606856798_122177196002596608_276663020039585650_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=111&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=YhxfSowD8BcQ7kNvwHXla3s&_nc_oc=AdppQafhW0vmZceVMiUWalGFVAPNfv3dC8Y0fl-e1CluCBpTqZumyvQBh-trIeDPaaw&_nc_zt=23&_nc_ht=scontent.fdac191-1.fna&_nc_gid=-FvZsXilTmPfcE4fMeBOaA&_nc_ss=7a32e&oh=00_AfxCfgUGhCHAl9ENRz_FawdYHgO2xjB98F2mpz9mcZhc7g&oe=69C834E2'}
                                    title="Awesome Project"
                                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                                    action={() => alert("clicked")}
                                />
                            </div>
                            <div className="col-md-4  ">
                                <ProjectBox
                                    img={'https://scontent.fdac191-1.fna.fbcdn.net/v/t39.30808-6/581491855_122171445638596608_8155458033513283846_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=108&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=CweDbRcqFWMQ7kNvwHKtXd2&_nc_oc=AdrWc7OD2Lo9keQ24aS2STtRxIckpb8lpYFx9EckP9EKVpXrFrwsiwa3p-OeQga5UCY&_nc_zt=23&_nc_ht=scontent.fdac191-1.fna&_nc_gid=jsn9RWPQqhfuihGJFO4yHQ&_nc_ss=7a32e&oh=00_AfyL6ySy8Kq-7YSExVS6_b4yNjxSL9I-DEp2FviwA6SVMA&oe=69C83E34'}
                                    title="Awesome Project"
                                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                                    action={() => alert("clicked")}
                                />
                            </div>

                            <div className=" col-md-4 ">
                                <ProjectBox
                                    img={'https://scontent.fdac191-1.fna.fbcdn.net/v/t39.30808-6/624515903_122180491868596608_3299824039685340413_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=102&ccb=1-7&_nc_sid=a934a8&_nc_ohc=VR8Eg6j6n0EQ7kNvwE7l2cS&_nc_oc=AdoJ2tuT_jfkV9B4-boxBo_SQX8VMDgHhq0SJFIQr65F1m_QwSYTqZKSN--7zOjD0fA&_nc_zt=23&_nc_ht=scontent.fdac191-1.fna&_nc_gid=5mKUt5bRb29dIT2X87742w&_nc_ss=7a32e&oh=00_AfxixH8nkmJh3f7VoPTyYq_ZqUBL8FZO6g_ztjx5MaFKJg&oe=69C82929'}
                                    title="Awesome Project"
                                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                                    action={() => alert("clicked")}
                                />
                            </div>
                            <div className=" col-md-4 ">
                                <ProjectBox
                                    img={'https://scontent.fdac191-1.fna.fbcdn.net/v/t39.30808-6/631836224_122181253946596608_1785954707818079872_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=100&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=QprcJbXGSnEQ7kNvwHgQesE&_nc_oc=AdpHFsVw2gTGYQ4nMaXFcgp6ea660hIASyzGS0jZBIHwGo_exLKggIPsFKl3-qCBKtM&_nc_zt=23&_nc_ht=scontent.fdac191-1.fna&_nc_gid=ZZgeYJnVmXWGIDxafkFMlw&_nc_ss=7a32e&oh=00_Afxrz-ycgNEsE1vSArzcd-BBia7nI6qnUpiinVjTDcl8Lw&oe=69C833CC'}
                                    title="Awesome Project"
                                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                                    action={() => alert("clicked")}
                                />
                            </div>
                            {/* <div className=" col-md-4 ">
                                <ProjectBox
                                    img={'https://scontent.fdac206-1.fna.fbcdn.net/v/t39.30808-6/641459064_122182860494596608_3284274470315279653_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=iEumhKeRGmkQ7kNvwFYKGFh&_nc_oc=AdrJdtyyGsGvFISxzKNFGyY0_iqyGKySH4WDAsRtMIlZjrP9J2mHVMoytDylxam08z4&_nc_zt=23&_nc_ht=scontent.fdac206-1.fna&_nc_gid=UHKFx-GVOSutpRXPADdlHw&_nc_ss=7a32e&oh=00_AfxhZdlxkUuQsv-Onz3B4ls_edOUI5oAr6zBCSIjJYqAEw&oe=69C5A877'}
                                    title="Awesome Project"
                                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                                    action={() => alert("clicked")}
                                />
                            </div>
                            <div className=" col-md-4 ">
                                <ProjectBox
                                    img={'https://scontent.fdac206-1.fna.fbcdn.net/v/t39.30808-6/641459064_122182860494596608_3284274470315279653_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=iEumhKeRGmkQ7kNvwFYKGFh&_nc_oc=AdrJdtyyGsGvFISxzKNFGyY0_iqyGKySH4WDAsRtMIlZjrP9J2mHVMoytDylxam08z4&_nc_zt=23&_nc_ht=scontent.fdac206-1.fna&_nc_gid=UHKFx-GVOSutpRXPADdlHw&_nc_ss=7a32e&oh=00_AfxhZdlxkUuQsv-Onz3B4ls_edOUI5oAr6zBCSIjJYqAEw&oe=69C5A877'}
                                    title="Awesome Project"
                                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                                    action={() => alert("clicked")}
                                />
                            </div>
                            <div className=" col-md-4 ">
                                <ProjectBox
                                    img={'https://scontent.fdac206-1.fna.fbcdn.net/v/t39.30808-6/641459064_122182860494596608_3284274470315279653_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=iEumhKeRGmkQ7kNvwFYKGFh&_nc_oc=AdrJdtyyGsGvFISxzKNFGyY0_iqyGKySH4WDAsRtMIlZjrP9J2mHVMoytDylxam08z4&_nc_zt=23&_nc_ht=scontent.fdac206-1.fna&_nc_gid=UHKFx-GVOSutpRXPADdlHw&_nc_ss=7a32e&oh=00_AfxhZdlxkUuQsv-Onz3B4ls_edOUI5oAr6zBCSIjJYqAEw&oe=69C5A877'}
                                    title="Awesome Project"
                                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                                    action={() => alert("clicked")}
                                />
                            </div> */}
                        </div>

                    </div>
                    <div className="col-md-6" style={{ width: '95%' }}>
                        <h1 style={{ marginLeft: '30px' }}>PTE SUCCESS STORIES  </h1>


                        <div className=" textCenter col-xs-12" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >

                            <div className="col-md-4  ">
                                <ProjectBox
                                    img={'https://scontent.fdac191-1.fna.fbcdn.net/v/t39.30808-6/615236290_122178600908596608_678137364955237223_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=103&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=hY4cK1lYVUcQ7kNvwGNSlnE&_nc_oc=AdqSGttjShPrkUJJ3gZYQXgWRX-wyGdh4MODekBGdIwQobI7xM3xkQUA_4uop7Wv5i8&_nc_zt=23&_nc_ht=scontent.fdac191-1.fna&_nc_gid=Cs0WyQDXpv4FKJpO3t9wjA&_nc_ss=7a32e&oh=00_AfzWoCJUg-Ra0TbbJYZ2NyRdmZ4XhVa4ekeVVdN8E0AGAw&oe=69C8272E'} title="Awesome Project"
                                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                                    action={() => alert("clicked")}
                                />
                            </div>
                            <div className=" col-md-4 ">
                                <ProjectBox
                                    img={'https://scontent.fdac191-1.fna.fbcdn.net/v/t39.30808-6/619645863_122180069522596608_2747274918767369286_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=104&ccb=1-7&_nc_sid=a934a8&_nc_ohc=b_nXEG7bogYQ7kNvwGMG73y&_nc_oc=Adp2BS3vAEdTYBAsfy1YZnvywopIXamJk_0aX7NdCbZb1BstGs4wMgyr5_xShwrsYCU&_nc_zt=23&_nc_ht=scontent.fdac191-1.fna&_nc_gid=dxlCEqo_awuLIkH0d64YXw&_nc_ss=7a32e&oh=00_AfwFHEYugHTlDWGWwtqCg0mlEsbKJn2kL1m9M7oLxZPPCQ&oe=69C83963'}
                                    title="Awesome Project"
                                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                                    action={() => alert("clicked")}
                                />
                            </div>
                            <div className=" col-md-4 ">
                                <ProjectBox
                                    img={'https://scontent.fdac191-1.fna.fbcdn.net/v/t39.30808-6/625080151_122180596514596608_1648946712425604413_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=105&ccb=1-7&_nc_sid=a934a8&_nc_ohc=Tto4J592PAEQ7kNvwF1FBSY&_nc_oc=AdrmCHjjjEOWGNAYQag1pvkbxacsP5TaNtLgiqf0MI7RTZsS4GfYHJVOistyvwDGkvM&_nc_zt=23&_nc_ht=scontent.fdac191-1.fna&_nc_gid=5mKUt5bRb29dIT2X87742w&_nc_ss=7a32e&oh=00_AfyPsuGRIIVyfdywYcPMtKHoPPqgr59uD9wq8qgOh4FW_A&oe=69C84ABB'}
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
                                    img={'https://scontent.fdac206-1.fna.fbcdn.net/v/t39.30808-6/634311910_122182190750596608_2553305399907255550_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=110&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=g-9DXPq2kM4Q7kNvwHMgs_e&_nc_oc=Adpq3_bfY4irIZZrGPa6kjM0xlezSUC6Kuz8WZquSEpNfOcVfHeyOyn1LeuaY0Nz1mk&_nc_zt=23&_nc_ht=scontent.fdac206-1.fna&_nc_gid=xI3vRoo-lyTWLQ8Vl6gDjQ&_nc_ss=7a32e&oh=00_Afy6QJ80fLyunS9PxCX2hxbQDCVpKkXdY0bcV4BR93XW2g&oe=69C5AF56'}
                                    title="Awesome Project"
                                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                                    action={() => alert("clicked")}
                                />
                            </div>
                            <div className=" col-md-4 ">
                                <ProjectBox
                                    img={'https://scontent.fdac206-1.fna.fbcdn.net/v/t39.30808-6/645692598_122183519888596608_954422975868159773_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=108&ccb=1-7&_nc_sid=a934a8&_nc_ohc=-5N8bZcRgPEQ7kNvwHJr0bt&_nc_oc=AdreKNYOCC_8cvOgRuelawUfM9NH6W3cybh_11lmIlOSZhyS5mVHvdfUW--BsQ-nLs8&_nc_zt=23&_nc_ht=scontent.fdac206-1.fna&_nc_gid=bjSxWhIobJ95iU2PFuyStw&_nc_ss=7a32e&oh=00_AfypelcR4ArcLMAQOQ44TsN4YOk-YTA4asF1H-byHF7Zng&oe=69C5AAB8'}
                                    title="Awesome Project"
                                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                                    action={() => alert("clicked")}
                                />
                            </div>
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












