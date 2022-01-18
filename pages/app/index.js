import { Dashboard } from "@/components/layouts";
import { OrderList } from "@/components/orders";
import { UserInfo } from "@/components/user";

export default function Index() {
  return (
    <Dashboard>
      <div className='flex flex-row md:flex-col max-w-full mx-auto justify-center items-start space-x-5 md:space-x-0 md:space-y-5'>
        <OrderList />
        <UserInfo />
      </div>
    </Dashboard>
  );
}
