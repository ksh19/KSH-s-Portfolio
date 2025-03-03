import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import './TechStackSection.css';
import '../ContentSection/ContentSection.css';
import JSImg from '../../assets/images/JS.png';
import TSImg from '../../assets/images/TS.png';
import CSSImg from '../../assets/images/CSS.png';
import HTMLImg from '../../assets/images/HTML.png';
import REACTImg from '../../assets/images/REACT.png'; 
import JAVAImg from '../../assets/images/JAVA.png';
import AndroidStudioImg from '../../assets/images/AndroidStudio.png';
import MySQLImg from '../../assets/images/MySQL.png';
import FigmaImg from '../../assets/images/Figma.png';
import DockerImg from '../../assets/images/Docker.png';
import NetImg from '../../assets/images/Net.png';
import PythonImg from '../../assets/images/Python.png';

const bounceAnimation = {
    y: [0, -50], // 위로 올라갔다 내려옴
    transition: { type: "spring", stiffness: 90, damping: 5 }
  };

const TechStackSection = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    return (
        <section ref={ref}>
            <div className='TechStackSection'>
                <motion.div className='Line_2' animate={isInView ? bounceAnimation : {}}>
                    <div className='Circle_2'>Skills</div>
                </motion.div>
                <div className='BoxGroup_2'>
                    <div className='TechTitle'>Proficient In</div>
                    <div className='TechBox'>
                        <img src={JSImg} alt="JavaScript Logo" className="TechImage"/>
                        <img src={TSImg} alt="TypeScript Logo" className="TechImage"/>
                        <img src={CSSImg} alt="CSS Logo" className="TechImage"/>
                        <img src={HTMLImg} alt="HTML Logo" className="TechImage"/>
                        <img src={REACTImg} alt="React Logo" className="TechImage"/>
                    </div>
                    <div className='TechTitle'>Familiar With</div>
                    <div className='TechBox'>
                        <img src={JAVAImg} alt="JAVA Logo" className="TechImage"/>
                        <img src={AndroidStudioImg} alt="AndroidStudio Logo" className="TechImage"/>
                        <img src={MySQLImg} alt="MySQL Logo" className="TechImage"/>
                        <img src={FigmaImg} alt="Figma Logo" className="TechImage"/>
                    </div>
                    <div className='TechTitle'>Have Tried</div>
                    <div className='TechBox'>
                        <img src={DockerImg} alt="Docker Logo" className="TechImage"/>
                        <img src={NetImg} alt="ASP.NET Logo" className="TechImage"/>
                        <img src={PythonImg} alt="Python Logo" className="TechImage"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TechStackSection;