import type { ReactElement } from 'react';

import styles from './index.module.scss';

function Title(): ReactElement {
  return (
    <div className={styles.title}>
      <h3 className={styles.title}>長尾夏希</h3>
    </div>
  );
}

export default Title;
