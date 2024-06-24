// utils/footerTypes.ts
import {
  FaCalendarAlt,
  FaCalculator,
  FaRunning,
  FaMoneyBillAlt,
  FaEllipsisH,
} from 'react-icons/fa'; // Example icons

export const footerArray = [
  { path: '/home', label: 'カレンダー', icon: FaCalendarAlt },
  { path: '/statistics', label: '統計計算', icon: FaCalculator },
  { path: '/execution', label: '実行計算', icon: FaRunning },
  { path: '/transactions', label: '入出金', icon: FaMoneyBillAlt },
  { path: '/others', label: 'その他', icon: FaEllipsisH },
];
