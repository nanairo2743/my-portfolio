import type { ListItemProps } from '../components/shares/listitem';

import dayjs from 'dayjs';

export const AWARD: ListItemProps[] = [
  {
    date: dayjs('2023-11'),
    title: '技育CANPキャラバン',
    type: '企業賞',
    description: '麻雀センシング',
    link: 'https://x.com/geek_pjt/status/1725814437653938213',
    dateFormat: 'YYYY.MM',
  },
  {
    date: dayjs('2024-08'),
    title: 'Open hack U 2024 TOKYO',
    type: '優秀賞',
    description: 'うたまっち',
    link: 'https://hacku.yahoo.co.jp/hacku2024_tokyo2/',
  },
];
