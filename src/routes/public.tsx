import {Filter} from "@/features/filter/routes/Filter";
import {Filters} from "@/features/filter/routes/Filters";

export const publicRoutes = [
  {
    path: '/',
    element: <Filters/>,
  },
  {
    path: '/filter/:id',
    element: <Filter/>,
  }
];
