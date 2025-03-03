import React, { useState, useEffect } from 'react';
import './TopButton.css';

const TopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // 스크롤 감지해서 버튼 표시 여부 결정
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // 위로 스크롤 이동 함수
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        isVisible && (
            <div className='TopButton' onClick={scrollToTop}>
                ▲
            </div>
        )
    );
};

export default TopButton;
