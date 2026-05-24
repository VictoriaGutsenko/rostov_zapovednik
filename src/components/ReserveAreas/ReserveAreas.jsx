import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ReserveAreas.module.css';

import img1 from '../../assets/images/area-1.svg';
import img2 from '../../assets/images/area-2.svg';
import img3 from '../../assets/images/area-3.svg';
import img4 from '../../assets/images/area-4.svg';

const areaCards = [
  { areaKey: 'area1', image: img1 },
  { areaKey: 'area2', image: img2 },
  { areaKey: 'area3', image: img3 },
  { areaKey: 'area4', image: img4 },
];

const ReserveAreas = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.reserveAreas}>
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <h2 className={styles.mainTitle}>{t('about.reserveAreas.mainTitle')}</h2>
          <p className={styles.subTitle}>{t('about.reserveAreas.subTitle')}</p>
        </div>

        <div className={styles.gridContainer}>
          {areaCards.map(({ areaKey, image }) => (
            <div key={areaKey} className={styles.areaCard}>
              <img
                src={image}
                alt={t(`about.reserveAreas.areas.${areaKey}.imageAlt`)}
                className={styles.svgNumber}
              />
              <h3 className={styles.cardTitle}>
                {t(`about.reserveAreas.areas.${areaKey}.title`)}
              </h3>
              <p className={styles.cardText}>
                {t(`about.reserveAreas.areas.${areaKey}.text`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReserveAreas;
