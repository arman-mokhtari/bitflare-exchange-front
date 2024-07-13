/* eslint-disable tailwindcss/no-custom-classname */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { cn } from "@/lib/utils";
import MainLogo from "../../common/MainLogo";
import { useGetUser } from "@/hooks/useAuth";
import { navigation } from "@/data";
import { UserDropdownMenu } from "@/components/common/UserDropdownMenu";
import { Skeleton } from "@/components/ui/skeleton";

interface DrapdownState {
  idx: number | null;
  isActive: boolean;
}

const Navbar = ({ className }: { className?: string }) => {
  const [state, setState] = useState(false);
  const [drapdownState, setDrapdownState] = useState<DrapdownState>({
    idx: null,
    isActive: false,
  });

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target as any;
      if (!target.closest(".nav-menu"))
        setDrapdownState({ isActive: false, idx: null });
    };
  }, []);

  const { data, isLoading } = useGetUser();
  const { user } = data || {};

  if (isLoading)
    return (
      <Skeleton
        className={`fixed inset-x-0 z-20 md:top-4 md:mx-10 md:min-w-[70vw] md:rounded-lg md:py-1 lg:min-w-fit ${!state ? "h-[66px]" : ""} md:h-[75px]`}
      />
    );

  const stateHandler = (item: any) => {
    if (item.isCloseOnClick) {
      setState(!state);
    }
    setDrapdownState({ isActive: false, idx: null });
  };

  const insideDropdownHandler = () => {
    setDrapdownState({ isActive: false, idx: null });
    setState(!state);
  };

  return (
    <div
      className={cn(
        `flex md:min-w-[70vw] lg:min-w-fit fixed md:top-4 inset-x-0 md:mx-10 border-b md:border border-transparent dark:border-white/[0.2] md:rounded-lg  backdrop-blur-md bg-white dark:bg-black md:bg-white/50 md:dark:bg-black/50 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-20 md:py-1 items-center justify-center ${!state ? "h-[66px]" : ""} md:h-[75px]`,
        className
      )}
    >
      <nav
        className={`relative z-20 w-full md:static md:border-none md:bg-transparent md:text-sm ${
          state
            ? "rounded-b-xl bg-white  shadow-lg dark:bg-black-100 md:shadow-none"
            : ""
        }`}
      >
        <div className="mx-auto max-w-screen-xl items-center gap-x-14 px-4 md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:block md:py-3">
            <MainLogo />
            <div className="md:hidden">
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`nav-menu mt-8 flex-1 pb-3 md:mt-0 md:block md:pb-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="max-h-72 items-center space-y-6 overflow-y-auto md:flex md:space-x-6 md:space-y-0">
              <div className="flex items-center justify-end md:hidden ">
                {user && user.isActive && (
                  <li className=" md:hidden">
                    <UserDropdownMenu dropdownMenuLabel={user.name} />
                  </li>
                )}
                <ModeToggle />
              </div>

              {navigation.map((item, idx) => {
                return (
                  <li key={idx}>
                    {item.isDrapdown ? (
                      <div className="md:mr-6">
                        <button
                          className="flex w-full items-center justify-between gap-1 text-gray-700 hover:text-blue-600 dark:text-white"
                          onClick={() =>
                            setDrapdownState({
                              idx,
                              isActive: !drapdownState.isActive,
                            })
                          }
                        >
                          {item.title}
                          {drapdownState.idx === idx &&
                          drapdownState.isActive ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="size-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="size-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                    ) : (
                      <Link
                        href={item.path}
                        className="block text-gray-700 hover:text-blue-600 dark:text-white"
                        onClick={() => stateHandler(item)}
                      >
                        {item.title}
                      </Link>
                    )}
                    {item.isDrapdown &&
                    drapdownState.idx === idx &&
                    drapdownState.isActive ? (
                      <div className="inset-x-0 top-20 mt-6 w-full bg-white dark:bg-black-100 md:absolute md:mt-0 md:border-y md:shadow-md">
                        <ul className="mx-auto grid max-w-screen-xl items-center gap-6 md:grid-cols-2 md:p-8 lg:grid-cols-3">
                          {item?.navs?.map((dropdownItem, idx) => (
                            <li key={idx}>
                              <p className="text-sm text-blue-600 dark:text-blue-300">
                                {dropdownItem.label}
                              </p>
                              <ul className="mt-5 space-y-6">
                                {dropdownItem.navs.map((navItem, idx) => (
                                  <li key={idx} className="group">
                                    <Link
                                      href={navItem.path}
                                      className="flex items-center gap-3"
                                      onClick={insideDropdownHandler}
                                    >
                                      <div className="flex size-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 duration-150 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-100 md:size-14">
                                        {navItem.icon}
                                      </div>
                                      <div>
                                        <span className="text-sm font-medium text-gray-800 duration-200 group-hover:text-blue-600 dark:text-white md:text-base">
                                          {navItem.title}
                                        </span>
                                        <p className="mt-1 text-sm text-gray-600 group-hover:text-gray-800 dark:text-white-200 dark:group-hover:text-white">
                                          {navItem.desc}
                                        </p>
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}

              <div className="flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0">
                <div className="hidden md:block">
                  <ModeToggle />
                </div>

                {!user && (
                  <>
                    <li>
                      <Link
                        href="/signin"
                        className="block rounded-lg border py-3 text-center text-gray-700 hover:text-blue-600 dark:text-white md:border-none"
                      >
                        ورود
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/auth"
                        className="block rounded-lg bg-blue-600 px-4 py-3 text-center font-medium text-white shadow hover:bg-blue-700 active:bg-blue-800 active:shadow-none md:inline"
                      >
                        ثبت نام
                      </Link>
                    </li>
                  </>
                )}

                {user && user.isActive && (
                  <li className="hidden md:block">
                    <UserDropdownMenu dropdownMenuLabel={user.name} />
                  </li>
                )}
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {state ? (
        <div
          className="fixed top-0 z-10 h-screen w-screen bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setState(false)}
        ></div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
