import Hero from "@/components/Hero";
import Grid from "@/components/main/Grid";

const page = () => {
  return (
    <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
      </div>
    </div>
  );
};

export default page;
