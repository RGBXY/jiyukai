import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section id="hero-section" className="lg:h-[400px] h-[300x] bg-gray-primary">
      <div className="h-full w-full max-w-cs1 lg:px-25 p-5 mx-auto flex md:gap-20 gap-14 lg:flex-row flex-col items-center md:text-center md:justify-center ">
        <div className="md:text-center py-5 lg:pt-0">
          <h1 className="lg:text-6xl md:text-4xl text-3xl mb-5 font-">Derren Insights</h1>
          <p className="md:w-1/2 mx-auto text-lg text-gray-500">Pemikiran, insight dan wawasan baru setiap hari nya, scroll jika kamu peduli dengan otak mu 😁.</p>

          <div className="flex  md:justify-center gap-2 mt-6">
            <Button size="lg">Read</Button>
            <Button variant="outline" size="lg" className="bg-transparent border-primary shadow-none">
              About
            </Button>
          </div>
        </div>
        {/* <div className=" h-full hidden lg:block">
          <Image className="w-full h-full " src="/assets/banner.svg" height={300} width={300} alt="logo" />
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
