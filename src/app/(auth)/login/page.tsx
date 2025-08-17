"use client";

import { signIn } from "next-auth/react";
import React, { FormEvent, useState } from "react";
import Image from "next/image";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await signIn("credentials", { username, password });
  };

  return (
    <div className="w-full h-full flex">
      <div className="w-2/5 mx-auto my-auto h-4/5 ring ring-gray-800 rounded-xl flex flex-col items-center justify-center">
        <div className="w-1/2 h-1/3 flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={200}
            height={200}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
        <form onSubmit={handleSubmit} className="w-2/3 flex flex-col gap-6">
          <div className="relative">
            <input
              type="email"
              id="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 pt-5 pb-2 border border-gray-400 rounded-md focus:outline-none focus:border-gray-800 peer"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-2 text-xs text-gray-800 bg-white rounded-lg px-1 peer-focus:text-gray-800 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-200"
            >
              E-Posta
            </label>
          </div> 
          <div className="relative">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 pt-5 pb-2 border border-gray-400 rounded-md focus:outline-none focus:border-gray-800 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute left-3 top-2 text-xs text-gray-600 bg-white px-1 rounded-lg peer-focus:text-gray-800 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-200"
            >
              Şifre
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              className="accent-gray-800 w-4 h-4"
            />
            <label htmlFor="remember" className="text-sm text-gray-800">
              Beni hatırla
            </label>
          </div>
          <button
            type="submit"
            className="bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition cursor-pointer"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
