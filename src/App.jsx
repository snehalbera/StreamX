import { Header, MainContainer, VideoContainer, WatchPage } from "./components";
import { Provider } from "react-redux";
import store from "./app/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <MainContainer />,
            children: [
                { path: "/", element: <VideoContainer /> },
                { path: "/watch", element: <WatchPage /> },
            ],
        },
    ]);

    return (
        <Provider store={store}>
            <div className="dark">
                <Header />
                <RouterProvider router={appRouter} />
            </div>
        </Provider>
    );
}

export default App;
