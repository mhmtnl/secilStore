import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";
import Image from "next/image";

const LoginLayout = ({ children  } : {children: ReactNode}) => {
  return (
    <div className="flex h-full gap-5 min-h-screen p-5">
      <aside className="w-48 flex flex-col gap-5">
        <div className="w-full h-30 flex justify-center items-center text-xl font-semibold">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
        <Sidebar />
      </aside>
      <div className="flex flex-col flex-1 gap-5 min-w-0">
        <header>
          <Navbar />
        </header>
        <main className="flex-1 overflow-y-auto p-14  min-w-0 rounded-2xl ring-1 ring-gray-500 ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default LoginLayout;
