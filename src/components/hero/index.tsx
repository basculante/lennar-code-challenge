import Image from "next/image";
import Input from "../input/Input";
import Button from "../button";

export default function Hero() {
  return (
    <div className="h-screen flex max-w-screen-xl mx-auto gap-16">
      <div className="flex-1 py-40">
        <div></div>
        <div>
          <h1 className="text-7xl font-bold text-white mb-8">
            A better way to
            <br />
            <span className="text-7xl font-bold text-indigo-400">
              ship web apps
            </span>
          </h1>

          <p className="text-white text-xl font-light">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat.
          </p>
        </div>
        <div className="flex">
          <form action="">
            <div className="flex-1">
              <Input placeholder="Enter your email" />
            </div>
            <div className="flex-1">
              <Button type="submit">Start free trial</Button>
            </div>
          </form>
        </div>
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
