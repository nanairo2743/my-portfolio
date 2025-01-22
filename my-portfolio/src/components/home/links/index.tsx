import type { ReactElement } from "react";
import { FadeIn, FadeInWithStagger } from "../../shares/fadein";
import Icon from "../../shares/icon";
import { LINKS } from "../../../const/links";
import styles from "./index.module.scss";

function LinksSection(): ReactElement {
  return (
    <section className={styles.links}>
      <FadeInWithStagger>
        {LINKS.map((link) => (
          <FadeIn direction="left" key={link.link}>
            <p>
              <a href={link.link} target="_blank">
                <Icon
                  className={styles.icon}
                  color="black"
                  iconKey={link.iconKey}
                />
                <span>{link.name}</span>
              </a>
            </p>
          </FadeIn>
        ))}
      </FadeInWithStagger>
    </section>
  );
}

export default LinksSection;
