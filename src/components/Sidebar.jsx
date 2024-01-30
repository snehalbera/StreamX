import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../app/appSlice";
import { Link } from "react-router-dom";

function Section({ section }) {
    return (
        <div>
            {section?.heading && (
                <h2 className="pl-5 py-1 mb-3 font-semibold text-zinc-600 dark:text-zinc-400">{section?.heading}</h2>
            )}
            {section?.menuItems?.length > 0 && (
                <div className="flex flex-col align-baseline gap-4">
                    {section.menuItems.map((menu) => (
                        <Link to="/">
                            <div
                                key={menu.title}
                                className="flex hover:cursor-pointer pl-5 gap-5 text-zinc-500 hover:text-zinc-800 dark:hover:text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 25 20"
                                    fill="currentColor"
                                    className="w-5 h-5">
                                    <path fillRule="evenodd" d={menu.iconPath} clipRule="evenodd" />
                                </svg>
                                <h3>{menu.title}</h3>
                            </div>
                        </Link>
                    ))}
                    <hr className="border-zinc-200 dark:border-zinc-800" />
                </div>
            )}
        </div>
    );
}

function Sidebar() {
    const sidebarMenu = [
        {
            heading: "",
            menuItems: [
                {
                    title: "Home",
                    iconPath:
                        "M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z",
                },
                {
                    title: "Shorts",
                    iconPath:
                        "M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z",
                },
                {
                    title: "Subscription",
                    iconPath:
                        "M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z",
                },
            ],
        },
        {
            heading: "",
            menuItems: [
                {
                    title: "Live",
                    iconPath:
                        "M5.636 4.575a.75.75 0 0 1 0 1.061 9 9 0 0 0 0 12.728.75.75 0 1 1-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 0 1 1.06 0Zm12.728 0a.75.75 0 0 1 1.06 0c4.101 4.1 4.101 10.75 0 14.85a.75.75 0 1 1-1.06-1.061 9 9 0 0 0 0-12.728.75.75 0 0 1 0-1.06ZM7.757 6.697a.75.75 0 0 1 0 1.06 6 6 0 0 0 0 8.486.75.75 0 0 1-1.06 1.06 7.5 7.5 0 0 1 0-10.606.75.75 0 0 1 1.06 0Zm8.486 0a.75.75 0 0 1 1.06 0 7.5 7.5 0 0 1 0 10.606.75.75 0 0 1-1.06-1.06 6 6 0 0 0 0-8.486.75.75 0 0 1 0-1.06ZM9.879 8.818a.75.75 0 0 1 0 1.06 3 3 0 0 0 0 4.243.75.75 0 1 1-1.061 1.061 4.5 4.5 0 0 1 0-6.364.75.75 0 0 1 1.06 0Zm4.242 0a.75.75 0 0 1 1.061 0 4.5 4.5 0 0 1 0 6.364.75.75 0 0 1-1.06-1.06 3 3 0 0 0 0-4.243.75.75 0 0 1 0-1.061ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z",
                },
                {
                    title: "Trending",
                    iconPath:
                        "M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z",
                },
            ],
        },
        {
            heading: "Explore",
            menuItems: [
                {
                    title: "Music",
                    iconPath:
                        "M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z",
                },
                {
                    title: "Movies",
                    iconPath:
                        "M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z",
                },
                {
                    title: "Shopping",
                    iconPath:
                        "M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z",
                },
            ],
        },
    ];

    const isSidebarExpanded = useSelector((store) => store.app.isSidebarOpen);
    const dispatch = useDispatch();
    const toggleHandler = () => {
        dispatch(toggleSidebar());
    };

    return isSidebarExpanded ? (
        <div className="w-screen">
            <div className="w-60 h-screen absolute z-10 top-0 bg-white dark:bg-zinc-950 dark:text-zinc-500">
                <div className="flex flex-col h-full">
                    <div className="flex gap-5 align-baseline py-3 border-b border-solid border-zinc-200 dark:border-zinc-800">
                        <span className="pl-4 hover:cursor-pointer" onClick={() => toggleHandler()}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 18 24"
                                fill="currentColor"
                                className="w-6 h-8 dark:fill-zinc-50">
                                <path
                                    fillRule="evenodd"
                                    d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        <span className="hover:cursor-pointer mb-px dark:mb-0.5">
                            <h1 className="text-2xl font-bold dark:text-white">
                                Stream<span className="text-primary">X</span>
                            </h1>
                        </span>
                    </div>
                    <div className="flex flex-col gap-3 h-full pt-3 border-r border-solid border-zinc-200 dark:border-none">
                        {sidebarMenu?.length > 0 &&
                            sidebarMenu.map((section, index) => <Section key={index} section={section} />)}
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}

export default Sidebar;
