import AnimatedLogos from "@/components/main/AnimatedLogos";
import Ceo from "@/components/main/Ceo";
import CoinsTable from "@/components/main/CoinsTable";
import Feature from "@/components/main/Feature";
import Hero from "@/components/main/Hero";
import Testimonial from "@/components/main/Testimonial";

const page = () => {
  return (
    <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-2">
      <div className="md:max-w-screen-xl w-full relative">
        <Hero />
        <AnimatedLogos />
        <CoinsTable />
        <Feature />
        <Testimonial />
        <Ceo />
      </div>
    </div>
  );
};

export default page;
