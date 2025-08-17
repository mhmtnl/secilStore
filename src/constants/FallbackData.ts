export interface Product {
  productCode: string;
  colorCode: string;
  name: string;
  outOfStock: boolean;
  isSaleB2B: boolean;
  imageUrl: string;
}

export interface Filter {
  comparisonType: number;
  currency: null | unknown;
  id: string;
  title: string;
  values: Array<{
    value: string;
    valueName: string;
  }>;
}

export const fallbackProducts: Product[] = [
  {
    productCode: "30002506016002",
    colorCode: "0023",
    name: "Straplez Yaka Saten Maksi Boy Abiye",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/30002506016002/0023/1.webp?x=alttv",
  },
  {
    productCode: "30002506016002",
    colorCode: "0004",
    name: "Straplez Yaka Saten Maksi Boy Abiye",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/30002506016002/0004/1.webp?x=govjy",
  },
  {
    productCode: "30002506016002",
    colorCode: "0050",
    name: "Straplez Yaka Saten Maksi Boy Abiye",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/30002506016002/0050/1.webp?x=fidzu",
  },
  {
    productCode: "10002421010010",
    colorCode: "0008",
    name: "Bilek Boy Klasik Pantolon",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421010010/0008/1.webp?x=gqjdd",
  },
  {
    productCode: "10002421010010",
    colorCode: "0050",
    name: "Bilek Boy Klasik Pantolon",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421010010/0050/1.webp?x=amkjn",
  },
  {
    productCode: "10002421010027",
    colorCode: "0317",
    name: "Cepli Bilek Boy Pantolon",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421010027/0317/1.webp?x=yqjjz",
  },
  {
    productCode: "10002421011001",
    colorCode: "0037",
    name: "Düğmeli Havuç Kesim Pantolon",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421011001/0037/1.webp?x=rsrlc",
  },
  {
    productCode: "10002421011012",
    colorCode: "0008",
    name: "Geniş Paça Pantolon",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421011012/0008/1.webp?x=tdzfz",
  },
  {
    productCode: "10002421011014",
    colorCode: "0008",
    name: "Cepli Bilek Boy Pantolon",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421011014/0008/1.webp?x=lccrl",
  },
  {
    productCode: "10002421011026",
    colorCode: "0137",
    name: "Yüksek Bel Duble Paçalı Pantolon",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421011026/0137/1.webp?x=ghprw",
  },
  {
    productCode: "10002421014003",
    colorCode: "0008",
    name: "Büyük Beden Beli Büzgülü Bilek Boy Pantolon",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421014003/0008/1.webp?x=plrqn",
  },
  {
    productCode: "10002421014003",
    colorCode: "0045",
    name: "Büyük Beden Beli Büzgülü Bilek Boy Pantolon",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421014003/0045/1.webp?x=prjhu",
  },
  {
    productCode: "10002421014004",
    colorCode: "0054",
    name: "Büyük Beden Bilek Boy Pantolon",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421014004/0054/1.webp?x=pcqsy",
  },
  {
    productCode: "10002421014007",
    colorCode: "0008",
    name: "Büyük Beden Cepli Pantolon",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421014007/0008/1.webp?x=vczru",
  },
  {
    productCode: "10002421014009",
    colorCode: "0037",
    name: "Büyük Beden Elastik Bel Çizgili Pantolon",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421014009/0037/1.webp?x=wdlvt",
  },
  {
    productCode: "10002421110002",
    colorCode: "0045",
    name: "İç Gömlekli Düşük Kol Süveter",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421110002/0045/1.webp?x=fggki",
  },
  {
    productCode: "10002421110012",
    colorCode: "0008",
    name: "Bele Oturan Cepli Blazer Ceket",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421110012/0008/1.webp?x=muzto",
  },
  {
    productCode: "10002421110018",
    colorCode: "0050",
    name: "Fileto Cepli  Klasik Blazer Ceket",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421110018/0050/1.webp?x=kmsam",
  },
  {
    productCode: "10002421111017",
    colorCode: "0000",
    name: "Gömlek Yaka Cepli Düğme Detaylı Ceket",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421111017/0000/1.webp?x=ujwkw",
  },
  {
    productCode: "10002421211006",
    colorCode: "0015",
    name: "Çift Kumaşlı Uzun Kollu Gömlek",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421211006/0015/1.webp?x=kyvrb",
  },
  {
    productCode: "10002421211014",
    colorCode: "0045",
    name: "Çiçek Desenli Düğmeli Gömlek Yaka Tunik",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421211014/0045/1.webp?x=qgqji",
  },
  {
    productCode: "10002421214001",
    colorCode: "0008",
    name: "Büyük Beden Gömlek Yaka Desenli Tunik",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421214001/0008/1.webp?x=jdfpa",
  },
  {
    productCode: "10002421310002",
    colorCode: "0008",
    name: "Pencere Detaylı Düğmeli Elbise",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421310002/0008/1.webp?x=rwldh",
  },
  {
    productCode: "10002421310009",
    colorCode: "0019",
    name: "Dik Yaka Kemerli Midi Boy Elbise",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421310009/0019/1.webp?x=quvmz",
  },
  {
    productCode: "10002421311002",
    colorCode: "0008",
    name: "Desenli Dik Yaka Kemerli Elbise",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421311002/0008/1.webp?x=zvwsz",
  },
  {
    productCode: "10002421311010",
    colorCode: "0050",
    name: "Yuvarlak Yaka Pileli Uzun Kollu Elbise",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421311010/0050/1.webp?x=cccev",
  },
  {
    productCode: "10002421311010",
    colorCode: "0054",
    name: "Yuvarlak Yaka Pileli Uzun Kollu Elbise",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421311010/0054/1.webp?x=pcquf",
  },
  {
    productCode: "10002421314001",
    colorCode: "0008",
    name: "Büyük Beden Sıfır Yaka Uzun Kollu Elbise",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421314001/0008/1.webp?x=uhxsn",
  },
  {
    productCode: "10002421314006",
    colorCode: "0006",
    name: "Büyük Beden Desenli Fular Yaka Elbise",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421314006/0006/1.webp?x=ztwyo",
  },
  {
    productCode: "10002421510002",
    colorCode: "0015",
    name: "Çiçek Desenli Uzun Kollu Şık Gömlek",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421510002/0015/1.webp?x=kqevd",
  },
  {
    productCode: "10002421511002",
    colorCode: "0312",
    name: "Boncuk Detaylı Çizgili Gömlek",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421511002/0312/1.webp?x=rmxbx",
  },
  {
    productCode: "10002421514006",
    colorCode: "0008",
    name: "Büyük Beden Taş İşlemeli Şık Gömlek",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421514006/0008/1.webp?x=muizo",
  },
  {
    productCode: "10002421514013",
    colorCode: "0006",
    name: "Büyük Beden Fular Yakalı Desenli Gömlek",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421514013/0006/1.webp?x=loqwq",
  },
  {
    productCode: "10002421514015",
    colorCode: "0008",
    name: "Büyük Beden Cepli Uzun Kollu Gömlek",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421514015/0008/1.webp?x=ettim",
  },
  {
    productCode: "10002421611005",
    colorCode: "0022",
    name: "Renk Geçişli Fermuarlı Etek",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421611005/0022/1.webp?x=kauhh",
  },
  {
    productCode: "10002421614002",
    colorCode: "0317",
    name: "Büyük Beden Yırtmaç Detaylı Etek",
    outOfStock: false,
    isSaleB2B: true,
    imageUrl:
      "https://cdn.secilstore.com/docs/images/product/orj/10002421614002/0317/1.webp?x=rmqja",
  },
];
export const fallbackFilters: Filter[] = [
  {
    id: "color",
    title: "Renk",
    values: [
      {
        value: "0008",
        valueName: "Siyah",
      },
      {
        value: "0015",
        valueName: "Ekru",
      },
      {
        value: "0045",
        valueName: "Lacivert",
      },
      {
        value: "0037",
        valueName: "Bej",
      },
      {
        value: "0000",
        valueName: "Mavi",
      },
      {
        value: "0032",
        valueName: "Beyaz",
      },
      {
        value: "0006",
        valueName: "Yeşil",
      },
      {
        value: "0023",
        valueName: "Gri",
      },
      {
        value: "0009",
        valueName: "Kırmızı",
      },
      {
        value: "0005",
        valueName: "Sarı",
      },
      {
        value: "0312",
        valueName: "Camel",
      },
      {
        value: "0004",
        valueName: "Fuşya",
      },
      {
        value: "0039",
        valueName: "Lila",
      },
      {
        value: "0019",
        valueName: "Pembe",
      },
      {
        value: "0024",
        valueName: "Sax",
      },
      {
        value: "0050",
        valueName: "Haki",
      },
      {
        value: "0311",
        valueName: "Turuncu",
      },
      {
        value: "0021",
        valueName: "Mint",
      },
      {
        value: "0022",
        valueName: "Pudra",
      },
      {
        value: "0137",
        valueName: "Krem",
      },
      {
        value: "0317",
        valueName: "Kahverengi",
      },
      {
        value: "0339",
        valueName: "Lacivert Jean",
      },
      {
        value: "0054",
        valueName: "Bordo",
      },
      {
        value: "0069",
        valueName: "Olive",
      },
      {
        value: "0134",
        valueName: "Yavruağzı",
      },
      {
        value: "0011",
        valueName: "Koyu Yeşil",
      },
      {
        value: "0012",
        valueName: "Gold",
      },
      {
        value: "0035",
        valueName: "Nar Çiçeği",
      },
      {
        value: "0036",
        valueName: "Antrasit",
      },
      {
        value: "0044",
        valueName: "Ten",
      },
      {
        value: "0048",
        valueName: "İndigo",
      },
      {
        value: "0049",
        valueName: "Vizon",
      },
      {
        value: "0053",
        valueName: "Taba",
      },
      {
        value: "0002",
        valueName: "Mor",
      },
      {
        value: "0018",
        valueName: "Mercan",
      },
      {
        value: "0020",
        valueName: "Turkuaz",
      },
      {
        value: "0033",
        valueName: "Mürdüm",
      },
      {
        value: "0070",
        valueName: "Kiremit",
      },
      {
        value: "0117",
        valueName: "Silver",
      },
      {
        value: "0337",
        valueName: "Mavi-Jean",
      },
      {
        value: "0056",
        valueName: "Somon",
      },
      {
        value: "0084",
        valueName: "Gümüş",
      },
      {
        value: "0091",
        valueName: "K.Yeşil",
      },
      {
        value: "0316",
        valueName: "Bakır",
      },
    ],
    currency: null,
    comparisonType: 0,
  },
  {
    id: "size",
    title: "Beden",
    values: [  
      {
        value: "Std",
        valueName: "Std",
      },
      {
        value: "XS",
        valueName: "XS",
      },
      {
        value: "S",
        valueName: "S",
      },
      {
        value: "M",
        valueName: "M",
      },
      {
        value: "L",
        valueName: "L",
      },
      {
        value: "XL",
        valueName: "XL",
      },
      {
        value: "36",
        valueName: "36",
      },
      {
        value: "37",
        valueName: "37",
      },
      {
        value: "38",
        valueName: "38",
      },
      {
        value: "39",
        valueName: "39",
      },
      {
        value: "40",
        valueName: "40",
      },
      {
        value: "42",
        valueName: "42",
      },
      {
        value: "44",
        valueName: "44",
      },
      {
        value: "46",
        valueName: "46",
      },
      {
        value: "48",
        valueName: "48",
      },
      {
        value: "50",
        valueName: "50",
      },
    ],
    currency: null,
    comparisonType: 0,
  },
  {
    id: "category",
    title: "Kategori",
    values: [
      {
        value: "3000200260",
        valueName: "Abiye",
      },
      {
        value: "1000300115",
        valueName: "Gömlek",
      },
      {
        value: "1000300113",
        valueName: "Elbise",
      },
      {
        value: "1000300510",
        valueName: "Pantolon",
      },
      {
        value: "1000300118",
        valueName: "Bluz",
      },
      {
        value: "1000300112",
        valueName: "Tunik",
      },
      {
        value: "1000300611",
        valueName: "Ceket",
      },
      {
        value: "1000300516",
        valueName: "Etek",
      },
      {
        value: "1000300722",
        valueName: "Jean",
      },
      {
        value: "1000300625",
        valueName: "Kap",
      },
      {
        value: "1000300123",
        valueName: "Sweatshirt",
      },
      {
        value: "1000300621",
        valueName: "Trenç-Kot",
      },
      {
        value: "1000300124",
        valueName: "T-Shirt",
      },
      {
        value: "1000300317",
        valueName: "Triko",
      },
      {
        value: "2000100128",
        valueName: "Top",
      },
      {
        value: "1000300827",
        valueName: "Takım",
      },
      {
        value: "1000300129",
        valueName: "Tulum",
      },
      {
        value: "1000300626",
        valueName: "Pardösü",
      },
      {
        value: "1000300620",
        valueName: "Kaban",
      },
      {
        value: "1000400430",
        valueName: "Çanta",
      },
      {
        value: "3000200432",
        valueName: "Ayakkabı",
      },
      {
        value: "3000300113",
        valueName: "Elbise",
      },
    ],
    currency: null,
    comparisonType: 0,
  },
  {
    id: "1",
    title: "Ürün Alt Grubu",
    values: [
      {
        value: "0001000109",
        valueName: "Günlük Bluz",
      },
      {
        value: "0001000110",
        valueName: "Şık Bluz",
      },
      {
        value: "0001000111",
        valueName: "Günlük Gömlek",
      },
      {
        value: "0001000112",
        valueName: "Şık Gömlek",
      },
      {
        value: "0001000116",
        valueName: "Şık Elbise",
      },
      {
        value: "0001000117",
        valueName: "Günlük Elibise",
      },
      {
        value: "0001000125",
        valueName: "Şık Ceket",
      },
      {
        value: "0001000126",
        valueName: "Yelek",
      },
      {
        value: "0001000127",
        valueName: "Günlük Ceket",
      },
      {
        value: "0001000129",
        valueName: "Pliseli Etek",
      },
      {
        value: "0001000130",
        valueName: "Günlük Etek",
      },
      {
        value: "0001000131",
        valueName: "Şık Etek",
      },
      {
        value: "0001000132",
        valueName: "Günlük Pantolon",
      },
      {
        value: "0001000134",
        valueName: "Eşofman Altı",
      },
      {
        value: "0001000136",
        valueName: "Klasik Pantolon",
      },
      {
        value: "0001000138",
        valueName: "Jean Ceket",
      },
      {
        value: "0001000146",
        valueName: "Günlük Tunik",
      },
      {
        value: "0001000180",
        valueName: "Şık Tunik",
      },
      {
        value: "0001000182",
        valueName: "Günlük Kap",
      },
      {
        value: "0001000200",
        valueName: "Abiye Elbise",
      },
      {
        value: "0001000202",
        valueName: "Abiye Tulum",
      },
      {
        value: "0001000204",
        valueName: "Bra",
      },
    ],
    currency: null,
    comparisonType: 0,
  },
  {
    id: "22",
    title: "Aksesuar Türü",
    values: [
      {
        value: "0000220012",
        valueName: "Kemer",
      },
      {
        value: "0000220014",
        valueName: "Kuşak",
      },
    ],
    currency: null,
    comparisonType: 0,
  },
  {
    id: "26",
    title: "Astar",
    values: [
      {
        value: "0000260010",
        valueName: "Astarlı",
      },
      {
        value: "0000260011",
        valueName: "Astarsız",
      },
    ],
    currency: null,
    comparisonType: 0,
  },
  {
    id: "19",
    title: "Bel",
    values: [
      {
        value: "0000190010",
        valueName: "Beli Yarım Lastikli",
      },
      {
        value: "0000190013",
        valueName: "Yüksek",
      },
      {
        value: "0000190015",
        valueName: "Beli Büzgülü",
      },
      {
        value: "0000190016",
        valueName: "Lastik Bel",
      },
      {
        value: "0000190020",
        valueName: "Bele Oturan",
      },
      {
        value: "0000190021",
        valueName: "Beli Lastikli",
      },
    ],
    currency: null,
    comparisonType: 0,
  },
  {
    id: "16",
    title: "Boy",
    values: [
      {
        value: "0000160010",
        valueName: "Basen",
      },
      {
        value: "0000160011",
        valueName: "Basen Altı",
      },
      {
        value: "0000160012",
        valueName: "Bel",
      },
      {
        value: "0000160013",
        valueName: "Bilek",
      },
      {
        value: "0000160014",
        valueName: "Diz Altı",
      },
      {
        value: "0000160016",
        valueName: "Diz Üstü",
      },
      {
        value: "0000160018",
        valueName: "Maksi",
      },
      {
        value: "0000160019",
        valueName: "Midi",
      },
      {
        value: "0000160020",
        valueName: "Mini",
      },
    ],
    currency: null,
    comparisonType: 0,
  },
  {
    id: "3",
    title: "Etİket Markasi",
    values: [
      {
        value: "0000300010",
        valueName: "Seçil",
      },
      {
        value: "0000300011",
        valueName: "S C L",
      },
      {
        value: "0000300014",
        valueName: "Gala-Xi",
      },
      {
        value: "0000300016",
        valueName: "Ilmio",
      },
      {
        value: "0000300017",
        valueName: "Ilmio Cocktail",
      },
      {
        value: "0000300020",
        valueName: "Fonclo",
      },
    ],
    currency: null,
    comparisonType: 0,
  },
  {
    id: "11",
    title: "Kesİm",
    values: [
      {
        value: "0000110010",
        valueName: "A Kesim",
      },
      {
        value: "0000110011",
        valueName: "Oversıze",
      },
      {
        value: "0000110012",
        valueName: "Relax",
      },
    ],
    currency: null,
    comparisonType: 0,
  },
  {
    id: "18",
    title: "Kol",
    values: [
      {
        value: "0000180011",
        valueName: "Düşük",
      },
      {
        value: "0000180013",
        valueName: "Kısa",
      },
      {
        value: "0000180014",
        valueName: "Kolsuz",
      },
      {
        value: "0000180017",
        valueName: "Reglan",
      },
      {
        value: "0000180018",
        valueName: "Tek Omuz",
      },
      {
        value: "0000180019",
        valueName: "Truvakar",
      },
      {
        value: "0000180020",
        valueName: "Uzun",
      },
      {
        value: "0000180021",
        valueName: "Yarasa",
      },
      {
        value: "0000180023",
        valueName: "Askılı",
      },
    ],
    currency: null,
    comparisonType: 0,
  },
  {
    id: "23",
    title: "Kumaş",
    values: [
      {
        value: "0000230012",
        valueName: "Dantel",
      },
      {
        value: "0000230023",
        valueName: "Jarse",
      },
      {
        value: "0000230028",
        valueName: "Keten",
      },
      {
        value: "0000230035",
        valueName: "Jakar",
      },
    ],
    currency: null,
    comparisonType: 0,
  },
  {
    id: "24",
    title: "Kumaş Özellİğİ",
    values: [
      {
        value: "0000240012",
        valueName: "Çiçek",
      },
      {
        value: "0000240013",
        valueName: "Çizgili",
      },
      {
        value: "0000240014",
        valueName: "Desenli",
      },
      {
        value: "0000240043",
        valueName: "Sim",
      },
      {
        value: "0000240045",
        valueName: "Nakış",
      },
    ],
    currency: null,
    comparisonType: 0,
  },
  {
    id: "15",
    title: "Model",
    values: [
      {
        value: "0000150032",
        valueName: "Havuç",
      },
      {
        value: "0000150043",
        valueName: "Piliseli",
      },
    ],
    currency: null,
    comparisonType: 0,
  },
  {
    id: "14",
    title: "Okasyon",
    values: [
      {
        value: "0000140012",
        valueName: "Ofis",
      },
      {
        value: "0000140014",
        valueName: "Söz & Nişan",
      },
      {
        value: "0000140016",
        valueName: "After Party",
      },
    ],
    currency: null,
    comparisonType: 0,
  },
  {
    id: "20",
    title: "Paça Etek",
    values: [
      {
        value: "0000200010",
        valueName: "Dar",
      },
      {
        value: "0000200012",
        valueName: "Geniş",
      },
      {
        value: "0000200015",
        valueName: "Yırtmaç",
      },
    ],
    currency: null,
    comparisonType: 0,
  },
  {
    id: "6",
    title: "Sezon",
    values: [
      {
        value: "0000060000",
        valueName: "Sezonsuz",
      },
      {
        value: "0000060001",
        valueName: "Yaz",
      },
      {
        value: "0000060002",
        valueName: "Kış",
      },
    ],
    currency: null,
    comparisonType: 0,
  },
  {
    id: "13",
    title: "Tarz",
    values: [
      {
        value: "0000130010",
        valueName: "Günlük",
      },
      {
        value: "0000130014",
        valueName: "Şık",
      },
    ],
    currency: null,
    comparisonType: 0,
  },
  {
    id: "12",
    title: "Ürün Türü",
    values: [
      {
        value: "0001200101",
        valueName: "Nitelikli",
      },
      {
        value: "0001200102",
        valueName: "Koleksiyon",
      },
    ],
    currency: null,
    comparisonType: 0,
  },
  {
    id: "17",
    title: "Yaka",
    values: [
      {
        value: "0000170011",
        valueName: "Asimetrik",
      },
      {
        value: "0000170013",
        valueName: "Ceket Yaka",
      },
      {
        value: "0000170014",
        valueName: "Degaje Yaka",
      },
      {
        value: "0000170015",
        valueName: "Dik Yaka",
      },
      {
        value: "0000170016",
        valueName: "Fular Yakalı",
      },
      {
        value: "0000170017",
        valueName: "Gömlek Yaka",
      },
      {
        value: "0000170018",
        valueName: "Hakim Yaka",
      },
      {
        value: "0000170019",
        valueName: "Halter Yaka",
      },
      {
        value: "0000170020",
        valueName: "Kalp Yaka",
      },
      {
        value: "0000170022",
        valueName: "Kare Yaka",
      },
      {
        value: "0000170024",
        valueName: "Kırlangıç Yaka",
      },
      {
        value: "0000170025",
        valueName: "Kruvaze Yaka",
      },
      {
        value: "0000170028",
        valueName: "Sıfır Yaka",
      },
      {
        value: "0000170029",
        valueName: "Straplez",
      },
      {
        value: "0000170033",
        valueName: "V Yaka",
      },
      {
        value: "0000170036",
        valueName: "Yuvarlak Yaka",
      },
    ],
    currency: null,
    comparisonType: 0,
  },
  {
    id: "5",
    title: "Yil",
    values: [
      {
        value: "0000500024",
        valueName: "2024",
      },
    ],
    currency: null,
    comparisonType: 0,
  },
  {
    id: "stock",
    title: "Stok",
    values: [
      {
        value: "",
        valueName: "Büyüktür",
      },
      {
        value: "",
        valueName: "Küçüktür",
      },
    ],
    currency: null,
    comparisonType: 3,
  },
  {
    id: "warehouse",
    title: "Depo",
    values: [
      {
        value: "14102",
        valueName: "ALEMDAR",
      },
      {
        value: "10604",
        valueName: "ANK IZMIR CAD",
      },
      {
        value: "13408",
        valueName: "ATLASPARK",
      },
      {
        value: "20602-1",
        valueName: "BGR TEKSTİL BALGAT ARA DEPO",
      },
      {
        value: "22501-1",
        valueName: "ERBOL ERZURUM ARA DEPO",
      },
      {
        value: "22801",
        valueName: "GIRESUN",
      },
      {
        value: "1-3-105",
        valueName: "GÜRSES KONSİNYE DEPO",
      },
      {
        value: "22401-1",
        valueName: "İSHAK AKBİNA ERZİNCAN",
      },
      {
        value: "1-3-250",
        valueName: "JEFER KONSİNYE DEPO",
      },
      {
        value: "20601-1",
        valueName: "KARUM İLMİO EMİNE ORAN",
      },
      {
        value: "KY001",
        valueName: "Kayıp Depo",
      },
      {
        value: "1-M-1",
        valueName: "Merkez Ofis Deposu 1",
      },
      {
        value: "23701-1",
        valueName: "MODA MAĞAZA ARA DEPO",
      },
      {
        value: "24201-C",
        valueName: "NOVALAND ÇADIR",
      },
      {
        value: "13405",
        valueName: "SANTRAL",
      },
      {
        value: "20701-1",
        valueName: "SELF DANIŞMANLIK ALANYA ARA DEPO",
      },
      {
        value: "13401",
        valueName: "UMRANIYE",
      },
      {
        value: "16501",
        valueName: "VAN AVM",
      },
      {
        value: "20701",
        valueName: "YEKTAMALL",
      },
    ],
    currency: null,
    comparisonType: 0,
  },
];
