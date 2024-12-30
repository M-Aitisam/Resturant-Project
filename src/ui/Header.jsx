import { LuPizza } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

import { Link } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="mx-auto mb-4 flex max-w-screen-xl items-center justify-between p-4">
      <Link to="/" className="flex w-16 items-center gap-2 sm:w-1/4">
        <LuPizza className="h-8 w-8 text-orange-600" />
        <div className="hidden sm:block">
          <h1 className="-mb-1 text-2xl font-bold">React-Restaurant</h1>
          <Username />
        </div>
      </Link>
      <div className="w-full text-center sm:w-1/2">
        <SearchOrder />
      </div>
      <div className="flex w-16 items-center justify-end gap-2 sm:w-1/4">
        <CartOverview />
        <a
          href="https://github.com/M-Aitisam"
          className="relative rounded-full border p-2 text-gray-900 transition-all duration-500 ease-in-out hover:bg-gray-800 hover:text-white"
        >
          <FaGithub className="text-2xl" />
        </a>
      </div>
    </header>
  );
};

export default Header;
