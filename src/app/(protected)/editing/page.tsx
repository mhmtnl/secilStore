"use client";

import React, { useState, useEffect } from "react";
import FilterPanel, { Filters } from "@/components/FilterPanel";
import { MdInfoOutline } from "react-icons/md";
import { LuColumns3, LuColumns4 } from "react-icons/lu";
import { PiSquaresFour } from "react-icons/pi";
import { BiSquareRounded } from "react-icons/bi";
import { fallbackProducts } from "@/constants/FallbackData";  
import type { Product } from "@/constants/FallbackData";  
 

const EditPage = () => {
  const [filters, setFilters] = useState<Filters>({});
  const [workingProducts, setWorkingProducts] = useState<Product[]>([]);
  const [removeCandidate, setRemoveCandidate] = useState<Product | null>(null);
  const [resetAllConfirmOpen, setResetAllConfirmOpen] = useState(false);
  const [notification, setNotification] = useState<string>("");
  const [columns, setColumns] = useState(4);
  const [dialogOpen, setDialogOpen] = useState(false);

  async function getProducts() {
    try {
      const res = await fetch(
        "https://maestro-api-dev.secil.biz/Collection/72/GetProductsForConstants",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
          },
          body: JSON.stringify({}),
        }
      );

      if (!res.ok) {
        setWorkingProducts(fallbackProducts);
        const errorText = await res.text();
        throw new Error(
          `HTTP error! status: ${res.status}, message: ${errorText}`
        );
      }

      const takenData = await res.json();
      setWorkingProducts(takenData.data.data);
    } catch (error) {
      console.error("Ürünler alınırken hata oluştu:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = workingProducts.filter((p) => {
    if (filters.code && !p.productCode.includes(filters.code)) return false;
    if (filters.name && !p.name.includes(filters.name)) return false;
    return true;
  });
  const pinnedProducts = workingProducts.filter((p) => p.outOfStock);

  const toggleSelect = (url: string) => {
    setWorkingProducts((prev) =>
      prev.map((p) =>
        p.imageUrl === url ? { ...p, outOfStock: !p.outOfStock } : p
      )
    );
  };

  const clearFilters = () => {
    setFilters({ code: null, name: null });
  };

  const applyFilters = (newFilters: Filters) => {
    setFilters(newFilters);
    setDialogOpen(false);
  };

  const removeFilter = (key: keyof Filters) => {
    setFilters((prev: any) => {
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });
  };

  const confirmRemove = (product: Product) => {
    console.log(workingProducts);
    setRemoveCandidate(product);
  };

  const onRemoveConfirmed = () => {
    if (removeCandidate) {
      setWorkingProducts((prev) =>
        prev.map((p) =>
          p.imageUrl === removeCandidate.imageUrl
            ? { ...p, outOfStock: false }
            : p
        )
      );
      setNotification(`"${removeCandidate.name}" sabitlerden çıkarıldı.`);
      setRemoveCandidate(null);
      setTimeout(() => setNotification(""), 3000);
    }
  };

  const onRemoveCancelled = () => {
    setRemoveCandidate(null);
  };

  const onResetAllConfirmed = () => {
    setWorkingProducts((prev) =>
      prev.map((p) => ({ ...p, outOfStock: false }))
    );
    setNotification("Tüm sabit ürünler kaldırıldı.");
    setResetAllConfirmOpen(false);
    setTimeout(() => setNotification(""), 3000);
  };

  const onResetAllCancelled = () => {
    setResetAllConfirmOpen(false);
  };

  const renderFilterKeywords = () => {
    if (!filters || Object.keys(filters).length === 0) {
      return (
        <span className="text-gray-400 text-sm my-auto ms-5">
          Henüz filtre uygulanmadı.
        </span>
      );
    }

    const keywords: React.ReactNode[] = [];

    if (filters.name)
      keywords.push(
        <div
          key="year"
          className="bg-sky-200 px-2 py-1 rounded-xl text-sm flex items-center gap-1"
        >
          Adı: {filters.name}
          <button
            onClick={() => removeFilter("name")}
            className="text-sky-700 hover:text-sky-900 font-bold"
          >
            ×
          </button>
        </div>
      );

    if (filters.code)
      keywords.push(
        <div
          key="code"
          className="bg-sky-200 px-2 py-1 rounded-xl text-sm flex items-center gap-1"
        >
          Kod: {filters.code}
          <button
            onClick={() => removeFilter("code")}
            className="text-sky-700 hover:text-sky-900 font-bold"
          >
            ×
          </button>
        </div>
      );
    return keywords;
  };

  return (
    <div className="h-full w-full overflow-hidden flex flex-col relative">
      {notification && (
        <div
          className={`fixed top-12 ${
            notification.includes("tüm") ? "right-8" : "right-6"
          } text-sm bg-sky-700 text-white px-4 py-2 rounded-2xl z-60 shadow-xl/60`}
        >
          {notification}
        </div>
      )}

      <div className="flex flex-col overflow-hidden gap-5">
        <div className="flex w-full py-1 px-1 border-gray-300 gap-4">
          <div className="w-3/4 flex flex-wrap gap-2 ring-1 ring-gray-800 p-1 rounded-md h-10">
            {renderFilterKeywords()}
          </div>
          <div className="w-1/4 flex justify-between items-center gap-2 h-10 text-xs md:text-md">
            <button
              onClick={clearFilters}
              className="px-4 h-full w-1/2 border rounded-md hover:bg-gray-200 cursor-pointer"
            >
              Filtreleri Temizle
            </button>
            <button
              onClick={() => setDialogOpen(true)}
              className="px-4 h-full w-1/2 border rounded-md  bg-sky-700 text-white hover:bg-sky-800 cursor-pointer"
            >
              Filtrele
            </button>
          </div>
        </div>

        <div className="flex gap-5 overflow-hidden">
          <div className="w-1/2 h-full flex flex-col gap-3 p-1">
            <h2 className="text-lg font-semibold">Koleksiyon Ürünleri</h2>
            <div className="grid grid-cols-4 gap-5 flex-1 overflow-auto rounded-2xl ring ring-gray-800 p-5">
              {filteredProducts.map((product) => (
                <div
                  key={product.imageUrl}
                  className="relative col-span-1 h-60 rounded-lg shadow-md border-gray-500 p-2 border-2 bg-white overflow-hidden"
                >
                  <div className="h-3/4 bg-gray-200 flex items-center justify-center">
                    <img
                      src={product.imageUrl}
                      alt={product.name || "Ürün görseli"}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="h-1/4 p-1 justify-between">
                    <div className="flex flex-col gap-0.5 items-center w-full ">
                      <span className="font-medium text-sm text-gray-900 w-full leading-4 text-center line-clamp-2">
                        {product.name}
                      </span>
                      <span className="text-xs text-gray-500 lowercase">
                        {product.productCode}
                      </span>
                    </div>
                  </div>
                  {product.outOfStock ? (
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] flex items-center justify-center z-10 rounded-lg">
                      <span className="text-white bg-gray-800  w-full py-2  shadow text-center">
                        Eklendi
                      </span>
                    </div>
                  ) : (
                    <button
                      onClick={() => toggleSelect(product.imageUrl)}
                      className="absolute top-4 right-4 text-xs text-gray-600 px-1 ring-1 ring-gray-600 rounded cursor-pointer hover:bg-sky-600 hover:ring-sky-600 hover:text-white"
                    >
                      Sabitle
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col gap-3 p-1">
            <div className="flex gap-5 items-center justify-between">
              <div className="flex gap-5">
                <h2 className="text-lg font-semibold">Sabit Ürünler</h2>
                {pinnedProducts.length > 0 && (
                  <button
                    onClick={() => setResetAllConfirmOpen(true)}
                    className=" text-xs text-red-600 px-2 py-1 ring-1 ring-red-500 rounded cursor-pointer hover:bg-red-500 hover:text-white"
                  >
                    Tümünü Kaldır
                  </button>
                )}
              </div>
              <div className="flex gap-2 text-lg items-center">
                <div className="relative group">
                  <MdInfoOutline className="cursor-pointer" />
                  <div className="absolute  mt-1 right-0  bg-white text-gray-800 text-sm px-2 py-2 rounded drop-shadow-2xl group-hover:opacity-100 opacity-0 transition-opacity z-10 w-60 justify-center ">
                    <div className="flex w-full gap-1">
                      <div className="flex  w-full gap-1 items-center text-center  ">
                        <BiSquareRounded className="text-sky-900" />
                        <span> Aktif</span>
                      </div>
                      <div className="flex  w-full gap-1 items-center text-center  ">
                        <BiSquareRounded className="text-red-600" />
                        <span> Pasif</span>
                      </div>
                    </div>
                    <div className="flex w-full gap-1">
                      <div className="flex w-full gap-1 items-center text-center">
                        <BiSquareRounded className="text-yellow-600" />
                        <span> Tükendi</span>
                      </div>
                      <div className="flex w-full gap-1 items-center text-center">
                        <BiSquareRounded className="text-pink-600" />
                        <span> Yer Değiştirdi</span>
                      </div>
                    </div>
                  </div>
                </div>
                <LuColumns3
                  className="cursor-pointer"
                  onClick={() => setColumns(3)}
                />
                <LuColumns4
                  className="cursor-pointer"
                  onClick={() => setColumns(4)}
                />
                <PiSquaresFour
                  className="cursor-pointer text-2xl"
                  onClick={() => setColumns(5)}
                />
              </div>
            </div>

            <div
              className={`overflow-auto grid gap-2 h-full rounded-2xl ring ring-gray-800 p-5 scroll-me-5 ${
                columns === 3
                  ? "grid-cols-3"
                  : columns === 4
                  ? "grid-cols-4"
                  : "grid-cols-5"
              }`}
            >
              {pinnedProducts.length === 0 ? (
                <p className="text-gray-400 col-span-4 text-sm">
                  Henüz sabitlenmiş ürün yok...
                </p>
              ) : (
                pinnedProducts.map((product) => (
                  <div
                    key={product.imageUrl}
                    className="relative col-span-1 h-60 rounded-lg shadow-md border-gray-500 p-2 border-2 bg-white overflow-hidden"
                  >
                    <div
                      className={`bg-gray-200 flex items-center justify-center ${
                        columns === 5 ? "h-2/3" : "h-3/4"
                      }`}
                    >
                      <img
                        src={product.imageUrl}
                        alt={product.name || "Ürün görseli"}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="h-1/4 p-1 justify-between">
                      <div className="flex flex-col gap-0.5 items-center w-full ">
                        <span className="font-medium text-sm text-gray-900 w-full leading-4 text-center line-clamp-2">
                          {product.name}
                        </span>
                        <span className="text-xs text-gray-500 lowercase">
                          {product.productCode}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => confirmRemove(product)}
                      className="absolute top-4 right-4 text-xs text-red-600 px-1 ring-1 ring-red-500 rounded cursor-pointer hover:bg-red-500 hover:text-white"
                    >
                      Kaldır
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <FilterPanel
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onApply={applyFilters}
      />
      {removeCandidate && (
        <div
          className="fixed inset-0 z-70 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Onayla</h3>
            <p className="mb-6">
              “{removeCandidate.name}” sabitlerden çıkarılacak. Emin misiniz?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={onRemoveCancelled}
                className="px-4 py-2 border border-red-500 rounded text-red-500 hover:bg-red-100 cursor-pointer"
              >
                Vazgeç
              </button>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer"
                onClick={onRemoveConfirmed}
              >
                Onayla
              </button>
            </div>
          </div>
        </div>
      )}
      {resetAllConfirmOpen && (
        <div
          className="fixed inset-0 z-70 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Tümünü Sıfırla</h3>
            <p className="mb-6">
              Tüm sabit ürünler kaldırılacak. Emin misiniz?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={onResetAllCancelled}
                className="px-4 py-2 border border-red-500 rounded text-red-500 hover:bg-red-100"
              >
                Vazgeç
              </button>
              <button
                onClick={onResetAllConfirmed}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Onayla
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditPage;
