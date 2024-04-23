import CloseIcon from "@/components/icons/close";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, forwardRef } from "react";
import Image from "next/image";

interface Props {
  open: boolean;
  onClose: () => void;
  onClickPrimaryButton?: () => void;
  children?: React.ReactNode;
  primaryButtonTitle?: string;
  hideButtons?: boolean;
  hideCloseIconButton?: boolean;
}

const Modal = forwardRef<HTMLElement, Props>(
  (
    {
      open,
      onClose,
      primaryButtonTitle,
      onClickPrimaryButton,
      hideButtons,
      hideCloseIconButton,
      children,
    }: Props,
    ref
  ) => {
    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={onClose}
          initialFocus={ref as React.RefObject<HTMLDivElement>}
        >
          <div className="fixed inset-0 bg-gray-500/70 transition-opacity" />
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full justify-center p-4 text-center items-start">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-lg">
                  {!hideCloseIconButton && (
                    <div className="absolute right-0 p-4 flex w-full justify-between">
                      <Image
                        src="/assets/logo.svg"
                        alt="Company Logo"
                        height={40}
                        width={40}
                      />

                      <button type="button" onClick={onClose}>
                        <span className="sr-only">Close</span>
                        <CloseIcon />
                      </button>
                    </div>
                  )}
                  <div className="bg-white px-4 pb-4 pt-20 sm:p-6 sm:pb-4">
                    {children}
                  </div>
                  {!hideButtons && (
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 sm:ml-3 sm:w-auto"
                        onClick={onClickPrimaryButton}
                      >
                        {primaryButtonTitle ? primaryButtonTitle : "Close"}
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={onClose}
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    );
  }
);

export default Modal;
