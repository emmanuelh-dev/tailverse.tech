import React from "react";

const WelcomePage = () => {
  return (
    <div className="container">
      <div className="relative -mt-[5.75rem] overflow-hidden pb-16 pt-[5.75rem]">
        <img
          src="./Tailwind UI - Official Tailwind CSS Components &amp; Templates_files/beams-home@95.jpg"
          alt=""
          className="absolute -top-[1rem] left-1/2 -ml-[40rem] w-[163.125rem] max-w-none sm:-ml-[67.5rem]"
        />
        <div className="relative mx-auto mt-16 grid w-full max-w-container grid-cols-1 px-4 sm:mt-20 sm:px-6 lg:px-8 xl:mt-32">
          <h1 className="col-start-1 row-start-1 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-white sm:text-7xl xl:max-w-[43.5rem]">
            Components ready to implement and customize.
          </h1>
          <p className="col-start-1 row-start-3 mt-4 max-w-lg text-lg text-gray-400">
            Toolkits crafted for developers by developers. Streamline your work
            with our resources designed to enhance your projects.
          </p>
          <div className="col-start-1 row-start-2 mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <a
              className="inline-flex justify-center rounded-lg text-sm py-3 px-4 bg-white text-black hover:bg-white/90"
              href="/"
            >
              <span>
                Browse all components
                <span
                  aria-hidden="true"
                  className="hidden text-slate-400 sm:inline"
                >
                  →
                </span>
              </span>
            </a>
            <a
              className="inline-flex justify-center rounded-lg text-sm py-3 px-4 border border-white"
              href="/alpinejs"
            >
              <span>
                AlpineJS
                <span
                  aria-hidden="true"
                  className="hidden text-white sm:inline"
                >
                  →
                </span>
              </span>
            </a>
          </div>
          <div className="pointer-events-none col-start-1 row-start-5 flex md:row-span-3 md:row-start-3 lg:row-span-4 lg:row-start-2 xl:row-span-5 xl:row-start-1 xl:justify-end">
            <div className="-ml-[32rem] mt-12 h-[46.375rem] origin-top scale-[calc(204/299)] select-none sm:-ml-[24rem] sm:-mt-20 sm:h-auto sm:transform-none md:-ml-64 md:mt-10 lg:-ml-16 lg:mt-0 xl:-mr-4 xl:ml-0">
              <div className="flex justify-end">
                <div className="relative flex items-end">
                  <div className="absolute left-16 top-full -mt-px h-8 overflow-hidden"></div>
                  <div>
                    <div className="p-4">
                      <div className="ml-auto pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-indigo-600 ring-black/20">
                        <div className="h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out translate-x-4"></div>
                      </div>
                      <div className="mt-8 flex items-center justify-end">
                        <div className="pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-slate-900/10 ring-slate-900/5">
                          <div className="h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out"></div>
                        </div>
                        <a
                          className="text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:w-auto px-6 py-3"
                          href="/overview"
                        >
                          Explore all pages <span className="ml-3">→</span>
                        </a>
                      </div>
                    </div>
                    <button
                      disabled
                      type="button"
                      className="block w-full text-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                    >
                      <svg
                        aria-hidden="true"
                        role="status"
                        className="inline w-4 h-4 mr-3 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                      Loading...
                    </button>
                  </div>
                  <div className="relative z-10 p-4">
                    <div className="w-[24.5rem] divide-y divide-slate-400/20 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                      <div className="flex items-center p-4">
                        <img
                          src="./Tailwind UI - Official Tailwind CSS Components &amp; Templates_files/avatar-1.jpg"
                          alt=""
                          className="h-10 w-10 flex-none rounded-full"
                        />
                        <div className="ml-4 flex-auto">
                          <div className="font-medium">Leonard Krasner</div>
                          <div className="mt-1 text-slate-700">
                            @leonardkrasner
                          </div>
                        </div>
                        <div className="pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">
                          View
                        </div>
                      </div>
                      <div className="flex items-center p-4">
                        <img
                          src="./Tailwind UI - Official Tailwind CSS Components &amp; Templates_files/avatar-2.jpg"
                          alt=""
                          className="h-10 w-10 flex-none rounded-full"
                        />
                        <div className="ml-4 flex-auto">
                          <div className="font-medium">Floyd Miles</div>
                          <div className="mt-1 text-slate-700">@floydmiles</div>
                        </div>
                        <div className="pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">
                          View
                        </div>
                      </div>
                      <div className="flex items-center p-4">
                        <img
                          src="./Tailwind UI - Official Tailwind CSS Components &amp; Templates_files/avatar-3.jpg"
                          alt=""
                          className="h-10 w-10 flex-none rounded-full"
                        />
                        <div className="ml-4 flex-auto">
                          <div className="font-medium">Emily Selman</div>
                          <div className="mt-1 text-slate-700">
                            @emilyselman
                          </div>
                        </div>
                        <div className="pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">
                          View
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="pointer-events-auto rounded-md px-4 py-2 text-center font-medium shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">
                          View all
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-end">
                <div>
                  <div className="relative flex items-end justify-end">
                    <div>
                      <div className="flex justify-end p-4">
                        <div className="pointer-events-auto flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10">
                          <div className="px-4 py-2 hover:bg-slate-50 hover:text-slate-900">
                            Years
                          </div>
                          <div className="px-4 py-2 hover:bg-slate-50 hover:text-slate-900">
                            Months
                          </div>
                          <div className="px-4 py-2 hover:bg-slate-50 hover:text-slate-900">
                            Days
                          </div>
                        </div>
                      </div>
                      <div className="relative z-10 p-4">
                        <div className="flex w-[23.5625rem] items-center rounded-md bg-white p-4 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                          <svg
                            className="h-6 w-6 flex-none stroke-slate-500"
                            stroke-width="2"
                            stroke-linecap="round"
                            fill="none"
                          >
                            <path d="M4 7h16M4 12h16M4 17h16"></path>
                          </svg>
                          <svg
                            className="ml-6 h-10 w-10 flex-none"
                            viewBox="0 0 40 40"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.8322 6.12083C11.1486 5.56355 11.74 5.21924 12.3808 5.21924H27.1431C27.7322 5.21924 28.2831 5.51055 28.6148 5.99738L37.4718 18.9974C37.8542 19.5587 37.884 20.2887 37.5487 20.8793L30.1679 33.8793C29.8515 34.4366 29.2601 34.7809 28.6192 34.7809L12.3808 34.7809C11.74 34.7809 11.1486 34.4366 10.8322 33.8793L3.45137 20.8793C3.14178 20.334 3.14178 19.6661 3.45137 19.1208L10.8322 6.12083ZM12.3808 10.607L17.7138 20.0001L12.3808 29.3931L7.04787 20.0001L12.3808 10.607ZM15.4397 31.2192L27.5825 31.2192L32.9411 21.7809H20.7984L15.4397 31.2192ZM20.7984 18.2192H32.6319L26.2015 8.78092H15.4397L20.7984 18.2192Z"
                              fill="#38BDF8"
                            ></path>
                          </svg>
                          <div className="ml-auto flex h-6 w-6 items-center justify-center rounded-md shadow ring-1 ring-slate-900/10">
                            <svg
                              className="h-4 w-4"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7 1C7 0.447715 7.44772 0 8 0C8.55228 0 9 0.447715 9 1V2C9 2.55228 8.55228 3 8 3C7.44772 3 7 2.55228 7 2V1ZM11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8ZM13.6563 2.34285C13.2658 1.95232 12.6326 1.95232 12.2421 2.34285L11.535 3.04996C11.1445 3.44048 11.1445 4.07365 11.535 4.46417C11.9255 4.85469 12.5587 4.85469 12.9492 4.46417L13.6563 3.75706C14.0469 3.36654 14.0469 2.73337 13.6563 2.34285ZM12.242 13.6563L11.5349 12.9492C11.1443 12.5587 11.1443 11.9255 11.5349 11.535C11.9254 11.1445 12.5585 11.1445 12.9491 11.535L13.6562 12.2421C14.0467 12.6326 14.0467 13.2658 13.6562 13.6563C13.2656 14.0468 12.6325 14.0468 12.242 13.6563ZM16 7.99902C16 7.44674 15.5523 6.99902 15 6.99902H14C13.4477 6.99902 13 7.44674 13 7.99902C13 8.55131 13.4477 8.99902 14 8.99902H15C15.5523 8.99902 16 8.55131 16 7.99902ZM7 14C7 13.4477 7.44772 13 8 13C8.55228 13 9 13.4477 9 14V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V14ZM4.46492 11.5352C4.0744 11.1447 3.44123 11.1447 3.05071 11.5352L2.3436 12.2423C1.95307 12.6329 1.95307 13.266 2.3436 13.6566C2.73412 14.0471 3.36729 14.0471 3.75781 13.6566L4.46492 12.9494C4.85544 12.5589 4.85544 11.9258 4.46492 11.5352ZM4.46477 3.04973C4.85529 3.44025 4.85529 4.07342 4.46477 4.46394C4.07424 4.85447 3.44108 4.85447 3.05055 4.46394L2.34345 3.75684C1.95292 3.36631 1.95292 2.73315 2.34345 2.34262C2.73397 1.9521 3.36714 1.9521 3.75766 2.34262L4.46477 3.04973ZM3 8C3 7.44772 2.55228 7 2 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H2C2.55228 9 3 8.55228 3 8Z"
                                fill="#38BDF8"
                              ></path>
                            </svg>
                          </div>
                          <div className="ml-6 text-[0.8125rem] font-medium text-slate-700">
                            v3.0
                          </div>
                          <svg className="ml-2 h-1 w-1.5 overflow-visible fill-slate-400 stroke-slate-400">
                            <path
                              d="M0 0H6L3 4Z"
                              stroke-width="1"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <svg
                            viewBox="0 0 16 16"
                            className="ml-6 h-6 w-6 fill-slate-400"
                          >
                            <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-10 p-4">
                      <div className="space-y-4">
                        <div className="pointer-events-auto w-[21rem] rounded-lg bg-white p-4 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 hover:bg-slate-50 ring-2 ring-indigo-600">
                          <div className="flex justify-between">
                            <div className="font-medium text-slate-900">
                              Newsletter
                            </div>
                            <svg className="h-5 w-5 flex-none" fill="none">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"
                                fill="#4F46E5"
                              ></path>
                            </svg>
                          </div>
                          <div className="mt-1 text-slate-700">
                            Last message sent an hour ago
                          </div>
                          <div className="mt-6 font-medium text-slate-900">
                            621 users
                          </div>
                        </div>
                        <div className="pointer-events-auto w-[21rem] rounded-lg bg-white p-4 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 hover:bg-slate-50 ring-1 ring-slate-700/10">
                          <div className="flex justify-between">
                            <div className="font-medium text-slate-900">
                              Existing customers
                            </div>
                          </div>
                          <div className="mt-1 text-slate-700">
                            Last message sent an hour ago
                          </div>
                          <div className="mt-6 font-medium text-slate-900">
                            1200 users
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-end">
                    <div className="relative p-4">
                      <div className="pointer-events-auto w-36 space-y-1 rounded-lg bg-white p-3 text-[0.8125rem] font-medium leading-6 text-slate-700 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                        <div className="flex rounded-[10px] p-1 bg-slate-50">
                          <div className="flex h-6 w-6 flex-none items-center justify-center rounded-md bg-white shadow ring-1 ring-slate-900/10">
                            <svg className="h-4 w-4 fill-slate-400">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7 1C7 0.447715 7.44772 0 8 0C8.55228 0 9 0.447715 9 1V2C9 2.55228 8.55228 3 8 3C7.44772 3 7 2.55228 7 2V1ZM11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8ZM13.6563 2.34285C13.2658 1.95232 12.6326 1.95232 12.2421 2.34285L11.535 3.04996C11.1445 3.44048 11.1445 4.07365 11.535 4.46417C11.9255 4.85469 12.5587 4.85469 12.9492 4.46417L13.6563 3.75706C14.0469 3.36654 14.0469 2.73337 13.6563 2.34285ZM12.242 13.6563L11.5349 12.9492C11.1443 12.5587 11.1443 11.9255 11.5349 11.535C11.9254 11.1445 12.5585 11.1445 12.9491 11.535L13.6562 12.2421C14.0467 12.6326 14.0467 13.2658 13.6562 13.6563C13.2656 14.0468 12.6325 14.0468 12.242 13.6563ZM16 7.99902C16 7.44674 15.5523 6.99902 15 6.99902H14C13.4477 6.99902 13 7.44674 13 7.99902C13 8.55131 13.4477 8.99902 14 8.99902H15C15.5523 8.99902 16 8.55131 16 7.99902ZM7 14C7 13.4477 7.44772 13 8 13C8.55228 13 9 13.4477 9 14V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V14ZM4.46492 11.5352C4.0744 11.1447 3.44123 11.1447 3.05071 11.5352L2.3436 12.2423C1.95307 12.6329 1.95307 13.266 2.3436 13.6566C2.73412 14.0471 3.36729 14.0471 3.75781 13.6566L4.46492 12.9494C4.85544 12.5589 4.85544 11.9258 4.46492 11.5352ZM4.46477 3.04973C4.85529 3.44025 4.85529 4.07342 4.46477 4.46394C4.07424 4.85447 3.44108 4.85447 3.05055 4.46394L2.34345 3.75684C1.95292 3.36631 1.95292 2.73315 2.34345 2.34262C2.73397 1.9521 3.36714 1.9521 3.75766 2.34262L4.46477 3.04973ZM3 8C3 7.44772 2.55228 7 2 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H2C2.55228 9 3 8.55228 3 8Z"
                                fill="#38BDF8"
                              ></path>
                            </svg>
                          </div>
                          <div className="ml-3 text-slate-900">Light</div>
                        </div>
                        <div className="flex rounded-[10px] p-1">
                          <div className="flex h-6 w-6 flex-none items-center justify-center rounded-md bg-white shadow ring-1 ring-slate-900/10">
                            <svg className="h-4 w-4 fill-slate-400">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z"
                              ></path>
                            </svg>
                          </div>
                          <div className="ml-3">Dark</div>
                        </div>
                        <div className="flex rounded-[10px] p-1">
                          <div className="flex h-6 w-6 flex-none items-center justify-center rounded-md bg-white shadow ring-1 ring-slate-900/10">
                            <svg className="h-4 w-4 fill-slate-400">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.5l.31 1.242c.084.333.36.573.63.808.091.08.182.158.264.24A1 1 0 0 1 11 15H5a1 1 0 0 1-.704-1.71c.082-.082.173-.16.264-.24.27-.235.546-.475.63-.808L5.5 11H4a3 3 0 0 1-3-3V4Zm3-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
                              ></path>
                            </svg>
                          </div>
                          <div className="ml-3">System</div>
                        </div>
                      </div>
                    </div>
                    <div className="relative p-4">
                      <div className="pointer-events-auto w-[28.125rem] text-[0.8125rem] leading-5 text-slate-700">
                        <div className="font-semibold text-slate-900">
                          Assigned to
                        </div>
                        <div className="mt-2 flex items-center justify-between rounded-md bg-white px-3 py-2 shadow-sm ring-1 ring-slate-700/10">
                          Tom Cook
                          <svg className="h-5 w-5 flex-none fill-slate-400">
                            <path d="M10 3a1 1 0 0 1 .707.293l3 3a1 1 0 0 1-1.414 1.414L10 5.414 7.707 7.707a1 1 0 0 1-1.414-1.414l3-3A1 1 0 0 1 10 3Zm-3.707 9.293a1 1 0 0 1 1.414 0L10 14.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414Z"></path>
                          </svg>
                        </div>
                        <div className="mt-4 overflow-hidden rounded-md bg-white py-1 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                          <div className="px-3 py-2 bg-indigo-600 text-white">
                            Wade Cooper
                          </div>
                          <div className="px-3 py-2">Arlene Mccoy</div>
                          <div className="px-3 py-2">Tom Cook</div>
                          <div className="px-3 py-2">Devon Webb</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative p-4">
                    <div className="pointer-events-auto w-[25.625rem] rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-700 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                      <div className="flex items-center px-3.5 py-2.5 text-slate-400">
                        <svg
                          className="mr-2 h-5 w-5 stroke-slate-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                        Search projects...
                      </div>
                      <div className="border-t border-slate-400/20 px-3.5 py-3">
                        <div className="mb-1.5 text-[0.6875rem] font-semibold text-slate-500">
                          Recent searches
                        </div>
                        <div className="flex items-center rounded-md p-1.5 bg-indigo-600 text-white">
                          <svg
                            className="mr-2.5 h-5 w-5 flex-none stroke-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                            ></path>
                          </svg>
                          Tailwind Labs / Website Redesign
                        </div>
                        <div className="flex items-center rounded-md p-1.5">
                          <svg
                            className="mr-2.5 h-5 w-5 flex-none stroke-slate-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                            ></path>
                          </svg>
                          Laravel LLC / Conference Branding
                        </div>
                      </div>
                      <div className="border-t border-slate-400/20 px-3.5 py-3">
                        <div className="flex items-center rounded-md p-1.5">
                          <svg
                            className="mr-2.5 h-5 w-5 flex-none stroke-slate-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                          </svg>
                          Add new file...
                        </div>
                        <div className="flex items-center rounded-md p-1.5">
                          <svg
                            className="mr-2.5 h-5 w-5 flex-none stroke-slate-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                          </svg>
                          Add new folder...
                        </div>
                        <div className="flex items-center rounded-md p-1.5">
                          <svg
                            className="mr-2.5 h-5 w-5 flex-none stroke-slate-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                          </svg>
                          Add hashtag...
                        </div>
                        <div className="flex items-center rounded-md p-1.5">
                          <svg
                            className="mr-2.5 h-5 w-5 flex-none stroke-slate-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                          </svg>
                          Add label...
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative p-4">
                    <div className="-mr-[4.625rem] w-full  rounded-md bg-white p-4 text-[0.8125rem] leading-6 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                      <div className="font-semibold leading-5">Account</div>
                      <div className="mt-2 leading-5 text-slate-500">
                        Manage how information is displayed on your account.
                      </div>
                      <div className="mt-4 flex items-center border-t border-slate-400/20 py-3">
                        <span className="w-2/5 flex-none">Language</span>
                        <span className="">English</span>
                        <span className="pointer-events-auto ml-auto font-medium text-indigo-600 hover:text-indigo-500">
                          Update
                        </span>
                      </div>
                      <div className="flex items-center border-t border-slate-400/20 py-3">
                        <span className="w-2/5 flex-none">Date format</span>
                        <span className="">DD-MM-YYYY</span>
                        <span className="ml-auto flex items-center font-medium text-indigo-600">
                          <span className="pointer-events-auto hover:text-indigo-500">
                            Update
                          </span>
                          <span className="mx-3 h-6 w-px bg-slate-400/20"></span>
                          <span className="pointer-events-auto hover:text-indigo-500">
                            Remove
                          </span>
                        </span>
                      </div>
                      <div className="flex items-center border-t border-slate-400/20 py-3">
                        <span>Automatic timezone</span>
                        <span className="ml-auto">
                          <div className="pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-indigo-600 ring-black/20">
                            <div className="h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out translate-x-4"></div>
                          </div>
                        </span>
                      </div>
                      <div className="flex items-center border-t border-slate-400/20 pt-3">
                        <span>Auto-update applicant data</span>
                        <span className="ml-auto">
                          <div className="pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-slate-900/10 ring-slate-900/5">
                            <div className="h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out"></div>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Components
          </h2>
          <p className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900">
            Beautifully crafted UI components, ready for your next project.
          </p>
        </div>
        <div className="max-w-xl">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Over 500+ professionally designed, fully responsive, expertly
            crafted component examples you can drop into your Tailwind projects
            and customize to your heart’s content.
          </p>
        </div>
        <div className="mt-6">
          <a
            className="text-base font-semibold text-indigo-600 hover:text-indigo-700"
            href="https://tailwindui.com/components"
          >
            Browse all components <span aria-hidden="true">→</span>
          </a>
        </div>
        <div
          className="mt-16 flex border-t border-slate-200 sm:space-x-10 md:grid md:grid-cols-3 md:gap-x-8 md:space-x-0"
          role="tablist"
          aria-orientation="horizontal"
        >
          <div>
            <div className="relative -mt-px border-t pb-6 pt-4 text-left md:pb-10 md:pt-8 border-indigo-500">
              <h3>
                <button
                  className="whitespace-nowrap text-sm font-semibold leading-7 sm:text-base [&amp;:not(:focus-visible)]:focus:outline-none text-indigo-600"
                  id="headlessui-tabs-tab-1"
                  role="tab"
                  type="button"
                  aria-selected="true"
                  data-headlessui-state="selected"
                  aria-controls="headlessui-tabs-panel-4"
                >
                  <span className="absolute inset-0 -top-px"></span>Application
                  UI
                </button>
              </h3>
              <p className="mt-2 hidden text-sm leading-6 text-slate-700 md:block">
                Form layouts, tables, modal dialogs — everything you need to
                build beautiful responsive web applications.
              </p>
            </div>
          </div>
          <div
            className="w-10 min-w-[1rem] shrink sm:hidden"
            aria-hidden="true"
          ></div>
          <div>
            <div className="relative -mt-px border-t pb-6 pt-4 text-left md:pb-10 md:pt-8 border-transparent hover:border-slate-400">
              <h3>
                <button
                  className="whitespace-nowrap text-sm font-semibold leading-7 sm:text-base [&amp;:not(:focus-visible)]:focus:outline-none text-slate-900"
                  id="headlessui-tabs-tab-2"
                  role="tab"
                  type="button"
                  aria-selected="false"
                  data-headlessui-state=""
                  aria-controls="headlessui-tabs-panel-5"
                >
                  <span className="absolute inset-0 -top-px"></span>Marketing
                </button>
              </h3>
              <p className="mt-2 hidden text-sm leading-6 text-slate-700 md:block">
                Heroes, feature sections, newsletter sign up forms — everything
                you need to build beautiful marketing websites.
              </p>
            </div>
          </div>
          <div
            className="w-10 min-w-[1rem] shrink sm:hidden"
            aria-hidden="true"
          ></div>
          <div>
            <div className="relative -mt-px border-t pb-6 pt-4 text-left md:pb-10 md:pt-8 border-transparent hover:border-slate-400">
              <h3>
                <button
                  className="whitespace-nowrap text-sm font-semibold leading-7 sm:text-base [&amp;:not(:focus-visible)]:focus:outline-none text-slate-900"
                  id="headlessui-tabs-tab-3"
                  role="tab"
                  type="button"
                  aria-selected="false"
                  data-headlessui-state=""
                  aria-controls="headlessui-tabs-panel-6"
                >
                  <span className="absolute inset-0 -top-px"></span>Ecommerce
                </button>
              </h3>
              <p className="mt-2 hidden text-sm leading-6 text-slate-700 md:block">
                Checkout forms, shopping carts, product views — everything you
                need to build your next ecommerce front-end.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            id="headlessui-tabs-panel-4"
            role="tabpanel"
            data-headlessui-state="selected"
            aria-labelledby="headlessui-tabs-tab-1"
          >
            <p className="text-sm leading-6 text-slate-700 md:hidden">
              Form layouts, tables, modal dialogs — everything you need to build
              beautiful responsive web applications.
            </p>
            <div className="relative mt-10 md:mt-0">
              <ul className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <li className="">
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src="./Tailwind UI - Official Tailwind CSS Components &amp; Templates_files/stacked.png"
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="https://tailwindui.com/components/application-ui/application-shells/stacked">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Stacked Layouts</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      9 components
                    </p>
                  </div>
                </li>
                <li className="">
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src="./Tailwind UI - Official Tailwind CSS Components &amp; Templates_files/sidebar.png"
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="https://tailwindui.com/components/application-ui/application-shells/sidebar">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Sidebar Layouts</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      8 components
                    </p>
                  </div>
                </li>
                <li className="">
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src="./Tailwind UI - Official Tailwind CSS Components &amp; Templates_files/page-headings.png"
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="https://tailwindui.com/components/application-ui/headings/page-headings">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Page Headings</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      13 components
                    </p>
                  </div>
                </li>
                <li className="">
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src="./Tailwind UI - Official Tailwind CSS Components &amp; Templates_files/calendars.png"
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="https://tailwindui.com/components/application-ui/data-display/calendars">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Calendars</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      8 components
                    </p>
                  </div>
                </li>
                <li className="">
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src="./Tailwind UI - Official Tailwind CSS Components &amp; Templates_files/tables.png"
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="https://tailwindui.com/components/application-ui/lists/tables">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Tables</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      20 components
                    </p>
                  </div>
                </li>
                <li className="">
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src="./Tailwind UI - Official Tailwind CSS Components &amp; Templates_files/form-layouts.png"
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="https://tailwindui.com/components/application-ui/forms/form-layouts">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Form Layouts</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      5 components
                    </p>
                  </div>
                </li>
                <li className="hidden lg:block">
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src="./Tailwind UI - Official Tailwind CSS Components &amp; Templates_files/input-groups.png"
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="https://tailwindui.com/components/application-ui/forms/input-groups">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Input Groups</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      21 components
                    </p>
                  </div>
                </li>
                <li className="hidden lg:block">
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src="./Tailwind UI - Official Tailwind CSS Components &amp; Templates_files/sign-in-forms.png"
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="https://tailwindui.com/components/application-ui/forms/sign-in-forms">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">
                          Sign-in and Registration
                        </span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      5 components
                    </p>
                  </div>
                </li>
                <li className="hidden lg:block">
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src="./Tailwind UI - Official Tailwind CSS Components &amp; Templates_files/pagination.png"
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="https://tailwindui.com/components/application-ui/navigation/pagination">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Pagination</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      3 components
                    </p>
                  </div>
                </li>
                <li className="hidden xl:block">
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src="./Tailwind UI - Official Tailwind CSS Components &amp; Templates_files/steps.png"
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="https://tailwindui.com/components/application-ui/navigation/steps">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Steps</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      8 components
                    </p>
                  </div>
                </li>
                <li className="hidden xl:block">
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src="./Tailwind UI - Official Tailwind CSS Components &amp; Templates_files/command-palettes.png"
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="https://tailwindui.com/components/application-ui/navigation/command-palettes">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Command Palettes</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      9 components
                    </p>
                  </div>
                </li>
                <li className="hidden xl:block">
                  <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                      <img
                        src="./Tailwind UI - Official Tailwind CSS Components &amp; Templates_files/modals.png"
                        alt=""
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                      <a href="https://tailwindui.com/components/application-ui/overlays/modals">
                        <span className="absolute -inset-2.5 z-10"></span>
                        <span className="relative">Modals</span>
                      </a>
                    </h4>
                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                      6 components
                    </p>
                  </div>
                </li>
              </ul>
              <div className="pointer-events-none absolute -inset-x-2.5 -bottom-2.5 h-[16.6%] bg-gradient-to-t from-white to-white/25 sm:h-[33.3%]"></div>
            </div>
            <div className="pointer-events-none relative z-10 -mt-5 flex justify-center">
              <a
                className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 pointer-events-auto"
                href="https://tailwindui.com/components/#product-application-ui"
              >
                <span>
                  Show more...<span className="sr-only">, Application UI</span>
                </span>
              </a>
            </div>
          </div>
          <span
            id="headlessui-tabs-panel-5"
            role="tabpanel"
            style={{
              position: "fixed",
              top: "1px",
              left: "1px",
              width: "1px",
              height: "0",
              padding: "0",
              margin: "-1px",
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: "0",
            }}
            aria-labelledby="headlessui-tabs-tab-2"
          ></span>
          <span
            id="headlessui-tabs-panel-6"
            role="tabpanel"
            style={{
              position: "fixed",
              top: "1px",
              left: "1px",
              width: "1px",
              height: "0",
              padding: "0",
              margin: "-1px",
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: "0",
            }}
            aria-labelledby="headlessui-tabs-tab-3"
          ></span>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
