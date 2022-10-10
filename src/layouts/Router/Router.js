import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../components/Blogs/Blogs";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Quiz from "../../components/Quiz/Quiz";
import Statistics from "../../components/Statistics/Statistics";
import Topics from "../../components/Topics/Topics";
import Main from "../Main/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
        element: <Topics />,
      },
      {
        path: "/topics",
        loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
        element: <Topics />,
      },
      {
        path: "/quiz/:id",
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element: <Quiz />,
      },
      {
        path: "/statistics",
        loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
        element: <Statistics />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);
