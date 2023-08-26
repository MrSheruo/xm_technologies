import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavMobile } from "./subcomponents/NavMobile";

export const Navbar = () => {
  return (
    <nav className="  max-w-[1280px] flex justify-between items-center p-4 m-auto border-x-gray-400 border-b-2">
      <Link href="/">
        <Image alt="logo" src="/navbar-logo.svg" width={75} height={45} />
      </Link>
      <div id="large-screens" className=" gap-4 items-center  hidden sm:flex">
        <div className="flex gap-4">
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about-us">About us</Link>
          <Link href="/jobs">Jobs</Link>
        </div>
        <Button>
          <Link href="/contact-us">Contact us</Link>
        </Button>
      </div>
      <NavMobile />
    </nav>
  );
};
