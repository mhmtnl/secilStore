"use client";

import React, { useState } from "react";
import {
  FiSun,
  FiMoon,
  FiGlobe,
  FiBell,
  FiMessageSquare,
} from "react-icons/fi";
import { LuSettings2 } from "react-icons/lu";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // a href click fonskyionlarında title ve subtitle stateleri hep güncellenecek

  return (
    <header className="bg-white text-gray-900 flex justify-between items-center px-10 py-4 h-30 rounded-2xl ring-1 ring-gray-500">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold">Title</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Subtitle</div>
      </div>
      <div className="flex items-center gap-6">
        <div
          onClick={toggleDarkMode}
          role="switch"
          aria-checked={darkMode}
          tabIndex={0}
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <FiSun
            size={20}
            className={darkMode ? "text-gray-500" : "text-sky-700"}
          />
          <div
            className={`relative w-12 h-6 rounded-full transition-colors ${
              darkMode ? "bg-gray-600" : "bg-gray-300"
            }`}
          >
            <div
              className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                darkMode ? "translate-x-6" : "translate-x-0.5"
              }`}
            ></div>
          </div>
          <FiMoon
            size={20}
            className={darkMode ? "text-sky-700" : "text-gray-500"}
          />
        </div>

        <button
          className="p-2 rounded cursor-pointer"
          aria-label="Haberler"
          type="button"
        >
          <FiGlobe
            size={20}
            className="transition-all hover:font-semibold hover:scale-110"
          />
        </button>
        <button
          className="relative p-2 rounded cursor-pointer"
          aria-label="Bildirimler"
          type="button"
        >
          <FiBell
            size={20}
            className="transition-all hover:font-semibold hover:scale-110"
          />
          <span className="absolute -top-1 -right-1 bg-sky-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ring-1 ring-white">
            12
          </span>
        </button>
        <button
          className="p-2 rounded cursor-pointer"
          aria-label="Mesajlar"
          type="button"
        >
          <FiMessageSquare
            size={20}
            className="transition-all hover:font-semibold hover:scale-110"
          />
        </button>
        <button
          className="p-2 rounded cursor-pointer"
          aria-label="Filtreler"
          type="button"
        >
          <LuSettings2
            size={20}
            className="transition-all hover:font-semibold hover:scale-110"
          />
        </button>
        <button
          className="w-10 h-10 rounded-full bg-gray-400 dark:bg-gray-600 cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-sky-700"
          aria-label="Profil"
          type="button"
        >
          <span className="block text-center leading-8 text-white font-semibold select-none">
            A
          </span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
