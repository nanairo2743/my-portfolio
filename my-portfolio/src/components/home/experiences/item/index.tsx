import type { ExperienceProp } from '../index';
import type { ReactElement } from 'react';
import { FadeIn } from '../../../shares/fadein';
import styles from './index.module.scss';

interface Porps {
  experience: ExperienceProp;
}

function ExperienceItem(props: Porps): ReactElement {
  const { experience } = props;

  return (
    <FadeIn className={styles.card}>
      <div className={styles.circle_container}>
        <div className={styles.circle} data-fill={experience.fill} />
        <div className={styles.line} />
      </div>

      <div className={styles.box}>
        <div className={styles.content}>
          <p className={styles.designation}>{experience.description}</p>
          <a className={styles.name} href={experience.url}>
            {experience.organization}
          </a>
          <p className={styles.position}>
            {experience.start.format('YYYY.MM')}
            {' - '}
            {experience.end ? experience.end.format('YYYY.MM') : '現在'}
            {experience.location !== undefined && `, ${experience.location}`}
            {', '}
          </p>
          {experience.overview !== undefined && <p className={styles.overview}>{experience.overview}</p>}
        </div>
      </div>
    </FadeIn>
  );
}

export default ExperienceItem;
