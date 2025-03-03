import React from 'react';
import { motion } from 'framer-motion';
import './TitleSection.css';

const TitleSection = () => {
    return (
        <section className='TitleSection'>
            <div className='Title'>
                - 김석환 -<br/>
                Frontend Portfolio
            </div>   
        </section>
    );
}

const HangingCircles = () => {
    return (
        <div>
            <motion.div
                className="HangingCircleContainer"
                initial={{ opacity: 0, y: -50 }} // 처음에는 보이지 않음
                animate={{ opacity: 1, y: 0 }} // 부드럽게 내려오면서 보이게
                transition={{
                    delay: 0.5, // TitleSection 후에 약간 지연되게
                    type: "spring",
                    stiffness: 100,
                }}
            >
                <motion.div 
                    className="HangingLine_1" 
                    initial={{ height: 0 }} // 처음에는 선이 보이지 않음
                    animate={{ height: "30vh" }} // 애니메이션 중에 선이 길어짐
                    transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 7,
                        duration: 1
                    }}
                >
                    <div className="HangingCircle"></div>
                </motion.div>
                <motion.div 
                    className="HangingLine_4" 
                    initial={{ height: 0 }} // 처음에는 선이 보이지 않음
                    animate={{ height: "60vh" }} // 애니메이션 중에 선이 길어짐
                    transition={{
                        type: "spring",
                        stiffness: 70,
                        damping: 7,
                        duration: 1
                    }}
                >
                    <div className="HangingCircle"></div>
                </motion.div>
                <div className='Scroll'>
                    scroll<br />
                    ↓
                </div>
                <motion.div 
                    className="HangingLine_2"
                    initial={{ height: 0 }} // 처음에는 선이 보이지 않음
                    animate={{ height: "50vh" }} // 애니메이션 중에 선이 길어짐
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 7,
                        duration: 1.2 // 지연 시간 추가
                    }}
                >
                    <div className="HangingCircle"></div>
                </motion.div>
                <motion.div 
                    className="HangingLine_3"
                    initial={{ height: 0 }} // 처음에는 선이 보이지 않음
                    animate={{ height: "30vh" }} // 애니메이션 중에 선이 길어짐
                    transition={{
                        type: "spring",
                        stiffness: 70,
                        damping: 7,
                        duration: 1.5 // 지연 시간 추가
                    }}
                >
                    <div className="HangingCircle"></div>
                </motion.div>
            </motion.div>
        </div>
    );
}

const Page = () => {
    return (
        <div className="PageContainer">
            <HangingCircles />
            <TitleSection />
        </div>
    );
}

export default Page;