import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

const AppLayout = () => {
  // with useNavigation hook we will able to see whether the application is currently idle, loading, or submitting
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />

      {/* overflow-auto will only show them if scrolling is necessary. */}
      <div className="overflow-auto">
        <main className="max-w-3xl mx-auto">
          {/* render the content of the nested route inside another route */}
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
