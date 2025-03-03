import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import './IntroSection.css';
import '../ContentSection/ContentSection.css';
import MeImg from '../../assets/images/Me.jpeg';

const bounceAnimation = {
    y: [0, -50], // 위로 올라갔다 내려옴
    transition: { type: "spring", stiffness: 90, damping: 5 }
  };

const IntroSection = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    return (
        <section ref={ref}>
            <div className='IntroSection'>
                <motion.div className='Line_1' animate={isInView ? bounceAnimation : {}}>
                    <div className='Circle_1'>About<br/>me</div>
                </motion.div>
                <div>
                    <div className='IntroTitle'>Frontend Devloper</div>
                    <div className='IntroBox'>
                        <div className="ImgBox">
                            <img src={MeImg} className='MyImg'/>
                        </div>
                        <div className="TextBox_1">
                            <div className="TextBoxItem_1">
                                <strong>Name:</strong> 김석환
                            </div>
                            <div className="TextBoxItem_1">
                                <strong>Date of Birth:</strong> 2000/01/08
                            </div>
                            <div className="TextBoxItem_1">
                                <strong>Education:</strong> 국립안동대학교 컴퓨터공학과 졸업
                            </div>
                            <div className="TextBoxItem_1">
                                <strong>Introduction:</strong> <span className="noWrapText">안녕하십니까. 문제해결을 즐기며, 끊임없이 성장하는 개발자 김석환입니다.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IntroSection;