"use client";

import Button from "@/components/button";
import HamburgerIcon from "@/components/icons/hamburger";
import Modal from "@/components/modal/modal";
import { useState } from "react";
import { navigation } from ".";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button
        bgColor="bg-none"
        bgHoverColor="bg-gray-700"
        onClick={() => setIsOpen(true)}
      >
        <HamburgerIcon />
      </Button>

      <Modal open={isOpen} onClose={() => setIsOpen(false)} hideButtons={true}>
        <div className="mb-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-base text-gray-700 rounded-md hover:bg-gray-50"
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="py-3 sm:px-6">
          <div className="mb-8">
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
            >
              Start free trial
            </button>
          </div>
          <div className="text-center">
            <p className="text-gray-500">
              Exisiting customer?{" "}
              <a href="#" className="text-black">
                Login
              </a>
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
