import { techStack } from "@/data";
import Image from "next/image";

const AnimatedLogos = () => {
  return (
    <section className="my-14 w-full">
      <div className="mb-16 flex w-full flex-col items-center justify-center">
        <h3 className="text-center text-2xl font-semibold text-gray-800 dark:text-gray-200 md:text-3xl">
          برترین ارزها در 24 ساعت گذشته!
        </h3>
      </div>
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2 "
          dir="ltr"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
          }}
        >
          {Array(5)
            .fill(null)
            .map((_, idx) => (
              <div
                key={idx}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-4 sm:gap-14"
              >
                {techStack.map((logo, key) => (
                  <Image
                    key={key}
                    src={logo.img}
                    className="size-12 rounded-full md:size-20"
                    alt={`${logo.alt}`}
                    width={500}
                    title={`${logo.alt}`}
                    height={500}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedLogos;
