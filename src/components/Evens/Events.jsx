import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Events.module.css';

import horseImg from '../../assets/images/horse.png';

const homeEventIds = [
  'mir-prirody',
  'o-tebe-zapovednik',
  'buket-vesny',
  'prihodi-posmotret',
];

const Events = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.eventsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>{t('home.events.sectionTitle')}</h2>
          <Link to="/events" className={`${styles.moreButton} ${styles.desktopButton}`}>
            {t('home.events.moreButton')}
          </Link>
        </div>

        <div className={styles.content}>
          <div className={styles.mainCard}>
            <div className={styles.imageWrapper}>
              <img
                src={horseImg}
                alt={t('home.events.mainEvent.imageAlt')}
                className={styles.image}
              />
            </div>
            <div className={styles.mainCardInfo}>
              <Link to="/events/zapovednyj-pushistik" className={styles.mainCardTitle}>
                {t('events.zapovednyj-pushistik.title')}
              </Link>
              <div className={styles.dateBlock}>
                <span className={styles.dateLabel}>{t('events.periodLabel')}</span>
                <span className={styles.dateValue}>
                  {t('events.zapovednyj-pushistik.periodStart')} -{' '}
                  {t('events.zapovednyj-pushistik.periodEnd')}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.list}>
            {homeEventIds.map((eventId) => (
              <div key={eventId} className={styles.listItem}>
                <div className={styles.listText}>
                  <Link to={`/events/${eventId}`} className={styles.listTitle}>
                    {t(`events.${eventId}.title`)}
                  </Link>
                  <div className={styles.dateBlock}>
                    <span className={styles.dateLabel}>{t('events.periodLabel')}</span>
                    <span className={styles.dateValue}>
                      {t(`events.${eventId}.periodStart`)} -{' '}
                      {t(`events.${eventId}.periodEnd`)}
                    </span>
                  </div>
                </div>

                <Link to={`/events/${eventId}`} className={styles.arrowIcon}></Link>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.mobileButtonWrapper}>
          <Link to="/events" className={`${styles.moreButton} ${styles.mobileButton}`}>
            {t('home.events.moreButtonMobile')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
