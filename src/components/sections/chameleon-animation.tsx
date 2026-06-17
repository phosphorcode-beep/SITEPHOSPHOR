"use client";

export function ChameleonAnimation() {
  return (
    <div className="flex justify-center lg:justify-start">
      <svg
        viewBox="0 0 600 510"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full max-w-[600px]"
        aria-hidden="true"
      >
        <defs>
          {/* ── Gradients ─────────────────────────────────────────── */}
          <linearGradient id="g-body" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5EE8C8" />
            <stop offset="42%" stopColor="#38B27A" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <linearGradient id="g-head" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#76F0DC" />
            <stop offset="100%" stopColor="#28A86A" />
          </linearGradient>
          <linearGradient id="g-leg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4CC890" />
            <stop offset="100%" stopColor="#1A7050" />
          </linearGradient>
          <linearGradient id="g-tail" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4CC890" />
            <stop offset="58%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <linearGradient id="g-screen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#181832" />
            <stop offset="100%" stopColor="#0C0C1E" />
          </linearGradient>
          <linearGradient id="g-frame" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5F5F5" />
            <stop offset="100%" stopColor="#D8D8D8" />
          </linearGradient>
          <linearGradient id="g-base" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#CCCCCC" />
          </linearGradient>
          <linearGradient id="g-btn" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6D28D9" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>

          {/* ── Radial glows ────────────────────────────────────── */}
          <radialGradient id="g-screen-glow" cx="40%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#6D28D9" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="g-face-glow" cx="100%" cy="50%" r="75%">
            <stop offset="0%" stopColor="#5B8DEF" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#5B8DEF" stopOpacity="0" />
          </radialGradient>

          {/* ── Clip path for screen content ────────────────────── */}
          <clipPath id="clip-screen">
            <polygon points="116,106 349,87 370,342 126,360" />
          </clipPath>

          {/* ── Drop shadow ─────────────────────────────────────── */}
          <filter id="f-shadow" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="6" stdDeviation="10"
              floodColor="#000000" floodOpacity="0.18" />
          </filter>
          <filter id="f-card-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="6"
              floodColor="#000000" floodOpacity="0.14" />
          </filter>
        </defs>

        {/* ═══════════════════════════════════════════════════════
            CSS ANIMATIONS
        ═══════════════════════════════════════════════════════ */}
        <style>{`
          @keyframes typeL {
            0%,100%{ transform:translateY(0px) }
            50%    { transform:translateY(-12px) }
          }
          @keyframes typeR {
            0%,30%,100%{ transform:translateY(-12px) }
            75%        { transform:translateY(0px) }
          }
          @keyframes floatA {
            0%,100%{ transform:translateY(0px) }
            50%    { transform:translateY(-13px) }
          }
          @keyframes floatB {
            0%,100%{ transform:translateY(-8px) }
            55%    { transform:translateY(9px) }
          }
          @keyframes floatC {
            0%,100%{ transform:translateY(4px) }
            45%    { transform:translateY(-12px) }
          }
          @keyframes tailSway {
            0%,100%{ transform:rotate(0deg) }
            50%    { transform:rotate(10deg) }
          }
          @keyframes blink {
            0%,86%,100%{ transform:scaleY(0) }
            90%,94%    { transform:scaleY(1) }
          }
          @keyframes screenGlow {
            0%,100%{ opacity:0.18 }
            50%    { opacity:1 }
          }
          @keyframes faceGlow {
            0%,100%{ opacity:0.4 }
            50%    { opacity:1 }
          }
          @keyframes breathe {
            0%,100%{ transform:scale(1) }
            50%    { transform:scale(1.024) }
          }
          @keyframes codeUp {
            0%  { transform:translateY(0px) }
            100%{ transform:translateY(-56px) }
          }
          @keyframes cursorBlink {
            0%,49% { opacity:1 }
            50%,100%{ opacity:0 }
          }

          .pawL       { animation: typeL 0.34s ease-in-out infinite }
          .pawR       { animation: typeR 0.34s ease-in-out infinite }
          .floatA     { animation: floatA 3.1s ease-in-out infinite }
          .floatB     { animation: floatB 4.0s ease-in-out infinite 0.8s }
          .floatC     { animation: floatC 2.7s ease-in-out infinite 1.5s }
          .tail       { animation: tailSway 5s ease-in-out infinite;
                        transform-origin: 514px 296px }
          .eyelid     { animation: blink 4.8s ease-in-out infinite 2.2s;
                        transform-origin: 290px 242px }
          .screenGlow { animation: screenGlow 3s ease-in-out infinite }
          .faceGlow   { animation: faceGlow 3s ease-in-out infinite 1s }
          .cBody      { animation: breathe 3.8s ease-in-out infinite;
                        transform-origin: 405px 296px }
          .codeUp     { animation: codeUp 3.2s linear infinite }
          .cursor     { animation: cursorBlink 0.8s step-end infinite }
        `}</style>

        {/* ═══════════════════════════════════════════════════════
            BACKGROUND — blue diagonal stripes
        ═══════════════════════════════════════════════════════ */}
        <rect x="228" y="-40" width="26" height="600" rx="13"
          fill="#2563EB" opacity="0.92"
          transform="rotate(-9 228 255)" />
        <rect x="196" y="-40" width="10" height="600" rx="5"
          fill="#1D4ED8" opacity="0.46"
          transform="rotate(-9 196 255)" />

        {/* ═══════════════════════════════════════════════════════
            LAPTOP SCREEN — frame in perspective
        ═══════════════════════════════════════════════════════ */}
        {/* Outer white frame */}
        <polygon
          points="100,88 364,68 386,356 116,376"
          fill="url(#g-frame)"
          filter="url(#f-shadow)"
        />
        {/* Dark screen surface */}
        <polygon
          points="116,106 349,87 370,342 126,360"
          fill="url(#g-screen)"
        />

        {/* Screen glow pulse */}
        <ellipse cx="243" cy="224" rx="135" ry="122"
          fill="url(#g-screen-glow)"
          clipPath="url(#clip-screen)"
          className="screenGlow"
        />

        {/* Webcam dot */}
        <ellipse cx="233" cy="92" rx="5" ry="4.5" fill="#77778A" opacity="0.7" />

        {/* ── Screen content: line numbers + scrolling code ── */}
        <g clipPath="url(#clip-screen)">
          {/* Static line numbers */}
          {Array.from({ length: 16 }).map((_, i) => (
            <text
              key={i}
              x="124"
              y={118 + i * 14.5}
              fontSize="7.5"
              fill="#555578"
              fontFamily="'Courier New', Courier, monospace"
            >
              {i + 1}
            </text>
          ))}

          {/* Scrolling code bars */}
          <g className="codeUp">
            {[
              { x: 142, y: 113, w: 85,  c: "#7C3AED", o: 0.6 },
              { x: 142, y: 127, w: 125, c: "#5EEAEA", o: 0.55 },
              { x: 152, y: 141, w: 95,  c: "#5EEAEA", o: 0.5 },
              { x: 152, y: 155, w: 65,  c: "#38B27A", o: 0.6 },
              { x: 142, y: 169, w: 115, c: "#7C3AED", o: 0.55 },
              { x: 142, y: 183, w: 78,  c: "#5EEAEA", o: 0.5 },
              { x: 152, y: 197, w: 118, c: "#38B27A", o: 0.6 },
              { x: 142, y: 211, w: 88,  c: "#7C3AED", o: 0.55 },
              { x: 152, y: 225, w: 108, c: "#5EEAEA", o: 0.5 },
              { x: 142, y: 239, w: 138, c: "#38B27A", o: 0.6 },
              { x: 142, y: 253, w: 62,  c: "#7C3AED", o: 0.55 },
              { x: 152, y: 267, w: 104, c: "#5EEAEA", o: 0.5 },
              { x: 142, y: 281, w: 92,  c: "#38B27A", o: 0.6 },
              { x: 142, y: 295, w: 118, c: "#7C3AED", o: 0.55 },
              { x: 152, y: 309, w: 75,  c: "#5EEAEA", o: 0.5 },
              { x: 142, y: 323, w: 100, c: "#38B27A", o: 0.6 },
              {/* duplicate for seamless loop */
                x: 142, y: 337, w: 85,  c: "#7C3AED", o: 0.6 },
              { x: 142, y: 351, w: 125, c: "#5EEAEA", o: 0.55 },
              { x: 152, y: 365, w: 95,  c: "#5EEAEA", o: 0.5 },
              { x: 152, y: 379, w: 65,  c: "#38B27A", o: 0.6 },
            ].map((ln, i) => (
              <rect key={i}
                x={ln.x} y={ln.y} width={ln.w} height="6" rx="3"
                fill={ln.c} opacity={ln.o}
              />
            ))}
          </g>

          {/* Cursor */}
          <rect x="144" y="332" width="7" height="10" rx="1.5"
            fill="#7C3AED" className="cursor" />
        </g>

        {/* ── Floating Button card — over the screen, NOT clipped ── */}
        <g className="floatC">
          {/* Outer pill (ghost) */}
          <rect x="162" y="284" width="140" height="36" rx="18"
            fill="white" opacity="0.18" />
          {/* Filled button */}
          <rect x="162" y="284" width="104" height="36" rx="18"
            fill="url(#g-btn)" filter="url(#f-card-shadow)" />
          <text x="214" y="307" textAnchor="middle"
            fill="white" fontSize="13"
            fontFamily="Inter, -apple-system, Arial, sans-serif"
            fontWeight="700" letterSpacing="0.4">Button</text>
          {/* Ghost label */}
          <text x="278" y="307"
            fill="#CCCCCC" fontSize="13"
            fontFamily="Inter, -apple-system, Arial, sans-serif"
            fontWeight="500" opacity="0.55">Button</text>
        </g>

        {/* ═══════════════════════════════════════════════════════
            KEYBOARD BASE — in perspective
        ═══════════════════════════════════════════════════════ */}
        {/* Base body */}
        <polygon
          points="88,380 416,358 442,464 108,488"
          fill="url(#g-base)"
          filter="url(#f-shadow)"
        />
        {/* Keyboard top surface (lighter inset) */}
        <polygon
          points="100,386 408,365 432,454 116,476"
          fill="#F2F2F2"
        />

        {/* Key rows — three rows, perspective-skewed */}
        <g opacity="0.78">
          {/* Row 1 */}
          {Array.from({ length: 11 }).map((_, i) => (
            <rect key={`r1-${i}`}
              x={108 + i * 27} y="392" width="21" height="14" rx="3.5"
              fill="#C2C2C2"
              transform="skewX(-1.5)"
            />
          ))}
          {/* Row 2 */}
          {Array.from({ length: 10 }).map((_, i) => (
            <rect key={`r2-${i}`}
              x={116 + i * 27} y="412" width="21" height="14" rx="3.5"
              fill="#C2C2C2"
              transform="skewX(-1.5)"
            />
          ))}
          {/* Row 3 */}
          {Array.from({ length: 9 }).map((_, i) => (
            <rect key={`r3-${i}`}
              x={124 + i * 27} y="432" width="21" height="12" rx="3.5"
              fill="#C2C2C2"
              transform="skewX(-1.5)"
            />
          ))}
          {/* Space bar */}
          <rect x="166" y="448" width="164" height="12" rx="6"
            fill="#BBBBBB" transform="skewX(-1.5)" />
        </g>

        {/* Trackpad */}
        <rect x="238" y="464" width="96" height="18" rx="5"
          fill="#B8B8B8" opacity="0.5" />

        {/* ═══════════════════════════════════════════════════════
            CHAMELEON BODY — hunched over keyboard
        ═══════════════════════════════════════════════════════ */}
        <g className="cBody">
          {/* Main body blob */}
          <path
            d="M 318 348
               C 304 328, 300 292, 326 268
               C 352 244, 398 236, 444 244
               C 490 252, 520 280, 518 312
               C 516 344, 492 372, 456 378
               C 420 384, 374 378, 344 366
               C 328 358, 323 355, 318 348 Z"
            fill="url(#g-body)"
          />

          {/* Belly highlight */}
          <path
            d="M 336 364 C 372 382, 432 380, 470 364 C 490 355, 506 340, 505 322
               C 493 344, 466 362, 428 372 C 384 382, 346 372, 336 364 Z"
            fill="white" opacity="0.11"
          />

          {/* Iridescent sheen patches */}
          <ellipse cx="390" cy="295" rx="38" ry="22"
            fill="#A855F7" opacity="0.12" />
          <ellipse cx="450" cy="316" rx="28" ry="18"
            fill="#5EEAEA" opacity="0.1" />

          {/* Dorsal spines */}
          {[
            [342, 271], [362, 260], [383, 252],
            [404, 248], [426, 248], [448, 252],
          ].map(([x, y], i) => (
            <path key={i}
              d={`M ${x} ${y + 14} L ${x + 5} ${y} L ${x + 10} ${y + 14}`}
              fill="#124A30" opacity="0.95"
            />
          ))}

          {/* Scale texture hints */}
          {[
            [368, 308], [395, 300], [422, 300],
            [450, 308], [464, 328],
          ].map(([x, y], i) => (
            <ellipse key={i} cx={x} cy={y} rx="16" ry="11"
              fill="none" stroke="#124A30" strokeWidth="1.2" opacity="0.14" />
          ))}
        </g>

        {/* ── Head — profile facing left (toward screen) ──────── */}
        {/* Head base shape */}
        <path
          d="M 252 258
             C 237 238, 244 204, 278 197
             C 306 191, 346 203, 357 228
             C 368 253, 357 288, 332 297
             C 305 306, 268 296, 256 278
             C 250 268, 252 262, 252 258 Z"
          fill="url(#g-head)"
        />

        {/* Casque (helmet bump on top of head) */}
        <path
          d="M 278 201 C 292 180, 332 177, 354 194 C 338 187, 304 187, 288 201 Z"
          fill="#124A30"
        />

        {/* Subtler casque ridge */}
        <path
          d="M 278 201 C 288 192, 316 190, 334 198 L 354 194
             C 338 187, 304 187, 288 201 Z"
          fill="#0E3A24" opacity="0.6"
        />

        {/* Snout projecting left */}
        <path
          d="M 252 258 C 228 255, 208 262, 204 273 C 208 282, 230 279, 254 272 Z"
          fill="#2DB370"
        />
        {/* Nostril */}
        <circle cx="208" cy="271" r="3" fill="#0C3A1E" />

        {/* Jaw line hint */}
        <path
          d="M 254 274 C 262 285, 278 294, 296 296 C 310 298, 326 294, 335 286"
          fill="none" stroke="#1E7050" strokeWidth="2" opacity="0.4"
        />

        {/* Face glow from screen light */}
        <ellipse cx="234" cy="250" rx="50" ry="58"
          fill="url(#g-face-glow)" className="faceGlow" />

        {/* ── Eye — large, expressive chameleon eye ─────────── */}
        <circle cx="292" cy="242" r="31" fill="#060F0A" />
        <circle cx="292" cy="242" r="26" fill="#030806" />
        {/* Iris — green */}
        <circle cx="290" cy="242" r="18" fill="#248030" />
        {/* Golden ring */}
        <circle cx="290" cy="242" r="12.5" fill="#C4A800" />
        {/* Pupil */}
        <circle cx="290" cy="242" r="7.5" fill="#040404" />
        {/* Main highlight */}
        <circle cx="296" cy="232" r="5.5" fill="white" opacity="0.96" />
        {/* Secondary highlight */}
        <circle cx="280" cy="250" r="2.5" fill="white" opacity="0.42" />
        {/* Eye orbital rim */}
        <circle cx="292" cy="242" r="31" fill="none" stroke="#2DB370" strokeWidth="2.5" />

        {/* Eyelid — for blink animation */}
        <ellipse cx="292" cy="242" rx="31" ry="31"
          fill="url(#g-head)" className="eyelid" />

        {/* ── Front paw LEFT — typing ────────────────────────── */}
        <g className="pawL">
          {/* Upper arm */}
          <path
            d="M 320 344 C 302 360, 282 378, 256 396 C 250 400, 242 398, 242 392
               C 262 382, 284 368, 302 350 Z"
            fill="url(#g-leg)"
          />
          {/* Toes on keyboard */}
          <ellipse cx="242" cy="394" rx="6.5" ry="5.5" fill="#155A38" />
          <ellipse cx="255" cy="399" rx="6.5" ry="5.5" fill="#155A38" />
          <ellipse cx="269" cy="399" rx="6.5" ry="5.5" fill="#155A38" />
          <ellipse cx="282" cy="396" rx="6" ry="5"    fill="#155A38" />
        </g>

        {/* ── Front paw RIGHT — typing, offset phase ─────────── */}
        <g className="pawR">
          {/* Upper arm */}
          <path
            d="M 358 354 C 344 370, 330 384, 308 398 C 302 402, 294 400, 296 394
               C 314 384, 332 373, 346 358 Z"
            fill="url(#g-leg)"
          />
          {/* Toes */}
          <ellipse cx="296" cy="396" rx="6.5" ry="5.5" fill="#155A38" />
          <ellipse cx="309" cy="401" rx="6.5" ry="5.5" fill="#155A38" />
          <ellipse cx="323" cy="401" rx="6.5" ry="5.5" fill="#155A38" />
          <ellipse cx="336" cy="398" rx="6" ry="5"    fill="#155A38" />
        </g>

        {/* ── Back legs ─────────────────────────────────────── */}
        <path
          d="M 470 364 C 484 382, 490 404, 494 420 C 496 428, 505 428, 508 422
             C 503 410, 496 392, 484 374 Z"
          fill="url(#g-leg)"
        />
        <path
          d="M 486 372 C 500 388, 506 408, 510 422 C 512 430, 521 429, 523 423
             C 518 410, 511 392, 498 377 Z"
          fill="#1A7050" opacity="0.55"
        />
        {/* Back toes */}
        <ellipse cx="494" cy="422" rx="6.5" ry="5" fill="#155A38" />
        <ellipse cx="508" cy="426" rx="6.5" ry="5" fill="#155A38" />

        {/* ── Tail — coiled spiral ─────────────────────────── */}
        <g className="tail">
          <path
            d="M 514 296 C 554 284, 582 310, 584 340
               C 586 370, 568 400, 546 408
               C 524 416, 500 404, 496 388
               C 492 372, 508 360, 522 366
               C 536 372, 540 388, 528 396"
            fill="none"
            stroke="url(#g-tail)"
            strokeWidth="20"
            strokeLinecap="round"
          />
          {/* Tail sheen */}
          <path
            d="M 514 296 C 554 284, 582 310, 584 340
               C 586 370, 568 400, 546 408
               C 524 416, 500 404, 496 388
               C 492 372, 508 360, 522 366
               C 536 372, 540 388, 528 396"
            fill="none"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.1"
          />
        </g>

        {/* ═══════════════════════════════════════════════════════
            FLOATING UI CARDS
        ═══════════════════════════════════════════════════════ */}

        {/* Pill card — color palette */}
        <g className="floatA">
          <rect x="194" y="52" width="178" height="50" rx="25"
            fill="white" stroke="#EBEBEB" strokeWidth="1"
            filter="url(#f-card-shadow)"
          />
          <circle cx="234" cy="77" r="14" fill="#7C3AED" />
          <circle cx="268" cy="77" r="14" fill="#EC4899" />
          <circle cx="302" cy="77" r="14" fill="#22C55E" />
          <circle cx="336" cy="77" r="14" fill="#F59E0B" />
        </g>

        {/* Typography card */}
        <g className="floatB">
          <rect x="400" y="132" width="186" height="64" rx="13"
            fill="white" stroke="#EBEBEB" strokeWidth="1"
            filter="url(#f-card-shadow)"
          />
          <text x="424" y="175"
            fontSize="32"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontWeight="700" fill="#12122A">Aa</text>
          <text x="466" y="158"
            fontSize="12"
            fontFamily="Inter, -apple-system, Arial, sans-serif"
            fontWeight="700" fill="#12122A">Inter</text>
          <text x="466" y="178"
            fontSize="10.5"
            fontFamily="Inter, -apple-system, Arial, sans-serif"
            fill="#888888">Semibold, 16px</text>
        </g>
      </svg>
    </div>
  );
}
