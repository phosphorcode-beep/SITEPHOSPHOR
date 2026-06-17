"use client";

export function ChameleonAnimation() {
  return (
    <div className="flex justify-center lg:justify-start">
      <svg
        viewBox="0 0 560 480"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full max-w-[560px]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cg-body" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5EEAEA" />
            <stop offset="45%" stopColor="#38B27A" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <linearGradient id="cg-head" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#72EED8" />
            <stop offset="100%" stopColor="#2DB370" />
          </linearGradient>
          <linearGradient id="cg-leg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38B27A" />
            <stop offset="100%" stopColor="#1E8060" />
          </linearGradient>
          <linearGradient id="cg-tail" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38B27A" />
            <stop offset="65%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <linearGradient id="cg-screen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1A1A3E" />
            <stop offset="100%" stopColor="#0F0F2A" />
          </linearGradient>
          <linearGradient id="cg-laptop" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#D5D5D5" />
          </linearGradient>
          <linearGradient id="cg-btn" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <radialGradient id="cg-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="cg-face-glow" cx="0%" cy="50%" r="65%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>
          <filter id="f-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.12" />
          </filter>
          <clipPath id="sc">
            <rect x="74" y="140" width="228" height="212" rx="5" />
          </clipPath>
        </defs>

        <style>{`
          @keyframes typeL {
            0%,100%{transform:translateY(0px)}
            50%{transform:translateY(-10px)}
          }
          @keyframes typeR {
            0%,25%,100%{transform:translateY(-10px)}
            75%{transform:translateY(0px)}
          }
          @keyframes float1 {
            0%,100%{transform:translateY(0px)}
            50%{transform:translateY(-11px)}
          }
          @keyframes float2 {
            0%,100%{transform:translateY(-6px)}
            55%{transform:translateY(8px)}
          }
          @keyframes float3 {
            0%,100%{transform:translateY(3px)}
            45%{transform:translateY(-10px)}
          }
          @keyframes swayTail {
            0%,100%{transform:rotate(0deg)}
            50%{transform:rotate(8deg)}
          }
          @keyframes eyeBlink {
            0%,87%,100%{transform:scaleY(0)}
            91%,95%{transform:scaleY(1)}
          }
          @keyframes glowPulse {
            0%,100%{opacity:0.22}
            50%{opacity:0.95}
          }
          @keyframes breathe {
            0%,100%{transform:scale(1)}
            50%{transform:scale(1.02)}
          }
          @keyframes codeScroll {
            0%{transform:translateY(0px)}
            100%{transform:translateY(-52px)}
          }

          .pawL{animation:typeL 0.36s ease-in-out infinite}
          .pawR{animation:typeR 0.36s ease-in-out infinite}
          .c1{animation:float1 3.2s ease-in-out infinite}
          .c2{animation:float2 3.9s ease-in-out infinite 0.7s}
          .c3{animation:float3 2.6s ease-in-out infinite 1.4s}
          .tail{animation:swayTail 4.8s ease-in-out infinite;transform-origin:462px 322px}
          .eyelid{animation:eyeBlink 5s ease-in-out infinite 2s;transform-origin:272px 248px}
          .glow{animation:glowPulse 2.9s ease-in-out infinite}
          .cBody{animation:breathe 3.6s ease-in-out infinite;transform-origin:383px 316px}
          .code{animation:codeScroll 2.8s linear infinite}
        `}</style>

        {/* Blue diagonal background stripe */}
        <rect
          x="190" y="-20" width="22" height="530"
          rx="11" fill="#2563EB" opacity="0.88"
          transform="rotate(10 190 240)"
        />

        {/* Laptop keyboard base */}
        <rect x="55" y="362" width="270" height="52" rx="10"
          fill="url(#cg-laptop)" stroke="#C5C5C5" strokeWidth="1.5"
          filter="url(#f-shadow)"
        />
        {Array.from({ length: 10 }).map((_, i) => (
          <rect key={`k1${i}`} x={74 + i * 23} y="376" width="17" height="11" rx="2.5"
            fill="#BBBBBB" opacity="0.75" />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <rect key={`k2${i}`} x={86 + i * 23} y="393" width="17" height="11" rx="2.5"
            fill="#BBBBBB" opacity="0.75" />
        ))}
        <rect x="140" y="408" width="98" height="6" rx="3" fill="#CACACA" opacity="0.55" />

        {/* Hinge */}
        <rect x="55" y="357" width="270" height="10" rx="4" fill="#DCDCDC" />

        {/* Laptop screen frame */}
        <rect x="62" y="126" width="252" height="236" rx="10"
          fill="#22223A" stroke="#DDDDDD" strokeWidth="2.5"
          filter="url(#f-shadow)"
        />
        {/* Screen surface */}
        <rect x="72" y="136" width="232" height="216" rx="6" fill="url(#cg-screen)" />

        {/* Screen glow — pulsing */}
        <ellipse cx="188" cy="244" rx="110" ry="100" fill="url(#cg-glow)" className="glow" />

        {/* Webcam dot */}
        <circle cx="188" cy="130" r="3.5" fill="#44445A" />

        {/* Scrolling code lines on screen */}
        <g clipPath="url(#sc)">
          <g className="code">
            {[
              { x: 86, y: 150, w: 88,  c: "#7C3AED" },
              { x: 86, y: 163, w: 130, c: "#5EEAEA" },
              { x: 96, y: 176, w: 96,  c: "#38B27A" },
              { x: 96, y: 189, w: 62,  c: "#5EEAEA" },
              { x: 86, y: 202, w: 112, c: "#7C3AED" },
              { x: 86, y: 215, w: 78,  c: "#5EEAEA" },
              { x: 96, y: 228, w: 104, c: "#38B27A" },
              { x: 86, y: 241, w: 122, c: "#7C3AED" },
              { x: 96, y: 254, w: 80,  c: "#5EEAEA" },
              { x: 86, y: 267, w: 138, c: "#38B27A" },
              { x: 86, y: 280, w: 90,  c: "#7C3AED" },
              { x: 96, y: 293, w: 114, c: "#5EEAEA" },
              { x: 86, y: 306, w: 88,  c: "#7C3AED" },
              { x: 86, y: 319, w: 130, c: "#5EEAEA" },
              { x: 96, y: 332, w: 96,  c: "#38B27A" },
              { x: 96, y: 345, w: 62,  c: "#5EEAEA" },
            ].map((ln, i) => (
              <rect key={i} x={ln.x} y={ln.y} width={ln.w} height="5" rx="2.5"
                fill={ln.c} opacity="0.45" />
            ))}
          </g>
        </g>

        {/* Floating Button card (on screen) */}
        <g className="c3">
          <rect x="108" y="288" width="118" height="36" rx="18"
            fill="url(#cg-btn)" filter="url(#f-shadow)" />
          <text x="167" y="311" textAnchor="middle"
            fill="white" fontSize="13" fontFamily="Inter, Arial, sans-serif"
            fontWeight="600" letterSpacing="0.5">Button</text>
        </g>

        {/* Chameleon body */}
        <g className="cBody">
          <path
            d="M 293 350
               C 282 333, 282 300, 305 283
               C 328 266, 370 260, 412 267
               C 454 274, 478 299, 475 326
               C 472 353, 450 376, 418 380
               C 386 384, 347 377, 320 368
               C 303 362, 298 358, 293 350 Z"
            fill="url(#cg-body)"
          />
          {/* Belly sheen */}
          <path
            d="M 310 366 C 344 380, 402 378, 438 363 C 456 354, 468 340, 468 325
               C 457 344, 435 364, 402 372 C 365 380, 325 372, 310 366 Z"
            fill="white" opacity="0.1"
          />
          {/* Dorsal spines */}
          {[
            [326, 281], [344, 272], [362, 265],
            [381, 262], [400, 261], [420, 265],
          ].map(([x, y], i) => (
            <path key={i}
              d={`M ${x} ${y + 12} L ${x + 5} ${y} L ${x + 10} ${y + 12}`}
              fill="#155A38" opacity="0.9"
            />
          ))}
        </g>

        {/* Chameleon head facing left */}
        <path
          d="M 226 262
             C 213 245, 220 214, 252 208
             C 277 203, 314 214, 324 236
             C 334 258, 324 288, 302 295
             C 279 302, 248 294, 236 278
             C 230 270, 228 266, 226 262 Z"
          fill="url(#cg-head)"
        />
        {/* Casque bump */}
        <path
          d="M 252 212 C 263 194, 302 191, 322 205 C 307 200, 272 199, 259 212 Z"
          fill="#155A38"
        />
        {/* Snout */}
        <path
          d="M 226 262 C 205 260, 188 267, 185 276 C 189 283, 208 280, 228 274 Z"
          fill="#2DB370"
        />
        <circle cx="189" cy="273" r="2.5" fill="#0F4028" />

        {/* Screen glow reflecting on face */}
        <ellipse cx="212" cy="256" rx="40" ry="46" fill="url(#cg-face-glow)" className="glow" />

        {/* Eye — large chameleon eye */}
        <circle cx="272" cy="248" r="28" fill="#08180E" />
        <circle cx="272" cy="248" r="24" fill="#040C07" />
        <circle cx="270" cy="248" r="16" fill="#2A8838" />
        <circle cx="270" cy="248" r="11" fill="#C4B000" />
        <circle cx="270" cy="248" r="6.5" fill="#060606" />
        <circle cx="275" cy="241" r="4.5" fill="white" opacity="0.95" />
        <circle cx="263" cy="254" r="2" fill="white" opacity="0.45" />
        <circle cx="272" cy="248" r="28" fill="none" stroke="#2DB370" strokeWidth="2.5" />
        {/* Eyelid — animates to cover eye during blink */}
        <ellipse cx="272" cy="248" rx="28" ry="28"
          fill="url(#cg-head)" className="eyelid" />

        {/* Front paw LEFT — typing */}
        <g className="pawL">
          <path
            d="M 292 343 C 275 358, 260 376, 235 390 C 230 393, 224 391, 225 386
               C 244 377, 263 366, 277 350 Z"
            fill="url(#cg-leg)"
          />
          <ellipse cx="225" cy="389" rx="5.5" ry="4.5" fill="#155A38" />
          <ellipse cx="237" cy="393" rx="5.5" ry="4.5" fill="#155A38" />
          <ellipse cx="250" cy="393" rx="5.5" ry="4.5" fill="#155A38" />
        </g>

        {/* Front paw RIGHT — typing, offset phase */}
        <g className="pawR">
          <path
            d="M 324 352 C 314 368, 306 384, 286 395 C 281 398, 275 396, 277 391
               C 293 382, 310 373, 319 358 Z"
            fill="url(#cg-leg)"
          />
          <ellipse cx="277" cy="393" rx="5.5" ry="4.5" fill="#155A38" />
          <ellipse cx="289" cy="397" rx="5.5" ry="4.5" fill="#155A38" />
          <ellipse cx="302" cy="396" rx="5.5" ry="4.5" fill="#155A38" />
        </g>

        {/* Back legs */}
        <path
          d="M 440 363 C 453 378, 460 396, 464 410 C 466 417, 474 417, 477 411
             C 472 400, 465 386, 454 371 Z"
          fill="url(#cg-leg)"
        />
        <path
          d="M 453 370 C 466 383, 472 398, 476 411 C 478 418, 486 417, 488 411
             C 483 400, 476 386, 466 374 Z"
          fill="#155A38" opacity="0.6"
        />

        {/* Tail — curling right */}
        <g className="tail">
          <path
            d="M 462 322 C 500 314, 528 337, 532 363
               C 536 389, 522 413, 504 419
               C 486 425, 465 415, 461 403
               C 457 391, 471 381, 483 385
               C 495 389, 498 403, 490 411"
            fill="none"
            stroke="url(#cg-tail)"
            strokeWidth="18"
            strokeLinecap="round"
          />
          <path
            d="M 462 322 C 500 314, 528 337, 532 363
               C 536 389, 522 413, 504 419
               C 486 425, 465 415, 461 403
               C 457 391, 471 381, 483 385
               C 495 389, 498 403, 490 411"
            fill="none"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.11"
          />
        </g>

        {/* Floating pill card — color palette */}
        <g className="c1">
          <rect x="140" y="66" width="168" height="48" rx="24"
            fill="white" stroke="#E8E8E8" strokeWidth="1"
            filter="url(#f-shadow)"
          />
          <circle cx="175" cy="90" r="13" fill="#7C3AED" />
          <circle cx="207" cy="90" r="13" fill="#EC4899" />
          <circle cx="239" cy="90" r="13" fill="#22C55E" />
          <circle cx="271" cy="90" r="13" fill="#F59E0B" />
        </g>

        {/* Floating typography card */}
        <g className="c2">
          <rect x="354" y="138" width="180" height="60" rx="12"
            fill="white" stroke="#E8E8E8" strokeWidth="1"
            filter="url(#f-shadow)"
          />
          <text x="377" y="178" fontSize="30"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontWeight="700" fill="#1A1A2E">Aa</text>
          <text x="416" y="162" fontSize="11.5"
            fontFamily="Inter, Arial, sans-serif"
            fontWeight="700" fill="#1A1A2E">Inter</text>
          <text x="416" y="181" fontSize="10.5"
            fontFamily="Inter, Arial, sans-serif"
            fill="#888888">Semibold, 16px</text>
        </g>
      </svg>
    </div>
  );
}
