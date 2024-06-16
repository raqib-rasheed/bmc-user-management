import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import "./index.scss";

export default function Layout() {
  const location = useLocation();
  const isCreatorPageActive = location.pathname !== "/creators";

  return (
    <main>
      <Header showSearchAndAuthActions={isCreatorPageActive} />
      <Outlet />
    </main>
  );
}
