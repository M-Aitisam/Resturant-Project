import OrderItem from "./OrderItem";

import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import UpdateOrder from "./UpdateOrder";
import { useEffect } from "react";

const Order = () => {
  const order = useLoaderData();
  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher],
  );

  const isLoading = fetcher.state === "loading";

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  if (isLoading)
    return (
      <>
        <div className="flex items-center">
          <div className="flex-shrink flex-grow">
            <div className="mb-2.5 h-6 w-1/2 rounded-full bg-gray-300 "></div>
            <div className="mb-6 h-2 w-2/3 rounded-full bg-gray-300 "></div>
          </div>
          <div className="flex-shrink flex-grow flex items-center gap-2 justify-end">
            <div className="mb-2.5 h-8 w-24 rounded-lg bg-gray-300 "></div>
            <div className="mb-2.5 h-8 w-24 rounded-lg bg-gray-300 "></div>
          </div>
        </div>
        <div
          role="status"
          className="animate-pulse space-y-4 divide-y divide-gray-200 rounded border border-gray-200 p-4 shadow md:p-6 "
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 "></div>
              <div className="h-2 w-32 rounded-full bg-gray-200 "></div>
            </div>
            <div className="h-2.5 w-12 rounded-full bg-gray-300 "></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 "></div>
              <div className="h-2 w-32 rounded-full bg-gray-200 "></div>
            </div>
            <div className="h-2.5 w-12 rounded-full bg-gray-300 "></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 "></div>
              <div className="h-2 w-32 rounded-full bg-gray-200 "></div>
            </div>
            <div className="h-2.5 w-12 rounded-full bg-gray-300 "></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 "></div>
              <div className="h-2 w-32 rounded-full bg-gray-200 "></div>
            </div>
            <div className="h-2.5 w-12 rounded-full bg-gray-300 "></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 "></div>
              <div className="h-2 w-32 rounded-full bg-gray-200 "></div>
            </div>
            <div className="h-2.5 w-12 rounded-full bg-gray-300 "></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </>
    );

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="dive-stone-200 divide-y border-b border-t">
        {cart.map((item) => (
          <OrderItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>

      {!priority && <UpdateOrder order={order} />}
    </div>
  );
};

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
