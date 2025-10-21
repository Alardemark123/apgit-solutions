import React from "react";
import Image from "next/image";

import "@/app/globals.css";
import OurPrideButton from "../components/OurPrideButton";
import ContactUsButton from "../components/ContactUsButton";
import poppins from "../fonts/poppins";

<meta name="viewport" content="width=device-width, initial-scale=1.0" />;

export default function Page() {
  return (
    <>
      <div className="relative overflow-hidden rounded-lg text-center h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[450px] rounded-b-[6rem]">
        <Image
          src="/images/navbarbg.png"
          alt="Background"
          fill
          className="object-cover sm:object-bottom object-[center_top]"
          priority
        />
        <div
          className="relative flex h-full items-center justify-start 
         pl-4 sm:pl-6 md:pl-10 lg:pl-16 xl:pl-24 2xl:pl-32 
         text-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/0 z-10" />
          <div className="absolute bottom-[100px] sm:bottom-[160px] md:bottom-[200px] left-[10%] sm:left-[5%] md:left-[10%] z-20">
            <h2
              className={`text-4xl sm:text-4xl md:text-6xl lg:text-6xl font-semibold text-gray-700 ${poppins.className}`}
            >
              About Us
            </h2>
          </div>
        </div>
      </div>

      <section className="px-8 grid py-16 md:px-20 lg:px-32 bg-white">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-center justify-between gap-10">
          <div className="hidden md:block w-full md:w-1/2">
            <Image
              src="/images/Innovation-rafiki.png"
              alt="Innovation illustration"
              width={600}
              height={600}
              className="
          w-full
          md:max-w-md
          lg:max-w-lg
          xl:max-w-xl
          2xl:max-w-2xl
          h-auto 
          mx-auto
        "
            />
          </div>

          <div className="w-full md:w-1/2">
            <div className="mb-4">
              <Image
                src="/images/cropped-112-177x57.png"
                alt="AP Global Logo"
                width={157}
                height={57}
                className=" xl:ml-15  h-auto w-auto  lg:scale-150 xl:scale-160 lg:mr-5 scale-150  ml-6"
              />
            </div>

            <h2
              className={`text-1xl lg:text-3xl  md:text-[20px]   xl:text-5xl font-semibold leading-tight mb-6 ${poppins.className}`}
            >
              <span className="text-[#3674b5] font-bold">AP Global</span> Begins
              Life as the Networking Division.
            </h2>

            <p
              className={`text-[#736167] text-base xl:text-1xl leading-relaxed text-justify ${poppins.className}`}
            >
              We continuously innovate and adapt to meet the evolving needs of
              our clients, ensuring that our solutions are always at the
              forefront of the industry. Our dedicated team of professionals
              brings a wealth of experience and expertise, delivering tailored
              solutions that drive success. We prioritize transparent
              communication and collaboration, fostering an environment of
              mutual respect and understanding. Our unwavering focus on quality
              and customer satisfaction is the cornerstone of our success,
              guiding every decision we make.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 lg:px-24 bg-white">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="w-full  lg:w-1/2">
            <div className="mb-3 lg:mr-5 sm:ml-5  flex justify-start lg:justify-end xl:mr-35 md:ml-42">
              <Image
                src="/images/cropped-112-177x57.png"
                alt="AP Global Logo"
                width={157}
                height={57}
                className="h-auto w-auto scale-150 ml-5 lg:mr-5 lg:scale-170  mr-20 xl:mr-8  "
              />
            </div>

            <div className="text-left md:text-right xl:mr-27">
              <h2
                className={`${poppins.className} text-1xl text-left  md:text-right md:text-[20px] xl:text-5xl font-semibold leading-snug mb-6`}
              >
                <span className="text-[#3674b5] font-bold">Transform</span> your
                business into digital technology
              </h2>

              <p
                className={`text-[#736167] text-base xl:text-1xl leading-relaxed text-justify xl:text-right ${poppins.className}`}
              >
                Transform your business into digital technology and unlock new
                levels of efficiency and innovation. Our cutting-edge solutions
                streamline operations, enhance customer experiences, and drive
                growth in the digital age.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex items-center h-full">
            <Image
              src="/images/Programmer.png"
              alt="Transform Illustration"
              width={650}
              height={650}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <div
        className="bg-[url('/images/diamonds-scaled.jpg')] bg-cover bg-center bg-fixed "
        style={{ minHeight: "100vh" }}
      >
        <div className="flex flex-col items-center text-white px-4 py-50">
          <Image
            src="/images/APLOGO.png"
            alt="aplogo.png"
            width={350}
            height={150}
          />

          <h1
            className={` text-2xl xl:text-3xl mt-10 font-bold text-black ${poppins.className} `}
          >
            Providing <span className="text-blue-00">Digital Solution</span>
          </h1>

          <div
            className={`mt-10 max-w-7xl xs:text-xs  sm:text-xl text-center text-[#736167] text-1xl ${poppins.className}`}
          >
            <p>
              Founded in 2019 by individuals with extensive exposure in IT,
              utilities, healthcare insurance, retail, legal publishing, telco,
              and a medical doctor with a passion to serve his patients over and
              above the norm through digital technology. AP Global IT Solutions
              can lead digital transformations through the modernization and
              integration of their mainstream IT and the deployment of digital
              solutions for a future- proofed architecture. We are visionaries
              for medical companies transitioning to digital technology for
              better company results.
            </p>
          </div>
          <div className=" md:space-y-[-30px] xl:space-y-[30] lg:flex-row xl:flex xl:flex-row justify-center items-center space-x-[-55px] xl:space-x-[-105px] mr-25 ">
            <OurPrideButton label="OUR PRIDE" href="/ourpride" />
            <ContactUsButton label="LET'S TALK" href="/contactus" />
          </div>
        </div>
      </div>
    </>
  );
}
