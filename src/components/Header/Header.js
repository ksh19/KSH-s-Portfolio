import "./Header.css";
import { useEffect, useRef } from "react";

const Header = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current;
    let isDragging = false;
    let startY = 0;
    const baseHeight = line.offsetHeight;
    const maxPull = 90;
    const triggerPull = 80;

    let currentPull = 0;

    const getClientY = (e) => {
      if (e.touches) return e.touches[0].clientY;
      return e.clientY;
    };

    const startDrag = (e) => {
      isDragging = true;
      startY = getClientY(e);
      currentPull = 0;

      line.style.transition = "none";
    };

    const moveDrag = (e) => {
      if (!isDragging) return;

      const diff = getClientY(e) - startY;
      const pullDistance = Math.max(0, Math.min(maxPull, diff));

      currentPull = pullDistance;
      line.style.height = `${baseHeight + pullDistance}px`;

      if (e.cancelable) e.preventDefault();
    };

    const endDrag = () => {
      if (!isDragging) return;
      isDragging = false;

      if (currentPull > triggerPull) {
        document.body.classList.toggle("light-on");
      }

      line.style.transition = "height 0.25s cubic-bezier(.34,1.56,.64,1)";
      line.style.height = `${baseHeight}px`;
    };

    line.addEventListener("mousedown", startDrag);
    document.addEventListener("mousemove", moveDrag);
    document.addEventListener("mouseup", endDrag);

    line.addEventListener("touchstart", startDrag);
    document.addEventListener("touchmove", moveDrag, { passive: false });
    document.addEventListener("touchend", endDrag);

    return () => {
      line.removeEventListener("mousedown", startDrag);
      document.removeEventListener("mousemove", moveDrag);
      document.removeEventListener("mouseup", endDrag);

      line.removeEventListener("touchstart", startDrag);
      document.removeEventListener("touchmove", moveDrag);
      document.removeEventListener("touchend", endDrag);
    };
  }, []);

  return (
    <header className="lamp-header">
      <div className="lamp-body">
        <div className="lamp-light"></div>
      </div>
      <div className="lamp-rope">
        <div className="rope-line" ref={lineRef}></div>
        <div className="rope-hint">Turn On!</div>
      </div>
    </header>
  );
};

export default Header;
