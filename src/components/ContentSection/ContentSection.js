import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-scroll";
import "./ContentSection.css";

const bounceAnimation = {
  y: [0, -50], // 위로 올라갔다 내려옴
  transition: { type: "spring", stiffness: 90, damping: 5 }
};

const ContentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 }); 
  // 🔥 once: false
  // 🔥 amount: 0.5 → 화면의 50% 이상 보일 때 실행

  return (
    <section ref={ref} className="CS">
      <div className='ContentSection'>
        <motion.div className='Line_1' animate={isInView ? bounceAnimation : {}}>
          <Link to="introSection" smooth={true} duration={500} className='Circle_1'>About<br/>me</Link>
        </motion.div>
        
        <motion.div className='Line_2' animate={isInView ? bounceAnimation : {}}>
          <Link to="techStackSection" smooth={true} duration={500} className='Circle_2'>Skills</Link>
        </motion.div>
        
        <motion.div className='Line_3' animate={isInView ? bounceAnimation : {}}>
          <Link to="contactSection" smooth={true} duration={500} className='Circle_3'>Contact</Link>
        </motion.div>

        <motion.div className='Line_4' animate={isInView ? bounceAnimation : {}}>
          <Link to="projectSection" smooth={true} duration={500} className='Circle_4'>Project</Link>
        </motion.div>
      </div>
      <div className='ProjectTitle'>- KSH's Portfolio -</div>
    </section>
  );
};

export default ContentSection;
