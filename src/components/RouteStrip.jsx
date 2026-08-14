export default function RouteStrip({ stops, dark = false }) {
  const lineColor = dark ? "rgba(237,238,230,0.35)" : "rgba(30,42,34,0.5)";
  const textColor = dark ? "#EDEEE6" : "#1E2A22";

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox="0 0 1000 90" className="w-full min-w-[640px]" style={{ height: 90 }}>
        <line x1="20" y1="45" x2="980" y2="45" stroke={lineColor} strokeWidth="2" strokeDasharray="10 8" />
        {stops.map((s, i) => {
          const x = 20 + i * (960 / (stops.length - 1));
          const isEnd = i === 0 || i === stops.length - 1;
          return (
            <g key={s.name}>
              <circle cx={x} cy={45} r={isEnd ? 7 : 5} fill={isEnd ? "#A6472B" : "#D99A2B"} />
              <text x={x} y={22} textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="12" fill={textColor} fontWeight="500">
                {s.km}
              </text>
              <text x={x} y={72} textAnchor="middle" fontFamily="Work Sans" fontSize="13" fill={textColor} fontWeight="600">
                {s.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
