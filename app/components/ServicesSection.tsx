"use client";

import Image from "next/image";
import AnimatedReveal from "./AnimatedReveal";
import poppins from "../fonts/poppins";

interface Service {
  title: string;
  image: string;
  desc: string;
}

const services: Service[] = [
  {
    title: "UI/UX Design",
    image: "/images/UI-UX-Design.png",
    desc: "Build the product you need on time with an experienced team that uses a clear and effective design process",
  },
  {
    title: "App Development",
    image: "/images/AppDevelopment.png",
    desc: "Build high-performing apps with expert development, delivered efficiently through a clear and effective coding strategy",
  },
  {
    title: "Cloud Migration",
    image: "/images/cloud-migration.png",
    desc: "Seamlessly migrate to the cloud with expert solutions, delivered efficiently through a clear and effective transition strategy.",
  },
  {
    title: "Cyber Security",
    image: "/images/cyber-security-1.png",
    desc: "Secure your business with expert-driven cybersecurity solutions, delivered efficiently through a clear and effective protection strategy.",
  },
  {
    title: "Product Design",
    image: "/images/product-design-1.png",
    desc: "Bring your ideas to life with expert-led product design, crafted efficiently through a clear and effective creative process.",
  },
  {
    title: "Quality Assurance",
    image: "/images/quality-assurance1.png",
    desc: "Ensure flawless performance with expert-driven quality assurance, delivered efficiently through a clear and effective testing strategy.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className={`${poppins.className} py-20 bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8 overflow-x-hidden`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xl font-semibold text-gray-900">
            What we can do for you?
          </p>
          <br />
          <p className="text-3xl sm:text-3xl">
            Explore the
            <span className="text-[#3674b5] font-semibold tracking-wide">
              {" "}
              services{" "}
            </span>
            we offer to support your
            <span className="text-[#3674b5] font-semibold tracking-wide">
              {" "}
              needs
            </span>
          </p>
          <br />
          <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-6xl mx-auto">
            We shape your ideas into seamless and innovative solutions by
            combining advanced technology, strategic expertise, and a deep
            understanding of your unique needs. Our commitment to excellence
            ensures that every solution we create is efficient, scalable, and
            tailored to drive your business forward in the ever-evolving digital
            landscape.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full bg-[#f6f4fb] rounded-2xl shadow-xl hover:shadow-lg transition duration-300 flex flex-col items-center text-center px-6 py-8 mx-auto"
            >
              <div className="w-full mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full max-w-full h-auto object-contain"
                />
              </div>
              <h3 className="text-lg font-extrabold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* === Feature Block 1 === */}
        <div className="mt-28 w-full overflow-hidden">
          <AnimatedReveal delay={0.1} direction="left">
            <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/FindYourDoctor.png"
                  alt="Virtual Clinic Interface"
                  width={700}
                  height={500}
                  className="w-full max-w-full h-auto object-contain"
                  priority
                />
              </div>
              <div className="text-center flex flex-col items-center justify-center w-full lg:w-1/2">
                <Image
                  src="/images/HealthInformationProgram.png"
                  alt="Health Info"
                  width={200}
                  height={80}
                  className="mb-6 max-w-full"
                />
                <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 leading-tight">
                  The <span className="text-[#a94a4a]">VIRTUAL CLINIC</span>{" "}
                  that safely connects your doctor.
                </h2>
                <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl">
                  You and your family’s health should never be put on hold. With
                  Natrapharm-hip, you can access 7,000 doctors online and
                  conveniently schedule your face to face or online medical
                  consultations.
                </p>
                <button
                  onClick={() =>
                    window.open("https://natrapharm.hips-md.com/", "_blank")
                  }
                  className="rounded-full border-4 border-[#fff] text-[#fff] bg-[#578fca] px-6 py-2 font-bold transition duration-300 hover:bg-[#fff] hover:text-[#578fca] hover:border-[#578fca] sm:mr-13 xl:ml-13 tracking-widest text-xs w-37 h-12 mt-6 hover:scale-105"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          </AnimatedReveal>
        </div>

        {/* === Feature Block 2 === */}
        <div className="mt-28 w-full overflow-hidden">
          <AnimatedReveal delay={0.1} direction="right">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 w-full">
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/Dashboard.png"
                  alt="Queue System"
                  width={700}
                  height={500}
                  className="w-full max-w-full h-auto object-contain"
                  priority
                />
              </div>
              <div className="text-center flex flex-col items-center justify-center w-full lg:w-1/2">
                <Image
                  src="/images/QMS.png"
                  alt="QMS Logo"
                  width={100}
                  height={80}
                  className="mb-6 max-w-full"
                />
                <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 leading-tight">
                  QMS - <span className="text-[#3674b5]">Queuing System.</span>
                </h2>
                <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl">
                  A Queue Management System (QMS) is a technology that helps
                  efficiently manage the flow of people or transactions in a
                  queue to improve customer experience and reduce wait times.
                </p>
              </div>
            </div>
          </AnimatedReveal>
        </div>

        {/* === Feature Block 3 === */}
        <div className="mt-28 w-full overflow-hidden">
          <AnimatedReveal delay={0.1} direction="left">
            <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/e-Invites.png"
                  alt="eInvites"
                  width={700}
                  height={500}
                  className="w-full max-w-full h-auto object-contain"
                  priority
                />
              </div>
              <div className="text-center flex flex-col items-center justify-center w-full lg:w-1/2">
                <Image
                  src="/images/einvites.png"
                  alt="eInvites"
                  width={200}
                  height={80}
                  className="mb-6 max-w-full"
                />
                <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 leading-tight">
                  Instantly{" "}
                  <span className="text-[#a94a4a]">unleash potential.</span>
                </h2>
                <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl">
                  Instantly unleash your event{"'"}s potential by leveraging
                  immediate opportunities to maximize participation and
                  engagement through efficient RSVP management.
                </p>
                <button
                  onClick={() =>
                    window.open("https://rsvp.apgitsolutions.com/", "_blank")
                  }
                  className="rounded-full border-4 border-[#fff] text-[#fff] bg-[#578fca] px-6 py-2 font-bold transition duration-300 hover:bg-[#fff] hover:text-[#578fca] lg:-4 hover:border-[#578fca] sm:mr-13 xl:ml-13 tracking-widest text-xs w-37 h-12 mt-6 hover:scale-105"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          </AnimatedReveal>
        </div>

        {/* === Feature Block 4 === */}
        <div className="mt-28 w-full overflow-hidden">
          <AnimatedReveal delay={0.1} direction="right">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 w-full">
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/MDConnect.png"
                  alt="Mediko Connect Interface"
                  width={700}
                  height={500}
                  className="w-full max-w-full h-auto object-contain"
                  priority
                />
              </div>
              <div className="text-center flex flex-col items-center justify-center w-full lg:w-1/2">
                <Image
                  src="/images/MDLogo.png"
                  alt="Mediko Connect"
                  width={250}
                  height={80}
                  className="mb-6 max-w-full"
                />
                <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 leading-tight">
                  <span className="text-[#3674b5]">Mediko Connect</span>{" "}
                  Simplify Your Practice, Elevate Your{" "}
                  <span className="text-[#3674b5]">Care.</span>
                </h2>
                <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl">
                  Mediko Connect is a comprehensive platform designed to
                  streamline healthcare practice management, offering features
                  for scheduling, patient tracking, and efficient data handling.
                  It simplifies operational workflows, allowing medical teams to
                  focus on delivering better patient care.
                </p>
                <button
                  onClick={() =>
                    window.open(
                      "https://medikoconnect.apgitsolutions.com/",
                      "_blank"
                    )
                  }
                  className="rounded-full border-4 border-[#fff] text-[#fff] bg-[#578fca] px-6 py-2 font-bold transition duration-300 hover:bg-[#fff] hover:text-[#578fca] hover:border-[#578fca] sm:mr-13 xl:ml-13 tracking-widest text-xs w-37 h-12 mt-6 hover:scale-105"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
