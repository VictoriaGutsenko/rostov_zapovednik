import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { eventsData } from '../../data/eventData';
import styles from './EventDetail.module.css';

const EventDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const event = eventsData.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!event) {
    return (
      <div className={styles.notFound}>
        <h2>{t('events.notFound')}</h2>
        <Link to="/events">{t('events.notFoundLink')}</Link>
      </div>
    );
  }

  const description = t(`events.${event.id}.description`, {
    returnObjects: true,
    defaultValue: [],
  });
  const descriptionList = Array.isArray(description) ? description : [];

  return (
    <article className={styles.articleSection}>
      <div className={styles.container}>
        <Link to="/events" className={styles.backLink}>
          {t('events.backLink')}
        </Link>

        <h1 className={styles.title}>{t(`events.${event.id}.title`)}</h1>

        <div className={styles.periodBlock}>
          <div className={styles.periodLabel}>{t('events.periodLabel')}</div>
          <div className={styles.periodDates}>
            {t(`events.${event.id}.periodStart`)} - {t(`events.${event.id}.periodEnd`)}
          </div>
        </div>

        <div className={styles.contentWrapper}>
          {descriptionList.map((paragraph, index) => (
            <p key={index} className={styles.text}>
              {paragraph}
            </p>
          ))}
        </div>

        {event.attachment?.file && (
          <div className={styles.attachmentBlock}>
            <h3 className={styles.attachmentTitle}>{t('events.attachmentsTitle')}</h3>

            <a href={event.attachment.file} download className={styles.downloadLink}>
              {t(`events.${event.id}.attachment.title`)}
            </a>

            <div className={styles.fileInfo}>
              <div>
                {t('events.documentDateLabel')}{' '}
                {t(`events.${event.id}.attachment.date`)}
              </div>
              <div>
                {t('events.fileSizeLabel')}{' '}
                {t(`events.${event.id}.attachment.size`)}
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default EventDetail;
