import {
  UsersIcon,
  CoinsIcon,
  CreditCardIcon,
  LayoutDashboardIcon,
  Undo2Icon,
} from "lucide-react";

export const adminNavItems = [
  { href: "/admin", icon: LayoutDashboardIcon, label: "داشبورد" },
  { href: "/admin/users", icon: UsersIcon, label: "کاربران" },
  { href: "/admin/products", icon: CoinsIcon, label: "کریپتوها" },
  { href: "/admin/payments", icon: CreditCardIcon, label: "سفارشات" },
  { href: "/", icon: Undo2Icon, label: "برگشت به خانه" },
];
