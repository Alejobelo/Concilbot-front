// compoenets
import Home from '../pages/home';
import Report from '../pages/report';
import History from '../pages/history';

export const routes = [
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "report",
          element: <Report />,
        },
        {
          path: "history",
          element: <History />,
        },
      ],
    },
    
  ]