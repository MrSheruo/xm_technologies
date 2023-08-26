import { SubHeading } from "./subcomponents/SubHeading";
import { Button } from "@/components/ui/button";

const StillQuestion = () => {
  return (
    <>
      <section className="everyFlex mb-12 bg-[#eee] max-w-7xl m-auto py-8">
        <SubHeading
          heading="Send Message?"
          body="We’re ready to answer your questions and jump start your project"
        />

        <form className="flex flex-col">
          <div id="inputs" className="flex gap-2 flex-col sm:flex-row">
            <input
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              className="border p-2"
            />

            <input
              placeholder="Phone Number"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="border p-2"
            />

            <input
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              className="border p-2"
            />
          </div>

          <textarea
            id="message"
            name="message"
            rows={4}
            className="border p-2 mt-4"
            placeholder="Your Message"
          ></textarea>
        </form>
        <Button className=" w-fit bg-[#0669F7] hover:bg-[#539afe]">
          Send Message
        </Button>
      </section>
    </>
  );
};

export default StillQuestion;
