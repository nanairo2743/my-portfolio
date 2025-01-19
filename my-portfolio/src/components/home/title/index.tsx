import type { ReactElement } from 'react';

import styles from './index.module.scss';

function Title(): ReactElement {
  return (
    <div className={styles.title}>
      <h3 className={styles.title}>nanairo</h3>
    </div>
  );
}

export default Title;
