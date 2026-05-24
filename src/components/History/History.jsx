import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './History.module.css';

import fieldImg from '../../assets/images/field.jpg';

const History = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.historySection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('about.history.title')}</h2>

        <div className={styles.contentWrap}>
          <img
            src={fieldImg}
            alt={t('about.history.imageAlt')}
            className={styles.floatImage}
          />

          <div className={styles.textWrap}>
            <p className={styles.paragraph}>{t('about.history.paragraph1')}</p>
            <p className={styles.paragraph}>{t('about.history.paragraph2')}</p>
            <p className={styles.paragraph}>{t('about.history.paragraph3')}</p>
          </div>

          <div className={styles.clear}></div>
        </div>
      </div>
    </section>
  );
};

export default History;
