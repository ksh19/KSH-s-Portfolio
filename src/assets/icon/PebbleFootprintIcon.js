const PebbleFootprintIcon = () => (
  <svg
    width="100"
    height="140"
    viewBox="0 0 80 120"   // 뷰박스 가로세로 키워줌
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter
        id="shadow"
        x="-20"
        y="-20"
        width="120"
        height="150"
        colorInterpolationFilters="sRGB"
      >
        <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#4a3c2b" floodOpacity="0.6" />
      </filter>
    </defs>

    {/* 발바닥 타원 - 그림자 필터 적용 */}
    <ellipse
      cx="40"
      cy="80"
      rx="18"
      ry="28"
      fill="#765D43"
      filter="url(#shadow)"
    />

    {/* 조약돌 모양 발가락들에도 그림자 */}
    <circle cx="28" cy="45" r="7" fill="#A98C5C" filter="url(#shadow)" />
    <circle cx="38" cy="33" r="5" fill="#B09E6F" filter="url(#shadow)" />
    <circle cx="50" cy="40" r="6" fill="#8F7549" filter="url(#shadow)" />
    <circle cx="58" cy="55" r="4" fill="#9C8663" filter="url(#shadow)" />
  </svg>
);

export default PebbleFootprintIcon;
