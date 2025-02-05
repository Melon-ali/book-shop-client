
import OrderHistory from "@/pages/user/MyOrders";
import UserDashboard from "../pages/user/UserDashboard";
import { TUserPaths } from "../types";

const userPaths: TUserPaths[] = [
  {
    name: "My Profile",
    path: "dashboard",
    element: <UserDashboard />,
  },
  {
    name: "My Orders",
    path: "order",
    element: <OrderHistory />,
  }
];

export default userPaths;
