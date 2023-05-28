import {
  FC,
  ForwardRefExoticComponent,
  Fragment,
  ReactNode,
  SVGProps,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { Module } from "../module";
import { Modules } from "@/types/modules";

export interface DashboardProps {
  children: ReactNode;
  currentModule: Modules;
  isSidebarOpen: boolean;
  items: Array<{
    name: string;
    icon: ForwardRefExoticComponent<
      SVGProps<SVGSVGElement> & {
        title?: string | undefined;
        titleId?: string | undefined;
      }
    >;
    module: Modules;
  }>;
  title: string;
  onClickDrawerItem: (module: Modules) => void;
  onClickSidebar: (state: boolean) => void;
}

export const Dashboard: FC<DashboardProps> = ({
  children,
  currentModule,
  isSidebarOpen,
  items,
  onClickDrawerItem,
  onClickSidebar,
  title,
}) => {
  return (
    <div>
      <Transition.Root show={isSidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={() => onClickSidebar(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-indigo-700 pt-5 pb-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => onClickSidebar(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="mt-5 h-0 flex-1 overflow-y-auto">
                  <nav className="space-y-1 px-2">
                    {items.map((item) => (
                      <div
                        key={item.name}
                        className={classNames(
                          item.module === currentModule
                            ? "bg-indigo-800 text-white"
                            : "text-indigo-100 hover:bg-indigo-600",
                          "group flex items-center rounded-md px-2 py-2 text-base font-medium"
                        )}
                        onClick={() => onClickDrawerItem(item.module)}
                      >
                        <item.icon
                          className="mr-4 h-6 w-6 flex-shrink-0 text-indigo-300"
                          aria-hidden="true"
                        />
                        {item.name}
                      </div>
                    ))}
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            {/* Dummy element to force sidebar to shrink to fit close icon. */}
            <div className="w-14 flex-shrink-0" aria-hidden="true"></div>
          </div>
        </Dialog>
      </Transition.Root>
      {/* Static sidebar for desktop. */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        {/* Sidebar component.*/}
        <div className="flex flex-grow flex-col overflow-y-auto bg-indigo-700 pt-5">
          <div className="mt-5 flex flex-1 flex-col">
            <nav className="flex-1 space-y-1 px-2 pb-4">
              {items.map((item) => (
                <a
                  key={item.name}
                  className={classNames(
                    item.module === currentModule
                      ? "bg-indigo-800 text-white"
                      : "text-indigo-100 hover:bg-indigo-600",
                    "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
                  )}
                  onClick={() => onClickDrawerItem(item.module)}
                >
                  <item.icon
                    className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300"
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col lg:pl-64">
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow lg:hidden">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
            onClick={() => onClickSidebar(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <main>
          <Module title={title}>{children}</Module>
        </main>
      </div>
    </div>
  );
};
