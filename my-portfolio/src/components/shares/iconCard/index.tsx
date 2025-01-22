import type { IconKey } from '../icon';
import type { ReactElement } from 'react';

import Icon, { IconMap } from '../icon';

import styles from './index.module.scss';

interface Props {
  iconKey: IconKey;
  size: 'sm' | 'lg';
}

function IconCard(props: Props): ReactElement {
  const { iconKey, size } = props;

  return (
    <div className={styles.icon} data-size={size}>
      <Icon iconKey={iconKey} size={size === 'lg' ? 48 : 32} />
      <p>{IconMap[iconKey].name}</p>
    </div>
  );
}

export default IconCard;
