"use client";

import React, { useState, useEffect } from "react";
import { fallbackFilters } from "@/constants/FallbackData";
import type { Filter } from "@/constants/FallbackData";

export type Filters = {
  name: string | null;
  code: string | null;
};

type FilterKeyword = {
  id: string;
  label: string;
};

type FilterPanelProps = {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: Filters) => void;
};

const FilterPanel = ({ isOpen, onClose, onApply }: FilterPanelProps) => {
  const [filters, setFilters] = useState<Filters>({ name: null, code: null });
  const [keywords, setKeywords] = useState<FilterKeyword[]>([]);
  const [filterTypes, setFilterTypes] = useState<Filter[]>([]);
  const [selectedFilterId, setSelectedFilterId] = useState<string | null>(null);
  const [selectedFilterValues, setSelectedFilterValues] = useState<
    { value: string; valueName: string }[]
  >([]);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  async function getFilterTypes() {
    try {
      const res = await fetch(
        "https://maestro-api-dev.secil.biz/Collection/72/GetFiltersForConstants",
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
          },
        }
      );

      if (!res.ok) {
        const errorText = await res.text();
        setFilterTypes(fallbackFilters);
        throw new Error(
          `HTTP error! status: ${res.status}, message: ${errorText}`
        );
      }

      const takenData = await res.json();
      setFilterTypes(takenData.data);
    } catch (error) {
      console.error("Filtreler alınırken hata oluştu:", error);
      setFilterTypes(fallbackFilters);
    }
  }

  useEffect(() => {
    getFilterTypes();
  }, []);

  useEffect(() => {
    const kws: FilterKeyword[] = [];
    if (filters.code)
      kws.push({ id: "code", label: `Ürün Kodu: ${filters.code}` });
    if (filters.name)
      kws.push({ id: "name", label: `Ürün Adı: ${filters.name}` });

    setKeywords(kws);
  }, [filters]);

  const onChange = (key: keyof Filters, value: number | string | undefined) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const removeKeyword = (id: string) => {
    setFilters((prev) => {
      const updated = { ...prev };
      delete updated[id as keyof Filters];
      return updated;
    });
  };
  const clearFilters = () => {
    setSelectedFilterId(null);
    setSelectedFilterValues([]);
    setSelectedValue(null);
  };

  const applyFilters = () => {
    onApply(filters);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white w-[500px] max-h-[90vh] overflow-y-auto rounded-xl p-6 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-black cursor-pointer"
          aria-label="Filtre panelini kapat"
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-6">Filtreler</h2>
        <div className="flex flex-col gap-4 mb-6">
          <div>
            <label className="block mb-1 font-medium">Ürün Adı</label>
            <input
              type="text"
              value={filters.name || ""}
              onChange={(e) => onChange("name", e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Ürün adını giriniz"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Ürün Kodu</label>
            <input
              type="text"
              value={filters.code || ""}
              onChange={(e) => onChange("code", e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Ürün kodunu giriniz"
            />
          </div>
          <div className="flex gap-5 justify-between">
            <div className="w-full">
              <label className="block mb-1 font-medium">Filtre Adı</label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={selectedFilterId || ""}
                onChange={(e) => {
                  const selectedId = e.target.value;
                  setSelectedFilterId(selectedId);
                  setSelectedValue(null);
                  const selectedFilter = filterTypes.find(
                    (f) => f.id === selectedId
                  );
                  setSelectedFilterValues(selectedFilter?.values || []);
                }}
              >
                <option value="" disabled>
                  Filtre seçiniz
                </option>
                {filterTypes.map((filter) => (
                  <option key={filter.id} value={filter.id}>
                    {filter.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <label className="block mb-1 font-medium">Değer</label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2"
                disabled={!selectedFilterId}
                value={selectedValue || ""}
                onChange={(e) => setSelectedValue(e.target.value)}
              >
                <option value="" disabled>
                  Değer seçiniz
                </option>
                {selectedFilterValues.map((val) => (
                  <option key={val.value} value={val.value}>
                    {val.valueName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Uygulanan Kriterler</h3>
          <div className="flex flex-wrap gap-2">
            {keywords.length === 0 ? (
              <span className="text-gray-400 text-sm">
                Henüz filtre uygulanmadı.
              </span>
            ) : (
              keywords.map(({ id, label }) => (
                <div
                  key={id}
                  className="flex items-center gap-1 bg-red-200 rounded-xl px-3 py-1 text-sm"
                >
                  <span>{label}</span>
                  <button
                    onClick={() => removeKeyword(id)}
                    className="text-red-600 hover:text-red-800 cursor-pointer"
                    aria-label={`${label} filtresini kaldır`}
                  >
                    ×
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="flex justify-center gap-6">
          <button
            onClick={clearFilters}
            className="px-6 py-2 border border-gray-400 rounded hover:bg-gray-200 cursor-pointer"
          >
            Seçimleri Temizle
          </button>
          <button
            onClick={applyFilters}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer"
          >
            Filtrele
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
