import Hero from "@/components/Hero";
import CoinsTable from "@/components/main/CoinsTable";
import Feature from "@/components/main/Feature";

const page = () => {
  return (
    <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-2">
      <div className="md:max-w-screen-xl w-full">
        <Hero />
        <CoinsTable />
        <Feature />
        
      </div>
    </div>
  );
};

export default page;
