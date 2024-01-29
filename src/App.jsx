import { Provider } from "react-redux";
import store from "./app/store";
import { Header, Home } from "./components";

function App() {
    return (
        <Provider store={store}>
            <div className="">
                <Header />
                <Home />
            </div>
        </Provider>
    );
}

export default App;
