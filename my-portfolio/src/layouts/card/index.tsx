import type { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';
import { Link } from 'next-view-transitions';

import styles from './index.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: ReactElement | ReactElement[];
  link?: string;
}

function CardLayout(props: Props): ReactElement {
  const { children, className, link, ...rest } = props;

  return (
    <article className={`${styles.card} ${className || ''}`} {...rest} data-haslink={link !== undefined}>
      {link !== undefined && (
        <span className={styles.linkWrapper}>
          <Link href={link}>{children}</Link>
        </span>
      )}
      {link === undefined && children}
    </article>
  );
}

export default CardLayout;
