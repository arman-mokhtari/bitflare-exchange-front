import { team } from "@/data";
import Image from "next/image";

const AboutMainContent = () => {
  return (
    <section className="flex min-h-screen flex-col items-center">
      <div className="px-4 md:px-8">
        <div className="max-w-xl">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white sm:text-4xl">
            درباره ما
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-200">
            بیتفلر یک پلتفرم پیشرو در مبادله ارزهای دیجیتال است که به کاربران
            امکان خرید، فروش و تجارت انواع مختلف ارزهای دیجیتال را به صورت سریع
            و ایمن می‌دهد. هدف ما ایجاد بستری امن و قابل اعتماد برای تسهیل
            تراکنش‌های دیجیتال است. با تیمی مجرب و حرفه‌ای در صنعت بلاکچین،
            بیتفلر متعهد به ارائه خدمات برتر و نوآوری مستمر است.
          </p>
        </div>
        <div className="mt-12">
          <h1 className="mb-6 text-xl font-semibold text-gray-800 dark:text-white sm:text-2xl">
            تیم پشتیبانی ما همیشه آماده‌ی کمک به شماست.
          </h1>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((item, idx) => (
              <li key={idx} className="flex items-center gap-4">
                <div className="size-24 flex-none">
                  <Image
                    src={item.avatar}
                    className="size-full rounded-full"
                    alt="team member"
                    height={200}
                    width={200}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-200 sm:text-lg">
                    {item.name}
                  </h4>
                  <p className="text-blue-700 dark:text-blue-600">
                    {item.title}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMainContent;
