const tradeInData = {
  title: "Trade-in",
  
  faq: {
    title: "Online Trade-in nədir?",
    description: '"Kontakt"-ın təqdim etdiyi Online Trade-in xidməti ilə köhnə smartfonunu təhvil verərək yeni bir smartfonu endirimli əldə edə bilərsən. Bu xidmət, köhnə cihazınız dayandırılıb yeni modelə keçməyini daha əlçatan edir. Proses həm vaxtına qənaət edir, həm də büdcənə uyğun seçim etməyinə imkan yaradır.'
  },

  process: {
    title: "Bu prosес bildə necə həyata keçirilir?",
    
    steps: [
      {
        step: 1,
        title: "Müraciət",
        description: "Səni bizim sayt (Live Chat) və ya sosial şəbəkələr vasitəsilə əlaqə saxlaya bilərsən. Mütəxəssis zamanı səndan aşağıdakı məlumatları təqdim etməyini xahiş olunur:",
        requirements: [
          {
            category: "Məhsulun şəkilləri",
            details: [
              "Ön hissə",
              "Ekranın sonolu və açıq halda şəkilləri (açıq halda ekran mövzusu ağ rəngdə olmalıdır, piksel problemi olub-olmamasını yoxlamaq üçün)",
              "Arxa hissə",
              "Sağ və sol hissələr",
              "Alt və üst hissələr",
              "Akseuar və qutusunun şəkilləri (əgər varsa)"
            ]
          },
          {
            category: "IMEI yoxlanışı və onun ScreenShot-u",
            details: ["Telefonun zəng bölməsini aç və *#06# kodunu yığ, IMEI nömrəsi avtomatik olaraq ekranda görünəcək"]
          },
          {
            category: "Apple məhsulları üçün əlavə məlumat tələb olunur",
            details: [
              "Batareya səviyyəsi (Pil faiz göstəricisi)",
              "Rəsmi servisda təmir olunub-olunmaması barədə məlumatlar"
            ]
          }
        ]
      },
      {
        step: 2,
        title: "Qiymətləndirmə",
        description: "Səndan daxil olan məlumatlar əsasında əməkdaşlarımız məhsulunuzu qiymətləndirir və təklif olunan məbləği səna bildirir. Əgər məbləğ sənin üçün uyğundursa, bu məbləği endirim kimi qeyd olunan və Trade-in Online kampaniyasına kim sənədləşdiririk."
      },
      {
        step: 3,
        title: "Mağazada təsdiq",
        description: "Məhsulunu mağazaya gətirdikdən sonra texniki ekspertlərimiz cihazı daxili Trade-in qaydalarına uyğun olaraq yoxlayır. Əgər cihazın vəziyyəti ilkin qiymətlndirmə ilə eynidirsə, sən sənədləşmə tələqləri edir. Lakin əlavə problemlər aşkar edilirsə, qiymət yenidən hesablanır və sənədləşmə yeniləniлər."
      }
    ]
  },

  note: {
    title: "Qeyd:",
    points: [
      "Online Trade-in xidməti yalnız mağazaya məhsulunuzu gətirməklə (Pick Up) tamamlanır",
      "Bu proses həm rahat, həm də şəffaf şəkildə təşkil olunub, belədiklə sən köhnə cihazını yeni və daha müasir bir cihazla əvəz edə bilərsən!"
    ]
  },

  supportedDevices: {
    smartphones: true,
    requiresPhysicalVisit: true,
    pickupOnly: true
  },

  requirements: {
    devicePhotos: {
      front: true,
      back: true,
      sides: true,
      screen: {
        open: true,
        closed: true,
        whiteBackground: true,
        pixelCheck: true
      }
    },
    imeiCheck: {
      required: true,
      method: "*#06# kod",
      screenshot: true
    },
    appleSpecific: {
      batteryLevel: true,
      officialServiceHistory: true
    },
    accessories: {
      photos: true,
      box: true,
      optional: true
    }
  },

  contactMethods: [
    "Live Chat",
    "Sosial şəbəkələr"
  ],

  processType: "hybrid", // Online başlanğıc, mağazada tamamlanma
  finalStep: "Mağazada yoxlama və təsdiq"
};

export default tradeInData;