import { useState } from "react";
import Link from "next/link";
import { NAVIGATION } from "@/data/navigation";
import Searchbox from "@/app/Searchbox";
import { buttonVariants } from "../ui/button";
import { Plus } from "lucide-react";
import UserStore from "@/store/user";

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);
  const user = UserStore((state) => state.user);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <div className="min-[1100px]:hidden w-[100px]">
      <button
        type="button"
        className={`ml-1 mr-1 h-8 w-8 rounded py-1 ${
          navShow ? "invisible" : ""
        }`}
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-gray-900 dark:text-gray-100"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`fixed right-0 top-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-neutral-950 ${
          navShow ? "translate-x-0" : "translate-x-[-100%]"
        }`}
      >
        <div className="flex justify-start items-center">
          <button
            type="button"
            className="ml-7 mr-10 mt-5 h-8 w-8 rounded"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-900 dark:text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <nav className="fixed mt-8 h-full">
          <div className="px-12 py-4">
            <Searchbox
              closeMobileNav={() => {
                setNavShow(false);
                document.body.style.overflow = "auto";
              }}
            />
          </div>

          {NAVIGATION.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-2xl w-full font-normal tracking-widest  text-gray-900 dark:text-gray-100"
              onClick={onToggleNav}
            >
              <div className="px-12 py-4 w-screen hover:bg-neutral-800/50">
                {link.title}

                <hr className="mt-1" />
              </div>
            </Link>
          ))}

          <div className=" flex justify-center px-12 py-4 w-screen ">
            <Link
              href="/new"
              className={`flex items-center gap-2 w-screen text-2xl ${buttonVariants(
                {
                  variant: "default",
                }
              )}`}
              onClick={onToggleNav}
            >
              Create <Plus />
            </Link>
          </div>
          <div className="px-12 py-4 w-screen">
            {user ? (
              <div></div>
            ) : (
              <div className="gap-4 flex items-center justify-center">
                <div className="gap-4 flex items-center">
                  <Link
                    className=" rounded-md  font-medium"
                    href={"/login"}
                    onClick={onToggleNav}
                  >
                    Login
                  </Link>{" "}
                  <Link
                    href={"/register"}
                    onClick={onToggleNav}
                    className={`${buttonVariants({
                      variant: "default",
                    })}`}
                  >
                    Register
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
