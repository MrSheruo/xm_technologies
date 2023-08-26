import { HowIsItGoing } from "@/components/HowIsItGoing";
import { ImagesGallery } from "@/components/ImagesGallery";
import { OurServicesComponent } from "@/components/OurServicesComponent";
import { Results } from "@/components/Results";
import StillQuestion from "@/components/StillQuestion";
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
        <HowIsItGoing />
        <OurServicesComponent />
        <ImagesGallery type="home" />
        <Testimonials />
        <Results color="#00142D" isNeeded />
        <StillQuestion />
      </section>
    </>
  );
}
