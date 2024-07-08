"use client";

import { currentPersianDate } from "@/utils/toLocalDate";
import MainLogo from "../common/MainLogo";
import Link from "next/link";

import { FaInstagram, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";
import { footerNavs } from "@/data";

const socialMediaLinks = [
  { href: "/()", icon: <FaTwitter size={24} />, key: "twitter" },
  {
    href: "/()",
    icon: <FaInstagram size={24} />,
    key: "instagram",
  },
  { href: "/()", icon: <FaYoutube size={24} />, key: "youtube" },
  {
    href: "/()",
    icon: <FaTelegram size={24} />,
    key: "telegram",
  },
];

const Footer = () => {
  const year = currentPersianDate();
  return (
    <footer className="mt-14 px-4 text-gray-500 first-letter:mx-auto dark:text-gray-200 md:px-8">
      <div className="justify-between gap-6 md:flex">
        <div className="flex-1">
          <div className="max-w-xs">
            <MainLogo />
            <p className="mt-2 text-[15px] leading-relaxed">
              {process.env.NEXT_PUBLIC_SITE_NAME} مرکز جامع خرید و فروش ارزهای
              دیجیتال. حفظ دارایی‌های مشتریان اولویت ما است.
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
            <label className="block pb-2 pt-4">بروز باشید!</label>
            <div className="flex max-w-sm items-center rounded-md border p-1">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="w-full p-2.5 outline-none"
              />
              <button className="whitespace-nowrap rounded-md bg-blue-600 p-2.5 text-white shadow-md outline-none focus:shadow-none sm:px-5">
                ثبت نام
              </button>
            </div>
          </form>
        </div>
        <div className="mt-10 grid flex-1 grid-cols-3 items-center justify-between sm:flex sm:gap-0 md:mt-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4" key={idx}>
              <h4 className=" text-lg font-bold text-gray-800 dark:text-white">
                {item.label}
              </h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <Link href={el.href} className=" hover:text-blue-600">
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center gap-2 border-t py-3 md:flex-row md:justify-between">
        <div className="flex flex-row gap-1 text-xs sm:text-sm">
          <div>
            تمامی حقوق برای سایت{" "}
            <Link
              role="link"
              aria-label="وبسایت ورکفولیو"
              title="وبسایت ورکفولیو"
              href="/"
              className="hover:text-blue-600"
            >
              {process.env.NEXT_PUBLIC_SITE_NAME}
            </Link>{" "}
            محفوظ است.
          </div>
          <p>کپی‌رایت © {year}</p>
        </div>

        <div className="">
          <ul className="flex items-end gap-2">
            {socialMediaLinks.map(({ href, icon, key }) => (
              <li
                key={key}
                className="flex size-10 items-center justify-center rounded-full border transition-colors hover:text-blue-600"
              >
                <a href={href}>{icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
