import { MdSpaceDashboard, MdOutlineSettings } from "react-icons/md";
import { GoProject } from "react-icons/go";
import { FaTasks } from "react-icons/fa";

export const MENU = [
    {
        id: 0,
        icon: <MdSpaceDashboard />,
        title: "Home",
        href: "/",
    },
    {
        id: 1,
        icon: <FaTasks />,
        title: "Tasks",
        href: "/tasks",
    },
    {
        id: 2,
        icon: <GoProject />,
        title: "Projects",
        href: "/projects",
    },
    {
        id: 3,
        icon: <MdOutlineSettings />,
        title: "Settings",
        href: "/settings",
    },
];