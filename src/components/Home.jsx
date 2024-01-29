import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API, YOUTUBE_RESPONSE } from "./../app/constants";
import { useSelector } from "react-redux";

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
                    <button
                        key={item}
                        className="cursor-pointer rounded-full px-3 py-1 mx-1 font-medium bg-zinc-100 text-zinc-500 hover:text-zinc-800 hover:bg-primary dark:hover:text-primary dark:bg-zinc-900 dark:hover:bg-mutedprimary">
                        {item}
                    </button>
                ))}
            </div>
        )
    );
}

function VideoCard({ info }) {
    console.log(info);

    return (
        <div className="w-4/12">
            <div className="m-2">
                <img
                    src={info?.snippet?.thumbnails?.medium?.url}
                    alt="video_thumbnail"
                    className="rounded-xl w-full bg-cover"
                />
                <h3 className="font-bold text-zinc-800 dark:text-zinc-200 pt-3 pb-px">
                    {info?.snippet?.title?.length > 75
                        ? info?.snippet?.title?.substring(0, 75) + "..."
                        : info?.snippet?.title}
                </h3>
                <p className="text-zinc-500 text-sm">{info?.snippet?.channelTitle}</p>
                <p className="text-zinc-500 text-sm">
                    {info?.statistics?.viewCount > 999
                        ? (info?.statistics?.viewCount / 1000).toFixed(1) + "K"
                        : info?.statistics?.viewCount}{" "}
                    views
                </p>
            </div>
        </div>
    );
}

function Home() {
    const isSidebarExpanded = useSelector((store) => store.app.isSidebarOpen);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        setVideos(YOUTUBE_RESPONSE.items);
        // getVideos();
    }, []);

    const getVideos = async () => {
        const AUTH_KEY = String(import.meta.env.VITE_YOUTUBE_AUTH_KEY);
        const response = await fetch(YOUTUBE_VIDEOS_API + AUTH_KEY);
        const data = await response.json();
        setVideos(data?.items);
        console.log(JSON.stringify(data));
    };

    return (
        <div
            className={`h-full w-full overflow-x-hidden dark:bg-zinc-950 ${
                isSidebarExpanded ? " fixed contrast-50" : ""
            }`}>
            <div className="w-11/12 m-auto">
                <ButtonList />
                <div className="flex flex-wrap">
                    {videos?.length > 0 && videos.map((video) => <VideoCard key={video.id} info={video} />)}
                </div>
            </div>
        </div>
    );
}

export default Home;
