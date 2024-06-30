"use client"
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ShimmerButton from "./ui/ShimmerButton";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { AvatarGroup } from "./AvatarGroupe";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="gray"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[60vh] w-[50vw] contrast-[0.3]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-background bg-white-50 dark:bg-grid-white/[0.02] bg-grid-black-100/[0.03]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs font-bold text-center text-slate-600 dark:text-white max-w-80">
            تجربه‌ای بی‌نظیر از سرمایه‌گذاری مدرن
          </p>
          <TextGenerateEffect
            words="خرید و فروش ارز دیجیتال در صرافی بیت فلر"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <AvatarGroup />

          <Link title="صفحه ارزهای دیجیتال" href="/currencies" className="mt-6">
            <ShimmerButton
              title="خرید ارز دیجیتال"
              icon={<FaArrowLeft />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
