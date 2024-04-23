import Image from "next/image";
import Input from "../input/Input";
import Button from "../button";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col md:flex-row max-w-screen-xl mx-auto gap-16 px-4 sm:px-8">
      <div className="flex-1 py-8 md:pt-24">
        <div className="inline-flex bg-black text-white mb-8 p-2 rounded-full items-center text-sm md:text-base">
          <div className="px-2 py-1 bg-indigo-500 rounded-full uppercase mr-2">
            <a href="#">We&apos;re hiring</a>
          </div>
          <div className="px-2 py-1">
            <a href="#" className="flex items-center">
              Visit our careers page
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-8">
            A better way to
            <br />
            <span className="font-bold text-indigo-400">ship web apps</span>
          </h1>

          <p className="text-gray-300 text-base md:text-xl font-light">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat.
          </p>
        </div>

        <form action="" className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-1">
            <Input placeholder="Enter your email" />
          </div>
          <div className="flex-0.5">
            <Button type="submit">Start free trial</Button>
          </div>
        </form>

        <p className="text-gray-300 text-sm">
          Start your free 14-day trial, no credit card necessary. By providing
          your email, you agree to our{" "}
          <a href="#" className="font-semibold">
            terms of service
          </a>
          .
        </p>
      </div>
      <div className="basis-full md:basis-2/5 lg:basis-1/2 md:pt-8 md:overflow-hidden">
        <Image
          src="/assets/hero_illustration.svg"
          alt="Hero Image"
          width={624}
          height={624}
          sizes="(min-width: 1024px) 66vw, 100vw"
          priority={true}
        />
      </div>
    </div>
  );
}
