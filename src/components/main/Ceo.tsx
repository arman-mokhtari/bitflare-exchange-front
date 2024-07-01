import Image from "next/image";
import MainLogo from "../common/MainLogo";

const Ceo = () => {
  return (
    <section className="py-7">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="pb-6">
            <MainLogo otherClasses="mx-auto" />
          </div>
          <figure>
          <blockquote>
  <p className="text-gray-800 dark:text-gray-200 text-sm font-semibold sm:text-xl">
    “بیتفلر با هدف ارائه خدمات برتر و امنیت بی‌نظیر به کاربران، همواره در تلاش است تا بهترین تجربه معاملاتی را فراهم کند. ما به آینده‌ای روشن و موفق در کنار کاربرانمان باور داریم.“
  </p>
</blockquote>

            <div className="mt-6">
              <Image
                src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                className="w-16 h-16 mx-auto rounded-full"
                width={150}
                height={150}
                alt="Martin escobar"
              />
              <div className="mt-3">
                <span className="block text-gray-800 dark:text-gray-200 font-semibold">
                  رضا زارع
                </span>
                <span className="block text-gray-600 dark:text-gray-300 text-sm mt-0.5">
                  مدیر بیتفلر
                </span>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};
export default Ceo;
