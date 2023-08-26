import { SubHeading } from "@/components/subcomponents/SubHeading";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <section className="flex flex-col gap-32">
        <div className="w-full h-auto">
          <Image
            src="/about-header-img.jpg"
            width={1920}
            height={0}
            className=" w-full h-full"
            alt="header-image"
          />
        </div>
        <div className="flex flex-col md:flex-row  max-w-7xl m-auto justify-center items-center p-4">
          <Image
            className="hidden sm:block"
            src="/about-img.svg"
            width={500}
            height={600}
            alt="about-image"
          />
          <div className="flex flex-col gap-4 p-8">
            <h4 className="text-[#0669F7]">XM Technologies</h4>
            <h1 className="    text-[25px]  font-bold">
              More About Our Success Stories
            </h1>
            <p className=" text-[13px] font-medium">
              Positive pleasure-oriented goals are much more powerful motivators
              than negative fear-based ones. Although each is successful
              separately, the right combination of both is the most powerful
              motivational force known to humankind.
            </p>
            <p className=" text-[13px] font-medium">
              We are committed to deliver the best Quality IT Products with
              Passion & Prompt Services. Our highly experienced, creative and
              versatile development team has both the capability and aptitude to
              create innovative and technologically advanced mobile apps. We
              believe in frank working environments.
            </p>
          </div>
        </div>
        <div className=" max-w-7xl m-auto px-8 mb-24">
          <SubHeading heading="Our XM" body={null} />
          <p className=" mt-8">
            Our highly experienced, creative and versatile development team has
            both the capability and aptitude to create innovative and
            technologically advanced mobile apps. We believe in frank working
            environments. <br />
            <br /> The first impression sometimes does it all. Too simple or too
            hazy outlook fails to impress the individuals and thus might result
            in lack of traffic or make them switch over to other similar
            websites. Our team of well-experienced web designers and web
            developer’s lead by experts are they’re to work on the designs and
            development of websites based on customers’ requirement and
            specification.
            <br />
            <br /> We carry out planning, and detail outline of the work, before
            moving onto the final task. At this stage, our ideas are presented
            to the client and measures are taken to be assured that the customer
            is satisfied with the ideas. A study is alongside made to make sure
            that the website would be successful in bringing visitors and
            potential customers. Our work considers the use of all the latest
            technologies. Bringing out the best through the use of them is what
            we look for. Once the website is ready with the designs, layouts and
            all, it is bound to amaze all. At SkyPearl iNfotech™ our work would
            dazzle the eyes.
            <br />
            <br /> Our products are intended for web developers or webmasters
            who want to spend a little investment to add significant value to
            their projects, create high-end Web applications as well as to speed
            up their development time. At SkyPearl iNfotech™, we always try to
            win new grounds by stretching our limits. Let us be a pivotal aspect
            in your software development venture to experience our professional
            and technical reach.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
