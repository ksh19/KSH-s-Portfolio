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
    const [modalContent, setModalContent] = useState({ title: "", link: "" });

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    const openModal = (title, link) => {
        setModalContent({ title, link });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section ref={ref}>
            <div className='ProjectSection'>
                <div className='BoxGroup'>
                    <div className='ProjectBox' onClick={() => openModal("TeamI", "https://github.com/kimchanyoo/24-Capstone")}>
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
                    <div className='ProjectBox' onClick={() => openModal("KSH's Portfolio", "https://github.com/ksh19/KSH-s-Portfolio")}>
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
                    <div className='ProjectBox' onClick={() => openModal("Mazzip", "https://github.com/ksh19/.Net-project")}>
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
                    <div className='ProjectBox' onClick={() => openModal("StockLeague", "https://github.com/kimchanyoo/StockLeague/tree/dev-frontend")}>
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
                        <p>GitHub<br/> <a href={modalContent.link} target="_blank" rel="noopener noreferrer">{modalContent.link}</a></p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default ProjectSection;