import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import DetailsOne from "../components/ProjectDetails/DetailsOne";
import DetailsThree from "../components/ProjectDetails/DetailsThree";
import DetailsTwo from "../components/ProjectDetails/DetailsTwo";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/project-1",
    element: <DetailsOne></DetailsOne>,
  },
  {
    path: "/project-2",
    element: <DetailsTwo></DetailsTwo>,
  },
  {
    path: "/project-3",
    element: <DetailsThree></DetailsThree>,
  },
  {
    path: "/blogs",
    element: <Blogs></Blogs>,
  },
]);
