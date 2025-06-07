const menuData = {
  categories: [
    {
      id: 1,
      name: 'Kondisionerlər',
      icon: '🏠',
      href: '/kondisionerler',
      submenu: {
        Brend: ['AUX', 'Bosch', 'LG', 'Samsung', 'Midea', 'Daikin', 'Electrolux', 'Gree', 'Hitachi', 'Toshiba', 'Panasonic', 'Sharp', 'Vestel', 'Arçelik', 'Beko', 'Vestel', 'Electrolux', 'Ariston', 'Indesit'],
        "Təsir sahəsi": ['25-45 m²', '45-100 m²', '100-180 m²'],
        Növ: ['Split sistemləri', 'Daxili blok', 'Portativ']
      }
    },
    {
      id: 2,
      name: 'Smartfonlar və aksesuarları',
      icon: '📱',
      href: '/smartfonlar',
      submenu: {
        Marka: ['iPhone', 'Samsung', 'Xiaomi'],
        Əlavə: ['Qoruyucu şüşə', 'Qulaqlıqlar', 'Adapterlər'],
        Tip: ['iOS', 'Android', 'Digər']
      }
    },
    {
      id: 3,
      name: 'Smart qadjetlər',
      icon: '⌚',
      href: '/smart-qadjetler',
      submenu: {
        Qadjetlər: ['Smart saat', 'Fitness tracker'],
        Brendlər: ['Huawei', 'Amazfit', 'Apple'],
        Rəng: ['Qara', 'Gümüşü', 'Qızılı']
      }
    },
    {
      id: 4,
      name: 'Notbuklar, PK, planşetlər',
      icon: '💻',
      href: '/notbuklar',
      submenu: {
        Brend: ['HP', 'ASUS', 'Apple'],
        Tip: ['Ultrabook', 'Gaming', 'Planşet'],
        Əlavələr: ['Mouse', 'Çanta', 'Soyuducu']
      }
    },
    {
      id: 5,
      name: 'Geyimlər üçün məhsullar',
      icon: '👕',
      href: '/geyimler',
      submenu: {
        Məhsullar: ['Ütü', 'Buxarlı ütü', 'Dikiş maşını'],
        Brend: ['Tefal', 'Philips'],
        Rəng: ['Ağ', 'Qara', 'Qırmızı']
      }
    },
    {
      id: 6,
      name: 'TV, audio və foto',
      icon: '📺',
      href: '/tv-audio',
      submenu: {
        TV: ['Samsung', 'LG', 'Xiaomi'],
        Audio: ['Klassik', 'Bluetooth', 'Wi-Fi'],
        Foto: ['Kamera', 'Lens', 'Statik']
      }
    },
    {
      id: 7,
      name: 'Mətbəx texnikası',
      icon: '🍳',
      href: '/metbex',
      submenu: {
        Texnika: ['Blender', 'Qəhvə maşını', 'Sobada bişirici'],
        Brend: ['Bosch', 'Moulinex'],
        Həcmi: ['1L', '1.5L', '2L+']
      }
    },
    {
      id: 8,
      name: 'Ev texnikası',
      icon: '🏡',
      href: '/ev-texnikasi',
      submenu: {
        Məhsullar: ['Tozsoran', 'İstilik sistemi'],
        Brendlər: ['Dyson', 'Philips'],
        Növ: ['Elektrik', 'Qazlı', 'Hibrid']
      }
    },
    {
      id: 9,
      name: 'Qab-qacaq',
      icon: '🍽️',
      href: '/qab-qacaq',
      submenu: {
        Dəstlər: ['Yemək dəsti', 'Çay dəsti', 'Tava'],
        Material: ['Keramika', 'İnox', 'Şüşə'],
        Brend: ['Paşabahçe', 'Luminarc']
      }
    },
    {
      id: 10,
      name: 'Gözəllik və sağlamlıq',
      icon: '💄',
      href: '/gozellik',
      submenu: {
        Gözəllik: ['Fen', 'Saç düzləndirici'],
        Sağlamlıq: ['Tonometr', 'Masaj cihazı'],
        Brendlər: ['Braun', 'Philips']
      }
    },
    {
      id: 11,
      name: 'İdman və əyləncə',
      icon: '⚽',
      href: '/idman',
      submenu: {
        Kateqoriya: ['Velosiped', 'Trainer', 'Scooter'],
        Brend: ['Spartan', 'Xiaomi'],
        Tip: ['Uşaqlar üçün', 'Böyüklər üçün']
      }
    },
    {
      id: 12,
      name: 'Təmir tikinti',
      icon: '🔨',
      href: '/temir',
      submenu: {
        Alətlər: ['Matkap', 'Drel', 'Şlifovka'],
        Marka: ['Makita', 'Bosch'],
        İstiqamət: ['Elektrik', 'Tikinti', 'Santexnika']
      }
    },
  ]
};

export default menuData;
