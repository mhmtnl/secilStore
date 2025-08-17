"use client";

import React from "react";
import { TbEdit } from "react-icons/tb";

type Collection = {
  id: number;
  title: string;
  conditions: {
    color: string[] | null;
    size: number[] | null;
    ticket: string | null;
  };
  channel: string;
};

const collections: Collection[] = [
  {
    id: 1,
    title: "Koleksiyon 1",
    conditions: { color: ["Mor"], size: null, ticket: null },
    channel: "Satış Kanalı 1",
  },
  {
    id: 2,
    title: "Koleksiyon 2",
    conditions: { color: ["Sarı"], size: null, ticket: null },
    channel: "Satış Kanalı 2",
  },
  {
    id: 3,
    title: "Koleksiyon 3",
    conditions: { color: ["Fuşya"], size: [38], ticket: null },
    channel: "Satış Kanalı 3",
  },
  {
    id: 4,
    title: "Koleksiyon 4",
    conditions: { color: null, size: [42, 44, 46], ticket: null },
    channel: "Satış Kanalı 4",
  },
  {
    id: 5,
    title: "Koleksiyon 5",
    conditions: {
      color: ["Mavi", "Siyah", "Kırmızı"],
      size: null,
      ticket: "%20 indirim deneme",
    },
    channel: "Satış Kanalı 5",
  },
];

const Collections = () => {
  return (
    <div className="h-full flex flex-col gap-10">
      <h1 className="text-xl font-semibold">Koleksiyonlar</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-center">
          <thead>
            <tr className="text-sm text-gray-700 text-left">
              <th className="py-4 border-b text-center align-middle">Başlık</th>
              <th className="py-4 border-b text-center align-middle">
                Ürün Koşulları
              </th>
              <th className="py-4 border-b text-center align-middle">
                Satış Kanalı
              </th>
              <th className="py-4 border-b text-center align-middle">
                İşlemler
              </th>
            </tr>
          </thead>
          <tbody>
            {collections.map((item) => (
              <tr
                key={item.id}
                className="text-sm text-gray-800 hover:bg-gray-50"
              >
                <td className="px-4 py-5 border-b">{item.title}</td>
                <td className="px-4 py-3 border-b">
                  <div className="flex flex-col gap-2 items-center text-gray-900">
                    {item.conditions.color && (
                      <div className="flex flex-wrap gap-2">
                        {item.conditions.color.map((colorInfo, idx) => (
                          <span
                            key={`color-${idx}`}
                            className="bg-gray-300 text-xs px-2 py-1 rounded"
                          >
                            Renk: {colorInfo}
                          </span>
                        ))}
                      </div>
                    )}

                    {item.conditions.size && (
                      <div className="flex flex-wrap gap-2">
                        {item.conditions.size.map((sizeInfo, idx) => (
                          <span
                            key={`size-${idx}`}
                            className="bg-gray-300 text-xs px-2 py-1 rounded"
                          >
                            Beden: {sizeInfo}
                          </span>
                        ))}
                      </div>
                    )}

                    {item.conditions.ticket && (
                      <div className="flex gap-2">
                        <span className="bg-gray-300  text-xs px-2 py-1 rounded">
                          Kupon: {item.conditions.ticket}
                        </span>
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3 border-b">{item.channel}</td>
                <td className="px-4 py-3 border-b ">
                  <div className="flex items-center justify-center relative group">
                    <a href="/editing">
                      <TbEdit
                        size={24}
                        className="cursor-pointer"
                        aria-label="Sabitleri Düzenle"
                      />
                    </a>
                    <div className="absolute mt-12 ring-1 ring-gray-800 over px-1.5 text-xs rounded-2xl text-gray-800 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Sabitleri Düzenle
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Collections;
