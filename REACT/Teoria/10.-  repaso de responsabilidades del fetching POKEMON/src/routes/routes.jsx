import App from "../App";
import { Protected } from "../components";
import {
  About,
  AboutEmpresa,
  ById,
  Gallery,
  Home,
  NotFound,
  Login,
  Pokemon,
  ByIdPokemon,
} from "../pages";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Protected>
            <Home />
          </Protected>
        ),
      },
      {
        path: "/gallery",
        element: (
          <Protected>
            <Gallery />
          </Protected>
        ),
      },
      {
        path: "/gallery/character/:id",
        element: (
          <Protected>
            <ById />
          </Protected>
        ),
      },
      {
        path: "/pokemon",
        element: (
          <Protected>
            <Pokemon />
          </Protected>
        ),
      },
      {
        path: "/pokemon/:id",
        element: (
          <Protected>
            <ByIdPokemon />
          </Protected>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: (
          <Protected>
            <About />
          </Protected>
        ),
        children: [
          {
            path: "/about/empresa",
            element: (
              <Protected>
                <AboutEmpresa />
              </Protected>
            ),
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
