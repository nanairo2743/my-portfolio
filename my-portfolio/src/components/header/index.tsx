import { Link } from "react-router-dom";
import type { ReactElement } from 'react';

import styles from './index.module.scss';

const LINKS = [
    { to: "/", label: "Home" },
    { to: "/post", label: "Posts" },
    ];

interface Props {
    fixed?: boolean;
}

function Header({ fixed }: Props): ReactElement {
    return (
      <header className={styles.header} data-fixed={fixed}>
        <h3 className={styles.title}>nanairo</h3>
  
        <nav className={styles.nav}>
          {LINKS.map((l) => (
            <Link className={styles.ink} to={l.to} key={l.to}>
              {l.label}
            </Link>
          ))}
        </nav>
      </header>
    );
  }

export default Header;
