import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Menu from "./Menu";
import Cookies from "js-cookie";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");

  const routes = [
    { name: "Login", path: "/" },
    { name: "Dashboards", path: "/dashboards" },
  ];

  useEffect(() => {
    const token = Cookies.get("token");
    const username = Cookies.get("username");
    if (token) {
      setToken(token);
    }
    if (username) {
      setUsername(username);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("username");
    window.location.href = "/";
  };

  return (
    <>
      <div
        className={`flex h-16 items-center justify-center bg-background-header`}
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 100 }}
      >
        <Menu />
        <div className={`${token && "ml-32"} w-full text-center`}>
          <button>
            <Link href="/">
              <div className="flex items-center">
                <Image
                  className="invert"
                  src="/weg-icon.svg"
                  width={90}
                  height={10}
                  alt="weg-icon"
                />
                <span className="ml-2 text-lg font-bold text-white">
                  DASHBOARDS
                </span>
              </div>
            </Link>
          </button>
        </div>
        {token && (
          <div className="ml-auto flex items-center pr-2">
            <FaUserCircle className="mr-2 text-white" size={20} />
            <span className="mr-4 text-white">{username}</span>
            <button
              className="flex items-center justify-center rounded-md bg-red-500 px-4 py-1.5 text-base font-bold text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
              onClick={handleLogout}
            >
              <FaSignOutAlt className="mr-2" size={18} />
              Sair
            </button>
          </div>
        )}
      </div>
      <hr className="mt-16 border-t border-gray-600" />
      <div
        className="flex h-10 items-center justify-center
       bg-background-header text-gray-400"
      >
        {routes.map((route) => (
          <Link key={route.path} href={route.path}>
            <span
              className={`mx-2 cursor-pointer font-bold ${
                router.pathname === route.path ? "text-gray-200" : ""
              }`}
            >
              {route.name}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Header;
