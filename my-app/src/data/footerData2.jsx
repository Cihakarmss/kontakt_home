import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";







const footerData2 = [
  {
    id: 4,
    title: "Əlaqə",
    phone: "6060",
    location: "Xəritə",
    followText: "Bizimlə qalın",
    links: [
      { platform: "facebook", href: "https://facebook.com", image: <FaFacebook /> },
      { platform: "instagram", href: "https://instagram.com", image: <RiInstagramFill /> },
      { platform: "youtube", href: "https://youtube.com", image: <IoLogoYoutube /> },
      { platform: "whatsapp", href: "https://whatsapp.com", image: <IoLogoWhatsapp /> },
      { platform: "telegram", href: "https://telegram.com", image: <BsTelegram /> },
      { platform: "tiktok", href: "https://tiktok.com", image: <FaTiktok /> }
    ],
    paymentTitle: "Təhlükəsiz alış-veriş",
    paymentMethods: [
      { name: "Visa", image: <FaCcVisa /> },
      { name: "Mastercard", image: <FaCcMastercard /> }
    ]
  }
];
export default footerData2;
