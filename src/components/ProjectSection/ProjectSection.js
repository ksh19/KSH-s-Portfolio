import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import './ProjectSection.css';
import '../ContentSection/ContentSection.css';
import TeamiImg from '../../assets/images/TeamI.png';
import MzImg from '../../assets/images/Mazzip.png';
import PofolImg from '../../assets/images/Portfolio.png';
import SLImg from '../../assets/images/StockLeagueImg.png';

const bounceAnimation = {
    y: [0, -50], // 위로 올라갔다 내려옴
    transition: { type: "spring", stiffness: 90, damping: 5 }
  };

const ProjectSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: "", link: "", images: [] });
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        if (!modalContent.images) return;
        setCurrentIndex((prev) => (prev + 1) % modalContent.images.length);
    };
    const prevImage = () => {
        if (!modalContent.images) return;
        setCurrentIndex((prev) => (prev - 1 + modalContent.images.length) % modalContent.images.length);
    };
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    const openModal = (title, link, images) => {
        setModalContent({ title, link, images });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section ref={ref}>
            <div className='ProjectSection'>
                <div className='BoxGroup'>
                    <div className='ProjectBox' onClick={() => openModal("TeamI", "https://github.com/kimchanyoo/24-Capstone", 
                        [
                            "/Projectimg/TeamIimg/1.png",
                            "/Projectimg/TeamIimg/2.png",
                            "/Projectimg/TeamIimg/3.png",
                            "/Projectimg/TeamIimg/4.png",
                            "/Projectimg/TeamIimg/5.png",
                            "/Projectimg/TeamIimg/6.png",
                            "/Projectimg/TeamIimg/7.png",
                            "/Projectimg/TeamIimg/8.png",
                            "/Projectimg/TeamIimg/9.png",
                            "/Projectimg/TeamIimg/10.png",
                            "/Projectimg/TeamIimg/11.png",
                        ]
                    )}>
                        <img src={TeamiImg} alt="TeamI" className='PJImg'/>
                        <div className="TextBox">
                            <strong>Project Name:</strong> TeamI
                        </div>
                        <div className="TextBox">
                            <strong>Description:</strong> 팀원 매칭 웹 애플리케이션
                        </div>
                        <div className="TextBox">
                            <strong>Tech Stack:</strong> 
                            <div className="TextBox_tech">REACT</div>
                            <div className="TextBox_tech">TS</div>
                            <div className="TextBox_tech">HTML5</div>
                            <div className="TextBox_tech">CSS3</div>
                        </div>
                    </div>
                    <div className='ProjectBox' onClick={() => openModal("KSH's Portfolio", "https://github.com/ksh19/KSH-s-Portfolio",
                        [
                            "/Projectimg/Portfolioimg/1.png",
                            "/Projectimg/Portfolioimg/2.png",
                            "/Projectimg/Portfolioimg/3.png",
                            "/Projectimg/Portfolioimg/4.png",
                            "/Projectimg/Portfolioimg/5.png",
                            "/Projectimg/Portfolioimg/6.png",
                            "/Projectimg/Portfolioimg/7.png"
                        ]
                    )}>
                        <img src={PofolImg} alt="KSH's Portfolio" className='PJImg'/>
                        <div className="TextBox">
                            <strong>Project Name:</strong> KSH's Portfolio
                        </div>
                        <div className="TextBox">
                            <strong>Description:</strong> 프론트엔드 포트폴리오
                        </div>
                        <div className="TextBox">
                            <strong>Tech Stack:</strong>
                            <div className="TextBox_tech">REACT</div>
                            <div className="TextBox_tech">JS</div>
                            <div className="TextBox_tech">HTML5</div>
                            <div className="TextBox_tech">CSS3</div>
                        </div>
                    </div>
                    <div className='ProjectBox' onClick={() => openModal("Mazzip", "https://github.com/ksh19/.Net-project",
                        [
                            "/Projectimg/Mazzipimg/1.png",
                            "/Projectimg/Mazzipimg/2.png",
                            "/Projectimg/Mazzipimg/3.png",
                            "/Projectimg/Mazzipimg/4.png",
                            "/Projectimg/Mazzipimg/5.png",
                            "/Projectimg/Mazzipimg/6.png"
                        ]
                    )}>
                        <img src={MzImg} alt="Mazzip" className='PJImg'></img>
                        <div className="TextBox">
                            <strong>Project Name:</strong> Mazzip
                        </div>
                        <div className="TextBox">
                            <strong>Description:</strong> 안동대 맛집 웹 애플리케이션
                        </div>
                        <div className="TextBox">
                            <strong>Tech Stack:</strong>
                            <div className="TextBox_tech">.Net</div>
                            <div className="TextBox_tech">JS</div>
                            <div className="TextBox_tech">MySQL</div>
                        </div>
                    </div>
                    <div className='ProjectBox' onClick={() => openModal("StockLeague", "https://github.com/kimchanyoo/StockLeague/tree/dev-frontend",
                        [
                            "/Projectimg/StockLeagueimg/1.png",
                            "/Projectimg/StockLeagueimg/2.png",
                            "/Projectimg/StockLeagueimg/3.png",
                            "/Projectimg/StockLeagueimg/4.png",
                            "/Projectimg/StockLeagueimg/5.png",
                            "/Projectimg/StockLeagueimg/6.png",
                            "/Projectimg/StockLeagueimg/7.png",
                            "/Projectimg/StockLeagueimg/8.png",
                            "/Projectimg/StockLeagueimg/9.png",
                            "/Projectimg/StockLeagueimg/10.png",
                            "/Projectimg/StockLeagueimg/11.png",
                            "/Projectimg/StockLeagueimg/12.png"
                        ]
                    )}>
                        <img src={SLImg} alt="StockLeague" className='PJImg'></img>
                        <div className="TextBox">
                            <strong>Project Name:</strong> StockLeague
                        </div> 
                        <div className="TextBox">
                            <strong>Description:</strong> 실시간 주식 모의 투자 리그 플랫폼
                        </div>
                        <div className="TextBox">
                            <strong>Tech Stack:</strong>
                            <div className="TextBox_tech">NEXT</div>
                            <div className="TextBox_tech">REACT</div>
                            <div className="TextBox_tech">TS</div>
                            <div className="TextBox_tech">HTML5</div>
                            <div className="TextBox_tech">CSS3</div>
                        </div>              
                    </div>
                </div>
                <motion.div className='Line_4' animate={isInView ? bounceAnimation : {}}>
                    <div className='Circle_4'>Projcet</div>
                </motion.div>
            </div>

            {/* 모달 창 */}
            {isModalOpen && (
                <div className="Modal">
                    <div className="ModalContent">
                        <h2>{modalContent.title}</h2>
                        <p>GitHub<br/> 
                            <a href={modalContent.link} target="_blank" rel="noopener noreferrer">
                                {modalContent.link}
                            </a>
                        </p>

                        {/* 이미지들 */}
                        {modalContent.images?.length > 0 && (
                            <div className="ModalSlider">
                            <button className="SlideBtn left" onClick={prevImage}>‹</button>
                            <img 
                                src={modalContent.images[currentIndex]} 
                                alt={`${modalContent.title} ${currentIndex+1}`} 
                                className="SlideImage"
                                loading="lazy"
                            />
                            <button className="SlideBtn right" onClick={nextImage}>›</button>
                            </div>
                        )}

                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default ProjectSection;