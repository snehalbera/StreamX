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
                    <button className="cursor-pointer rounded-full px-3 py-1 mx-1 font-medium bg-zinc-100 text-zinc-500 hover:text-zinc-800 hover:bg-primary dark:hover:text-primary dark:bg-zinc-900 dark:hover:bg-mutedprimary">
                        {item}
                    </button>
                ))}
            </div>
        )
    );
}

function Home() {
    return (
        <div className="h-full fixed w-full dark:bg-zinc-950">
            <div className="w-11/12 m-auto">
                <ButtonList />
                <div className="h-screen"></div>
                <h2 className="dark:text-zinc-50">VideoCard</h2>
            </div>
        </div>
    );
}

export default Home;
