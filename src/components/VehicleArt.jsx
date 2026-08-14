/* Flat, on-brand vehicle illustrations — stand-ins until real fleet photos
   are dropped into src/assets/fleet/. Swap <VehicleArt type="Sedan" /> for
   <img src={photo} /> per card once you have photography. */

const roadBase = (
  <>
    <rect x="0" y="88" width="240" height="12" fill="#E3E4D9" />
    <rect x="0" y="92" width="240" height="2" fill="#1E2A22" opacity="0.15" />
  </>
);

function Sedan() {
  return (
    <svg viewBox="0 0 240 100" className="w-full h-full">
      {roadBase}
      <path d="M35 78 L45 55 L75 42 L150 42 L180 55 L205 78 Z" fill="#1E2A22" />
      <path d="M78 44 L100 30 L140 30 L152 44 Z" fill="#1E2A22" />
      <rect x="102" y="33" width="36" height="12" fill="#A6472B" opacity="0.35" />
      <circle cx="70" cy="80" r="12" fill="#0F1712" />
      <circle cx="70" cy="80" r="5" fill="#D99A2B" />
      <circle cx="172" cy="80" r="12" fill="#0F1712" />
      <circle cx="172" cy="80" r="5" fill="#D99A2B" />
      <rect x="195" y="60" width="10" height="6" fill="#D99A2B" />
    </svg>
  );
}

function SUV() {
  return (
    <svg viewBox="0 0 240 100" className="w-full h-full">
      {roadBase}
      <path d="M30 78 L36 50 L60 38 L165 38 L195 52 L205 78 Z" fill="#1E2A22" />
      <path d="M64 40 L80 27 L150 27 L165 40 Z" fill="#1E2A22" />
      <rect x="84" y="30" width="60" height="11" fill="#3F6B4A" opacity="0.35" />
      <circle cx="68" cy="80" r="13" fill="#0F1712" />
      <circle cx="68" cy="80" r="5.5" fill="#D99A2B" />
      <circle cx="172" cy="80" r="13" fill="#0F1712" />
      <circle cx="172" cy="80" r="5.5" fill="#D99A2B" />
      <rect x="192" y="58" width="10" height="6" fill="#D99A2B" />
    </svg>
  );
}

function Van() {
  return (
    <svg viewBox="0 0 240 100" className="w-full h-full">
      {roadBase}
      <path d="M25 78 L28 45 L40 32 L185 32 L205 50 L210 78 Z" fill="#1E2A22" />
      <rect x="45" y="40" width="26" height="20" fill="#A6472B" opacity="0.35" />
      <rect x="78" y="40" width="24" height="20" fill="#3F6B4A" opacity="0.3" />
      <rect x="109" y="40" width="24" height="20" fill="#3F6B4A" opacity="0.3" />
      <rect x="140" y="40" width="24" height="20" fill="#3F6B4A" opacity="0.3" />
      <circle cx="66" cy="80" r="13" fill="#0F1712" />
      <circle cx="66" cy="80" r="5.5" fill="#D99A2B" />
      <circle cx="178" cy="80" r="13" fill="#0F1712" />
      <circle cx="178" cy="80" r="5.5" fill="#D99A2B" />
      <rect x="196" y="60" width="10" height="6" fill="#D99A2B" />
    </svg>
  );
}

function BusArt() {
  return (
    <svg viewBox="0 0 240 100" className="w-full h-full">
      {roadBase}
      <path d="M15 80 L17 40 L26 30 L214 30 L223 42 L223 80 Z" fill="#1E2A22" />
      <rect x="26" y="38" width="20" height="18" fill="#D99A2B" opacity="0.4" />
      <rect x="52" y="38" width="20" height="18" fill="#3F6B4A" opacity="0.3" />
      <rect x="78" y="38" width="20" height="18" fill="#3F6B4A" opacity="0.3" />
      <rect x="104" y="38" width="20" height="18" fill="#3F6B4A" opacity="0.3" />
      <rect x="130" y="38" width="20" height="18" fill="#3F6B4A" opacity="0.3" />
      <rect x="156" y="38" width="20" height="18" fill="#3F6B4A" opacity="0.3" />
      <rect x="182" y="38" width="24" height="18" fill="#A6472B" opacity="0.35" />
      <circle cx="55" cy="82" r="13" fill="#0F1712" />
      <circle cx="55" cy="82" r="5.5" fill="#D99A2B" />
      <circle cx="185" cy="82" r="13" fill="#0F1712" />
      <circle cx="185" cy="82" r="5.5" fill="#D99A2B" />
    </svg>
  );
}

const ART = { Sedan, SUV, Van, Bus: BusArt };

export default function VehicleArt({ type }) {
  const Art = ART[type] || Sedan;
  return (
    <div className="bg-paperDeep rounded-t overflow-hidden" style={{ aspectRatio: "240/100" }}>
      <Art />
    </div>
  );
}
