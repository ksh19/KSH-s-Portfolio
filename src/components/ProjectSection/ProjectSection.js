import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import './ProjectSection.css';
import '../ContentSection/ContentSection.css';

const bounceAnimation = {
    y: [0, -50], // 위로 올라갔다 내려옴
    transition: { type: "spring", stiffness: 90, damping: 5 }
};

const PROJECTS = [
    {
      title: "TeamI",
      description: "팀원 매칭 웹 애플리케이션",
      link: "https://github.com/kimchanyoo/24-Capstone",
      thumbnail: "/Projectimg/TeamI.png",
      tech: ["REACT", "TS", "HTML5", "CSS3"],
      images: [
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
        "/Projectimg/TeamIimg/11.png"
      ],
    },
    {
      title: "KSH's Portfolio",
      description: "프론트엔드 포트폴리오",
      link: "https://github.com/ksh19/KSH-s-Portfolio",
      thumbnail: "/Projectimg/Portfolio.png",
      tech: ["REACT", "JS", "HTML5", "CSS3"],
      images: [
        "/Projectimg/Portfolioimg/1.png",
        "/Projectimg/Portfolioimg/2.png",
        "/Projectimg/Portfolioimg/3.png",
        "/Projectimg/Portfolioimg/4.png",
        "/Projectimg/Portfolioimg/5.png",
        "/Projectimg/Portfolioimg/6.png",
        "/Projectimg/Portfolioimg/7.png"
      ],
    },
    {
      title: "Mazzip",
      description: "안동대 맛집 웹 애플리케이션",
      link: "https://github.com/ksh19/.Net-project",
      thumbnail: "/Projectimg/Mazzip.png",
      tech: [".Net", "JS", "MySQL"],
      images: [
        "/Projectimg/Mazzipimg/1.png",
        "/Projectimg/Mazzipimg/2.png",
        "/Projectimg/Mazzipimg/3.png",
        "/Projectimg/Mazzipimg/4.png",
        "/Projectimg/Mazzipimg/5.png",
        "/Projectimg/Mazzipimg/6.png"
      ],
    },
    {
      title: "StockLeague",
      description: "실시간 주식 모의 투자 리그 플랫폼",
      link: "https://github.com/kimchanyoo/StockLeague/tree/dev-frontend",
      thumbnail: "/Projectimg/StockLeagueImg.png",
      tech: ["NEXT", "REACT", "TS", "HTML5", "CSS3"],
      images: [
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
      ],
    },
    {
        title: "Yanolja-Research",
        description: "야놀자리서치 메인 클론코딩",
        link: "https://github.com/ksh19/Yanolja_research_Clone_Coding",
        thumbnail: "/Projectimg/yanolja.png",
        tech: ["NEXT", "REACT", "TS", "HTML5", "CSS3"],
        images: [
          "/Projectimg/Yanoljaimg/yanolja3.png",
          "/Projectimg/Yanoljaimg/yanolja2.png",
        ],
      }
];

const ProjectSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

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
    const openModal = (title, link, images) => {
        setModalContent({ title, link, images });
        setIsModalOpen(true);
    };
    const closeModal = () => { setIsModalOpen(false); };

    return (
        <section ref={ref}>
            <div className='ProjectSection'>
                <div className="BoxGroup">
                    {PROJECTS.map((project) => (
                        <div
                            className="ProjectBox"
                            onClick={() => openModal(project.title, project.link, project.images)}
                        >
                        <img src={project.thumbnail} alt={project.title} className="PJImg" />
                  
                        <div className="TextBox">
                          <strong>Project Name:</strong> {project.title}
                        </div>
                  
                        <div className="TextBox">
                          <strong>Description:</strong> {project.description}
                        </div>
                  
                        <div className="TextBox">
                          <strong>Tech Stack:</strong>
                          {project.tech.map((t) => (
                            <div key={t} className="TextBox_tech">
                              {t}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
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