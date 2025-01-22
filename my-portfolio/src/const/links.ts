import type { IconKey } from '../components/shares/icon';

interface Link {
  link: string;
  iconKey: IconKey;
  name: string;
}

export const LINKS: Link[] = [
  {
    link: 'https://x.com/FAFGjWrsNovDqlJ',
    iconKey: 'x',
    name: '@FAFGjWrsNovDqlJ',
  },
  {
    link: 'https://github.com/nanairo2743',
    iconKey: 'github',
    name: '@nanairo2743',
  },
  {
    link: '',
    iconKey: 'mailbox.org',
    name: 'nanairo2743@gmail.com',
  },
];
