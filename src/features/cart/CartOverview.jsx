import { useSelector } from "react-redux";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { LuShoppingBag } from "react-icons/lu";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";

const CartOverview = () => {
  const total = useSelector(getTotalCartPrice);
  const quantity = useSelector(getTotalCartQuantity);

  return (
    <>
      {total > 0 && (
        <div className="flex flex-col max-sm:hidden">
          <div className="text-right text-xs opacity-50">Total</div>
          <div className="-mt-1 font-medium">{formatCurrency(total)}</div>
        </div>
      )}
      <Link
        to="/cart"
        className="relative rounded-full border p-2 text-gray-900 transition-all duration-500 ease-in-out hover:bg-orange-600 hover:text-white"
      >
        <LuShoppingBag className="text-2xl" />
        {quantity > 0 && (
          <div className="absolute -right-1 -top-1 rounded-full bg-orange-600 px-1.5 text-xs text-white">
            {quantity}
          </div>
        )}
      </Link>
    </>
  );
};

export default CartOverview;
