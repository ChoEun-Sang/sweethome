import { lazy, Suspense, type ReactElement } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "~/components/common/Loading";
import App from "~/App";
import Home from "~/routes/Home/Home";
const About = lazy(() => import("~/routes/About/About"));
const Shop = lazy(() => import("~/routes/Shop/Shop"));
const ShopDetail = lazy(() => import("~/routes/Shop/ShopDetail"));
const MyPage = lazy(() => import("~/routes/MyPage/MyPage"));
const Cart = lazy(() => import("~/routes/Cart/Cart"));
const Login = lazy(() => import("~/routes/Login/Login"));
const SignUp = lazy(() => import("~/routes/SignUp/SignUp"));
const Admin = lazy(() => import("~/routes/Admin/Admin"));
const Buy = lazy(() => import("~/routes/Buy/Buy"));
const NotFound = lazy(() => import("~/routes/NotFound/NotFound"));

const SuspenseWrapper = ({ element }: { element: ReactElement }) => (
  <Suspense fallback={<Loading />}>{element}</Suspense>
);

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <SuspenseWrapper element={<About />} />
      },
      {
        path: "/shop",
        element: <SuspenseWrapper element={<Shop />} />
      },
      {
        path: "/shop/:id",
        element: <SuspenseWrapper element={<ShopDetail />} />
      },
      {
        path: "/mypage",
        element: <SuspenseWrapper element={<MyPage />} />
      },
      {
        path: "/cart",
        element: <SuspenseWrapper element={<Cart />} />
      },
      {
        path: "/login",
        element: <SuspenseWrapper element={<Login />} />
      },
      {
        path: "/signup",
        element: <SuspenseWrapper element={<SignUp />} />
      },
      {
        path: "/admin",
        element: <SuspenseWrapper element={<Admin />} />
      },
      {
        path: "/buy",
        element: <SuspenseWrapper element={<Buy />} />
      }
    ]
  },
  {
    path: "/*",
    element: <SuspenseWrapper element={<NotFound />} />
  }
]);
