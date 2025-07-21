import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import MainRouter from "../../router";
import "../../domains/Theme/style.css";
import "./style.css";

const App = () => {
    const appTheme = useSelector((state) => state.application.currentTheme);

    return (
        <div className={`app ${appTheme}`}>
            <RouterProvider
                router={MainRouter}
                future={{
                    v7_startTransition: true,
                }}
            />
        </div>
    );
};

export default App;
