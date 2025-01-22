import type { ReactElement, ReactNode } from 'react';

import Header from '../../components/header';
import styles from './index.module.scss';

interface Props {
  children: ReactNode;
}

function PageLayout(props: Props): ReactElement {
  const { children } = props;

  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
}

export default PageLayout;
