/* eslint-disable @next/next/no-html-link-for-pages */

import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <>
      <div
        className="
        bg-blue
        grotesk
        absolute
        top-0
        h-7
        w-full 
        text-center
        text-sm
        leading-6
        text-white
      "
      >
        Let us help you grow your business!
        <a href="#contact" className="pl-3 underline">
          Let&apos;s talk!
        </a>
      </div>
      <div className="grotesk mt-6 mb-16 flex items-center justify-between py-4 px-4 sm:mx-0 sm:mb-20 sm:px-0 md:px-6">
        <div className="mt-4 inline-block pb-4 pl-8">
          <a href="/" className="align-middle text-3xl font-bold text-black">
            MWDesign
          </a>
          <div className="hidden pl-14 align-middle lg:inline-block">
            <a href="#approach" className="pr-12 text-xl text-black">
              Our Approach
            </a>
            <a href="#philosophy" className="pr-12 text-xl text-black">
              Design Philosophy
            </a>
            <a href="#contact" className="text-xl text-black">
              Contact Us
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <MobileNav />
        </div>
      </div>
    </>
  );
}
