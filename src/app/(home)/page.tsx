import Hero from "@/components/Hero";

const page = () => {
  return (
    <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </div>
  );
};

export default page;
