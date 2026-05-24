import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { eventsData } from '../../data/eventData';
import styles from './AllEvents.module.css';

const AllEvents = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.eventsPageSection}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>{t('events.title')}</h1>

        <div className={styles.grid}>
          {eventsData.map((item) => (
            <Link to={`/events/${item.id}`} key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={item.image}
                  alt={t(`events.${item.id}.title`)}
                  className={styles.image}
                />
              </div>

              <h3 className={styles.cardTitle}>{t(`events.${item.id}.title`)}</h3>

              <div className={styles.cardDate}>
                <span className={styles.periodLabel}>{t('events.periodLabel')}</span>
                <span className={styles.periodValue}>
                  {t(`events.${item.id}.periodStart`)} - {t(`events.${item.id}.periodEnd`)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllEvents;
