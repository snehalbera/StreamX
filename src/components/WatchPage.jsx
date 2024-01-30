import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../app/appSlice";
import { useSearchParams } from "react-router-dom";

function WatchPage() {
    let [searchParams, setSearchParams] = useSearchParams();
    const VIDEO_ID = searchParams.get("v");

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeSidebar());
    }, []);

    return (
        <div className="min-h-screen dark:bg-zinc-950">
            <div className="w-11/12 mx-auto grid grid-flow-col col-span-12">
                <div className="col-span-8 my-2">
                    <div className="my-2">
                        <iframe
                            src={"https://www.youtube.com/embed/" + VIDEO_ID}
                            frameBorder="0"
                            className="rounded-2xl w-full h-96"
                            allowFullScreen></iframe>
                    </div>
                    <div></div>
                </div>
                <div className="col-span-4"></div>
            </div>
        </div>
    );
}

export default WatchPage;
