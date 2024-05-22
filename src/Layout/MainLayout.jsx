import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
