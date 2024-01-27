// import React from "react";

function ButtonList() {
    const buttonItems = [
        "All",
        "Mixes",
        "Music",
        "Samsung",
        "Playlists",
        "Trailers",
        "Gaming",
        "News",
        "Cricket",
        "Sport Cars",
        "Pop Music",
        "Watched",
    ];

    return (
        buttonItems?.length > 0 && (
            <div className="py-5">
                {buttonItems.map((item) => (
                    <button className="cursor-pointer rounded-full px-3 py-1 mx-1 font-medium hover:bg-[#b9baf9] dark:hover:bg-[#6366F1] bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200">
                        {item}
                    </button>
                ))}
            </div>
        )
    );
}

function Home() {
    return (
        <div className="h-full w-full dark:bg-[#16121C]">
            <div className="w-11/12 m-auto">
                <ButtonList />
                <h2 className="dark:text-white">VideoCard</h2>
            </div>
        </div>
    );
}

export default Home;
