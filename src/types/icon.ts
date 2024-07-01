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
} from 'react-icons/fa';

interface IconMapping {
  key: string;
  icon: IconType;
}

export const iconMappings: IconMapping[] = [
  { key: '一般財務', icon: FaWallet }, // General Finance
  { key: '財布', icon: FaWallet }, // Wallet
  { key: '豚の貯金箱', icon: FaPiggyBank }, // Piggy Bank
  { key: '折れ線グラフ', icon: FaChartLine }, // Line Graph
  { key: '棒グラフ', icon: FaChartBar }, // Bar Chart
  { key: '歯車', icon: FaCog }, // Gear (Settings)
  { key: '住宅', icon: FaHome }, // House (Home Expenses)
  { key: '交通', icon: FaCar }, // Car (Transportation)
  { key: '食費・外食費', icon: FaUtensils }, // Food & Dining
  { key: '衣服・装身具費', icon: FaTshirt }, // Clothing & Apparel
  { key: '光熱費', icon: FaLightbulb }, // Bills & Utilities
  { key: '娯楽費', icon: FaGift }, // Entertainment
  { key: '衛生用品費', icon: FaMugHot }, // Personal Care
  { key: '医療費', icon: FaBriefcaseMedical }, // Healthcare
  { key: '税金', icon: FaCalculator }, // Taxes
  { key: '運動費', icon: FaDumbbell }, // Fitness & Recreation
  { key: '旅行費', icon: FaSuitcase }, // Travel
  { key: '教育費', icon: FaGraduationCap }, // Education
];
