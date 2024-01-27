// import React from "react";

function Header() {
    return (
        <header className="dark:bg-[#16121C] border-b border-solid border-zinc-200 dark:border-zinc-800">
            <nav className="flex py-3 justify-between">
                <div className="flex w-60 gap-5 align-baseline">
                    <span className="pl-4 hover:cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 24"
                            fill="currentColor"
                            className="w-6 h-8 dark:fill-zinc-500">
                            <path
                                fillRule="evenodd"
                                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                    <span className="hover:cursor-pointer">
                        <h1 className="text-2xl font-bold dark:text-white">
                            Stream<span className="text-amber-300">X</span>
                        </h1>
                    </span>
                </div>
                <div className="flex align-baseline justify-self-center">
                    <input
                        type="text"
                        name="search-box"
                        id="search-box"
                        className="py-1 px-3 w-96 outline-none rounded-l-md border border-solid border-zinc-400 dark:bg-zinc-800 dark:text-zinc-200 dark:border-none"
                        placeholder="Search"
                    />
                    <span className="rounded-r-md px-2 border border-solid border-zinc-400 dark:bg-zinc-800 dark:border-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 28 24"
                            fill="currentColor"
                            className="w-6 h-8 dark:fill-zinc-500 hover:cursor-pointer dark:hover:fill-zinc-200">
                            <path
                                fillRule="evenodd"
                                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </div>
                <div className="w-60"></div>
            </nav>
        </header>
    );
}

export default Header;
