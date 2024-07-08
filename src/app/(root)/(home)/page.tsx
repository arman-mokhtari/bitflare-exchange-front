import AnimatedLogos from "@/components/main/AnimatedLogos";
import Ceo from "@/components/main/Ceo";
import CoinsTable from "@/components/main/CoinsTable";
import Feature from "@/components/main/Feature";
import Hero from "@/components/main/Hero";
import Testimonial from "@/components/main/Testimonial";

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
