import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState } from "react";
import type { AuthText } from "@/types/Text/Auth/AuthText";

export default function Authenticate(texts: AuthText) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="min-h-screen w-full bg-gray-100 px-4 py-16 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center">
        <div className="mt-16 w-full rounded bg-white p-10 shadow dark:bg-gray-700 md:w-1/2 lg:w-1/3">
          <p
            role="heading"
            className="text-2xl text-center font-extrabold leading-6 text-gray-800 dark:text-gray-300"
          >
            {texts.head}
          </p>
          <p className="mt-5 text-sm text-center font-medium leading-none text-gray-500 dark:text-gray-300">
            {texts.subhead.p}&nbsp;
            <Link
              tabIndex={0}
              href={texts.subhead.link.href}
              className="cursor-pointer text-sm font-medium leading-none text-gray-800 hover:underline dark:text-white hover:text-blue-600 dark:hover:text-blue-500"
            >
              {texts.subhead.link.text}
            </Link>
          </p>
          <button
            aria-label="Continue with google"
            role="button"
            className="mb-4 mt-10 flex w-full items-center rounded-lg border border-gray-700 px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-1 dark:border-gray-300 dark:focus:ring-gray-300"
          >
            <Icon icon="flat-color-icons:google" width={21}></Icon>
            <p className="ml-4 text-base font-medium text-gray-700 dark:text-gray-300">
              Google で{texts.googleText}
            </p>
          </button>
          <div className="flex w-full items-center justify-between py-5">
            <div className="h-0.5 w-full bg-gray-400"></div>
            <p className="break-keep px-2.5 text-base font-medium leading-4 text-gray-300">
              または
            </p>
            <div className="h-0.5 w-full bg-gray-400"></div>
          </div>
          <div className="relative">
            <input
              type="text"
              aria-label="enter email address"
              id="email"
              className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500"
              placeholder=" "
              autoComplete="off"
            />
            <label
              htmlFor="email"
              className="absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform select-none text-sm text-gray-500 duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
              メールアドレス
            </label>
          </div>
          <div className="mt-6 w-full">
            <div className="relative flex items-center justify-center">
              <input
                type={showPassword ? "text" : "password"}
                aria-label="enter Password"
                id="password"
                className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
                autoComplete="off"
              />
              <label
                htmlFor="password"
                className="absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform select-none text-sm text-gray-500 duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                パスワード
              </label>
              <div className="absolute right-0 mr-3 mt-3 cursor-pointer">
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="dark:text-white"
                >
                  <Icon
                    icon={showPassword ? "bi:eye-slash-fill" : "bi:eye-fill"}
                    width={20}
                  ></Icon>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              role="button"
              aria-label="create my account"
              className="w-full rounded border bg-blue-700 py-4 text-sm font-semibold leading-none text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              {texts.authBtnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
