"use client";

import { LottieIDV } from "@/components/sections/lottie-idv";

export function PudgyLottie() {
  return (
    <LottieIDV
      src="/lottie/pudgy-work.json"
      label="Equipe trabalhando"
      speed={0.85}
      className="h-auto w-full max-w-[320px] sm:max-w-[440px] lg:max-w-[560px] [image-rendering:auto] [filter:grayscale(1)_sepia(1)_hue-rotate(58deg)_saturate(2)_brightness(1.08)_contrast(1.08)]"
    />
  );
}
