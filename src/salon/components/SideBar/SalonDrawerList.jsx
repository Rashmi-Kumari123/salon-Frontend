import {
  AccountBalanceWallet,
  AccountBox,
  Add,
  Category,
  Dashboard,
  Inventory,
  Logout,
  NotificationsNoneOutlined,
  Receipt,
  ShoppingBag,
} from "@mui/icons-material";
import React from "react";
import DrawerList from "../../../Admin/components/DrawerList";

const menu = [
  {
    name: "Dashboard",
    path: "/salon-dashboard",
    icon: <Dashboard className="text-primary-color" />,
    activeIcon: <Dashboard className="text-white" />,
  },
  {
    name: "Bookings",
    path: "/salon-dashboard/bookings",
    icon: <ShoppingBag className="text-primary-color" />,
    activeIcon: <ShoppingBag className="text-white" />,
  },
  {
    name: "Services",
    path: "/salon-dashboard/services",
    icon: <Inventory className="text-primary-color" />,
    activeIcon: <Inventory className="text-white" />,
  },
  {
    name: "Add Services",
    path: "/salon-dashboard/add-services",
    icon: <Add className="text-primary-color" />,
    activeIcon: <Add className="text-white" />,
  },
  {
    name: "Payment",
    path: "/salon-dashboard/payment",
    icon: <AccountBalanceWallet className="text-primary-color" />,
    activeIcon: <AccountBalanceWallet className="text-white" />,
  },
  {
    name: "Transaction",
    path: "/salon-dashboard/transaction",
    icon: <Receipt className="text-primary-color" />,
    activeIcon: <Receipt className="text-white" />,
  },
  {
    name: "Category",
    path: "/salon-dashboard/category",
    icon: <Category className="text-primary-color" />,
    activeIcon: <Category className="text-white" />,
  },
  {
    name: "Notifications",
    path: "/salon-dashboard/notifications",
    icon: <NotificationsNoneOutlined className="text-primary-color" />,
    activeIcon: <NotificationsNoneOutlined className="text-white" />,
  },
];

const menu2 = [
  {
    name: "Account",
    path: "/salon-dashboard/account",
    icon: <AccountBox className="text-primary-color" />,
    activeIcon: <AccountBox className="text-white" />,
  },
  {
    name: "Logout",
    path: "/",
    icon: <Logout className="text-primary-color" />,
    activeIcon: <Logout className="text-white" />,
  },
];

const SalonDrawerList = ({ toggleDrawer }) => {
  return <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer} />;
};

export default SalonDrawerList;
