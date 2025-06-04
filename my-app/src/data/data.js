const menuData = {
  categories: [
    { id: 1, name: 'Kondisionerlər', icon: '🏠', href: '/kondisionerler' },
    { id: 2, name: 'Smartfonlar və aksesuarları', icon: '📱', href: '/smartfonlar', active: true },
    { id: 3, name: 'Smart qadjetlər', icon: '⌚', href: '/smart-qadjetler' },
    { id: 4, name: 'Notbuklar, PK, planşetlər', icon: '💻', href: '/notbuklar' },
    { id: 5, name: 'Geyimlər üçün məhsullar', icon: '👕', href: '/geyimler' },
    { id: 6, name: 'TV, audio və foto', icon: '📺', href: '/tv-audio' },
    { id: 7, name: 'Mətbəx texnikası', icon: '🍳', href: '/metbex' },
    { id: 8, name: 'Ev texnikası', icon: '🏡', href: '/ev-texnikasi' },
    { id: 9, name: 'Qab-qacaq', icon: '🍽️', href: '/qab-qacaq' },
    { id: 10, name: 'Gözəllik və sağlamlıq texnikası', icon: '💄', href: '/gozellik' },
    { id: 11, name: 'İdman və əyləncə', icon: '⚽', href: '/idman' },
    { id: 12, name: 'Təmir tikinti', icon: '🔨', href: '/temir' },
    { id: 13, name: 'Avtomobil məhsulları', icon: '🚗', href: '/avtomobil' },
    { id: 14, name: 'Mebel və tekstil', icon: '🛋️', href: '/mebel' },
  ]
};

const subcategoryData = {
  smartfonlar: ['Apple', 'OPPO', 'Samsung', 'Xiaomi', 'Poco', 'TCL', 'HUAWEI', 'Motorola', 'Realme', 'Google', 'Tecno', 'ASUS', 'HONOR', 'Blackview', 'Infinix', 'Vertu', 'ZTE', 'OnePlus'],
  plansetler: ['Apple', 'Samsung', 'Xiaomi', 'HUAWEI', 'Blackview', 'TCL', 'HONOR'],
  elektronKitablar: [
    'Qulaqcıqlar',
    'Bluetooth simsiz qulaqcıqlar',
    'TWS simsiz qulaqcıqlar',
    'Simli qulaqcıqlar',
    'Oyun qulaqcıqları',
    'Studiya qulaqcıqları',
    'Qulaqcıq aksesuarları'
  ],
  plansetAksesuarlari: [
    'Düyməli telefonlar',
    'F+',
    'Nokia',
    'Panasonic'
  ],
  telefonAksesuarlari: [
    'Qoruyucu şüşə',
    'Simsiz enerji toplama cihazı',
    'Qoruyucu örtük',
    'USB naqillər',
    'Powerbank',
    'Telefon adapterleri',
    'Selfie çubuqları',
    'MagSafe aksesuarları',
    'SD kartlar',
    'Micro kartlar',
    'Telefon üçün tutacaqlar',
    'Acarlıq',
    'Digər aksesuarlar'
  ]
};

const featuredProducts = [
  {
    id: 1,
    name: 'MacBook Air',
    description: 'İnanılmaz dərəcədə əlçatan. MacBook Air trade-in ilə cəmi 930 AZN-dən.',
    subtitle: 'Yalnız 30 iyunədək.',
    image: '/macbook-air.jpg',
    brand: 'Apple'
  },
  {
    id: 2,
    name: 'iPhone',
    description: 'Parlaq fikirlər',
    subtitle: 'Ayda',
    price: 'Nəğd alış qiymə',
    image: '/iphone.jpg',
    brand: 'Apple'
  }
];

const weeklyOffers = [
  {
    id: 1,
    name: 'OPPO A3x 4/128 GB Ocean Blue',
    originalPrice: '349,99 ₼',
    salePrice: '209,99 ₼',
    discount: '0% 6 ay',
    image: '/oppo-a3x.jpg',
    weekDays: { day: '04', month: '01', date: '16', dayName: 'gün', monthName: 'saat', dateName: 'dəqiqə' }
  },
  {
    id: 2,
    name: 'Galaxy A16 4/128 GB',
    price: '16.99 ₼',
    brand: 'Samsung',
    image: '/galaxy-a16.jpg'
  },
  {
    id: 3,
    name: 'Redmi Note 14 6/128 GB',
    price: '19.99 ₼',
    brand: 'Xiaomi',
    image: '/redmi-note-14.jpg'
  }
];