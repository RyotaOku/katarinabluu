// utils/footerTypes.ts
import {
  FaCalendarAlt,
  FaCalculator,
  FaRunning,
  FaMoneyBillAlt,
  FaEllipsisH,
} from 'react-icons/fa'; // Example icons

export const footerArray = [
  { path: '/home', label: 'シフト', icon: FaCalendarAlt },
  { path: '/statistics', label: '給料計算', icon: FaCalculator },
  { path: '/execution', label: '家計簿', icon: FaRunning },
  { path: '/transactions', label: '入出金', icon: FaMoneyBillAlt },
  { path: '/others', label: 'その他', icon: FaEllipsisH },
];
