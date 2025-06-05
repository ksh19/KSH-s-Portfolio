import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import './IntroSection_2.css';
import '../ContentSection/ContentSection.css';
import PebbleFootprintIcon from '../../assets/icon/PebbleFootprintIcon';

const bounceAnimation = {
    y: [0, -50], // 위로 올라갔다 내려옴
    transition: { type: "spring", stiffness: 90, damping: 5 }
  };

const IntroSection = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    return (
        <section ref={ref}>
            <div className='IntroSection_2'>
                <motion.div className='Line_1' animate={isInView ? bounceAnimation : {}}>
                    <div className='Circle_1'>About<br/>me</div>
                </motion.div>
                <div>
                    <div className='IntroTitle_2'>My Motto</div>
                    <div className='IntroBox_2'>
                        <div className="TextBox_1_2">
                            <p>
                                저는 기능 하나를 구현하더라도<br />
                                빠르게 붙이는 것보다 <strong>올바르게 설계하는 것</strong>을 먼저 생각합니다.
                            </p>
                            <p>
                                눈에 보이는 UI만큼,<br />
                                <strong>보이지 않는 흐름과 구조</strong>까지 완성도 있게 만들기 위해 노력합니다.
                            </p>
                            <p>
                                그래서 저의 개발 철학은 이 한 문장으로 정리됩니다.
                            </p><br />
                            <blockquote>
                                “작지만 완전하게, 단단한 한 걸음을.”
                            </blockquote><br />
                            <div style={{ marginTop: '1.5rem', fontSize: '1rem', color: '#444', lineHeight: 1.6 }}>
                                <p><strong>"작지만"</strong> → 기능 하나하나를 성실하게</p>
                                <p><strong>"완전하게"</strong> → 예외 처리, 구조, 상태 흐름까지 챙기고</p>
                                <p><strong>"단단한 한 걸음"</strong> → 급하지 않고, 확실하게 나아가는 모습</p>
                            </div>
                        </div>
                        <div className="ImgBox_2">
                            <div className="footprint left">
                                <PebbleFootprintIcon />
                            </div>
                            <div className="footprint right">
                                <PebbleFootprintIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IntroSection;