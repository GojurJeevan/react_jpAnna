import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", path: "/home", current: false },
  { name: "Projects", path: "/projects", current: false },
  { name: "Product", path: "/product", current: false },
  { name: "User", path: "/", current: true },
  { name: "Details", path: "/userdetails", current: false },
  { name: "Cart", path: "/cart", current: false },
];
const userNavigation = [
  { name: "Your profile", path: "#" },
  { name: "Settings", path: "#" },
  { name: "Sign out", path: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const cart = useSelector((state) => state.cart);
  const cartCount = Array.isArray(cart) ? cart.length : 0;

  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-gray-800/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* LEFT */}
            <div className="flex items-center">
              <img
                alt="Logo"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="size-8"
              />

              <div className="hidden md:block ml-10">
                <div className="flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="relative rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                    >
                      {item.name}

                      {/* CART COUNT */}
                      {item.name === "Cart" && cartCount > 0 && (
                        <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
                          {cartCount}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="hidden md:block">
              <Menu as="div" className="relative ml-3">
                <MenuButton className="flex rounded-full">
                  <img
                    alt="User"
                    src={user.imageUrl}
                    className="size-8 rounded-full"
                  />
                </MenuButton>

                <MenuItems className="absolute right-0 mt-2 w-48 rounded-md bg-gray-800 py-1">
                  {userNavigation.map((item) => (
                    <MenuItem key={item.name}>
                      <Link
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5"
                      >
                        {item.name}
                      </Link>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </div>

            {/* MOBILE BUTTON */}
            <div className="-mr-2 flex md:hidden">
              <DisclosureButton className="p-2 text-gray-400 hover:text-white">
                <Bars3Icon className="size-6" />
              </DisclosureButton>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <DisclosurePanel className="md:hidden px-4 py-3 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex justify-between rounded-md px-3 py-2 text-base text-gray-300 hover:bg-white/5 hover:text-white"
            >
              {item.name}

              {item.name === "Cart" && cartCount > 0 && (
                <span className="bg-red-600 text-white text-xs rounded-full px-2">
                  {cartCount}
                </span>
              )}
            </Link>
          ))}
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}

