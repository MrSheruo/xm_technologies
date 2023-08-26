import { HowIsItGoing } from "@/components/HowIsItGoing";
import { ImagesGallery } from "@/components/ImagesGallery";
import { OurServicesComponent } from "@/components/OurServicesComponent";
import { Results } from "@/components/Results";
import StillQuestion from "@/components/StillQuestion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <header className="relative w-full mb-12">
        <div className="absolute inset-0 bg-[url(/services-header-img.jpg)] bg-center bg-cover bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-7xl m-auto flex flex-col gap-8 text-white z-30 relative sm:py-44 sm:pl-20 py-4 pl-4">
          <h1 className="font-bold text-[32px]">
            Cutting-Edge IT Solutions: <br /> Empowering Your Digital <br />
            Transformation
          </h1>
          <p>
            Unlocking Business Potential Through Expert IT Solutions. <br />{" "}
            Seamlessly tailored for growth.
          </p>
          <Button className="w-fit bg-[#0669F7] hover:bg-[#539afe]">
            <Link href="/contact-us">Contact us</Link>
          </Button>
        </div>
      </header>
      <OurServicesComponent />
      <section className="text-white bg-[#00142D] mb-8">
        <div className=" flex gap-4 max-w-7xl m-auto justify-center items-center flex-col md:flex-row p-8">
          <div className="flex flex-col gap-4 w-fit">
            <h4 className="text-[#0669F7]">THE HUMAN ELEMENT</h4>
            <h2 className=" font-bold text-[40px] leading-[50px]">
              What's our secret?
              <br />
              Great people.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              repellendus voluptatem non temporibus odit dolores maiores
              corporis libero, minus quod at voluptate repellat placeat, ipsum
              eveniet quasi nesciunt error totam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              repellendus voluptatem non temporibus odit dolores maiores
              corporis libero, minus quod at voluptate repellat placeat, ipsum
              eveniet quasi nesciunt error totam!
            </p>
            <Button variant={"outline"} className="text-white w-fit">
              <Link href="/portfolio">Find Out More</Link>
            </Button>
          </div>
          <Image
            className="hidden md:block"
            src="/our-secret-img.svg"
            alt="image-secret"
            width={600}
            height={770}
          />
        </div>
      </section>
      <HowIsItGoing />
      <ImagesGallery type="services" />
      <Results color="#0669F7" isNeeded={false} />
      <StillQuestion />
    </>
  );
}
