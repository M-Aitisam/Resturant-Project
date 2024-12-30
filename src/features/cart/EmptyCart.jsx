import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="px-4 py-3">
      <Link
        to="/menu"
        className="rounded-md px-3 py-2 font-medium text-orange-600 transition-all duration-300 ease-in-out hover:bg-orange-600 hover:text-white"
      >
        &larr; Back to menu
      </Link>
      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
};

export default EmptyCart;
