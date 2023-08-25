import { ImagesGallery } from "@/components/ImagesGallery";
import { OurServicesComponent } from "@/components/OurServicesComponent";
import { Testimonials } from "@/components/Testimonials";
import { SubHeading } from "@/components/subcomponents/SubHeading";
import { Button } from "@/components/ui/button";
import { howItIs } from "@/consts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-20 justify-center items-center mt-4 md:mt-0 mb-4 ">
        <div className=" relative max-w-[1280px]  m-auto">
          <div className="flex justify-between items-center ml-4">
            <div className="flex flex-col gap-4 md:pl-20">
              <h1 className=" font-bold text-[32px]">
                Web Design And <br />
                Development Company
              </h1>
              <p>
                We create clean and creative websites that are professional and
                help
                <br />
                you generate more visitors and revenue.
              </p>
              <Button className=" w-fit bg-[#0669F7] hover:bg-[#539afe]">
                <Link href="/contact-us">Get Started</Link>
              </Button>
            </div>
            <div className=" sm:flex hidden flex-col">
              <svg
                className=" absolute top-0 right-0"
                width="350"
                height="200"
                viewBox="0 0 450 234"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 194L370 0H454L420 234L0 224V194Z" fill="#FEEFEA" />
              </svg>

              <Image
                className=" z-50"
                src="/header-img.svg"
                width={972}
                height={648}
                alt="header-image"
              />
            </div>
          </div>
        </div>
        <div
          id="logos"
          className="border-x-gray-400 border-b-2 flex w-full justify-center items-center gap-8 flex-wrap"
        >
          <Image
            className="filter  grayscale"
            alt="google-logo"
            src="/google-logo.png"
            width={150}
            height={60}
          />
          <Image
            alt="meta-logo"
            className="filter grayscale"
            src="/meta-logo.png"
            width={150}
            height={60}
          />
          <Image
            className="filter grayscale"
            alt="indeed-logo"
            src="/indeed-logo.png"
            width={150}
            height={60}
          />
          <Image
            className="filter  grayscale"
            alt="human-touch-logo"
            src="/human-touch.png"
            width={150}
            height={60}
          />
        </div>
        <div
          id="how-is-it-going"
          className=" flex-col items-center justify-center gap-8 md:flex hidden"
        >
          <SubHeading
            heading="How it is going?"
            body=" We offer professional web design services at affordable rates to
            help your business attract more visitors and keep them on
            your site!"
          />
          <div className="flex flex-wrap justify-center items-center gap-12 mb-8">
            {howItIs.map((card) => {
              const { title, number, body } = card;
              return (
                <div className="mb-8 relative before:absolute before:bottom-[-10px] before:w-4/12 before:border-2 before:border-[#C4C4C480] ">
                  <h3 className=" mb-4 font-bold text-[20px] leading-[25px]">
                    {title}
                  </h3>
                  <p className="w-[50ch] relative text-[18px] leading-[24.3px] font-light ">
                    {body}
                    <span className=" absolute top-[-35px] right-[-35px] text-[80px] leading-[108px] font-bold text-[#0669F714]">
                      {number}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <OurServicesComponent />
        <ImagesGallery type="home" />
        <Testimonials/>
      </section>
    </>
  );
}
