// Modal.js

import React, { useEffect, useState } from "react";
import "./Modal.css";

export default function Modal({ isOpen, onClose, title, children, position, type }) {
  const [modalStyle, setModalStyle] = useState({});
  const [isBookOpen, setIsBookOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setModalStyle({
        top: position.top + position.height / 2, 
        left: position.left + position.width / 2, 
        transform: "translate(-50%, -50%) scale(0.1)", 
        opacity: 0, 
        transition: "none", 
      });
        const timeoutId = setTimeout(() => {
        const modalElement = document.querySelector(".modal-content.object-modal");
        if (modalElement) { 
          // eslint-disable-next-line no-unused-vars
          const _ = modalElement.offsetHeight; }
        setModalStyle({
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(1)", 
          opacity: 1, 
          transition: "transform 0.6s ease, top 0.6s ease, left 0.6s ease, opacity 0.3s ease-out",
        });
      }, 50); 

      return () => {
        clearTimeout(timeoutId); 
        setIsBookOpen(false);
      };

    } else {
      setModalStyle({
        transform: "translate(-50%, -50%) scale(0.1)",
        opacity: 0,
        transition: "transform 0.3s ease, opacity 0.3s ease-out"
      });
      setIsBookOpen(false);
    }
  }, [isOpen, position]);

  if (!isOpen && modalStyle.opacity === 0) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-content object-modal ${type ? `modal-type-${type}` : ``}`}
        style={{
          position: "fixed",
          ...modalStyle, 
          ...(type === 'skills' && { perspective: '1500px' }),
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/*
          ===============
          1. 프로젝트 타입
          ===============
        */}
        {type === "projects" ? (
          <>
            {/* 제목 표시줄 (Header) 구현 */}
            <div className="modal-header-projects">
              <div className="modal-title-projects">
                {title || '프로젝트 상세 정보'}
              </div>
              {/* 창 제어 버튼 (CSS로 스타일링) */}
              <div className="modal-controls-projects">
                <span className="control-minimize" title="최소화"></span>
                <span className="control-maximize" title="최대화"></span>
                <span className="control-close" onClick={onClose} title="닫기"></span>
              </div>
            </div>

            {/* 본문 (Content) 영역 */}
            <div className="modal-body-projects">
              {children}
            </div>
          </>
        ) : type === "profile" ? (
          /*
            ===============
            2. 선반 타입
            ===============
          */
          <div className="profile-frame-structure">
            {/* 프레임 상단 타이틀 (액자 제목) */}
            <div className="modal-header-profile">
              <h2 className="modal-title-profile">
                {title || 'PERSONNEL FILE'}
              </h2>
            </div>
            
            {/* 실제 내용이 들어갈 액자 본체 */}
            <div className="modal-body-profile">
              {children}
            </div>
            <button className={`modal-close modal-close-${type}`} onClick={onClose}>C L O S E</button>
          </div>
        ) : (
          /*
            ===============
            3. 책장 타입
            ===============
          */
          <div className={`book-wrapper ${isBookOpen ? 'open' : ''}`}>
            <div className={`skills-frame-structure ${isBookOpen ? 'open' : ''}`}>
              
              {/* 책 앞표지 */}
              <div className={`book-cover ${isBookOpen ? 'open' : ''}`} onClick={() => setIsBookOpen(true)}>
                <h2 className="book-cover-title">{title}</h2>
                <p className="book-cover-subtitle">Click to Open</p>
              </div>
              
              {/* 2. 페이지 레이어는 book-cover 뒤에 배치 */}
              <div className={`page-layer layer-4 ${isBookOpen ? 'open' : ''}`}></div>
              <div className={`page-layer layer-3 ${isBookOpen ? 'open' : ''}`}></div>
              <div className={`page-layer layer-2 ${isBookOpen ? 'open' : ''}`}></div>
              <div className={`page-layer layer-1 ${isBookOpen ? 'open' : ''}`}></div>
              
              {/* 책 내부 (실제 콘텐츠) */}
              <div className="book-inner">
                  {/* 책 내부 제목 (표지가 열리면 보이는 제목) */}
                  
                  <div className="modal-left-body">
                      {children && children.props && children.props.children && (() => {
                          const skillsContents = React.Children.toArray(children.props.children);
                          const leftContent = skillsContents.find(child => child && child.props && child.props.className === 'skills-left-content');

                          return (
                            <div className="left-page">
                                {leftContent}
                            </div>
                          );
                      })()}
                      
                      {(!children || !children.props || !children.props.children) && (
                          <p className="error-fallback">Skills Content Loading Error or Not Found.</p>
                      )}
                  </div>
                  <div className="modal-right-body">
                      {children && children.props && children.props.children && (() => {
                          const skillsContents = React.Children.toArray(children.props.children);
                          const rightContent = skillsContents.find(child => child && child.props && child.props.className === 'skills-right-content');

                          return (
                            <div className="right-page">
                                {rightContent}
                            </div>
                          );
                      })()}
                      
                      {(!children || !children.props || !children.props.children) && (
                          <p className="error-fallback">Skills Content Loading Error or Not Found.</p>
                      )}
                  </div>
                  <button className={`modal-close modal-close-${type}`} onClick={onClose}>R E T R U R N</button>
              </div>
            </div>
          </div>
        )
      }
      </div>
    </div>
  );
}