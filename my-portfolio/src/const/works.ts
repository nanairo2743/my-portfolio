import type { ListItemProps } from '../components/shares/listitem';

import dayjs from 'dayjs';

export const WORKS: ListItemProps[] = [
  {
    date: [dayjs('2021.02'), dayjs('2022.03')],
    type: 'アルバイト',
    title: 'マクドナルド',
    description: 'ホールスタッフ',
    dateFormat: 'YYYY.MM',
  },
  {
    date: [dayjs('2022.11')],
    type: 'アルバイト',
    title: '道とん堀',
    description: 'キッチンスタッフ',
    dateFormat: 'YYYY.MM',
  },
  {
    date: [dayjs('2024.11')],
    type: 'アルバイト',
    title: 'LITALICOワンダー',
    description: 'scratch講師',
    dateFormat: 'YYYY.MM',
  },
];
