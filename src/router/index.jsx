import { createBrowserRouter } from "react-router-dom";
import routes from "./meta";

const MainRouter = createBrowserRouter(routes, {
    basename: "/",
    future: {
        v7_startTransition: true,
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
    },
});

export default MainRouter;
