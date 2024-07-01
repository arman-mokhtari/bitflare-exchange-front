"use client";

import { currentPersianDate } from "@/utils/toLocalDate";
import MainLogo from "../common/MainLogo";
import Link from "next/link";

import { FaInstagram, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";
import { footerNavs } from "@/data";

const socialMediaLinks = [
  { href: "javascript:void()", icon: <FaTwitter size={24} />, key: "twitter" },
  {
    href: "javascript:void()",
    icon: <FaInstagram size={24} />,
    key: "instagram",
  },
  { href: "javascript:void()", icon: <FaYoutube size={24} />, key: "youtube" },
  {
    href: "javascript:void()",
    icon: <FaTelegram size={24} />,
    key: "telegram",
  },
];

const Footer = () => {
  const year = currentPersianDate();
  return (
    <footer className="text-gray-500 dark:text-gray-200  px-4 first-letter:mx-auto md:px-8">
      <div className="gap-6 justify-between md:flex">
        <div className="flex-1">
          <div className="max-w-xs">
            <MainLogo />
            <p className="leading-relaxed mt-2 text-[15px]">
              پلتفرم جامع خرید و فروش ارزهای دیجیتال در ایران. حفظ دارایی‌های
              مشتریان اولویت {process.env.NEXT_PUBLIC_SITE_NAME} است.
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <label className="block pt-4 pb-2">بروز باشید!</label>
            <div className="max-w-sm flex items-center border rounded-md p-1">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="w-full p-2.5 outline-none"
              />
              <button className="p-2.5 rounded-md text-white bg-indigo-600 outline-none shadow-md focus:shadow-none sm:px-5 whitespace-nowrap">
                ثبت نام
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1 mt-10 items-center justify-between sm:flex md:mt-0 grid grid-cols-3 sm:gap-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4" key={idx}>
              <h4 className=" text-gray-800 dark:text-white font-bold text-lg">
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
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-8 py-3 border-t gap-2">
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
                className="w-10 h-10 border rounded-full flex items-center justify-center hover:text-blue-600 transition-colors"
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
