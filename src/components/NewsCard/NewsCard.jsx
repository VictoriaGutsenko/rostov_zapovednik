import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './NewsCard.module.css';

import { getImageUrl } from '../../data/newData';

export const NewsCard = ({ item, detailPath = '/news' }) => {
  const { t } = useTranslation();

  if (!item) {
    return null;
  }


  const previewUrl = getImageUrl(item.previewImage);

  return (
    <Link to={`${detailPath}/${item.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={previewUrl}
          alt={t(`news.${item.id}.title`)}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <h3 className={styles.cardTitle}>{t(`news.${item.id}.title`)}</h3>

      <span className={styles.cardDate}>{t(`news.${item.id}.date`)}</span>
    </Link>
  );
};

export default NewsCard;
