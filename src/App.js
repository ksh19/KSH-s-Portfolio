import React, { useEffect, useState } from 'react';
import './App.css';
import TitleSection from './components/TitleSection/TitleSection.js';
import ContentSection from './components/ContentSection/ContentSection.js';
import IntroSection from './components/IntroSection/IntroSection.js';
import IntroSection_2 from './components/IntroSection_2/IntroSection_2.js';
import ProjectSection from './components/ProjectSection/ProjectSection.js';
import TechStackSection from './components/TechStackSection/TechStackSection.js';
import ContactSection from './components/ContactSection/ContactSection.js';
import TopButton from './components/TopButton/TopButton.js';

const sections = ["titleSection", "contentSection", "introSection", "introSection_2", "projectSection", "techStackSection", "contactSection"];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(0); // 🔥 누적된 휠 값 저장

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault(); // 기본 스크롤 방지

      setScrollAmount((prevAmount) => {
        const newAmount = prevAmount + event.deltaY; // 🔥 휠 이동 거리 누적

        if (newAmount > 100) { // 🔥 일정 값 이상이면 아래로 이동
          setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, sections.length - 1));
          return 0; // 🔥 값 초기화
        } else if (newAmount < -100) { // 🔥 일정 값 이상 위로 이동
          setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
          return 0; // 🔥 값 초기화
        }
        return newAmount;
      });
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.getElementById(sections[currentIndex])?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [currentIndex]);

  return (
    <div>
      <div className='Section'>
        <div id='titleSection'><TitleSection /></div>
        <div id='contentSection'><ContentSection /></div>
        <div id='introSection'><IntroSection/></div>
        <div id='introSection_2'><IntroSection_2 /></div>
        <div id='projectSection'><ProjectSection /></div>
        <div id='techStackSection'><TechStackSection /></div>
        <div id='contactSection'><ContactSection /></div>
      </div>
      <TopButton/>
    </div>
  );
}

export default App;
