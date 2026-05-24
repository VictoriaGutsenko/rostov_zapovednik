import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './AboutIntro.module.css';

import mapClean from '../../assets/images/map-clean.svg';

const legendItemKeys = ['item1', 'item2', 'item3', 'item4'];

const AboutIntro = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.aboutIntro}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>{t('about.aboutIntro.mainTitle')}</h1>

        <div className={styles.mapContainer}>
          <img
            src={mapClean}
            alt={t('about.aboutIntro.mapAlt')}
            className={styles.mapImg}
          />

          <span className={`${styles.mapNumber} ${styles.num1}`}>1</span>
          <span className={`${styles.mapNumber} ${styles.num2}`}>2</span>
          <span className={`${styles.mapNumber} ${styles.num3}`}>3</span>
          <span className={`${styles.mapNumber} ${styles.num4}`}>4</span>

          <div className={styles.legend}>
            <h4 className={styles.legendTitle}>{t('about.aboutIntro.legend.title')}</h4>
            <ol className={styles.legendList}>
              {legendItemKeys.map((itemKey, index) => (
                <li key={itemKey}>
                  {index + 1}. {t(`about.aboutIntro.legend.items.${itemKey}`)}
                </li>
              ))}
            </ol>
            <div className={styles.legendColorBox}>
              <span className={styles.colorSquare}></span>
              <span>{t('about.aboutIntro.legend.protectedZone')}</span>
            </div>
          </div>
        </div>

        <div className={styles.textBlock}>
          <h2 className={styles.subTitle}>
            {t('about.aboutIntro.subTitle.line1')}
            <br className={styles.mobileBreak} /> {t('about.aboutIntro.subTitle.line2')}
            <br className={styles.mobileBreak} /> {t('about.aboutIntro.subTitle.line3')}
          </h2>
          <p className={styles.description}>
            {t('about.aboutIntro.description.line1')}
            <br className={styles.mobileBreak} /> {t('about.aboutIntro.description.line2')}
            <br className={styles.mobileBreak} /> {t('about.aboutIntro.description.line3')}
            <br className={styles.mobileBreak} /> {t('about.aboutIntro.description.line4')}
            <br className={styles.mobileBreak} /> {t('about.aboutIntro.description.line5')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
