import "./Furniture.css";
import React, { useState }from "react";
import Cusor from "../../../assets/icon/cusor.png";
import Me from "../../../assets/images/Me.jpg";
import Andong from "../../../assets/images/andong.avif"
import Modal from "../../Modal/Modal.js";
import { modalContents } from "../../Modal/modalContents.js";
import "@fontsource/press-start-2p";

export default function Furniture() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");     
  const [selectedType, setSelectedType] = useState("");
  const [modalPos, setModalPos] = useState({ top: 0, left: 0 });

  const handleOpenModal = (e, objectType, objectTitle) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect(); // viewport 기준
    setModalPos({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    });
    setSelectedType(objectType); 
    setModalTitle(objectTitle);
    setModalOpen(true);
  };

  return (
    <div className="room-furniture">
      <div className="div0">
        {/* 포스터 */}
        <div className="poster">
          <div className="pond"></div>
          <h1>
            Select<br/>each<br/>Object!
          </h1>
          <img src={Cusor} alt="커서아이콘"/>
        </div>
      </div>

      <div className="div1" onClick={(e) => handleOpenModal(e, "profile", "PERSONNEL FILE")}>
        {/* 선반 */}
        <div className="shelf">
          <div className="shelfleg left"></div>
          <div className="shelfleg right"></div>
          {/* 액자 2개 */}
          <div className="frame small">
            <img src={Me} alt="me"/>
          </div>
          <div className="frame big">
            <img src={Andong} alt="school"/>
          </div>
        </div>
      </div>
      
      <div className="div2" onClick={(e) => handleOpenModal(e, "skills", "Stack Deciphered: An Engineer's Toolkit")}>
        {/* 책장 */}
        <div className="bookshelf">
          <div className="upside">
            <div className="book top1"></div>
            <div className="book top2"></div>
            <div className="book top3"></div>
            <div className="book top4"></div>
          </div>
          <div className="middleside"></div>
          <div className="downside">
            <div className="book bottom1"></div>
            <div className="book bottom2"></div>
            <div className="book bottom3"></div>
            <div className="book bottom4"></div>
          </div>
        </div>
      </div>

      <div className="div3" onClick={(e) => handleOpenModal(e, "projects", "www.Project.file")}>
        {/* 테이블 */}
        <div className="table">
          <div className="tabletop"></div>
          <div className="tableleg lf"></div>
          <div className="tableleg rt"></div>
          {/* 모니터 */}
          <div className="monitor">
            <img src="/Projectimg/StockLeagueImg.png" alt="project"/>
            <div className="neck"></div>
            <div className="support"></div>
          </div>
          {/* 본체 */}
          <div className="desktop">
            <div className="stick"></div>
            <div className="wing top">
              <div className="spot"></div>
            </div>
            <div className="wing middle">
              <div className="spot"></div>
            </div>
            <div className="wing bottom">
              <div className="spot"></div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        type={selectedType}
        position={modalPos}
      >
        {modalContents[selectedType]}
      </Modal>
    </div>
  );
}
