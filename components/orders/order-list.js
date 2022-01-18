import { useState, useContext, useEffect } from "react";
import { AuthContext } from "@/lib/auth";
import { getMyOrders } from "@/lib/firebaseClient";
import OrderCard from "./order-card";
import NoOrders from "./no-orders";

export default function OrderList() {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = getMyOrders({
      email: user.email,
      callback: setOrders,
    });

    return unsubscribe;
  }, []);

  return (
    <div className='flex-1 md:w-full md:order-2'>
      <section className='shadow-lg backdrop-filter backdrop-blur-xl flex flex-col p-5 space-y-2 text-white'>
        {orders.length ? (
          <>
            <header>
              <h2 className='text-2xl font-semibold'>Historial de compras</h2>
              <p className='text-md'>Ultimas pedidos realizados</p>
            </header>

            <div className='flex flex-col divide-y-1 divide-white divide-dashed'>
              {orders.map(({ createdAt, order, uidOrder, status }) => (
                <OrderCard
                  order={order}
                  createdAt={createdAt}
                  key={uidOrder}
                  status={status}
                />
              ))}
            </div>
          </>
        ) : (
          <NoOrders />
        )}
      </section>
    </div>
  );
}
