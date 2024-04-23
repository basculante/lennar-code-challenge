import Button from "@/components/button";
import HamburgerIcon from "@/components/icons/hamburger";
import Image from "next/image";
import MobileMenu from "./mobile-menu";

export const navigation = [
  { name: "Product", href: "#", current: false },
  { name: "Features", href: "#", current: false },
  { name: "Marketplace", href: "#", current: false },
  { name: "Company", href: "#", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <nav className="mx-auto px-4 py-4 sm:px-8 bg-gray-900 max-w-screen-xl">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
          <MobileMenu />
        </div>
        <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <Image
              src="/assets/logo.svg"
              alt="Company Logo"
              height={40}
              width={40}
            />
          </div>
          <div className="hidden sm:ml-6 md:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="gap-4 hidden md:flex">
          <a
            href={"#"}
            className={
              "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            }
          >
            Log in
          </a>

          <a
            href={"#"}
            className={
              "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium bg-gray-600"
            }
          >
            Start free trial
          </a>
        </div>
      </div>
    </nav>
  );
}
