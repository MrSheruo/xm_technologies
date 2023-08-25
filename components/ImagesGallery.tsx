import { imageGalleryImages } from "@/consts";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { SubHeading } from "./subcomponents/SubHeading";

type Props = {
  type: "home" | "services";
};

export const ImagesGallery = ({ type }: Props) => {
  return (
    <section className="everyFlex bg-[#00142D] md:max-w-7xl w-full text-white py-8">
      <SubHeading
        heading="Our Work"
        body="A variety of creative capabilities under one roof"
      />
      <div className="flex gap-2 md:flex-row flex-col">
        {imageGalleryImages.map((gallery, index) => {
          const { imageOne, ImageTwo, ImageThree } = gallery;
          const isOddIndex = index % 2 === 1;

          return (
            <div
              className={`flex flex-col gap-4 ${!isOddIndex ? "pt-16" : ""}`}
              key={index}
            >
              <Image
                src={imageOne}
                width={455}
                height={455}
                alt="image-gallery"
              />
              <Image
                src={ImageTwo}
                width={455}
                height={455}
                alt="image-gallery"
              />
              <Image
                src={ImageThree}
                width={455}
                height={455}
                alt="image-gallery"
              />
            </div>
          );
        })}
      </div>

      {type === "home" ? (
        <Button className=" w-fit bg-[#0669F7] hover:bg-[#539afe]">
          <Link href="/portfolio">Get Started</Link>
        </Button>
      ) : (
        <p className=" text-center text-xl mt-16">
          Intelligent Websites That Work Overtime <br />
          For Marketing Results
        </p>
      )}
    </section>
  );
};
