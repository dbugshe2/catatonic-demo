import {
  HomeIcon as SolidHomeIcon,
  PlusCircleIcon as SolidPlusCircleIcon,
} from "@heroicons/react/solid";
import {
  HomeIcon as OutlineHomeIcon,
  PlusCircleIcon as OutlinePlusCircleIcon,
} from "@heroicons/react/outline";
import Home from "views/Home";
import Upload from "views/Upload";
import NotFound from "views/NotFound";
import Main from "layouts/Main";

const indexRoutes = [
  {
    path: "/",
    title: "Home - Catatonic",
    element: <Main />,
    children: [
      {
        index: true,
        label: "Home",
        path: "",
        element: <Home />,
        inactiveIcon: <OutlineHomeIcon height={32} width={32} />,
        activeIcon: <SolidHomeIcon height={32} width={32} />,
      },
      {
        path: "upload",
        title: "Upload a Cat Image - Catatonic",
        label: "Upload",
        inactiveIcon: <OutlinePlusCircleIcon height={32} width={32} />,
        activeIcon: <SolidPlusCircleIcon height={32} width={32} />,
        element: <Upload />,
      },
    ],
  },
  { path: "*", element: <NotFound />, invisible: true, children: [] },
];

export default indexRoutes;
