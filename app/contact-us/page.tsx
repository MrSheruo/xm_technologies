import StillQuestion from "@/components/StillQuestion";
import Image from "next/image";

const ContactUsPage = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-24">
      <div className=" py-[50px] w-full flex justify-center flex-col items-center text-center bg-[url(/contact-us-header.svg)] bg-center bg-cover bg-no-repeat">
        <h1 className="text-[32px] font-bold">Contact Us</h1>
        <p className="text-[20px] font-light text-[#707070]">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className=" flex flex-col gap-8 m-auto justify-center items-center">
        <StillQuestion />
        <Image
          className=" mx-8"
          src="/contact-img.svg"
          width={348}
          alt="contact-img"
          height={284}
        />
      </div>
    </section>
  );
};

export default ContactUsPage;
