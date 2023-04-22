import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="min-h-screen w-full bg-gray-100 px-4 py-16 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center">
          <div className="mt-16 w-full rounded bg-white p-10 shadow dark:bg-gray-700 md:w-1/2 lg:w-1/3">
            <p
              role="heading"
              className="text-2xl font-extrabold leading-6 text-gray-800 dark:text-gray-300"
            >
              アカウントでログイン
            </p>
            <p className="mt-4 text-sm font-medium leading-none text-gray-500 dark:text-gray-300">
              アカウントをすでにお持ちですか？&nbsp;
              <Link
                tabIndex={0}
                href="/login"
                className="cursor-pointer text-sm font-medium leading-none text-gray-800 hover:underline dark:text-white"
              >
                こちらでログイン
              </Link>
            </p>
            <button
              aria-label="Continue with google"
              role="button"
              className="mb-4 mt-10 flex w-full items-center rounded-lg border border-gray-700 px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-1 dark:border-gray-300 dark:focus:ring-gray-300"
            >
              <Icon icon="flat-color-icons:google" width={21}></Icon>
              <p className="ml-4 text-base font-medium text-gray-700 dark:text-gray-300">
                Google でサインアップ
              </p>
            </button>
            <div className="flex w-full items-center justify-between py-5">
              <div className="h-0.5 w-full bg-gray-400"></div>
              <p className="break-keep px-2.5 text-base font-medium leading-4 text-gray-300">
                または
              </p>
              <div className="h-0.5 w-full bg-gray-400"></div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none text-gray-800 dark:text-gray-300"
              >
                メールアドレス
              </label>
              <input
                id="email"
                aria-label="enter email address"
                role="input"
                type="email"
                className="mt-2 w-full rounded border bg-gray-200 py-3 pl-3 text-xs font-medium leading-none text-gray-800 focus:outline-none"
              />
            </div>
            <div className="mt-6 w-full">
              <label
                htmlFor="password"
                className="text-sm font-medium leading-none text-gray-800 dark:text-gray-300"
              >
                パスワード
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  id="password"
                  aria-label="enter Password"
                  role="input"
                  type={showPassword ? "text" : "password"}
                  className="mt-2 w-full rounded border bg-gray-200 py-3 pl-3 text-xs font-medium leading-none text-gray-800 focus:outline-none"
                />
                <div className="absolute right-0 mr-3 mt-3 cursor-pointer">
                  <button type="button" onClick={toggleShowPassword}>
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
                className="w-full rounded border bg-blue-700 py-4 text-sm font-semibold leading-none text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
              >
                アカウントを作成
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
