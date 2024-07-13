import Image from "next/image";
import MainLogo from "../../common/MainLogo";

const Ceo = () => {
  return (
    <section className="py-7">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="pb-6">
            <MainLogo otherClasses="mx-auto" />
          </div>
          <figure>
            <blockquote>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 sm:text-xl">
                “بیتفلر با هدف ارائه خدمات برتر و امنیت بی‌نظیر به کاربران،
                همواره در تلاش است تا بهترین تجربه معاملاتی را فراهم کند. ما به
                آینده‌ای روشن و موفق در کنار کاربرانمان باور داریم.“
              </p>
            </blockquote>

            <div className="mt-6">
              <Image
                src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                className="mx-auto size-16 rounded-full"
                width={150}
                height={150}
                alt="Martin escobar"
              />
              <div className="mt-3">
                <span className="block font-semibold text-gray-800 dark:text-gray-200">
                  رضا زارع
                </span>
                <span className="mt-0.5 block text-sm text-gray-600 dark:text-gray-300">
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
