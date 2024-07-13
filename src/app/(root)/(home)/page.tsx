import AnimatedLogos from "@/components/root/main/AnimatedLogos";
import Ceo from "@/components/root/main/Ceo";
import CoinsTable from "@/components/root/main/CoinsTable";
import Feature from "@/components/root/main/Feature";
import Hero from "@/components/root/main/Hero";
import Testimonial from "@/components/root/main/Testimonial";

const page = () => {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-full">
        <Hero />
        <div className="mx-auto px-2 md:max-w-screen-xl">
          <AnimatedLogos />
          <CoinsTable />
          <Feature />
          <Testimonial />
          <Ceo />
        </div>
      </div>
    </div>
  );
};

export default page;
