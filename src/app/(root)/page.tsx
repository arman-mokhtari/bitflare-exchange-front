import AnimatedLogos from "@/components/main/AnimatedLogos";
import Ceo from "@/components/main/Ceo";
import CoinsTable from "@/components/main/CoinsTable";
import Feature from "@/components/main/Feature";
import Hero from "@/components/main/Hero";
import Testimonial from "@/components/main/Testimonial";

const page = () => {
  return (
    <div className="relative flex justify-center items-center flex-col overflow-hidden">
      <div className="w-full relative">
        <Hero />
        <div className="md:max-w-screen-xl px-2 mx-auto">
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
