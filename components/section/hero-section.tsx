import React from "react";
import Particles from "../ui/Particles/Particles";

const HeroSection = () => {
  return (
    <section id="hero-section" className="lg:h-[360px] h-[300px] bg-gray-primary">
      <div className="relative h-full w-full max-w-cs1 lg:px-25 p-5 mx-auto flex md:gap-20 gap-14 lg:flex-row flex-col items-center text-center justify-center ">
        <div style={{ width: "100%", height: "100%", position: "absolute" }}>
          <Particles particleColors={["#ffffff", "#ffffff"]} particleCount={200} particleSpread={10} speed={0.1} particleBaseSize={200} moveParticlesOnHover={true} alphaParticles={false} disableRotation={false} />
        </div>

        <div className="bg-blend-darken relative text-center flex flex-col items-center justify-center ">
          <p className="font-medium py-2 uppercase text-xl ">
            <span className="text-5xl font-bold">jiyukai</span> <br /> blog Website
          </p>
        </div>

        {/* <div className="md:text-center py-5 lg:pt-0">
          <h1 className="lg:text-5xl md:text-4xl text-3xl mb-5 font-">Derren Insights</h1>
          <p className="md:w-1/2 mx-auto text-gray-500">Pemikiran, insight dan wawasan baru setiap hari nya, scroll jika kamu peduli dengan otak mu 😁.</p>

          <div className="flex  md:justify-center gap-2 mt-6">
            <Button>Read</Button>
            <Button variant="outline" className="bg-transparent border-primary shadow-none">
              About
            </Button>
          </div>
        </div> */}
        {/* <div className=" h-full hidden lg:block">
          <Image className="w-full h-full " src="/assets/banner.svg" height={300} width={300} alt="logo" />
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
