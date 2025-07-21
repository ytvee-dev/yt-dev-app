import Service from "../pages/Service";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import NotFound from "../pages/NotFound";

export const paths = {
    HOME: {
        id: "Home",
        path: "/",
        label: "Главная",
    },
    SERVICE: {
        id: "Service",
        path: "/service",
        label: "Услуги",
    },
    CONTACTS: {
        id: "Contacts",
        path: "/contacts",
        label: "Контакты",
    },
    NOT_FOUND: {
        id: "notFound",
        path: "*",
        label: "notFound",
    },
};

const routes = [
    {
        ...paths.HOME,
        element: <About />,
    },
    {
        ...paths.SERVICE,
        element: <Service />,
    },
    {
        ...paths.CONTACTS,
        element: <Contacts />,
    },
    {
        ...paths.NOT_FOUND,
        element: <NotFound />,
    },
];

export default routes;
