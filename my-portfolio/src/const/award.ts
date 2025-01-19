import type { ListItemProps } from '@/components/shares/listItem';

import dayjs from 'dayjs';

export const AWARD: ListItemProps[] = [
  {
    date: dayjs('2020-10'),
    title: '技育CANPキャラバン',
    type: '企業賞',
    description: '麻雀センシング',
    link: 'https://web-ext.u-aizu.ac.jp/pc-concours/2020/final/f_cgaward.html',
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
