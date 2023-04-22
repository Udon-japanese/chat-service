export default function Home() {
  return (
    <>
      <div className="mb-6 grid items-end gap-6 md:grid-cols-3">
        <div>
          <div className="relative">
            <input
              type="text"
              id="filled_success"
              aria-describedby="filled_success_help"
              className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-green-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:bg-gray-700 dark:text-white dark:focus:border-green-500"
              placeholder=" "
            />
            <label
              htmlFor="filled_success"
              className="absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-green-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-green-500"
            >
              Filled success
            </label>
          </div>
          <p
            id="filled_success_help"
            className="mt-2 text-xs text-green-600 dark:text-green-400"
          >
            <span className="font-medium">Well done!</span> Some success
            message.
          </p>
        </div>
        <div>
          <div className="relative">
            <input
              type="text"
              id="outlined_success"
              aria-describedby="outlined_success_help"
              className="border-1 peer block w-full appearance-none rounded-lg border-green-600 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500"
              placeholder=" "
            />
            <label
              htmlFor="outlined_success"
              className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-green-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-green-500"
            >
              Outlined success
            </label>
          </div>
          <p
            id="outlined_success_help"
            className="mt-2 text-xs text-green-600 dark:text-green-400"
          >
            <span className="font-medium">Well done!</span> Some success
            message.
          </p>
        </div>
        <div>
          <div className="relative z-0">
            <input
              type="text"
              id="standard_success"
              aria-describedby="standard_success_help"
              className="peer block w-full appearance-none border-0 border-b-2 border-green-600 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500"
              placeholder=" "
            />
            <label
              htmlFor="standard_success"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-green-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-green-500"
            >
              Standard success
            </label>
          </div>
          <p
            id="standard_success_help"
            className="mt-2 text-xs text-green-600 dark:text-green-400"
          >
            <span className="font-medium">Well done!</span> Some success
            message.
          </p>
        </div>
      </div>
      {/* Error messages */}
      <div className="grid items-end gap-6 md:grid-cols-3">
        <div>
          <div className="relative">
            <input
              type="text"
              id="filled_error"
              aria-describedby="filled_error_help"
              className="dark:focus-border-red-500 peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-red-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:bg-gray-700 dark:text-white"
              placeholder=" "
            />
            <label
              htmlFor="filled_error"
              className="absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-red-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-red-500"
            >
              Filled error
            </label>
          </div>
          <p
            id="filled_error_help"
            className="mt-2 text-xs text-red-600 dark:text-red-400"
          >
            <span className="font-medium">Oh, snapp!</span> Some error message.
          </p>
        </div>
        <div>
          <div className="relative">
            <input
              type="text"
              id="outlined_error"
              aria-describedby="outlined_error_help"
              className="border-1 peer block w-full appearance-none rounded-lg border-red-600 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500"
              placeholder=" "
            />
            <label
              htmlFor="outlined_error"
              className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-red-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-red-500"
            >
              Outlined error
            </label>
          </div>
          <p
            id="outlined_error_help"
            className="mt-2 text-xs text-red-600 dark:text-red-400"
          >
            <span className="font-medium">Oh, snapp!</span> Some error message.
          </p>
        </div>
        <div>
          <div className="relative z-0">
            <input
              type="text"
              id="standard_error"
              aria-describedby="standard_error_help"
              className="peer block w-full appearance-none border-0 border-b-2 border-red-600 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500"
              placeholder=" "
            />
            <label
              htmlFor="standard_error"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-red-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-red-500"
            >
              Standard error
            </label>
          </div>
          <p
            id="standard_error_help"
            className="mt-2 text-xs text-red-600 dark:text-red-400"
          >
            <span className="font-medium">Oh, snapp!</span> Some error message.
          </p>
        </div>
      </div>
    </>
  );
}
