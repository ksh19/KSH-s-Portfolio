import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import './ContactSection.css';
import '../ContentSection/ContentSection.css';
import MailImg from '../../assets/images/Mail.png';

const bounceAnimation = {
    y: [0, -50], // 위로 올라갔다 내려옴
    transition: { type: "spring", stiffness: 90, damping: 5 }
  };

const ContactSection = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    return (
        <section ref={ref}>
            <div className='ContactSection'>
                <div className='ContactBox'>
                    <img src={MailImg} alt="Mail" className='IconImg'></img>
                    <div className='TextBox_2'>
                        <div className='LittleTitle'>Email</div>
                        <a href="mailto:tjrghks5939@gmil.com" className="contact-link">tjrghks5939@gmil.com</a>
                        <div className='LittleTitle'>GitHub</div>
                        <a href="https://github.com/ksh19" target="_blank" rel="noopener noreferrer" className="contact-link">https://github.com/ksh19</a>
                        <div className='LittleTitle'>Figma</div>
                        <a href="https://www.figma.com/files/team/1220363008246102443/recents-and-sharing?fuid=1220363001032220167" className="contact-link">https://www.figma.com/deisgn</a>
                    </div>
                </div>
                <motion.div className='Line_3' animate={isInView ? bounceAnimation : {}}>
                    <div className='Circle_3'>Contact</div>
                </motion.div>
            </div>
        </section>
    );
}

export default ContactSection;