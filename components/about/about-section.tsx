import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <section className="min-h-screen">
      <div className="flex flex-col mx-auto max-w-cs1 items-center justify-center lg:items-start lg:flex-row lg:gap-16 gap-10 lg:px-25 px-5 py-14 h-full">
        <div className="md:w-xl w-full lg:w-fit lg:block flex flex-wrap items-center md:gap-10 gap-2">
          <div className="h-70 lg:w-70 md:w-70 w-full border border-primary overflow-hidden">
            <Image height={300} width={300} alt="hai" src="/assets/profile.jpg" className="w-full h-full object-cover" />
          </div>

          <div className="space-y-1 flex-1 lg:hidden block">
            <h1 className="text-3xl">Derren Amadeo</h1>
            <p className="text-xl text-gray-5">Tech Enthusiast</p>
          </div>
        </div>
        <div className="lg:w-[48%] md:w-xl space-y-8">
          <div className="space-y-1 hidden lg:block">
            <h1 className="text-3xl">Derren Amadeo</h1>
            <p className="text-xl text-gray-5">Tech Enthusiast</p>
          </div>
          <p>
            Saya adalah seseorang yang suka mengeksplor hal-hal baru dan unik, baik dalam dunia teknologi maupun kehidupan sehari-hari. Rasa penasaran saya mendorong untuk terus mencoba, belajar, dan menciptakan sesuatu yang bisa bermanfaat
            dan menyenangkan untuk orang lain.
          </p>
          <p>
            Di waktu luang saya, di saat lelah berlogika, saya suka menuangkan emosi saya lewat tulisan ataupun design. Menulis menjadi cara yang paling nikmat untuk menuangkan ide dan emosi. Cukup niat dan menuliskan rangkaian kata, maka
            jadilah sebuah karya hasil curahan hati.
          </p>

          <div className="space-y-3">
            <h1 className="text-lg font-medium">What`s next?`</h1>
            <p>
              Jika ingin mengenalku lebih dalam atau ingin membicarakan hal lainnya bisa kontak saya melalui{" "}
              <Link href="/">
                <span className="underline">email</span>
              </Link>
              ,{" "}
              <Link href="/">
                <span className="underline">telegram</span>
              </Link>
              ,{" "}
              <Link href="/">
                <span className="underline">instagram</span>
              </Link>
              , dan{" "}
              <Link href="/">
                <span className="underline">facebook</span>
              </Link>
              .
            </p>
          </div>

          <div className="flex items-center justify-between group">
            <Image className="md:w-24 w-24" src="/icon/logo.svg" height={300} width={300} alt="logo" />
            <Link href="/" className="flex items-center gap-2">
              <span className="text-sm font-medium">Homepage</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
