// "use client"
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import ShimmerButton from "../ui/ShimmerButton";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { AvatarGroup } from "../common/AvatarGroupe";

const Hero = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="gray"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-28 h-[60vh] w-[50vw] contrast-[0.3]"
          fill="blue"
        />
      </div>
      <div
        className="absolute left-0 top-0 flex h-screen w-full
       items-center justify-center bg-white-50 bg-grid-black-100/[0.03] dark:bg-background dark:bg-grid-white/[0.06]"
      >
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white
         [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-background"
        />
      </div>

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <p className="max-w-80 text-center text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-white">
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
