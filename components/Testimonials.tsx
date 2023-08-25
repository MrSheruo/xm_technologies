import { testimonials } from "@/consts";
import { SubHeading } from "./subcomponents/SubHeading";
import Image from "next/image";

export const Testimonials = () => {
  return (
    <section className="everyFlex ">
      <SubHeading heading="Testimonials" body="What our Customers are Saying" />
      <div className="flex gap-8 flex-wrap justify-center items-center mt-12">
        {testimonials.map((testimonial, index) => {
          const { img, name, company, body, rate } = testimonial;
          return (
            <div
              className=" flex flex-col justify-center items-center relative  border-2 gap-0"
              key={index}
            >
              <Image
                src={img}
                width={80}
                height={80}
                alt="client-image"
                className=" rounded-full absolute left-[50%] translate-x-[-50%] top-[-40px]"
              />
              <h4 className=" mt-24 font-extrabold">{name}</h4>
              <p className="mt-2 text-xs">{company}</p>
              <p className=" my-4 max-w-[50ch] w-fit px-4 text-center">
                {body}
              </p>
              <Image
                src={rate}
                className="mb-12"
                alt="rate"
                width={116}
                height={20}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
