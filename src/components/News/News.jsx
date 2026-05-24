import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './News.module.css';
import { newsData } from '../../data/newData';
import NewsCard from '../NewsCard/NewsCard';

const News = () => {
  const { t } = useTranslation();
  const latestNews = newsData.slice(0, 3);

  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>{t('home.news.sectionTitle')}</h2>
          <Link to="/news" className={`${styles.moreButton} ${styles.desktopButton}`}>
            {t('home.news.moreButton')}
          </Link>
        </div>

        <div className={styles.sliderContainer}>
          <div className={styles.track}>
            {latestNews.map((item) => (
              <div key={item.id} className={styles.slideWrapper}>
                <NewsCard item={item} detailPath="/news" />
              </div>
            ))}
          </div>

        </div>

        <div className={styles.mobileButtonWrapper}>
          <Link to="/news" className={`${styles.moreButton} ${styles.mobileButton}`}>
            {t('home.news.moreButton')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;
