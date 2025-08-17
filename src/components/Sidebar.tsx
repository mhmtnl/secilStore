"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillProduct, AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { PiShoppingCartLight } from "react-icons/pi";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [touched, setTouched] = useState(false);
  useEffect(() => {
    const isInsideProducts = pathname.startsWith("/products/");

    if (isInsideProducts && !touched) {
      setIsProductOpen(true);
    }

    if (!isInsideProducts) {
      setIsProductOpen(false);
      setTouched(false);
    }
  }, [pathname]);

  const toggleProducts = () => {
    setIsProductOpen(!isProductOpen);
    setTouched(true);
  };

  const linkClass = (path: string) =>
    pathname === path
      ? "text-gray-800 flex font-semibold items-center gap-2"
      : "text-gray-600 hover:text-gray-800 flex items-center gap-2";

  return (
    <div className="flex flex-col ring-1 ring-gray-500 rounded-2xl p-4 gap-6 flex-1 overflow-auto">
      <div>
        <h3 className="text-xs text-gray-500 uppercase tracking-wide mb-2">
          Menu
        </h3>
        <nav className="flex flex-col space-y-3 p-2">
          <Link href="/" className={linkClass("/")}>
            <GoHome size={20} />
            <span>Dashboard</span>
          </Link>
          <div className="flex flex-col space-y-1">
            <button
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 focus:outline-none w-full hover:cursor-pointer"
              onClick={toggleProducts}
            >
              <AiFillProduct size={20} />
              <span>Ürünler</span>
              {isProductOpen ? (
                <AiOutlineDown size={14} className="ml-auto" />
              ) : (
                <AiOutlineRight size={14} className="ml-auto" />
              )}
            </button>
            {isProductOpen && (
              <div className="ml-6 flex flex-col space-y-2 mt-2 text-md">
                <Link
                  href="/products/one"
                  className={linkClass("/products/one") }
                >
                  <span>Ürünler 1</span>
                </Link>
                <Link
                  href="/products/two"
                  className={linkClass("/products/two")}
                >
                  <span>Ürünler 2</span>
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
      <div>
        <h3 className="text-xs text-gray-500 uppercase tracking-wide mb-2">
          Satış
        </h3>
        <nav className="flex flex-col space-y-3 p-2">
          <Link href="/collections" className={linkClass("/collections")}>
            <PiShoppingCartLight size={20} />
            <span>Koleksiyon</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
