// types/icon.ts
import { IconType } from 'react-icons';
import {
  FaWallet,
  FaPiggyBank,
  FaChartLine,
  FaChartBar,
  FaCog,
  FaHome,
  FaCar,
  FaUtensils,
  FaTshirt,
  FaLightbulb,
  FaGift,
  FaMugHot,
  FaBriefcaseMedical,
  FaCalculator,
  FaDumbbell,
  FaSuitcase,
  FaGraduationCap,
  FaCouch,
  FaPaw,
  FaMobileAlt,
  FaBook,
  FaMusic,
  FaFilm,
  FaGamepad,
  FaFootballBall,
  FaSmile,
  FaWineGlassAlt,
  FaTruck,
  FaTv,
  FaGifts,
  FaTools,
  FaBriefcase,
  FaHeart,
  FaPlane,
  FaCamera,
  FaHeartbeat,
  FaHamburger,
  FaPizzaSlice,
  FaIceCream,
  FaCoffee,
  FaCookie,
  FaGhost,
  FaTree,
  FaBirthdayCake,
} from 'react-icons/fa';

interface IconMapping {
  key: string;
  icon: IconType;
}

export const iconMappings: IconMapping[] = [
  { key: '一般財務', icon: FaWallet }, // General Finance
  { key: '豚の貯金箱', icon: FaPiggyBank }, // Piggy Bank
  { key: '棒グラフ', icon: FaChartBar }, // Bar Chart
  { key: '歯車', icon: FaCog }, // Gear (Settings)
  { key: '住宅', icon: FaHome }, // House (Home Expenses)
  { key: '交通', icon: FaCar }, // Car (Transportation)
  { key: '食費', icon: FaUtensils }, // Food & Dining
  { key: '装身具費', icon: FaTshirt }, // Clothing & Apparel
  { key: '光熱費', icon: FaLightbulb }, // Bills & Utilities
  { key: '娯楽費', icon: FaGift }, // Entertainment
  { key: '衛生用品費', icon: FaMugHot }, // Personal Care
  { key: '医療費', icon: FaBriefcaseMedical }, // Healthcare
  { key: '税金', icon: FaCalculator }, // Taxes
  { key: '運動費', icon: FaDumbbell }, // Fitness & Recreation
  { key: '旅行費', icon: FaSuitcase }, // Travel
  { key: '教育費', icon: FaGraduationCap }, // Education
  { key: '折れ線グラフ', icon: FaChartLine }, // Line Chart
  { key: '家具費', icon: FaCouch }, // Furniture
  { key: 'ペット費', icon: FaPaw }, // Pet Expenses
  { key: '電子機器', icon: FaMobileAlt }, // Electronics
  { key: '本', icon: FaBook }, // Books
  { key: '音楽', icon: FaMusic }, // Music
  { key: '映画', icon: FaFilm }, // Movies
  { key: 'ゲーム', icon: FaGamepad }, // Games
  { key: 'スポーツ', icon: FaFootballBall }, // Sports
  { key: '美容', icon: FaSmile }, // Beauty
  { key: '飲料', icon: FaWineGlassAlt }, // Beverages
  { key: 'コーヒー', icon: FaCoffee }, // Coffee
  { key: 'お菓子', icon: FaCookie }, // Snacks
  { key: '車両', icon: FaTruck }, // Vehicles
  { key: '家具', icon: FaCouch }, // Furniture
  { key: '家電', icon: FaTv }, // Appliances
  { key: 'ギフト', icon: FaGifts }, // Gifts
  { key: 'ツール', icon: FaTools }, // Tools
  { key: '仕事', icon: FaBriefcase }, // Work
  { key: 'ハート', icon: FaHeart }, // Love
  { key: '旅行', icon: FaPlane }, // Travel
  { key: 'カメラ', icon: FaCamera }, // Photography
  { key: 'クリスマス', icon: FaTree }, // Christmas
  { key: 'ハロウィン', icon: FaGhost }, // Halloween
  { key: 'バースデー', icon: FaBirthdayCake }, // Birthday
  { key: 'ハートのプレゼント', icon: FaHeartbeat }, // Heart Gift
  { key: 'ハートのハンバーガー', icon: FaHamburger }, // Heart Burger
  { key: 'ハートのピザ', icon: FaPizzaSlice }, // Heart Pizza
  { key: 'ハートのアイスクリーム', icon: FaIceCream }, // Heart Ice Cream
  { key: 'ハートのコーヒー', icon: FaCoffee }, // Heart Coffee
  { key: 'ハートのお菓子', icon: FaCookie }, // Heart Cookie
  { key: 'ハートのケーキ', icon: FaBirthdayCake }, // Heart Cake
  { key: 'ハートのハロウィン', icon: FaGhost }, // Heart Halloween
  { key: 'ハートのクリスマス', icon: FaTree }, // Heart Christmas
  { key: 'ハートのバースデー', icon: FaBirthdayCake }, // Heart Birthday
];
