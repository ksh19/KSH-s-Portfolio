import './modalContents.css';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import MeImage from '../../assets/images/Me.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
import GITImg from '../../assets/images/GIT.png';
import GITHUBImg from '../../assets/images/GITHUB.png';
import NEXTImg from '../../assets/images/NEXT.png';

const PROJECTS_DATA = {
  'StockLeague': {
      title: "StockLeague: 주식 모의 투자 서비스",
      image: "/Projectimg/StockLeagueImg.png", 
      summary: "사용자 친화적인 주식 모의 투자 시뮬레이션 웹 서비스.",
      details: [
          "개발 기간: 2025.03 ~ 2025.08 (6개월)",
          "개발 동기: 주식 투자 경험은 쌓고 싶지만 실제 자본 투자는 부담스러운 사용자를 위한 웹 서비스 개발",
          "개발 인원: 2명(프론트엔드 1명, 백엔드 1명)",
          "개발 목표: 실시간 시세/호가 수집 및 차트･호가판 제공<br/>주문생성->매칭/체결(부분/전체)->자산･평단가 반영<br/>알림시스템 제공<br/>랭킹시스템 제공<br/>관리자페이지",
          "주요 기술: React, Next.js, TypeScript, React Query, Recharts, react-lightweight-charts, STOMP webSocket 등",
          "담당 역할: 실시간 WebSocket을 통한 주식 가격 및 호가창 데이터 연동<br/>Lightweight-charts를 활용한 주식 차트 구현 (분봉/일봉/실시간 갱신)<br/>사용자 포트폴리오 관리 및 자산 현황 시각화 (Recharts 활용)<br/>소셜 로그인 및 인증 흐름 구현 (AccessToken/RefreshToken 관리)<br/>관리자 페이지(공지/문의/신고 관리) UI 구현 등",
          "상세 내용: 본 프로젝트는 사용자의 자산 및 종목 데이터를 실시간으로 반영하는 인터랙티브 주식 서비스 구현에 중점을 두었습니다. 안정적인 데이터 제공을 위해 WebSocket과 API Polling을 통합한 하이브리드 구조를 설계 및 적용했습니다. 사용자 경험 극대화를 위해 서비스 내에 트렌드 라인, 이동평균선(MA), 드로잉 기능 등 다양한 기능을 제공하는 전문적인 주식 차트 도구를 성공적으로 통합했습니다. 또한, 서비스 운영 효율화를 위해 관리자 페이지를 개발하여 공지사항 작성/수정 및 사용자 신고 내역 관리 기능을 구현했습니다."
      ],
      mainImage: [
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
      ] 
  },
  'TeamI': {
      title: "TeamI: 프로젝트 협업 툴",
      image: "/Projectimg/TeamI.png", 
      summary: "프로젝트 팀 매칭 웹 서비스.",
      details: [
          "개발 기간: 2024.03 ~ 2024.06 (4개월)",
          "개발 동기: 각 학교에서 프로젝트 팀을 구하는데 어려움을 겪는 학우들을 돕기 위해 개발",
          "개발 인원: 3명(프론트엔드 2명, 백엔드 1명)",
          "개발 목표: 학교별 프로젝트 및 스터디 그룹 게시물 확인 가능<br/>팀 구성 및 참여 신청 기능<br/>각 프로필 선택 시, 상세 프로필 열람",
          "주요 기술: React, TypeScript, CSS, REST API 등",
          "담당 역할: REAT API 연동을 통한 데이터 조회/전송 기능 구현<br/>메인화면, 게시판, 팀 구성, 스터디 신청 등 사용자 인터랙션 구현<br/>상태 관리 및 비동기 통신 처리(Axios 사용) 등",
          "상세 내용: TypeScript를 적용하여 프로젝트의 코드 안정성과 유지보수성을 크게 향상시켰습니다. 주요 기능으로는 학교별 프로젝트 및 스터디 그룹 게시물을 확인할 수 있는 게시판을 구현하고, 사용자가 원하는 팀을 구성하거나 참여를 신청할 수 있는 인터랙션 기능을 제공했습니다. 이 모든 기능은 REST API 연동을 통해 백엔드와 효율적으로 데이터를 송수신하며 구현되었으며, 게시판 CRUD(생성, 읽기, 수정, 삭제) 및 팀 구성/신청 로직을 포함한 복잡한 프론트엔드 인터랙션을 성공적으로 처리했습니다."
      ],
      mainImage: [
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
      ]
  },
  'Portfolio': {
      title: "KSH's Portfolio: 포트폴리오 사이트",
      image: "/Projectimg/Portfolioimg/2-1.png", 
      summary: "개인의 역량과 스킬을 게임화하여 보여주는 정적 웹사이트.",
      details: [
          "개발 기간: 2025.01 ~ 지속 수정",
          "개발 동기: 프론트엔드/퍼블리셔 역량과 스킬을 웹 사이트를 통해 보여주기 위해 개발",
          "개발 인원: 1명(프론트엔드 1명)",
          "개발 목표: 자기소개, 기술 스택, 프로젝트 소개를 손쉽게 확인할 수 있도록 개발",
          "주요 기술: React, JavaScripte, CSS, HTML 등",
          "담당 역할: 포트폴리오 웹 사이트 기획 및 디자인 개발<br/>프로젝트 소개, 자기 소개, 기술 스택 페이지 구성<br/>반응형 UI 구현",
          "상세 내용: 본 프로젝트는 개인 이력서 및 프로젝트 경험을 효과적으로 전달하기 위한 웹 포트폴리오로 제작되었습니다. 초기 구상과 달리(재구축 함), 최종적으로는 복잡한 스크롤 효과 대신 선택형 모달(Modal) 방식을 채택하여 사용자가 특정 콘텐츠에 집중적으로 접근할 수 있도록 사용자 경험(UX)을 개선했습니다. 핵심 정보는 모달 내에서 명확하게 제시하여 정보 전달력을 극대화했습니다. 또한, 배포 자동화(CI/CD) 환경을 구축함으로써 프로젝트 내용 변경 시 실시간 업데이트가 가능한 효율적인 관리 시스템을 완성했습니다."
      ],
      mainImage: [
        "/Projectimg/Portfolioimg/2-1.png",
        "/Projectimg/Portfolioimg/2-2.png",
        "/Projectimg/Portfolioimg/2-3.png",
        "/Projectimg/Portfolioimg/2-4.png",
        "/Projectimg/Portfolioimg/2-5.png",
        "/Projectimg/Portfolioimg/2-6.png",
        "/Projectimg/Portfolioimg/2-7.png",
        "/Projectimg/Portfolioimg/2-8.png",
        "/Projectimg/Portfolioimg/1.png",
        "/Projectimg/Portfolioimg/2.png",
        "/Projectimg/Portfolioimg/3.png",
        "/Projectimg/Portfolioimg/4.png",
        "/Projectimg/Portfolioimg/5.png",
        "/Projectimg/Portfolioimg/6.png",
        "/Projectimg/Portfolioimg/7.png",
      ]
  },
  'Yanolja': {
      title: "Yanolja Clone Coding: 야놀자 리서치 메인 사이트",
      image: "/Projectimg/yanolja.png", 
      summary: "html, css, 반응형 및 여러 구조를 공부한 정적 웹사이트.",
      details: [
          "개발 기간: 2025.11 ~ 2025.12 (약 3주)",
          "개발 동기: 사용해보지 않았던 기술들을 사용해 보기 위한 개발",
          "개발 인원: 1명(프론트엔드 1명)",
          "개발 목표: 반응형 UI/UX<br/>모바일 메뉴<br/>Swiper 기발 콘텐츠 슬라이더 등",
          "주요 기술: Next.js 16(App Router), React, TypeScript, CSS/SCSS, Swiper.js 등",
          "담당 역할: 모바일 접근성 강화<br/>동적 콘텐츠 표시<br/>반응형 UI/UX 구현",
          "상세 내용: 프로젝트 전반에 걸쳐 완전 반응형 레이아웃을 구현하여 모든 디바이스에서 최적화된 사용자 환경을 제공했습니다. 특히, 반응형 헤더와 모바일 전용 메뉴를 구축하여 모바일 접근성을 극대화했습니다. 또한, Swiper 라이브러리를 기반으로 인사이트 및 동향 보고서 섹션에 동적인 콘텐츠 슬라이더를 적용하여 시각적 흥미도를 높였습니다. 사용자 편의성을 위해 다중 드롭다운 메뉴와 언어 선택 기능을 통합적으로 구현했습니다."
      ],
      mainImage: [
        "/Projectimg/Yanoljaimg/yanolja3.png",
        "/Projectimg/Yanoljaimg/yanolja2.png",
        "/Projectimg/Yanoljaimg/4.png",
        "/Projectimg/Yanoljaimg/5.png",
        "/Projectimg/Yanoljaimg/6.png",
      ]
  },
  'Mazzip': {
      title: "Mazzip: 안동대학교 맛집 정보 조회 사이트",
      image: "/Projectimg/Mazzip.png", 
      summary: "ASP.NET Core 기반 정적 웹사이트.",
      details: [
          "개발 기간: 2023.09 ~ 2023.11 (3개월)",
          "개발 동기: 안동대학교 주변 식당을 신입생 학우들이 쉽게 찾아가도록 하기 위한 개발",
          "개발 인원: 2명(프론트엔드/백엔드 공동작업)",
          "개발 목표: 맛집 정보 조회 및 관리 기능 제공<br/>CRUD 기능과 게시판, 댓글, 이미지 업로드 등 사용자 인터렉션 구현, 데이터베이스 연계로 동적 데이터 처리 및 서버 요청/응답 흐름 구성 등",
          "주요 기술: ASP.NET Core, JavaScript, MySQL 등",
          "담당 역할: ASP.NET Core 기반 Web Application의 프론트엔드 화면 구현<br/>JavaScript를 활용하여 사용자 인터렉션(UI/UX) 구현<br/>MySQL 데이터베이스와 연계되는 동적 데이터 렌더링<br/>게시글/댓글, 식당 정보 조회 등 CRUD 기능 구현<br/>서버 사이드 렌더링 및 요청 처리 흐름 이해 및 구현 등",
          "상세 내용: 본 프로젝트는 .NET 기반의 웹 애플리케이션으로, 맛집 정보 조회 및 관리 기능을 사용자에게 제공하는 것을 목표로 개발되었습니다. MySQL 데이터베이스와의 안정적인 연계를 통해 모든 데이터를 동적으로 처리하고, 클라이언트의 요청에 대한 서버 응답 흐름 전체를 직접 설계하고 구성했습니다. 핵심 기능으로는 CRUD(생성, 읽기, 수정, 삭제) 기능을 포함한 게시판, 댓글, 이미지 업로드 등 복합적인 사용자 인터랙션을 구현했습니다. 이 과정을 통해 전체적인 서버-클라이언트 구조에 대한 깊은 이해와 통합 구현 경험을 확보할 수 있었습니다."
      ],
      mainImage: [
        "/Projectimg/Mazzipimg/1.png",
        "/Projectimg/Mazzipimg/2.png",
        "/Projectimg/Mazzipimg/3.png",
        "/Projectimg/Mazzipimg/4.png",
        "/Projectimg/Mazzipimg/5.png",
        "/Projectimg/Mazzipimg/6.png"
      ]
  },
};


const ProjectExplorer = () => {
  const [selectedKey, setSelectedKey] = useState(null);

  const handleBackClick = () => {
      setSelectedKey(null); 
  };

  if (selectedKey) {
      const project = PROJECTS_DATA[selectedKey];
      const parsedDetails = project.details.map(detail => {
        const parts = detail.split(':');
        const key = parts[0].trim();
        const value = key === "상세 내용" 
            ? parts.slice(1).join(':').trim().split('. ').join('. <br/>') 
            : parts.slice(1).join(':').trim();
        return { key, value };
      });
      if (!project) return <div>프로젝트 정보를 찾을 수 없습니다.</div>;

      return (
          <div className="project-detail-container modal-body-projects" style={{ maxHeight: '650px', overflowY: 'auto', padding: '15px' }}>
              <button 
                  onClick={handleBackClick} 
                  style={{ border: 'none', background: 'transparent', color: '#007bff', cursor: 'pointer', marginBottom: '15px', padding: 0, fontWeight: 'bold', fontSize: '1em' }}
              >
                  &lt; 목록
              </button>
              
              <h3 style={{ marginTop: 0, marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                  {project.title}
              </h3>
              
              <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                <div className="swiper-container" style={{ maxWidth: '100%', height: 'auto', minHeight: '150px' }}>
                  <Swiper
                      modules={[Navigation, Pagination]}
                      slidesPerView={1}
                      navigation={true}
                      pagination={{ clickable: true }}
                  >
                    {Array.isArray(project.mainImage) && project.mainImage.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img 
                                src={image} 
                                alt={`${project.title} 이미지 ${index + 1}`} 
                                style={{ maxWidth: '100%', maxHeight: '400px', width: 'auto', height: 'auto', display: 'block', margin: '0 auto' }}
                            />
                        </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              
              <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px' }} className='project-inner'>
                <h4 style={{ 
                    marginBottom: '10px', 
                    paddingBottom: '5px', 
                    borderBottom: '1px solid #eee', 
                    color: '#333' 
                }}>
                    📄 프로젝트 정보
                </h4>
                
                <dl style={{ margin: 0 }}>
                    {parsedDetails.map((item, index) => (
                        <div 
                            key={index} 
                            style={{ 
                                display: 'flex', // 키와 값을 한 줄에 나란히 배치
                                marginBottom: '8px', 
                                paddingLeft: '5px',
                                borderLeft: item.key === "주요 기술" ? '3px solid #007bff' : '3px solid #ccc' // 특정 항목 강조
                            }}
                        >
                            <dt style={{ 
                                fontWeight: 'bold', 
                                color: '#444', 
                                minWidth: '100px', 
                                marginRight: '10px' 
                            }}>
                                {item.key}
                            </dt>
                            <dd 
                                style={{ 
                                    margin: 0, 
                                    flexGrow: 1,
                                    color: item.key === "주요 기술" ? '#007bff' : '#666',
                                }}
                                dangerouslySetInnerHTML={{ __html: item.value }} 
                            />
                        </div>
                    ))}
                </dl>
            </div>
          </div>
      );
  }

  return (
      <div className="project-list-container modal-body-projects" style={{ maxHeight: '70vh', overflowY: 'auto', padding: '15px' }}>
          <h2 style={{ fontSize: '1.4em', marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #000' }}>전체 프로젝트</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
              {Object.keys(PROJECTS_DATA).map((key) => {
                  const project = PROJECTS_DATA[key];
                  return (
                      <li 
                          key={key} 
                          onClick={() => setSelectedKey(key)} 
                          className='project-menu-item'
                      >
                          {/* 썸네일 사진 */}
                          <img 
                              src={project.image} 
                              alt={project.title} 
                              style={{ width: '100px', height: '60px', marginRight: '15px', objectFit: 'cover', border: '1px solid #ddd', borderRadius: '3px' }}
                          />
                          
                          <div>
                              <strong style={{ color: '#1a5f97', fontSize: '1.1em' }}>{project.title}</strong>
                              <p style={{ margin: '3px 0 0 0', fontSize: '0.9em', color: '#666' }}>{project.summary}</p>
                          </div>
                      </li>
                  );
              })}
          </ul>
      </div>
  );
};

export const modalContents =  {
  profile: (
    <div className='profile-container'>
      {/* 1. 증명사진/아바타 영역 */}
      <div className='profile-image-area'>
          <div className='profile-photo-wrapper'>
              <img src={MeImage} alt="증명사진" className='profile-photo'/>
          </div>
      </div>
  
      {/* 2. 상세 정보 영역 */}
      <div className='profile-detail-area'>
        <h3 className='profile-title'>
            NAME: 김석환 / SeokHwan Kim
        </h3>
        <p className='profile-detail-p'>
          JOB TITLE: 프론트엔드 개발자
        </p>
        <p className='profile-detail-p'>
          BORN: 2000.01.08
        </p>
        <p className='profile-detail-p'>
          EDUCATION: 국립안동대학교(컴퓨터공학과) 
        </p>
        <p className='profile-detail-p'>
          EMAIL: tjrghks5939@gmail.com | GITHUB: github.com/ksh19
        </p>

        <div className='profile-memo-container'>
            <p className='profile-memo-text'>MEMO: 사용자 경험(UX) 중심의 인터페이스 구현에 몰두하며, 끊임없이 변화하는 웹 표준과 최신 기술을 습득하여 코드를 개선합니다.</p>
        </div>
      </div>
    </div>
  ),

  skills: (
    <div>
      <div className="skills-left-content">
        <h3 className="skills-page-title">
          📕 나의 핵심 기술 (Core Skills)
        </h3>

        <ul className="skills-list" style={{ listStyle: 'none', padding: '0', marginBottom: '20px' }}>
          
          <li className="skill-item">
            <strong className="skill-category">Frontend:</strong>{' '}
            Next.js(App Router), React, TypeScript, JavaScript(ES6+), HTML5, CSS3
          </li>

          <li className="skill-item">
            <strong className="skill-category">State & Data:</strong>{' '}
            React Query(서버 상태 관리), Recoil/Redux Toolkit, SWR, Context API
          </li>

          <li className="skill-item">
            <strong className="skill-category">Real-Time & Charts:</strong>{' '}
            STOMP WebSocket, Lightweight-Charts, Recharts, 실시간 데이터 스트림 처리
          </li>

          <li className="skill-item">
            <strong className="skill-category">Styling:</strong>{' '}
            Styled-Components, SCSS/SASS, Tailwind CSS, Framer Motion(UI Animation)
          </li>

          <li className="skill-item">
            <strong className="skill-category">Tools & DevOps:</strong>{' '}
            Git/GitHub, CI/CD(Netlify·Vercel), Webpack, REST API 연동, Figam
          </li>
        </ul>
      </div>

      {/* 오른쪽 페이지 */}
      <div className="skills-right-content">
        <h4 className="skills-summary-title">개발 철학 및 역량 요약</h4>

        <blockquote className="skills-memo-quote">
          실시간 데이터 기반 애플리케이션을 중심으로<br />
          <strong>상태 관리</strong>와 <strong>비동기 데이터 흐름</strong>을 안정적으로 설계하는 데 강점이 있습니다.<br /><br />
          WebSocket·React Query·차트 시스템 등 복잡한 구조를
          유지보수하기 쉬운 형태로 구조화하는 경험을 가지고 있습니다.<br /><br />
          사용자 경험(UX)을 우선순위로 두고, 가독성과 재사용성이 높은 코드를 지향합니다.
        </blockquote>

        <div className="skills-placeholder-image">
          <img src={REACTImg} alt="React Logo" className="tech-logo" />
          <img src={NEXTImg} alt="React Logo" className="tech-logo" />
          <img src={TSImg} alt="React Logo" className="tech-logo" />          
          <img src={JSImg} alt="React Logo" className="tech-logo" />
          <img src={CSSImg} alt="React Logo" className="tech-logo" />
          <img src={HTMLImg} alt="React Logo" className="tech-logo" />          
          <img src={JAVAImg} alt="React Logo" className="tech-logo" />
          <img src={AndroidStudioImg} alt="React Logo" className="tech-logo" />
          <img src={NetImg} alt="React Logo" className="tech-logo" />          
          <img src={MySQLImg} alt="React Logo" className="tech-logo" />
          <img src={FigmaImg} alt="React Logo" className="tech-logo" />
          <img src={GITHUBImg} alt="React Logo" className="tech-logo" />          
          <img src={GITImg} alt="React Logo" className="tech-logo" />
          <img src={DockerImg} alt="React Logo" className="tech-logo" />
        </div>
      </div>
    </div>

  ),
  projects: <ProjectExplorer/>,
};
