import Image from "next/image";
import Input from "../input/Input";
import Button from "../button";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col sm:flex-row max-w-screen-xl mx-auto gap-16 px-4 sm:px-8">
      <div className="flex-1 py-8 sm:py-40">
        <div></div>
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-8">
            A better way to
            <br />
            <span className="font-bold text-indigo-400">ship web apps</span>
          </h1>

          <p className="text-gray-300 text-xl font-light">
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
      <div className="flex-1 flex justify-center items-center">
        <Image
          src="/assets/hero_illustration.svg"
          alt="Hero Image"
          width={624}
          height={624}
        />
      </div>
    </div>
  );
}
